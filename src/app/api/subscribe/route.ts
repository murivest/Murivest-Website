import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

// ---------------------------------------------------------------------------
// Supabase server client. 
// Uses the SERVICE key to bypass RLS since this is a secure backend route.
// Make sure to add SUPABASE_SERVICE_ROLE_KEY to your .env file!
// ---------------------------------------------------------------------------
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL2!, // Adjust if your env var is different
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

// ---------------------------------------------------------------------------
// Validation Schema
// ---------------------------------------------------------------------------
const subscribeSchema = z.object({
  email: z.string().email().max(254),
  country_code: z.string().length(2).optional().default('KE'), // Default to Kenya if not provided
  page_url: z.string().max(500).optional().or(z.literal('')),
  campaign: z.string().max(120).optional().or(z.literal('')),
  source: z.string().max(80).optional().or(z.literal('')), // e.g., 'footer', 'popup'
});

export async function POST(request: NextRequest) {
  try {
    // 1. Parse and validate the request body
    const body = await request.json();
    const parsed = subscribeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request', details: parsed.error.format() },
        { status: 400 }
      );
    }

    const { email, country_code, page_url, campaign, source } = parsed.data;
    const normalizedEmail = email.toLowerCase().trim();

    // 2. Resolve the country_id from the countries table
    const { data: countryData, error: countryError } = await supabase
      .from('countries')
      .select('id')
      .eq('code', country_code.toUpperCase())
      .single();

    if (countryError || !countryData) {
      return NextResponse.json(
        { error: 'Invalid country code provided.' },
        { status: 400 }
      );
    }

    const countryId = countryData.id;

    // 3. Check if the email is already subscribed (Optional but good practice)
    const { data: existingSub } = await supabase
      .from('subscriptions')
      .select('id, status')
      .eq('email', normalizedEmail)
      .maybeSingle();

    if (existingSub) {
      // If they unsubscribed previously, let's re-activate them
      if (existingSub.status !== 'Active') {
        await supabase
          .from('subscriptions')
          .update({ status: 'Active' })
          .eq('id', existingSub.id);
        
        // Log the resubscribe event
        await supabase.from('subscription_events').insert({
          subscription_id: existingSub.id,
          event_type: 'resubscribed',
          metadata: { source, page_url, campaign }
        });

        return NextResponse.json({ ok: true, message: 'Subscription reactivated.' });
      }
      
      // If they are already active, just return success silently
      return NextResponse.json({ ok: true, message: 'Already subscribed.' });
    }

    // 4. Insert into `subscriptions` table
    const { data: newSub, error: subError } = await supabase
      .from('subscriptions')
      .insert({
        email: normalizedEmail,
        country_id: countryId,
        status: 'Active',
      })
      .select('id')
      .single();

    if (subError || !newSub) {
      console.error('Failed to create subscription:', subError);
      return NextResponse.json({ error: 'Failed to save subscription.' }, { status: 500 });
    }

    const subscriptionId = newSub.id;

    // 5. Insert into `subscription_sources` table
    // We run this and the event insert in parallel to save time
    const sourcePromise = supabase
      .from('subscription_sources')
      .insert({
        subscription_id: subscriptionId,
        page_url: page_url || null,
        campaign: campaign || null,
      });

    // 6. Insert into `subscription_events` table
    const eventPromise = supabase
      .from('subscription_events')
      .insert({
        subscription_id: subscriptionId,
        event_type: 'subscribed',
        metadata: {
          source: source || 'website',
          user_agent: request.headers.get('user-agent') || 'unknown',
          ip: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown',
        }
      });

    // Wait for both to finish
    const [sourceRes, eventRes] = await Promise.all([sourcePromise, eventPromise]);

    if (sourceRes.error) {
      console.error('Failed to log subscription source:', sourceRes.error);
      // We don't fail the whole request here because the main subscription succeeded
    }

    if (eventRes.error) {
      console.error('Failed to log subscription event:', eventRes.error);
    }

    // 7. Return success
    return NextResponse.json(
      { ok: true, message: 'Successfully subscribed.', id: subscriptionId },
      { status: 201 }
    );

  } catch (error) {
    console.error('Subscription route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
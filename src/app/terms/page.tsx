import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Globe } from 'lucide-react';

/* ── Company details (edit here) ─────────────────────────── */
const COMPANY = 'Murivest Group Ltd';
const LAST_UPDATED = '10 November 2026';
const REGISTRATION_NUMBER = ''; // add when available
const REGISTRATION_JURISDICTION = 'Kenya';
const ADDRESS = '1st Floor, Diamond Plaza, 4th Avenue, Parklands, Nairobi, Kenya';
const EMAIL = 'office@murivest.com';
const SITE = 'murivest.com';
const SITE_URL = 'https://murivest.com';
const GOVERNING_LAW = 'Kenya';
const LIABILITY_CAP = 'KES 150,000';

export const metadata: Metadata = {
  title: `Terms of Service | ${COMPANY}`,
  description: `The terms governing access to and use of the ${SITE} website operated by ${COMPANY}.`,
  alternates: { canonical: `${SITE_URL}/terms` },
};

/* ── Content ─────────────────────────────────────────────── */
type Block =
  | { t: 'p'; text: string }
  | { t: 'h'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'defs'; items: string[] }
  | { t: 'node'; node: ReactNode }
  | { t: 'contact' };

interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

const linkClass = 'text-[#8B7355] hover:underline';

const sections: Section[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of These Terms',
    blocks: [
      {
        t: 'p',
        text: `These Terms of Service (“Terms”) govern your access to and use of the website located at ${SITE} (the “Site”), together with any content, materials, communications, or services made available through it or in connection with it.`,
      },
      {
        t: 'p',
        text: `The Site is operated by ${COMPANY} (“Murivest”, “the Company”, “we”, “us”, “our”), an international commercial real estate services and investment firm operating across East Africa, the United Kingdom, and other international markets.`,
      },
      {
        t: 'p',
        text: 'By accessing, browsing, or using the Site, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use the Site.',
      },
      {
        t: 'p',
        text: 'Where you access the Site or engage Murivest on behalf of an entity, you represent and warrant that you have authority to bind that entity to these Terms.',
      },
    ],
  },
  {
    id: 'definitions',
    title: 'Definitions',
    blocks: [
      { t: 'p', text: 'In these Terms, unless the context requires otherwise:' },
      {
        t: 'defs',
        items: [
          '“Services” means the commercial real estate services provided by Murivest, comprising brokerage, property and asset management, and investment property services in respect of Grade A income-producing commercial assets.',
          '“Content” means all text, images, photographs, illustrations, data, reports, market intelligence, documents, and other materials published on or made available through the Site.',
          '“Mandate” means a written engagement between Murivest and a client, executed following formal scope documentation, KYC/AML verification, and agreement of fees.',
          '“Qualified Client” means a person or entity that has completed Murivest’s KYC/AML verification process and been approved for access to mandate materials.',
          '“User”, “you” means any person accessing or using the Site.',
        ],
      },
    ],
  },
  {
    id: 'nature-of-site',
    title: 'Nature of the Site and Services',
    blocks: [
      { t: 'h', text: '3.1 Informational Purpose' },
      {
        t: 'p',
        text: 'The Site is provided for general informational purposes only. It describes the Services and the markets in which Murivest operates. Nothing on the Site constitutes a binding offer, solicitation, or commitment to provide any Service.',
      },
      { t: 'h', text: '3.2 Mandate-Only Engagement' },
      {
        t: 'p',
        text: 'All Services are provided by mandate only. No Service is provided, and no client relationship arises, merely by virtue of your use of the Site or your submission of an enquiry. A client relationship arises only upon execution of a written Mandate by both parties.',
      },
      { t: 'h', text: '3.3 Non-Pooled Structure' },
      {
        t: 'p',
        text: 'Murivest does not pool capital, operate collective investment schemes, or offer, distribute, or promote unlicensed financial products or securities. Murivest connects institutional firms, institutional investors, and retail investors to Grade A income-producing commercial assets on a direct, non-pooled basis.',
      },
      { t: 'h', text: '3.4 No Investment, Legal, or Tax Advice' },
      {
        t: 'p',
        text: 'The Content does not constitute investment, legal, tax, accounting, or regulatory advice, and must not be relied upon as such. Murivest does not act as your investment adviser, fiduciary adviser, or agent unless expressly stated in an executed Mandate. You are solely responsible for obtaining independent professional advice appropriate to your circumstances before entering into any transaction.',
      },
      { t: 'h', text: '3.5 Views on Price and Valuation' },
      {
        t: 'p',
        text: 'Any views on price, yield, rental levels, or value expressed on the Site or in any communication are given in the ordinary course of Murivest’s commercial real estate services role. They are not formal valuations and must not be relied upon as such. Any formal valuation advice will be explicitly identified as such and will state the basis, purpose, and limitations of that advice.',
      },
      { t: 'h', text: '3.6 Accuracy and Currency of Information' },
      {
        t: 'p',
        text: 'Market data, statistics, and indicators published on the Site (including without limitation yield, vacancy, and market-timing figures) are indicative only, are drawn from sources believed to be reliable, and may change without notice. Murivest makes no representation or warranty as to their accuracy, completeness, or continued currency.',
      },
    ],
  },
  {
    id: 'eligibility',
    title: 'Eligibility and Restricted Access',
    blocks: [
      { t: 'h', text: '4.1 Eligibility' },
      {
        t: 'p',
        text: 'The Site is intended for persons aged 18 or over and is not directed at any person in any jurisdiction where its publication or availability would be contrary to law or regulation. You are responsible for compliance with the laws of your jurisdiction.',
      },
      { t: 'h', text: '4.2 Qualified Clients' },
      {
        t: 'p',
        text: 'Certain areas of the Site, mandate materials, asset particulars, pricing information, and the Private Asset Brief are restricted to Qualified Clients. Access is granted at Murivest’s sole discretion and may be withdrawn at any time.',
      },
      { t: 'h', text: '4.3 KYC/AML Verification' },
      {
        t: 'p',
        text: 'All engagements are subject to know-your-customer and anti-money-laundering verification, sanctions and politically exposed person screening, and source-of-funds and source-of-wealth checks as required by applicable law. Murivest may decline, suspend, or terminate any enquiry, negotiation, or Mandate where verification is incomplete, unsatisfactory, or where Murivest is required to do so by law or regulatory direction.',
      },
      { t: 'h', text: '4.4 Confidential Materials' },
      {
        t: 'p',
        text: 'Mandate materials, asset particulars, and off-market information are confidential and are provided to Qualified Clients under separate non-disclosure arrangements. You must not disclose, reproduce, or circulate such materials except as expressly permitted in writing by Murivest.',
      },
    ],
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Use',
    blocks: [
      { t: 'p', text: 'You agree that you will not:' },
      {
        t: 'ul',
        items: [
          'use the Site in any way that breaches applicable law or regulation;',
          'use the Site for any fraudulent, misleading, or unlawful purpose;',
          'attempt to gain unauthorised access to the Site, its servers, or any connected systems or databases;',
          'introduce any virus, malware, trojan, or other harmful material;',
          'scrape, harvest, extract, or systematically download Content, or use automated means to access the Site without Murivest’s prior written consent;',
          'interfere with the proper operation of the Site or impose an unreasonable load on its infrastructure;',
          'reproduce, republish, distribute, sell, or exploit any Content for commercial purposes without written permission;',
          'remove or obscure any copyright, trademark, or proprietary notice; or',
          'impersonate any person or entity, or misrepresent your affiliation, credentials, or status as a Qualified Client.',
        ],
      },
      {
        t: 'p',
        text: 'Murivest reserves the right to suspend or terminate your access to the Site, and to report suspected unlawful activity to the relevant authorities, where it reasonably considers these restrictions have been breached.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    blocks: [
      { t: 'h', text: '6.1 Ownership' },
      {
        t: 'p',
        text: `The Site and all Content, including all intellectual property rights in the design, layout, text, graphics, photography, trade marks, logos, and the “Murivest” name and marks, are owned by or licensed to ${COMPANY} and are protected by applicable copyright, trade mark, and other laws in Kenya, the United Kingdom, and internationally.`,
      },
      { t: 'h', text: '6.2 Licence' },
      {
        t: 'p',
        text: 'Subject to your compliance with these Terms, Murivest grants you a limited, revocable, non-exclusive, non-transferable licence to access and view the Site and to print or download extracts of Content for your own internal, non-commercial reference only, provided that all proprietary notices are retained and the Content is not modified.',
      },
      { t: 'h', text: '6.3 Reservation of Rights' },
      {
        t: 'p',
        text: 'All rights not expressly granted in these Terms are reserved. Nothing in these Terms transfers any ownership of intellectual property to you.',
      },
      { t: 'h', text: '6.4 Feedback' },
      {
        t: 'p',
        text: 'If you provide comments, suggestions, or feedback regarding the Site or the Services, you grant Murivest a non-exclusive, perpetual, royalty-free licence to use that feedback without restriction or compensation.',
      },
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Content and Links',
    blocks: [
      {
        t: 'p',
        text: 'The Site may contain links to third-party websites, resources, or materials. Such links are provided for convenience only. Murivest does not control, endorse, or assume responsibility for any third-party website, content, product, or service, and does not accept liability for any loss or damage arising from your use of them. You access third-party sites at your own risk and should review their terms and privacy notices.',
      },
    ],
  },
  {
    id: 'electronic-communications',
    title: 'Electronic Communications',
    blocks: [
      {
        t: 'p',
        text: 'By providing your contact details, you agree that Murivest may communicate with you by email, telephone, or other electronic means in connection with your enquiry or Mandate. Murivest reserves the right to monitor all email communications through its internal and external networks, as set out in its email notices and Privacy Policy.',
      },
      {
        t: 'node',
        node: (
          <>
            Marketing communications will be sent only where permitted by applicable law, and you may opt out at any
            time using the unsubscribe mechanism provided or by contacting us at{' '}
            <a href={`mailto:${EMAIL}`} className={linkClass}>
              {EMAIL}
            </a>
            .
          </>
        ),
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy and Data Protection',
    blocks: [
      {
        t: 'node',
        node: (
          <>
            Murivest processes personal data in accordance with its Privacy Policy, available at{' '}
            <Link href="/privacy" className={linkClass}>
              {SITE}/privacy
            </Link>
            , which is issued under the Kenya Data Protection Act, 2019 and the UK GDPR. The Privacy Policy forms
            part of these Terms by reference.
          </>
        ),
      },
    ],
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    blocks: [
      {
        t: 'p',
        text: 'Each party shall keep confidential any non-public information received from the other in connection with an enquiry or Mandate, and shall use it only for the purposes of that enquiry or Mandate. This obligation does not apply to information that is or becomes public through no breach of these Terms, was already lawfully known to the recipient, or is required to be disclosed by law or regulatory authority.',
      },
      {
        t: 'p',
        text: 'Mandate engagements may be subject to additional confidentiality and non-disclosure obligations set out in the relevant Mandate documentation, which shall prevail in the event of conflict.',
      },
    ],
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    blocks: [
      { t: 'h', text: '11.1 “As Is” Basis' },
      {
        t: 'p',
        text: 'The Site and Content are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, Murivest disclaims all warranties, conditions, and representations, whether express or implied, including without limitation any implied warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement.',
      },
      { t: 'h', text: '11.2 No Guarantee of Availability' },
      {
        t: 'p',
        text: 'Murivest does not warrant that the Site will be uninterrupted, timely, secure, or error-free, that defects will be corrected, or that the Site or its servers are free of viruses or other harmful components.',
      },
      { t: 'h', text: '11.3 No Guarantee of Outcome' },
      {
        t: 'p',
        text: 'Murivest does not guarantee the availability of any particular asset, the conclusion of any transaction, any particular level of income, yield, capital value, or investment outcome. All commercial real estate involves risk, including the risk of loss of capital.',
      },
      { t: 'h', text: '11.4 Third-Party Reliance' },
      {
        t: 'p',
        text: 'No liability is accepted to any third party who may seek to rely on any Content or communication, in whole or in part. Any advice contained in or attached to Murivest communications is informal and given purely as guidance unless otherwise explicitly stated.',
      },
      { t: 'h', text: '11.5 Regulatory Status' },
      {
        t: 'p',
        text: 'Nothing in these Terms excludes or limits any duty or liability owed to a client under applicable law or regulation, or under the terms of an executed Mandate, where such exclusion or limitation would be unlawful.',
      },
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    blocks: [
      { t: 'h', text: '12.1 Exclusion of Indirect Loss' },
      {
        t: 'p',
        text: 'To the fullest extent permitted by law, Murivest shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary loss or damage, or for any loss of profit, revenue, income, business, opportunity, goodwill, data, or anticipated savings, arising out of or in connection with your use of the Site or reliance on any Content, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if Murivest has been advised of the possibility of such loss.',
      },
      { t: 'h', text: '12.2 Direct Loss' },
      {
        t: 'p',
        text: `Subject to clause 12.4, Murivest’s total aggregate liability to you arising out of or in connection with your use of the Site shall not exceed ${LIABILITY_CAP} or the total fees paid by you to Murivest under any relevant Mandate in the twelve months preceding the claim, whichever is greater.`,
      },
      { t: 'h', text: '12.3 Client Engagements' },
      {
        t: 'p',
        text: 'Liability arising under or in connection with an executed Mandate shall be governed exclusively by the terms of that Mandate, which may include separate limitations of liability. These Terms do not override, extend, or restrict any such provisions.',
      },
      { t: 'h', text: '12.4 Non-Excludable Liability' },
      {
        t: 'p',
        text: 'Nothing in these Terms excludes or limits Murivest’s liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot lawfully be excluded or limited.',
      },
    ],
  },
  {
    id: 'indemnity',
    title: 'Indemnity',
    blocks: [
      {
        t: 'p',
        text: 'You agree to indemnify, defend, and hold harmless Murivest, its directors, officers, employees, and agents from and against any claims, liabilities, losses, damages, costs, and expenses (including reasonable legal fees) arising out of or in connection with: (a) your breach of these Terms; (b) your misuse of the Site or Content; (c) your breach of applicable law or regulation; or (d) any misrepresentation made by you regarding your identity, status, or authority.',
      },
    ],
  },
  {
    id: 'force-majeure',
    title: 'Force Majeure',
    blocks: [
      {
        t: 'p',
        text: 'Murivest shall not be liable for any failure or delay in performing its obligations where such failure or delay results from causes beyond its reasonable control, including without limitation acts of God, natural disasters, epidemic or pandemic, war, terrorism, civil unrest, industrial action, failure of utilities or telecommunications, cyber-attack, or the acts or omissions of governmental or regulatory authorities.',
      },
    ],
  },
  {
    id: 'suspension-termination',
    title: 'Suspension and Termination',
    blocks: [
      {
        t: 'p',
        text: 'Murivest may, at its sole discretion and without notice, suspend, restrict, or terminate your access to the Site or any part of it, including where it reasonably believes you have breached these Terms, where required by law or regulatory direction, or for operational or security reasons. Clauses which by their nature are intended to survive termination — including clauses on intellectual property, confidentiality, disclaimers, limitation of liability, indemnity, and governing law — shall survive.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    blocks: [
      {
        t: 'p',
        text: 'Murivest reserves the right to amend these Terms from time to time. The revised Terms will be published on this page with an updated “Last updated” date. Your continued use of the Site after publication constitutes acceptance of the revised Terms. Where changes are material, we may additionally notify you by email or by notice on the Site.',
      },
    ],
  },
  {
    id: 'severability',
    title: 'Severability and Waiver',
    blocks: [
      {
        t: 'p',
        text: 'If any provision of these Terms is held to be invalid, unlawful, or unenforceable by a court or competent authority, that provision shall be severed and the remaining provisions shall continue in full force and effect. No failure or delay by Murivest in exercising any right or remedy shall operate as a waiver of that right or remedy.',
      },
    ],
  },
  {
    id: 'entire-agreement',
    title: 'Entire Agreement',
    blocks: [
      {
        t: 'p',
        text: 'These Terms, together with the Privacy Policy and any executed Mandate, constitute the entire agreement between you and Murivest in relation to your use of the Site, and supersede all prior representations, understandings, and agreements relating to that subject matter.',
      },
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law and Jurisdiction',
    blocks: [
      { t: 'h', text: '19.1 Governing Law' },
      {
        t: 'p',
        text: `These Terms and any dispute or claim arising out of or in connection with them (including non-contractual disputes) shall be governed by and construed in accordance with the laws of ${GOVERNING_LAW}.`,
      },
      { t: 'h', text: '19.2 Jurisdiction' },
      {
        t: 'p',
        text: `Subject to clause 19.3, the courts of ${GOVERNING_LAW} shall have exclusive jurisdiction to settle any dispute arising out of or in connection with these Terms.`,
      },
      { t: 'h', text: '19.3 Alternative Approach — Mutual Recognition' },
      {
        t: 'p',
        text: 'Where a Mandate specifies a different governing law or dispute resolution mechanism (including arbitration), the terms of that Mandate shall prevail in respect of matters arising under it.',
      },
      { t: 'h', text: '19.4 Consumer Rights' },
      {
        t: 'p',
        text: 'Nothing in these Terms affects any statutory rights you may have as a consumer that cannot be excluded or limited under the law of your jurisdiction of residence.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    blocks: [
      { t: 'p', text: 'Questions regarding these Terms should be directed to:' },
      { t: 'contact' },
    ],
  },
  {
    id: 'company-details',
    title: 'Company Details',
    blocks: [
      {
        t: 'p',
        text: `${COMPANY}. Registered in ${REGISTRATION_JURISDICTION}${
          REGISTRATION_NUMBER ? ` No. ${REGISTRATION_NUMBER}` : ''
        }. Registered office: ${ADDRESS}.`,
      },
      {
        t: 'p',
        text: `${COMPANY} is an international commercial real estate services and investment firm operating across East Africa, the United Kingdom, and other international markets. Murivest does not pool capital, operate collective investment schemes, or offer unlicensed financial products. All engagements are by mandate only and subject to KYC/AML verification.`,
      },
    ],
  },
];

/* ── Helpers ─────────────────────────────────────────────── */
const num = (i: number) => String(i + 1).padStart(2, '0');
const bodyText = 'text-[14px] leading-[1.9] text-[#5A5A5A] font-light';

function Definition({ text }: { text: string }) {
  const match = text.match(/^((?:“[^”]+”(?:, )?)+)/);
  if (!match) return <>{text}</>;
  return (
    <>
      <strong className="font-medium text-[#2C2C2C]">{match[1]}</strong>
      {text.slice(match[1].length)}
    </>
  );
}

function RenderBlock({ block }: { block: Block }) {
  switch (block.t) {
    case 'p':
      return <p className={bodyText}>{block.text}</p>;

    case 'node':
      return <p className={bodyText}>{block.node}</p>;

    case 'h':
      return <h3 className="font-serif text-[17px] text-[#2C2C2C] pt-3">{block.text}</h3>;

    case 'ul':
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className={`flex items-start gap-3 ${bodyText}`}>
              <span className="w-1 h-1 rounded-full bg-[#8B7355] mt-[11px] flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'defs':
      return (
        <div className="border border-[#E5E2DC] bg-white divide-y divide-[#E5E2DC]">
          {block.items.map((item) => (
            <p key={item} className={`px-5 py-4 ${bodyText}`}>
              <Definition text={item} />
            </p>
          ))}
        </div>
      );

    case 'contact':
      return (
        <div className="border border-[#E5E2DC] bg-white p-6 space-y-4">
          <p className="font-serif text-[18px] text-[#2C2C2C]">{COMPANY}</p>
          <ul className="space-y-3 text-[13px] text-[#5A5A5A]">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-[#8B7355] mt-0.5 flex-shrink-0" />
              {ADDRESS}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#8B7355] flex-shrink-0" />
              <a href={`mailto:${EMAIL}`} className="hover:text-[#8B7355] transition-colors">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-[#8B7355] flex-shrink-0" />
              <a href={SITE_URL} className="hover:text-[#8B7355] transition-colors">
                {SITE}
              </a>
            </li>
          </ul>
        </div>
      );
  }
}

/* ── Page ────────────────────────────────────────────────── */
export default function TermsOfServicePage() {
  return (
    <main className="bg-[#F8F7F4] text-[#2C2C2C]">

      {/* HERO */}
      <header className="border-b border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-28 lg:pt-36 pb-14 lg:pb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#8B7355]" />
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355]">Legal</p>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif leading-[1.12] mb-4">Terms of Service</h1>

          <p className="text-[12px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">{COMPANY}</p>
          <p className="text-[12px] text-[#A9A39A]">Last updated: {LAST_UPDATED}</p>
        </div>
      </header>

      {/* BODY */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

          {/* CONTENTS */}
          <aside className="lg:col-span-3">
            {/* Mobile */}
            <details className="lg:hidden border border-[#E5E2DC] bg-white">
              <summary className="cursor-pointer px-5 py-4 text-[10px] uppercase tracking-[0.3em] text-[#8B7355]">
                Contents
              </summary>
              <nav aria-label="Terms of service contents" className="px-5 pb-5">
                <ol className="space-y-2.5">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex gap-3 text-[13px] text-[#5A5A5A] hover:text-[#8B7355] transition-colors"
                      >
                        <span className="font-mono text-[11px] text-[#C4B59D]">{num(i)}</span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </details>

            {/* Desktop */}
            <nav
              aria-label="Terms of service contents"
              className="hidden lg:block lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8B7355] mb-5">Contents</p>
              <ol className="space-y-2.5 border-l border-[#E5E2DC] pl-5">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex gap-3 text-[12px] text-[#5A5A5A] hover:text-[#8B7355] transition-colors leading-snug"
                    >
                      <span className="font-mono text-[10px] text-[#C4B59D] pt-px">{num(i)}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* TERMS */}
          <article className="lg:col-span-9 max-w-[820px]">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-28 py-10 first:pt-0 border-b last:border-0 border-[#E5E2DC]"
              >
                <h2 className="font-serif text-2xl leading-snug mb-6 flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-[#C4B59D]">{num(i)}</span>
                  {s.title}
                </h2>
                <div className="space-y-5">
                  {s.blocks.map((b, j) => (
                    <RenderBlock key={j} block={b} />
                  ))}
                </div>
              </section>
            ))}

            <div className="mt-12 pt-8 border-t border-[#E5E2DC] flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
              <Link
                href="/"
                className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
              >
                <span>Back to Murivest</span>
                <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
              </Link>
              <Link
                href="/privacy"
                className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </article>

        </div>
      </div>
    </main>
  );
}
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Murivest Group Ltd',
  description:
    'How Murivest Group Ltd collects, uses and safeguards personal data under the Kenya Data Protection Act, 2019 and the UK GDPR. KYC/AML, retention and your rights.',
  keywords: [
    'Murivest privacy policy',
    'Kenya Data Protection Act 2019',
    'UK GDPR',
    'data protection commercial real estate',
    'KYC AML verification',
    'Murivest Group Ltd',
  ],
  alternates: {
    canonical: 'https://www.murivest.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Murivest Group Ltd',
    locale: 'en_GB',
    url: 'https://www.murivest.com/privacy',
    title: 'Privacy Policy | Murivest Group Ltd',
    description:
      'How Murivest Group Ltd collects, uses and safeguards personal data under the Kenya Data Protection Act, 2019 and the UK GDPR.',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Murivest Group Ltd',
    description:
      'How Murivest Group Ltd collects, uses and safeguards personal data under the Kenya Data Protection Act, 2019 and the UK GDPR.',
  },
  category: 'legal',
};
/* ── Company details (edit here) ─────────────────────────── */
const COMPANY = 'Murivest Group Ltd';
const LAST_UPDATED = '10 November 2026';
const REGISTRATION_NUMBER = ''; // add when available; the row is hidden while empty
const ADDRESS = '1st Floor, Diamond Plaza, 4th Avenue, Parklands, Nairobi, Kenya';
const EMAIL = 'office@murivest.com';
const PHONE = '+254 115 277 610';
const PHONE_HREF = 'tel:+254115277610';
const SITE = 'murivest.com';
const SITE_URL = 'https://murivest.com';
const GOVERNING_LAW = 'Kenya';


/* ── Content ─────────────────────────────────────────────── */
type Block =
  | { t: 'p'; text: string }
  | { t: 'h'; text: string }
  | { t: 'ul'; items: string[]; lead?: boolean }
  | { t: 'details' }
  | { t: 'contact' }
  | { t: 'regulators' };

interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

const sections: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction and Scope',
    blocks: [
      {
        t: 'p',
        text: `${COMPANY} (“Murivest”, “the Company”, “we”, “us”, “our”) is an international commercial real estate services and investment firm operating across East Africa, the United Kingdom, and other international markets. This Privacy Policy (“Policy”) describes how we collect, use, disclose, transfer, and safeguard personal data in the course of providing brokerage, property and asset management, and investment property services in respect of Grade A income-producing commercial assets.`,
      },
      {
        t: 'p',
        text: 'This Policy applies to personal data collected through our website, direct communications, mandate engagements, investor onboarding, property management activities, and any other interaction with the Company. It is issued in accordance with the Kenya Data Protection Act, 2019 (the “DPA”) and the UK General Data Protection Regulation (the “UK GDPR”), together with any other applicable data protection legislation in the jurisdictions in which we operate.',
      },
      {
        t: 'p',
        text: 'By engaging with Murivest, you acknowledge that you have read and understood this Policy. Where required by law, we will seek your consent before processing your personal data for specified purposes.',
      },
    ],
  },
  {
    id: 'data-controller',
    title: 'Data Controller',
    blocks: [
      {
        t: 'p',
        text: `For the purposes of applicable data protection law, ${COMPANY} is the data controller in respect of the personal data it processes in connection with its commercial real estate services and investment activities.`,
      },
      { t: 'p', text: 'Registered details:' },
      { t: 'details' },
      {
        t: 'p',
        text: 'Where Murivest processes personal data on behalf of a client or counterparty under a mandate, it may act as a data processor for those specific activities. In such cases, the terms of the relevant mandate agreement and the instructions of the data controller will govern the processing.',
      },
    ],
  },
  {
    id: 'data-we-collect',
    title: 'Personal Data We Collect',
    blocks: [
      {
        t: 'p',
        text: 'We collect only the personal data necessary to deliver our services, satisfy regulatory obligations, and maintain the standards of fiduciary conduct that govern our engagements. The categories of personal data we may collect include:',
      },
      { t: 'h', text: '3.1 Identity and Contact Data' },
      {
        t: 'ul',
        items: [
          'Full name, title, and professional designation',
          'Email address, telephone number, and postal address',
          'Employer, institutional affiliation, and business function',
          'Nationality and jurisdiction of residence (where relevant to KYC/AML verification)',
        ],
      },
      { t: 'h', text: '3.2 Regulatory and Compliance Data' },
      {
        t: 'ul',
        items: [
          'Passport, national identification, or other government-issued identification',
          'Proof of address and proof of source of funds or wealth (where required for KYC/AML verification)',
          'Politically exposed person (PEP) status and sanctions screening results',
          'Beneficial ownership information where the client is an entity',
        ],
      },
      { t: 'h', text: '3.3 Financial and Transaction Data' },
      {
        t: 'ul',
        items: [
          'Bank account details and payment information',
          'Investment preferences, mandate parameters, and transaction history with Murivest',
          'Financial and business information relevant to underwriting, asset selection, or investment structuring support',
        ],
      },
      { t: 'h', text: '3.4 Property and Asset Data' },
      {
        t: 'ul',
        items: [
          'Information relating to tenancies, leases, and occupancy where Murivest provides property or asset management services',
          'Property preferences, acquisition criteria, and development-site requirements',
          'CCTV images or access records where Murivest manages or operates a property',
        ],
      },
      { t: 'h', text: '3.5 Technical and Usage Data' },
      {
        t: 'ul',
        items: [
          'IP address, browser type, device type, and operating system',
          'Pages viewed, searches performed, and interactions with our website',
          'Date and time of visit, referring website, and approximate location derived from IP address',
          'Cookie identifiers and similar technology identifiers, where permitted',
        ],
      },
      { t: 'h', text: '3.6 Communications Data' },
      {
        t: 'ul',
        items: [
          'Correspondence with Murivest by email, telephone, post, or through website forms',
          'Records of meetings, calls, and mandate discussions',
          'Any other information you voluntarily provide in the course of engaging with us',
        ],
      },
    ],
  },
  {
    id: 'how-we-collect',
    title: 'How We Collect Personal Data',
    blocks: [
      { t: 'p', text: 'We collect personal data through the following channels:' },
      {
        t: 'ul',
        lead: true,
        items: [
          'Directly from you — when you contact us, submit an enquiry, request a briefing, enter into a mandate, complete KYC/AML documentation, or communicate with our personnel.',
          'Through our website — when you browse, submit forms, or interact with cookies and similar technologies.',
          'From third parties — including professional advisers, introducers, credit reference agencies, sanctions screening providers, and publicly available sources where necessary for KYC/AML or due diligence purposes.',
          'In the course of property and asset management — from tenants, landlords, service providers, and visitors to managed properties.',
          'Automatically — through server logs, analytics tools, and website security systems.',
        ],
      },
      {
        t: 'p',
        text: 'Where we collect personal data indirectly, we will notify you within the period required by applicable law (including within 14 days under the Kenya Data Protection (General) Regulations, 2021, where applicable) or at the point of first communication, whichever is earlier.',
      },
    ],
  },
  {
    id: 'purposes',
    title: 'Purposes of Processing',
    blocks: [
      { t: 'p', text: 'We process personal data for the following purposes:' },
      { t: 'h', text: '5.1 Service Delivery' },
      {
        t: 'ul',
        items: [
          'Responding to enquiries and requests for information',
          'Providing brokerage, property and asset management, and investment property services',
          'Facilitating acquisitions, disposals, leases, and asset management engagements',
          'Preparing mandate documentation, investment materials, and transaction reports',
        ],
      },
      { t: 'h', text: '5.2 Regulatory and Fiduciary Compliance' },
      {
        t: 'ul',
        items: [
          'Conducting KYC/AML verification and sanctions screening',
          'Complying with applicable laws, regulations, and regulatory requests in Kenya, the United Kingdom, and other relevant jurisdictions',
          'Maintaining records required for audit, accounting, and reporting purposes',
          'Enforcing our rights and defending legal claims',
        ],
      },
      { t: 'h', text: '5.3 Investor and Client Communication' },
      {
        t: 'ul',
        items: [
          'Communicating mandate updates, market intelligence, and investment briefings (where you have consented or where we have a legitimate interest)',
          'Managing investor relationships and capital partner introductions',
          'Responding to complaints and data subject requests',
        ],
      },
      { t: 'h', text: '5.4 Website and Security' },
      {
        t: 'ul',
        items: [
          'Operating, maintaining, and securing our website',
          'Analysing website usage to improve functionality and user experience',
          'Preventing fraud, spam, and unauthorised access',
        ],
      },
      { t: 'h', text: '5.5 Legal and Regulatory Obligations' },
      {
        t: 'ul',
        items: [
          'Complying with court orders, regulatory notices, and law enforcement requests',
          'Meeting record-keeping and reporting obligations under applicable corporate and financial legislation',
        ],
      },
      {
        t: 'p',
        text: 'We will not process personal data for purposes that are incompatible with those for which it was collected, unless we have a lawful basis to do so or have obtained your consent.',
      },
    ],
  },
  {
    id: 'lawful-basis',
    title: 'Lawful Basis for Processing',
    blocks: [
      {
        t: 'p',
        text: 'Under the Kenya Data Protection Act, 2019, we rely on one or more of the following lawful bases, as applicable:',
      },
      {
        t: 'ul',
        lead: true,
        items: [
          'Consent — where you have given clear consent for us to process your personal data for a specific purpose.',
          'Contract — where processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract.',
          'Legal obligation — where processing is necessary for compliance with a legal or regulatory obligation to which Murivest is subject.',
          'Legitimate interests — where processing is necessary for the purposes of the legitimate interests pursued by Murivest or a third party, except where such interests are overridden by your interests or fundamental rights.',
          'Vital interests — where processing is necessary to protect your vital interests or those of another person.',
          'Public interest — where processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority.',
        ],
      },
      {
        t: 'p',
        text: 'Under the UK GDPR, we rely on the equivalent lawful bases set out in Article 6, including contract, legal obligation, legitimate interests, and consent where required. For special category data (where collected), we rely on additional conditions under Article 9, including substantial public interest (KYC/AML) or explicit consent.',
      },
      {
        t: 'p',
        text: 'Where we rely on legitimate interests, we conduct a balancing assessment to ensure that your rights and freedoms are not overridden. You may contact us for further information about the specific legitimate interest relied upon.',
      },
    ],
  },
  {
    id: 'disclosure',
    title: 'Disclosure of Personal Data',
    blocks: [
      {
        t: 'p',
        text: 'We may share personal data with the following categories of recipients, strictly on a need-to-know basis and subject to appropriate safeguards:',
      },
      { t: 'h', text: '7.1 Within Murivest' },
      {
        t: 'ul',
        items: [
          'Authorised personnel, management, and internal compliance functions',
          'Affiliates or subsidiaries within the Murivest Group, where necessary for service delivery or regulatory compliance',
        ],
      },
      { t: 'h', text: '7.2 Professional Advisers and Service Providers' },
      {
        t: 'ul',
        items: [
          'Legal counsel, auditors, tax advisers, and other professional consultants',
          'IT service providers, website hosting providers, and data analytics providers',
          'KYC/AML screening providers and sanctions screening services',
          'Property management companies, facility managers, and contractors (where Murivest provides property management services)',
        ],
      },
      { t: 'h', text: '7.3 Regulatory and Government Authorities' },
      {
        t: 'ul',
        items: [
          'The Office of the Data Protection Commissioner (Kenya), the Information Commissioner’s Office (UK), and other competent regulatory authorities',
          'Law enforcement agencies, courts, and tribunals where required by law or legal process',
          'Tax authorities and anti-money laundering authorities',
        ],
      },
      { t: 'h', text: '7.4 Transaction Counterparties' },
      {
        t: 'ul',
        items: [
          'Prospective purchasers, vendors, lessors, lessees, and their professional advisers in the context of a commercial real estate transaction',
          'Financial institutions and capital partners involved in a mandate, subject to confidentiality and NDA requirements',
        ],
      },
      { t: 'h', text: '7.5 Professional Indemnity Insurers' },
      {
        t: 'ul',
        items: [
          'Insurers and brokers where necessary for the maintenance of professional indemnity coverage',
        ],
      },
      {
        t: 'p',
        text: 'We do not sell personal data. We do not share personal data with third parties for their own marketing purposes unless we have obtained your explicit consent or are otherwise permitted by law.',
      },
    ],
  },
  {
    id: 'international-transfers',
    title: 'International Transfers',
    blocks: [
      {
        t: 'p',
        text: 'Murivest operates across East Africa, the United Kingdom, and other international markets. Personal data may be transferred to, stored in, or processed in jurisdictions outside the jurisdiction in which it was collected, including Kenya and the United Kingdom.',
      },
      {
        t: 'p',
        text: 'Where we transfer personal data outside Kenya or the UK, we will ensure that appropriate safeguards are in place, including:',
      },
      {
        t: 'ul',
        items: [
          'Transfers to countries recognised as providing an adequate level of data protection',
          'Standard contractual clauses approved by the relevant regulatory authority',
          'Binding corporate rules or equivalent internal data protection standards',
          'Explicit consent where no other safeguard is available',
        ],
      },
      {
        t: 'p',
        text: `You may request further information about the safeguards applied to international transfers by contacting us at ${EMAIL}.`,
      },
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    blocks: [
      {
        t: 'p',
        text: 'We implement appropriate technical and organisational security measures to protect personal data against unauthorised access, disclosure, alteration, or destruction. These measures include:',
      },
      {
        t: 'ul',
        items: [
          'Access controls and role-based permissions limiting access to authorised personnel only',
          'Encryption of data in transit and at rest where appropriate',
          'Secure storage systems and regular security assessments',
          'Confidentiality obligations imposed on personnel and service providers',
          'Incident response procedures for detecting, reporting, and remediating data breaches',
        ],
      },
      {
        t: 'p',
        text: 'In the event of a personal data breach that poses a risk to data subjects, we will notify the relevant supervisory authority without undue delay and, where required, within 72 hours of becoming aware of the breach, and will inform affected data subjects where the breach is likely to result in a high risk to their rights and freedoms.',
      },
    ],
  },
  {
    id: 'retention',
    title: 'Data Retention',
    blocks: [
      {
        t: 'p',
        text: 'We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying legal, accounting, regulatory, or reporting requirements.',
      },
      { t: 'p', text: 'Retention periods are determined by reference to:' },
      {
        t: 'ul',
        items: [
          'The duration of the mandate or engagement',
          'Applicable statutory limitation periods',
          'KYC/AML record-keeping requirements (typically five years following the end of the business relationship, or such longer period as required by applicable law)',
          'Tax and accounting record-keeping obligations',
          'Any ongoing legal or regulatory proceedings',
        ],
      },
      {
        t: 'p',
        text: 'When personal data is no longer required, we will securely delete or anonymise it in accordance with our internal retention schedule.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    blocks: [
      {
        t: 'p',
        text: 'Subject to applicable law, you have the following rights in relation to your personal data:',
      },
      { t: 'h', text: '11.1 Rights under the Kenya Data Protection Act, 2019' },
      {
        t: 'ul',
        lead: true,
        items: [
          'Right to be informed — of the fact that your personal data is being collected, the purposes of processing, and the recipients of the data.',
          'Right to access — to obtain confirmation of whether we process your personal data and to receive a copy of that data.',
          'Right to rectification — to request correction of inaccurate or incomplete personal data.',
          'Right to erasure — to request deletion of personal data where there is no compelling reason for its continued processing.',
          'Right to restriction — to request restriction of processing in certain circumstances.',
          'Right to object — to object to processing based on legitimate interests or for direct marketing purposes.',
          'Right to data portability — to receive your personal data in a structured, commonly used, machine-readable format.',
          'Right to not be subject to automated decision-making — where decisions are based solely on automated processing and produce legal or similarly significant effects.',
        ],
      },
      { t: 'h', text: '11.2 Rights under the UK GDPR' },
      {
        t: 'p',
        text: 'The equivalent rights apply under the UK GDPR, including the right to lodge a complaint with the Information Commissioner’s Office (ICO) in the United Kingdom.',
      },
      {
        t: 'p',
        text: `To exercise any of these rights, please contact us at ${EMAIL}. We will respond within the timeframe required by applicable law (generally within one month, subject to extension where permitted). We may request proof of identity before fulfilling a request to protect your personal data.`,
      },
      {
        t: 'p',
        text: 'You also have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC) in Kenya or the Information Commissioner’s Office (ICO) in the United Kingdom.',
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies and Similar Technologies',
    blocks: [
      {
        t: 'p',
        text: 'Our website uses cookies and similar technologies to enhance site navigation, analyse site usage, and support our marketing efforts. Cookies are small text files placed on your device when you visit our website.',
      },
      { t: 'p', text: 'We use the following categories of cookies:' },
      {
        t: 'ul',
        lead: true,
        items: [
          'Strictly necessary cookies — required for the website to function properly, including security, form functionality, and cookie preference management.',
          'Analytics cookies — used to understand how visitors interact with our website and to improve its performance.',
          'Marketing cookies — used where permitted to support our communications and measure the effectiveness of our outreach.',
        ],
      },
      {
        t: 'p',
        text: 'Where required by law, we will obtain your consent before placing non-essential cookies on your device. You can manage your cookie preferences through your browser settings or through any cookie consent tool provided on our website. Please note that disabling certain cookies may affect the functionality of the website.',
      },
    ],
  },
  {
    id: 'children',
    title: 'Children’s Privacy',
    blocks: [
      {
        t: 'p',
        text: 'Our website and services are intended for adults and are not directed at children. We do not knowingly collect personal data from individuals under the age of 18. If we become aware that we have inadvertently collected personal data from a child, we will take reasonable steps to delete it promptly.',
      },
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    blocks: [
      {
        t: 'p',
        text: 'Our website may contain links to third-party websites, including those of professional advisers, service providers, and industry resources. This Policy does not apply to those third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy notices of any third-party websites you visit.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    blocks: [
      {
        t: 'p',
        text: 'We reserve the right to update this Policy from time to time to reflect changes in our practices, regulatory requirements, or operational needs. The revised Policy will be published on this page with an updated “Last updated” date. Where changes are material, we may also notify you by email or through a notice on our website.',
      },
      {
        t: 'p',
        text: 'We encourage you to review this Policy periodically to remain informed about how we protect your personal data.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    blocks: [
      {
        t: 'p',
        text: 'If you have any questions about this Policy, wish to exercise your data protection rights, or have concerns about how we process your personal data, please contact us:',
      },
      { t: 'contact' },
      { t: 'p', text: 'For regulatory complaints, you may contact:' },
      { t: 'regulators' },
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    blocks: [
      {
        t: 'p',
        text: `This Policy shall be governed by and construed in accordance with the laws of ${GOVERNING_LAW}, without prejudice to any mandatory data protection rights you may have under the laws of your jurisdiction of residence.`,
      },
    ],
  },
];

/* ── Helpers ─────────────────────────────────────────────── */
const num = (i: number) => String(i + 1).padStart(2, '0');

function ListItem({ text, lead }: { text: string; lead?: boolean }) {
  if (lead) {
    const i = text.indexOf(' — ');
    if (i > -1) {
      return (
        <>
          <strong className="font-medium text-[#2C2C2C]">{text.slice(0, i)}</strong>
          {' — '}
          {text.slice(i + 3)}
        </>
      );
    }
  }
  return <>{text}</>;
}

const bodyText = 'text-[14px] leading-[1.9] text-[#5A5A5A] font-light';

function RenderBlock({ block }: { block: Block }) {
  switch (block.t) {
    case 'p':
      return <p className={bodyText}>{block.text}</p>;

    case 'h':
      return <h3 className="font-serif text-[17px] text-[#2C2C2C] pt-3">{block.text}</h3>;

    case 'ul':
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className={`flex items-start gap-3 ${bodyText}`}>
              <span className="w-1 h-1 rounded-full bg-[#8B7355] mt-[11px] flex-shrink-0" />
              <span>
                <ListItem text={item} lead={block.lead} />
              </span>
            </li>
          ))}
        </ul>
      );

    case 'details': {
      const rows: [string, string][] = [
        ['Registered name', COMPANY],
        ...(REGISTRATION_NUMBER ? ([['Registration number', REGISTRATION_NUMBER]] as [string, string][]) : []),
        ['Registered office', ADDRESS],
        ['Principal places of business', 'Nairobi, Kenya; London, United Kingdom'],
        ['Contact for privacy matters', EMAIL],
      ];
      return (
        <dl className="border border-[#E5E2DC] bg-white">
          {rows.map(([k, v]) => (
            <div key={k} className="grid sm:grid-cols-3 gap-1 sm:gap-4 px-5 py-4 border-b last:border-0 border-[#E5E2DC]">
              <dt className="text-[10px] uppercase tracking-[0.2em] text-[#8B7355] sm:pt-1">{k}</dt>
              <dd className="sm:col-span-2 text-[13px] text-[#2C2C2C]">{v}</dd>
            </div>
          ))}
        </dl>
      );
    }

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
              <a href={`mailto:${EMAIL}`} className="hover:text-[#8B7355] transition-colors">{EMAIL}</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#8B7355] flex-shrink-0" />
              <a href={PHONE_HREF} className="hover:text-[#8B7355] transition-colors">{PHONE}</a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-[#8B7355] flex-shrink-0" />
              <a href={SITE_URL} className="hover:text-[#8B7355] transition-colors">{SITE}</a>
            </li>
          </ul>
        </div>
      );

    case 'regulators':
      return (
        <div className="grid sm:grid-cols-2 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
          <div className="bg-white p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8B7355] mb-2">Kenya</p>
            <p className="font-serif text-[15px] text-[#2C2C2C] mb-3 leading-snug">
              Office of the Data Protection Commissioner
            </p>
            <p className="text-[12px] text-[#5A5A5A] font-light leading-relaxed mb-3">
              Britam Tower, Hospital Road, Upper Hill, Nairobi
            </p>
            <a href="https://www.odpc.go.ke" target="_blank" rel="noreferrer noopener" className="text-[12px] text-[#8B7355] hover:underline">
              www.odpc.go.ke
            </a>
          </div>
          <div className="bg-white p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8B7355] mb-2">United Kingdom</p>
            <p className="font-serif text-[15px] text-[#2C2C2C] mb-3 leading-snug">
              Information Commissioner’s Office
            </p>
            <p className="text-[12px] text-[#5A5A5A] font-light leading-relaxed mb-3">
              Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF
            </p>
            <a href="https://ico.org.uk" target="_blank" rel="noreferrer noopener" className="text-[12px] text-[#8B7355] hover:underline">
              ico.org.uk
            </a>
          </div>
        </div>
      );
  }
}

/* ── Page ────────────────────────────────────────────────── */
export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#F8F7F4] text-[#2C2C2C]">

      {/* HERO */}
      <header className="border-b border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-28 lg:pt-36 pb-14 lg:pb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#8B7355]" />
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#8B7355]">Legal</p>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif leading-[1.12] mb-4">Privacy Policy</h1>

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
              <nav aria-label="Privacy policy contents" className="px-5 pb-5">
                <ol className="space-y-2.5">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="flex gap-3 text-[13px] text-[#5A5A5A] hover:text-[#8B7355] transition-colors">
                        <span className="font-mono text-[11px] text-[#C4B59D]">{num(i)}</span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </details>

            {/* Desktop */}
            <nav aria-label="Privacy policy contents" className="hidden lg:block lg:sticky lg:top-28">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8B7355] mb-5">Contents</p>
              <ol className="space-y-2.5 border-l border-[#E5E2DC] pl-5">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="flex gap-3 text-[12px] text-[#5A5A5A] hover:text-[#8B7355] transition-colors leading-snug">
                      <span className="font-mono text-[10px] text-[#C4B59D] pt-px">{num(i)}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* POLICY */}
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

            <div className="mt-12 pt-8 border-t border-[#E5E2DC]">
              <Link
                href="/"
                className="group inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
              >
                <span>Back to Murivest</span>
                <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
              </Link>
            </div>
          </article>

        </div>
      </div>
    </main>
  );
}
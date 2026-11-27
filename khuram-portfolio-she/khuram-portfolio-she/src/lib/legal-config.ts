/*
 * Legal page content — Privacy Policy & Terms of Service.
 *
 * This is EDITABLE DRAFT content. No approved policy text was supplied, so
 * these are placeholder drafts to be reviewed and replaced before publishing.
 * Do NOT treat these as final legal terms — no business practices, payment
 * terms, or governing-law details have been confirmed.
 *
 * Structure per page: an ordered list of blocks. Each block has a number,
 * a heading, and content items (paragraphs, subheadings, or lists).
 */

export interface LegalContentItem {
  type: "paragraph" | "subheading" | "list";
  text?: string;
  items?: string[];
}

export interface LegalBlock {
  number: string;
  heading: string;
  content: LegalContentItem[];
}

export interface LegalPageConfig {
  slug: string;
  title: string;
  breadcrumb: string;
  blocks: LegalBlock[];
}

export const privacyPolicyConfig: LegalPageConfig = {
  slug: "/privacy-policy",
  title: "Privacy Policy",
  breadcrumb: "Privacy Policy",
  blocks: [
    {
      number: "01",
      heading: "Information I Collect",
      content: [
        {
          type: "paragraph",
          text: "I collect the information you voluntarily provide when you contact me through the form on this site, including your name and email address. I may also collect basic analytics data about how the site is used.",
        },
        {
          type: "subheading",
          text: "Information you provide",
        },
        {
          type: "list",
          items: [
            "Your name when you submit the contact form.",
            "Your email address so I can respond to your enquiry.",
            "Any additional details you include in your message.",
          ],
        },
        {
          type: "subheading",
          text: "Information collected automatically",
        },
        {
          type: "list",
          items: [
            "Browser type and device information.",
            "Pages visited and approximate location.",
          ],
        },
      ],
    },
    {
      number: "02",
      heading: "How I Use Your Information",
      content: [
        {
          type: "paragraph",
          text: "I use the information collected to respond to your enquiries, provide the services you request, and improve the experience on this website. I do not sell your personal information.",
        },
        {
          type: "list",
          items: [
            "To reply to your messages and project enquiries.",
            "To deliver the services we agree on together.",
            "To understand how visitors use the site and improve it over time.",
          ],
        },
      ],
    },
    {
      number: "03",
      heading: "Sharing of Information",
      content: [
        {
          type: "paragraph",
          text: "I do not share your personal information with third parties for marketing purposes. I may share limited information with trusted service providers who help operate this site, under appropriate confidentiality agreements.",
        },
      ],
    },
    {
      number: "04",
      heading: "Data Security",
      content: [
        {
          type: "paragraph",
          text: "I take reasonable measures to protect your information from unauthorised access. However, no method of transmission over the internet is completely secure, and I cannot guarantee absolute security.",
        },
      ],
    },
    {
      number: "05",
      heading: "Your Rights",
      content: [
        {
          type: "paragraph",
          text: "You may request access to, correction of, or deletion of your personal information. To exercise any of these rights, contact me using the details provided on this page.",
        },
        {
          type: "list",
          items: [
            "Request a copy of the information I hold about you.",
            "Ask me to correct inaccurate information.",
            "Request deletion of your personal data, where applicable.",
          ],
        },
      ],
    },
    {
      number: "06",
      heading: "Third-Party Links",
      content: [
        {
          type: "paragraph",
          text: "This website may contain links to external sites. I am not responsible for the privacy practices or content of those websites. I encourage you to review their privacy policies when visiting them.",
        },
      ],
    },
    {
      number: "07",
      heading: "Changes to This Policy",
      content: [
        {
          type: "paragraph",
          text: "I may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. I encourage you to review this page periodically.",
        },
      ],
    },
    {
      number: "08",
      heading: "Contact",
      content: [
        {
          type: "paragraph",
          text: "If you have any questions about this Privacy Policy, please contact me using the details provided on the contact page.",
        },
      ],
    },
  ],
};

export const termsOfServiceConfig: LegalPageConfig = {
  slug: "/terms-of-service",
  title: "Terms of Service",
  breadcrumb: "Terms of Service",
  blocks: [
    {
      number: "01",
      heading: "Acceptance of Terms",
      content: [
        {
          type: "paragraph",
          text: "By accessing and using this website, you accept these Terms of Service. If you do not agree with any part of these terms, please do not use the site.",
        },
      ],
    },
    {
      number: "02",
      heading: "Services Provided",
      content: [
        {
          type: "paragraph",
          text: "This website presents creative services including brand identity, digital design, and art direction. The specific scope of any project is defined in a separate agreement between the parties.",
        },
      ],
    },
    {
      number: "03",
      heading: "Use of Website",
      content: [
        {
          type: "paragraph",
          text: "You agree to use this website for lawful purposes only. You must not misuse the site or attempt to disrupt its normal operation.",
        },
        {
          type: "list",
          items: [
            "Do not attempt to gain unauthorised access to any part of the site.",
            "Do not introduce viruses or other malicious code.",
            "Do not use the site to transmit unlawful or harmful content.",
          ],
        },
      ],
    },
    {
      number: "04",
      heading: "Intellectual Property",
      content: [
        {
          type: "paragraph",
          text: "All content on this website, including text, images, and design work, is owned by its respective creator unless otherwise stated. You may not reproduce or distribute it without permission.",
        },
        {
          type: "subheading",
          text: "Project deliverables",
        },
        {
          type: "paragraph",
          text: "Ownership and licensing of project deliverables are governed by the specific agreement signed for each engagement.",
        },
      ],
    },
    {
      number: "05",
      heading: "Payment and Billing",
      content: [
        {
          type: "paragraph",
          text: "Project pricing, payment schedules, and billing terms are defined in the individual project agreement. Engagement-specific terms are set out in a separate written agreement between the parties.",
        },
      ],
    },
    {
      number: "06",
      heading: "Client Responsibilities",
      content: [
        {
          type: "paragraph",
          text: "To complete a project successfully, you may be asked to provide timely feedback, content, and approvals. Delays in providing required materials may affect project timelines.",
        },
      ],
    },
    {
      number: "07",
      heading: "Limitation of Liability",
      content: [
        {
          type: "paragraph",
          text: "This website is provided on an as-is basis. To the extent permitted by law, I am not liable for any indirect or consequential damages arising from the use of the site or the services described on it.",
        },
      ],
    },
    {
      number: "08",
      heading: "Termination",
      content: [
        {
          type: "paragraph",
          text: "I reserve the right to suspend or terminate access to this website at any time, without notice. Project engagements may be terminated according to the terms in the relevant agreement.",
        },
      ],
    },
    {
      number: "09",
      heading: "Governing Law",
      content: [
        {
          type: "paragraph",
          text: "The governing law for any disputes will be specified in the separate written agreement for the relevant engagement. No specific jurisdiction is confirmed in these Terms.",
        },
      ],
    },
    {
      number: "10",
      heading: "Changes to These Terms",
      content: [
        {
          type: "paragraph",
          text: "I may update these Terms of Service at any time. Changes take effect when posted on this page. Continued use of the site after changes constitutes acceptance of the updated terms.",
        },
      ],
    },
    {
      number: "11",
      heading: "Contact",
      content: [
        {
          type: "paragraph",
          text: "If you have any questions about these Terms of Service, please contact me using the details provided on the contact page.",
        },
      ],
    },
  ],
};

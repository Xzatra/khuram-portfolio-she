/*
 * Shared, editable blog article data used by:
 *  - the homepage Blog Preview section (first 3 articles, horizontal cards),
 *  - the /blog listing (all articles, vertical two-column cards),
 *  - the /blog/$slug article detail template.
 *
 * Real GoHighLevel practitioner content by Khuram Shahzad.
 * No invented client results, guarantees, or keyword stuffing.
 * Publication dates are intentionally omitted until published.
 * Keep article data shared between homepage, listing and detail pages.
 */

export type Faq = { question: string; answer: string };

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** Short label shown in pills. Omitted until published. */
  date: string;
  image: string;
  // Detail-page copy (independent per article)
  readTime: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: Faq[];
  /** Optional internal links to surface inside the body. */
  links?: { label: string; to: string }[];
};

export const blogConfig = {
  label: "My Blog",
  heading: "Practical GoHighLevel guides",
  viewAllLabel: "View All Posts",
};

export const blogArticles: Article[] = [
  {
    id: "a1",
    slug: "what-is-gohighlevel-for-small-business",
    title: "What is GoHighLevel, and how can a small business use it?",
    excerpt:
      "A plain-language overview of what GoHighLevel actually is — the pieces a small business uses, and where it stops being the right tool.",
    category: "GoHighLevel",
    date: "",
    image:
      "https://framerusercontent.com/images/2KFfldefcWc4Uzmw8KuE96b7WeA.jpg?width=320&height=480",
    readTime: "5 min read",
    intro:
      "GoHighLevel is a CRM and marketing platform built for service businesses and agencies. At its simplest, it is one place to keep contacts, see where each enquiry is in a pipeline, send messages, and run the follow-up that turns a lead into a booking — instead of stitching those across five separate tools.",
    sections: [
      {
        heading: "The core pieces a small business actually uses",
        body: "Most small businesses lean on four parts: a contact record for every lead, a pipeline that shows where each one sits, calendars and forms for booking, and workflows that send the routine follow-up. Messaging — email and SMS — sits on top of all of it, so the conversation stays with the contact rather than in a separate inbox. When these pieces share one system, the team sees the same history for every enquiry.",
      },
      {
        heading: "One enquiry-to-booking example",
        body: "A potential client fills out a form on your site. That form creates a contact in GoHighLevel, moves them into the first pipeline stage, and triggers a workflow that sends an immediate reply and a booking link. When they pick a time on the calendar, the contact moves to the next stage automatically, and the team gets notified. No one copied details between tools, and nothing was left to memory.",
      },
      {
        heading: "Setup priorities",
        body: "Start with the customer journey, not the features. Map how a lead arrives, what happens next, and where follow-up usually stalls — then set up contacts, the pipeline, and the one or two workflows that handle that first stretch. Calendars and forms come once the path is clear. A focused first build beats a complicated one that no one trusts.",
      },
      {
        heading: "Where it has limits",
        body: "GoHighLevel is not a replacement for a full accounting system, a dedicated project-management tool with deep task dependencies, or every niche integration an established team may already depend on. It is strongest for lead capture, follow-up, and the CRM side of running a service business. Where a specialist tool is genuinely doing its job well, connect it rather than forcing a migration that adds friction.",
      },
    ],
    faqs: [
      {
        question: "Do I need to move my whole business onto GoHighLevel at once?",
        answer:
          "No. The most reliable first step is the part where follow-up slips today — usually contacts, the pipeline, and the first reply. Other tools can stay connected until the CRM setup is stable.",
      },
      {
        question: "Is GoHighLevel the same as a website builder?",
        answer:
          "It can build landing pages and full sites, but its core is the CRM and follow-up layer. Many businesses use it alongside an existing website and focus first on capturing and following up leads.",
      },
      {
        question: "Does it replace email marketing?",
        answer:
          "It can handle email and SMS campaigns, but the value is tying those sends back to a contact's pipeline stage. The follow-up and the CRM should be the same system, not two that don't talk.",
      },
    ],
    links: [
      { label: "See the services I build around this", to: "/services" },
      { label: "Book a strategy call", to: "/book" },
    ],
  },
  {
    id: "a2",
    slug: "gohighlevel-crm-setup-checklist",
    title: "A practical GoHighLevel CRM setup checklist",
    excerpt:
      "A build order for setting up a GoHighLevel CRM around a real customer journey — fields, pipeline, calendars, ownership, and what to test before launch.",
    category: "CRM Setup",
    date: "",
    image:
      "https://framerusercontent.com/images/ljxqudRei6WYOg60HV8YsyX0ooI.jpg?width=362&height=480",
    readTime: "6 min read",
    intro:
      "A good CRM setup isn't measured by how many features you turned on. It's measured by whether every enquiry has a clear owner and a visible next step. This is the build order I follow so the system stays usable past the first week.",
    sections: [
      {
        heading: "Map the customer journey first",
        body: "Before any field is created, write out the journey a lead takes from first contact to booking. Note where they come from, who responds, and where things currently stall. The CRM is built to match that journey — not the platform's default labels.",
      },
      {
        heading: "Fields, pipeline, and ownership",
        body: "Set up only the custom fields the journey actually needs. Build the pipeline stages to mirror the real stages a lead moves through, and assign an owner to every stage so a contact is never sitting in the system without someone responsible for it. If a stage has no owner, follow-up will quietly stop there.",
      },
      {
        heading: "Calendars and forms",
        body: "Calendars and forms come after the pipeline, because they feed it. Each form should create a contact, drop them into the right stage, and capture the details the team needs to respond. The booking calendar should move the contact forward automatically so no one has to update the pipeline by hand.",
      },
      {
        heading: "The testing checklist",
        body: "Before launch, walk a test lead through every entry point: each form, each calendar, each message that should fire. Confirm the contact lands in the right stage, the owner is assigned, and the follow-up sends. If the first real enquiry doesn't flow cleanly, the team will stop trusting the system — so test the path before you rely on it.",
      },
    ],
    faqs: [
      {
        question: "How many pipeline stages should I start with?",
        answer:
          "Start with the stages a lead actually passes through today — usually four to six. Add stages only when the journey genuinely needs them. More stages than the team uses just creates gaps where leads sit untouched.",
      },
      {
        question: "Should every contact have an owner?",
        answer:
          "Yes. A contact without an owner is the most common reason follow-up stops. Assign ownership per stage or per source so every enquiry has someone responsible for the next step.",
      },
      {
        question: "What's the most skipped part of the setup?",
        answer:
          "Testing the full path with a dummy lead. Teams often build the pipeline and forms but never run a contact through end to end, so the first real enquiry hits a gap no one noticed.",
      },
    ],
    links: [
      { label: "CRM setup is one of my services", to: "/services" },
      { label: "See related client work", to: "/works" },
    ],
  },
  {
    id: "a3",
    slug: "lead-follow-up-automation-gohighlevel",
    title: "How to plan lead follow-up automation in GoHighLevel",
    excerpt:
      "Planning follow-up before you build it — source, first response, owner, timing, stop conditions, and how to keep one lead from getting messaged twice.",
    category: "Automation",
    date: "",
    image:
      "https://framerusercontent.com/images/vpwt8sWbWadWuxwcptOKbil2Y.jpg?width=362&height=480",
    readTime: "7 min read",
    intro:
      "Follow-up automation fails for predictable reasons: it messages the wrong lead, at the wrong time, or long after the conversation has moved on. The fix isn't more automation — it's a short plan made before you build anything.",
    sections: [
      {
        heading: "Source, first response, and owner",
        body: "Name where the lead comes from and who owns the first response. The workflow's job is to handle the first reply fast and hand off cleanly — not to replace the human who closes the conversation. If no one is assigned, the automation is just sending messages into a void.",
      },
      {
        heading: "Timing and stop conditions",
        body: "Set realistic timing for each step, and define what stops the sequence: a booking, a reply, a stage change, or the lead marking themselves not interested. Without stop conditions, automation keeps nudging a lead who already answered — which is the fastest way to look careless and lose them.",
      },
      {
        heading: "Handling duplicates and missed bookings",
        body: "Decide what happens when the same lead enters twice from different sources, and what happens when a booking doesn't complete. A duplicate check before the workflow fires, and a fallback when a calendar slot isn't taken, keep the experience clean. The goal is that a lead never receives two conflicting sequences at once.",
      },
      {
        heading: "A sample workflow you can adapt",
        body: "Form submitted → send an immediate reply with a booking link → wait for a booked stage change → if no booking in two days, send one follow-up → stop on booking or reply. That is five steps, it has a clear owner, and it has stop conditions. Build that before you build anything fancier.",
      },
    ],
    faqs: [
      {
        question: "How soon should the first automated reply go out?",
        answer:
          "Immediately. The first reply should be near-instant and carry a clear next step — usually a booking link. Speed of first response is the single biggest reason automation helps.",
      },
      {
        question: "What stops a follow-up sequence?",
        answer:
          "A booking, a reply, a stage change, or the lead marking themselves not interested. Define these before launch so the workflow doesn't keep messaging a lead who has already moved on.",
      },
      {
        question: "How do I stop a lead getting messaged twice?",
        answer:
          "Use a duplicate or entry-condition check before the workflow fires — for example, 'only if the contact is not already in an active booking sequence.' One lead, one sequence.",
      },
    ],
    links: [{ label: "Want this set up for you? Book a call", to: "/book" }],
  },
  {
    id: "a4",
    slug: "gohighlevel-ai-agent-use-cases",
    title: "What should a GoHighLevel AI agent handle?",
    excerpt:
      "Where AI agents actually help in a CRM — FAQs, qualification, booking guidance — and where a human should take over.",
    category: "AI",
    date: "",
    image: "https://framerusercontent.com/images/2zvtLFJDbvMcIXfxUj8J51Afc70.jpg",
    readTime: "6 min read",
    intro:
      "An AI agent in GoHighLevel is useful for the repetitive first stretch of a conversation — answering the same questions, qualifying fit, and guiding a lead toward booking. It is not a replacement for the human who closes. The question isn't what AI can do, but what it should do without breaking trust.",
    sections: [
      {
        heading: "FAQs and qualification",
        body: "The clearest win is the questions a team answers over and over: pricing ranges, what's included, how long it takes, what the next step is. A grounded AI agent answers those instantly and qualifies whether the lead is a real fit before anyone spends time on a call. If the agent doesn't know an answer, it says so rather than inventing one.",
      },
      {
        heading: "Booking guidance",
        body: "A well-scoped agent can guide a lead toward booking a time, collecting the basics the team needs, and confirming the meeting. It should hand off to a human the moment a question gets specific enough that a wrong answer could cost the deal — custom scope, pricing for an edge case, or a complaint.",
      },
      {
        heading: "Knowledge and the human handoff",
        body: "Point the agent at a defined knowledge base — your services, process, and common questions — not the open internet. Set the conditions where it stops and hands to a person: high-intent pricing questions, anything it can't verify, and any frustrated or confused lead. The handoff should include the conversation so the human isn't starting blind.",
      },
      {
        heading: "Testing and limits",
        body: "Test the agent the way a real lead would talk to it: vague questions, follow-ups, edge cases, and the moment it should stop. Log every handoff and every answer it got wrong. An AI agent is not a set-and-forget tool — if it isn't being reviewed, it is quietly teaching itself the wrong answers.",
      },
    ],
    faqs: [
      {
        question: "Will the AI agent give wrong pricing or invent details?",
        answer:
          "Only if it's pointed at the open web or unscoped content. Ground it in a defined knowledge base and set it to say 'I'm not sure, let me connect you' rather than guessing. Wrong specifics from a bot cost more than a missed answer.",
      },
      {
        question: "When should it hand off to a human?",
        answer:
          "On specific pricing for a custom scope, anything it can't verify, a frustrated or confused lead, or any moment where a wrong answer could lose the deal. The handoff should carry the conversation so the person isn't starting over.",
      },
      {
        question: "Do I need to monitor it after launch?",
        answer:
          "Yes. Log handoffs and wrong answers, and review them regularly. An agent no one watches quietly learns the wrong patterns. Treat it like a team member in training, not a finished tool.",
      },
    ],
    links: [{ label: "I build and scope AI agents in GoHighLevel", to: "/services" }],
  },
  {
    id: "a5",
    slug: "gohighlevel-funnels-vs-websites",
    title: "GoHighLevel funnels and websites: which should you build?",
    excerpt:
      "Funnels and websites do different jobs. A decision example, and how forms, tracking, and CRM connection change the answer.",
    category: "Funnels & Websites",
    date: "",
    image: "https://framerusercontent.com/images/IAB5X43PAS41gNBdR2nT5SJTXC8.jpg",
    readTime: "6 min read",
    intro:
      "A website builds trust over time. A funnel captures a specific intent right now. They are not the same page, and building one when you needed the other is why so much traffic arrives and leaves without a next step.",
    sections: [
      {
        heading: "Purpose and use cases",
        body: "A website is your long-term presence — who you are, what you offer, proof you can do it. A funnel is a focused path built around one action: book a call, request a quote, claim a spot. Use a website to earn trust and a funnel to convert a specific campaign's traffic into a lead, with no competing detours.",
      },
      {
        heading: "A decision example",
        body: "If you're running a paid campaign for 'roof inspection in [city],' the page it lands on should do one thing — capture that enquiry and move it to the CRM. That is a funnel. Your main site, which explains every service you offer, is the wrong destination for that click because it gives the lead five other things to read instead of one next step.",
      },
      {
        heading: "Forms, tracking, and the CRM connection",
        body: "Whichever you build, the form should create a contact in the CRM, tag it by source, and start the right follow-up — and the page should carry tracking so you can see which campaign produced the lead. A funnel disconnected from the CRM is just a form that emails someone. The point is the closed loop: campaign → page → contact → follow-up → booking.",
      },
    ],
    faqs: [
      {
        question: "Do I need both a website and funnels?",
        answer:
          "Usually, yes — but not all at once. A solid main site for trust, plus focused funnels for specific campaigns or offers. If you only have budget for one and your goal is leads from paid traffic, start with the funnel.",
      },
      {
        question: "Can a GoHighLevel website replace my current site?",
        answer:
          "It can, if the goal is a single connected system. But if your current site already ranks and converts, the higher-value move is often connecting it to the CRM with forms and tracking rather than rebuilding it from scratch.",
      },
      {
        question: "What makes a funnel work?",
        answer:
          "One action, no detours, and a clear next step. A funnel that offers five links and a blog section is a website pretending to be a funnel. The fewer choices on the page, the higher the chance a lead takes the one you built it for.",
      },
    ],
    links: [
      { label: "Funnels and websites are part of my services", to: "/services" },
      { label: "See funnel and website work", to: "/works" },
    ],
  },
  {
    id: "a6",
    slug: "ads-crm-follow-up",
    title: "How to connect paid ads with your CRM follow-up",
    excerpt:
      "Ads only produce leads when the follow-up is connected. Campaign-to-form tracking, attribution, ownership, and why lead quality matters more than cost per lead.",
    category: "Ads & CRM",
    date: "",
    image: "https://framerusercontent.com/images/nTLCxQbunb2rYMQZEEAoObHq4DU.jpg",
    readTime: "7 min read",
    intro:
      "A lead from a paid ad is only as valuable as the follow-up that catches it. If the ad sends traffic to a form that emails someone, you've paid for a lead the system will lose. Connecting the ad to the CRM is what turns spend into booked work.",
    sections: [
      {
        heading: "Campaign-to-form tracking",
        body: "Every campaign should send traffic to a form that captures the source — the campaign, the ad set, the keyword or audience — and writes it to the contact record. Without that, you can't tell which campaign actually produced the leads that booked. Tag the contact at the source so the CRM knows where they came from before any follow-up fires.",
      },
      {
        heading: "Attribution and pipeline entry",
        body: "When the form submits, the contact should enter the pipeline at the right stage, with the right owner, and the right follow-up workflow. Attribution is the link between the ad spend and the pipeline — it tells you which campaign produced a contact that moved from enquiry to booking, not just which one produced a form fill.",
      },
      {
        heading: "Ownership and booking",
        body: "Assign an owner the moment the lead lands, and let the booking move the contact forward automatically. A lead with no owner sits in the pipeline until it goes cold. The ad did its job when the lead arrived; the system's job is to make sure someone responds and the booking happens before that intent fades.",
      },
      {
        heading: "Lead quality beyond cost per lead",
        body: "Cost per lead tells you what you paid for a form fill. It doesn't tell you whether those leads book, or whether they're the kind of client you actually want. Tie the ad source to the pipeline outcome — which campaigns produced booked calls, not just leads — and optimise for the ones that move. A cheap lead that never books is the most expensive one you bought.",
      },
    ],
    faqs: [
      {
        question: "What's the minimum to connect ads and CRM follow-up?",
        answer:
          "A form that captures the campaign source, creates a contact tagged by that source, assigns an owner, and starts the follow-up workflow. Without those four, a lead from an ad is just an email in someone's inbox.",
      },
      {
        question: "How do I know which ad actually produced bookings?",
        answer:
          "Tag the contact by campaign at the form, then track which tagged contacts reach the booking stage. That is the link between ad spend and revenue — and it only exists if the form writes the source to the CRM.",
      },
      {
        question: "Should I optimise purely for cost per lead?",
        answer:
          "No. A low cost per lead that produces contacts who never book is worse than a higher one that produces clients. Optimise for the campaigns that lead to bookings, using the CRM's pipeline outcome as the signal.",
      },
    ],
    links: [
      { label: "I run ads tied to CRM follow-up", to: "/services" },
      { label: "See ad-and-CRM client work", to: "/works" },
      { label: "Book a call about your campaigns", to: "/book" },
    ],
  },
];

export const blogArticleBySlug = (slug: string): Article | undefined =>
  blogArticles.find((a) => a.slug === slug);

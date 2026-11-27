// Central configuration for personal details, navigation, and assets
//
// IDENTITY: Khuram Shahzad — GoHighLevel Specialist & AI Automation Expert.
// Assets below are flagged placeholders until Khuram's uploaded portrait/cover
// are supplied. `assets.avatar` is intentionally empty: the sidebar and hero
// render a KS monogram fallback until the portrait URL is pasted here.
// `assets.bannerCover` is empty: a black-to-charcoal gradient with a subtle
// brand-yellow accent is used until a real cover image is supplied.

export const portfolioConfig = {
  person: {
    name: "Khuram Shahzad",
    role: "GHL Specialist",
    // Hero copy (kept separate from the sidebar role badge)
    heroIntroduction: "Hi, I’m Khuram Shahzad",
    heroHeadingLine1: "GoHighLevel Specialist",
    heroHeadingLine2: "& AI Automation Expert",
    heroParagraph:
      "From CRM setup and lead follow-up to AI agents and sales funnels, I connect the tools your team needs to respond faster and grow with less manual work.",
    // Sidebar biography
    tagline:
      "I’m Khuram Shahzad. I build practical GoHighLevel systems that help businesses turn enquiries into managed opportunities.",
    certifications: [
      {
        name: "Certified Admin",
        imageUrl:
          "https://vibe.filesafe.space/1794496492347241952/attachments/63eac670-cbe5-4fab-a17d-631bfc267592.png",
        verificationUrl: "#", // Replace with credential verification URL when supplied
        aspectRatio: "1/1",
      },
      {
        name: "Google Partner",
        imageUrl:
          "https://vibe.filesafe.space/1794496492347241952/attachments/fca8ffdc-c979-46af-b14f-9a12f94d9c3c.png",
        verificationUrl: "#", // Replace with credential verification URL when supplied
        aspectRatio: "320/150",
      },
    ],
    handle: "@itskhuarmshahzad",
    socialUrl: "https://www.instagram.com/iamkhurams/",
    statusAnnouncement: "GHL projects",
    availability: "Available",
    featuredProject: {
      text: "Book a Strategy Call",
      url: "/book", // Internal booking page (calendar embed pending)
      thumbnail: "", // Uses a KS logo mark instead of a portrait
    },
    bookingCta: "Book a Call",
    bookingUrl: "/book", // Internal booking page (calendar embed pending)
    // External live calendar — used as the fallback on the /book page until the
    // native calendar embed is connected.
    externalBookingUrl: "https://khuramshahzad.com/book",
  },
  assets: {
    bannerCover:
      "https://framerusercontent.com/images/ubrRaYuPmc4s7JzmFRvMIs1i68.png?width=922&height=500", // Reference warm abstract cover
    avatar:
      "https://vibe.filesafe.space/1794496492347241952/attachments/7f2e158c-eda4-42c1-9b94-e2ffcad82fff.png", // Khuram Shahzad portrait
    portraitAlt: "Khuram Shahzad, GoHighLevel specialist",
    brandLogo:
      "https://vibe.filesafe.space/1794496492347241952/assets/b2113736-43ad-4b5e-8e8e-c3574746b9e8.png",
    monogramTile:
      "https://vibe.filesafe.space/1794496492347241952/assets/b2acf3e0-e1fd-489b-8bdf-79d2455b2f88.png",
  },
  navigation: [
    { label: "About", href: "/about", icon: "User", active: false },
    { label: "Services", href: "/services", icon: "Briefcase", active: false },
    { label: "Works", href: "/works", icon: "Paintbrush", active: false },
    { label: "Blog", href: "/blog", icon: "BookOpen", active: false },
    { label: "Academy", href: "/academy", icon: "GraduationCap", active: false },
  ],
  socials: [
    { name: "Instagram", url: "https://www.instagram.com/iamkhurams/", icon: "Instagram" },
    { name: "Facebook", url: "https://www.facebook.com/iamkhuramshahzad/", icon: "Facebook" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/iamkhurams/", icon: "LinkedIn" },
    // YouTube — destination left unlinked until Khuram's channel URL is supplied.
    { name: "YouTube", url: "", icon: "YouTube" },
  ],
  // Client logo trust strip — six distinct brand logos imported into site assets.
  // Repeats the set in the animation track to create a seamless loop.
  clientLogos: [
    {
      id: "logo-1",
      src: "https://vibe.filesafe.space/1794496492347241952/assets/7e4c314e-2dd7-4dbb-b3ca-792818686e1b.svg",
      alt: "Client logo",
    },
    {
      id: "logo-2",
      src: "https://vibe.filesafe.space/1794496492347241952/assets/d264d1de-f11d-49b3-b875-1b01bb0a3c69.svg",
      alt: "Client logo",
    },
    {
      id: "logo-3",
      src: "https://vibe.filesafe.space/1794496492347241952/assets/6901aa8a-de3e-422a-8a54-bc7abebf2b5a.svg",
      alt: "Client logo",
    },
    {
      id: "logo-4",
      src: "https://vibe.filesafe.space/1794496492347241952/assets/5c23d273-1958-41ff-962a-435ec6aeb066.svg",
      alt: "Client logo",
    },
    {
      id: "logo-5",
      src: "https://vibe.filesafe.space/1794496492347241952/assets/a0b53edf-d9b2-42cf-8ff5-0e04916bc786.svg",
      alt: "Client logo",
    },
    {
      id: "logo-6",
      src: "https://vibe.filesafe.space/1794496492347241952/assets/af123184-8754-4b96-b8f5-4ff49e1e30eb.svg",
      alt: "Client logo",
    },
  ],
};

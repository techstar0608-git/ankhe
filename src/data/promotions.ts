/**
 * Promotions content — source of truth: Figma file M7eL5WFVyepkqr6QNGZ7Wt,
 * page "01 · Promotions" (node 1:2).
 */

export type Tier = { label: string; value: string; featured?: boolean };

export type Ritual = {
  name: string;
  sub: string;
  price: string;
  duration: string;
  includes: string[];
  featured?: boolean;
};

export type Promotion = {
  id: string;
  /** Tab label; lines rendered with <br/>. */
  nav: string[];
  kicker: string;
  /** Headline lines; rendered with <br/>. */
  title: string[];
  lead: string;
  image: { src: string; alt: string; width: number; height: number; displayHeight: number };
  heading: string;
  supporting?: string;
  tiers?: Tier[];
  rituals?: Ritual[];
  serumNote?: { title: string; text: string };
  fineprint?: string;
  cta: string;
};

export const promotions: Promotion[] = [
  {
    id: "calm-together",
    nav: ["Calm", "Together"],
    kicker: "Group booking offer",
    title: ["Calm Together"],
    lead: "Bring your mum, your bestie or your work crew. The best moments of calm are the ones we share.",
    image: {
      src: "/promotions/calm-together.webp",
      alt: "Three friends enjoying their spa day at An Khê",
      width: 800,
      height: 450,
      displayHeight: 204,
    },
    heading: "Better together",
    supporting: "Enjoy special savings when you visit with friends or family.",
    tiers: [
      { label: "2 guests", value: "10%" },
      { label: "3 guests", value: "15%", featured: true },
      { label: "5+ guests", value: "20%" },
    ],
    fineprint: "All services · Cash payments · 18 Oct – 31 Dec 2026",
    cta: "Enquire About Group Bookings",
  },
  {
    id: "gift-cards",
    nav: ["Gift Cards"],
    kicker: "Gift card offer",
    title: ["A Gift of Grace"],
    lead: "For mum, a friend, a colleague — or anyone who deserves a beautiful moment to unwind.",
    image: {
      src: "/promotions/gift-cards.webp",
      alt: "An Khê Wellness “A Gift of Calm” gift card on raked sand with spa stones",
      width: 800,
      height: 601,
      displayHeight: 240,
    },
    heading: "Gift more, save up to 20%",
    supporting: "More thoughtful gifts, more special savings.",
    tiers: [
      { label: "2 cards", value: "10%" },
      { label: "3 cards", value: "15%", featured: true },
      { label: "5+ cards", value: "20%" },
    ],
    cta: "Enquire About Gift Cards",
  },
  {
    id: "summer-glow",
    nav: ["Summer", "Glow & Flow"],
    kicker: "Summer wellness special",
    title: ["Summer", "Glow & Flow"],
    lead: "Two thoughtfully curated rituals to refresh the body, rejuvenate the skin and ease into summer.",
    image: {
      src: "/promotions/summer-glow.webp",
      alt: "Synergie Skin Super Serum+ facial and hot stone body massage",
      width: 800,
      height: 533,
      displayHeight: 204,
    },
    heading: "Choose your summer ritual",
    rituals: [
      {
        name: "Refresh Ritual",
        sub: "Restore & recharge",
        price: "$95",
        duration: "60 min",
        includes: ["Neck & Shoulder Massage (Face-Up)", "Glow Facial with Synergie SuperSerum+", "Head Spa"],
      },
      {
        name: "Refresh Luxury Ritual",
        sub: "Head-to-toe indulgence",
        price: "$145",
        duration: "90 min",
        includes: [
          "Hot Stone Body Massage",
          "Glow Facial with Synergie SuperSerum+",
          "Paraffin Hand Treatment",
          "Head Spa",
        ],
        featured: true,
      },
    ],
    serumNote: {
      title: "Synergie Skin",
      text: "Both rituals include a Glow Facial with Synergie SuperSerum+.",
    },
    cta: "Enquire & Book",
  },
];

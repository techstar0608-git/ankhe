/**
 * Promotions content — source: an-khe-promotions-fixed.html + Figma
 * (file M7eL5WFVyepkqr6QNGZ7Wt, page "01 · Promotions").
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
  nav: string;
  kicker: string;
  /** Lines of the headline; rendered with <br/> between them. */
  title: string[];
  lead: string;
  image: { src: string; alt: string; width: number; height: number; position: string };
  eyebrow: string;
  supporting?: string;
  tiers?: Tier[];
  rituals?: Ritual[];
  fineprint?: string;
  cta: string;
  note?: string;
  alt?: boolean;
};

const off = (n: number) => `${n}% OFF`;

export const promotions: Promotion[] = [
  {
    id: "calm-together",
    nav: "Calm Together",
    kicker: "Group booking offer",
    title: ["Calm Together"],
    lead: "Bring your mum, your bestie or your work crew. The best moments of calm are the ones we share.",
    image: {
      src: "/promotions/calm-together.webp",
      alt: "Three friends enjoying their spa day",
      width: 1050,
      height: 591,
      position: "center 39%",
    },
    eyebrow: "Better together",
    supporting: "Enjoy a little extra relaxation with special group savings across all services.",
    tiers: [
      { label: "2 guests", value: off(10) },
      { label: "3 guests", value: off(15), featured: true },
      { label: "5+ guests", value: off(20) },
    ],
    fineprint:
      "All services · Cash payments · Valid 18 Oct – 31 Dec 2026. Please confirm eligibility when booking.",
    cta: "Enquire About Group Bookings",
  },
  {
    id: "gift-cards",
    nav: "Gift Cards",
    kicker: "Gift card offer",
    title: ["A Gift of Grace"],
    lead: "For mum, a best friend, a colleague — or anyone who deserves a moment just for themselves.",
    image: {
      src: "/promotions/gift-cards.webp",
      alt: "A daughter embracing her mother and presenting an An Khê Wellness gift card",
      width: 1050,
      height: 591,
      position: "45% 38%",
    },
    eyebrow: "Gift more, save up to 20%",
    supporting: "Share the joy of a little time out with gift cards for the people who matter.",
    tiers: [
      { label: "2 gift cards", value: off(10) },
      { label: "3 gift cards", value: off(15), featured: true },
      { label: "5+ gift cards", value: off(20) },
    ],
    cta: "Enquire About Gift Cards",
    note: "Please check gift card terms and offer availability with our team before purchase.",
    alt: true,
  },
  {
    id: "summer-glow",
    nav: "Summer Glow & Flow",
    kicker: "Seasonal wellness rituals",
    title: ["Summer Glow", "& Flow"],
    lead: "Two thoughtfully curated rituals to refresh your body, rejuvenate your skin and ease into summer.",
    image: {
      src: "/promotions/summer-glow.webp",
      alt: "Relaxing head spa treatment with warm running water",
      width: 580,
      height: 410,
      position: "center 42%",
    },
    eyebrow: "Choose your summer ritual",
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
    cta: "Enquire & Book",
  },
];

/**
 * Price list content — source: an-khe-mobile-price-list.html (designer handoff,
 * matches Figma). Edit prices/durations here; the page renders from this file.
 */

export type Item = {
  name: string;
  price: string;
  /** Duration or unit, e.g. "60 min", "per nail". */
  meta?: string;
  desc?: string;
  signature?: boolean;
};

/** Table-style rows with two price columns (Nails, Lashes). `null` renders as "—". */
export type MatrixRow = {
  name: string;
  values: [string | null, string | null];
  desc?: string;
};

export type Category =
  | { kind: "list"; title?: string; items: Item[] }
  | {
      kind: "matrix";
      title: string;
      /** Column headers. Omit to show only the second header (e.g. "Shellac"). */
      columns?: [string, string];
      singleColumnLabel?: string;
      rows: MatrixRow[];
    };

export type ServiceSection = {
  id: string;
  nav: string;
  title: string;
  subtitle: string;
  image: string;
  categories: Category[];
};

const min = (n: number) => `${n} min`;

export const serviceSections: ServiceSection[] = [
  {
    id: "headspa",
    nav: "Headspa",
    title: "Headspa",
    subtitle: "Signature rituals",
    image: "/price-list/headspa.webp",
    categories: [
      {
        kind: "list",
        items: [
          {
            name: "Japanese Signature",
            price: "$99",
            meta: min(60),
            desc: "A calming blend of neck & shoulder massage, aromatherapy, head spa and glow facial to ease tension and restore balance.",
          },
          {
            name: "Luxury Relaxation",
            price: "$139",
            meta: min(90),
            desc: "A calming blend of hot stone body massage, aromatherapy, head spa and glow facial to ease tension, recharge and restore balance.",
          },
          {
            name: "Ultimate Experience",
            signature: true,
            price: "$179",
            meta: min(120),
            desc: "A calming blend of hot stone body massage, foot ritual, head spa, glow facial and paraffin hand treatment for ultimate head-to-toe relaxation.",
          },
        ],
      },
    ],
  },
  {
    id: "massage",
    nav: "Relaxation Massage",
    title: "Relaxation Massage",
    subtitle: "Pause, restore, unwind",
    image: "/price-list/massage.webp",
    categories: [
      {
        kind: "list",
        title: "Body Rituals",
        items: [
          { name: "Body Massage", price: "$50", meta: min(30), desc: "A short pause for a tired body. A 30-minute body massage with warmed hot stones." },
          { name: "Foot Spa Ritual", price: "$55", meta: min(30), desc: "A restorative foot treatment with scrub, massage, steam and mask, leaving tired feet soft, smooth and refreshed." },
          { name: "Detox Full Body Massage", price: "$85", meta: min(60), desc: "A soothing blend of gentle massage, hot stones and warm towel therapy to ease muscle tension, relieve fatigue and promote deep relaxation." },
          { name: "Deep Tissue Massage", price: "$95", meta: min(60), desc: "A targeted massage using slow, firm pressure to release deep muscle tension, ease stiffness and relieve discomfort." },
          { name: "Deep Detox Ritual Massage", signature: true, price: "$125", meta: min(90), desc: "Our most-loved ritual combines firm, targeted full-body massage, warm stones and a soothing herbal foot bath for deep relaxation." },
          { name: "Bridal Body Glow Ritual", price: "$250", meta: min(120), desc: "Full body scrub, hydrating body mask and massage for soft, radiant bridal glow." },
        ],
      },
      {
        kind: "list",
        title: "Add-ons",
        items: [
          { name: "Scalp Massage", price: "$20", meta: min(15) },
          { name: "Foot Massage", price: "$20", meta: min(15) },
          { name: "Neck & Shoulder Massage", price: "$30", meta: min(20) },
          { name: "Detox Foot Massage + Herbal Bath", price: "$30", meta: min(20) },
          { name: "Hair Styling: Straightening Hair", price: "$30", meta: min(20) },
          { name: "Hair Styling: Curly Hair", price: "$30", meta: min(20) },
        ],
      },
    ],
  },
  {
    id: "facial",
    nav: "Facial",
    title: "Facial",
    subtitle: "Skin rituals",
    image: "/price-list/facial.webp",
    categories: [
      {
        kind: "list",
        items: [
          { name: "Basic Facial", price: "$90", meta: min(60), desc: "Cleanse face, exfoliate, extract blackheads, facial massage, mask application, moisturiser & sunscreen, shoulder–neck–head massage." },
          { name: "Serum Cocktail Infusion", price: "$160", meta: min(75), desc: "A targeted skin infusion treatment featuring a customised blend of three serums selected to support skin vitality and glow." },
          { name: "Hollywood Facial", price: "$180", meta: min(75), desc: "Enhanced hydration for an instantly refreshed glow." },
          { name: "Ceya RF Facial", price: "$180", meta: min(75), desc: "A gentle radiofrequency treatment that warms the skin to support collagen activity and promote a refreshed, youthful-looking complexion." },
          { name: "Carbon Laser Facial", price: "$250", meta: min(90), desc: "A revitalising blend of carbon laser technology, enzyme exfoliation and deep hydration to purify skin, refine texture and restore a natural glow." },
        ],
      },
    ],
  },
  {
    id: "skin",
    nav: "Skin Treatments",
    title: "Skin Treatments",
    subtitle: "Advanced skin care",
    image: "/price-list/skin.webp",
    categories: [
      {
        kind: "list",
        items: [
          { name: "Skin Needling Full Face", price: "$250", meta: min(90) },
          { name: "Skin Needling Rejuvenation", price: "$250", meta: min(90) },
          { name: "Cold Plasma Needling", price: "$350", meta: min(90) },
          { name: "Scar Refinement Needling", price: "$450", meta: min(90) },
          { name: "Plasma Forehead", price: "$600", meta: min(45) },
          { name: "Plasma Eye Area", price: "$750", meta: min(45) },
          { name: "Plasma Chin", price: "$950", meta: min(45) },
          { name: "Plasma Full Face Renewal", price: "$1,800", meta: "5 hr" },
          { name: "Meso Therapy", price: "$450", meta: min(120) },
          { name: "HIFU", price: "$550", meta: min(120) },
        ],
      },
    ],
  },
  {
    id: "nails",
    nav: "Nails",
    title: "Nails",
    subtitle: "Manicure & nail care",
    image: "/price-list/nails.webp",
    categories: [
      {
        kind: "matrix",
        title: "Manicure",
        columns: ["Standard Colour", "Shellac"],
        rows: [
          { name: "Buff, Shape & Polish (Hands)", values: ["$15", "$25"] },
          { name: "Buff, Shape & Polish (Feet)", values: ["$20", "$30"] },
          { name: "Manicure", values: ["$25", "$35"] },
          { name: "Buff, Shape & Polish Hands & Feet", values: ["$35", "$45"] },
          { name: "Spa Pedicure", values: ["$28", "$36"] },
          { name: "Manicure & Spa Pedicure", values: ["$50", "$75"] },
        ],
      },
      {
        kind: "matrix",
        title: "Builder Gel",
        singleColumnLabel: "Shellac",
        rows: [
          { name: "Builder Gel Overlay (Natural Nails)", values: [null, "$55"] },
          { name: "Builder Gel Full Set", values: [null, "$65"] },
          { name: "Builder Gel Extensions", values: [null, "$70"] },
          { name: "Builder Gel Infill", values: [null, "$55"] },
          { name: "Removal", values: [null, "$20"] },
        ],
      },
      {
        kind: "matrix",
        title: "Acrylic",
        columns: ["Standard Colour", "Shellac"],
        rows: [
          { name: "Acrylic Infill", values: ["$35", "$45"] },
          { name: "Acrylic Full Set", values: ["$50", "$60"] },
          { name: "French Tip Infill", values: ["$40", "$50"] },
          { name: "French Tip Full Set", values: ["$55", "$65"] },
        ],
      },
      {
        kind: "matrix",
        title: "Gel Powder",
        columns: ["Standard Colour", "Shellac"],
        rows: [
          { name: "Gel Powder Infill", values: ["$40", null] },
          { name: "Gel Powder Full Set", values: ["$55", null] },
          { name: "Pink & White Powder Infill", values: ["$60", null] },
          { name: "Pink & White Powder Full Set", values: ["$80", null] },
          { name: "Acrylic Infill (Feet)", values: ["$45", "$60"] },
          { name: "Acrylic Full Set (Feet)", values: ["$60", "$75"] },
        ],
      },
      {
        kind: "list",
        title: "Add-ons",
        items: [
          { name: "Diamontes – Large", price: "$1" },
          { name: "Diamontes – Small", price: "$0.50" },
          { name: "Nail Art Design – Simple", price: "$2.50", meta: "per nail" },
          { name: "Nail Art Design – Complex", price: "$5", meta: "per nail" },
          { name: "Nail Art Chrome Colour", price: "$2.50", meta: "per nail" },
          { name: "Nail Art Chrome Colour – Full Set", price: "$20" },
          { name: "Nail Repair", price: "$5" },
          { name: "Clear Gel Top Coat", price: "$5" },
          { name: "Acrylic Tips Application", price: "From $5" },
          { name: "Gel Colour / SNS Removal Only", price: "$10" },
          { name: "Acrylic Removal Only", price: "$20" },
        ],
      },
    ],
  },
  {
    id: "lashes",
    nav: "Lashes",
    title: "Lashes",
    subtitle: "Lash extensions & lifts",
    image: "/price-list/lashes.webp",
    categories: [
      {
        kind: "matrix",
        title: "Lash Extensions",
        columns: ["Full Set", "Refill"],
        rows: [
          { name: "Classic", values: ["$80", "$50"], desc: "Refill: 2 weeks" },
          { name: "Hybrid", values: ["$100", "$60"] },
          { name: "Volume", values: ["$120", "$70"] },
          { name: "Wispy Volume", values: ["$130", "$80"] },
          { name: "Wet Look Set", values: ["$130", "$80"] },
          { name: "Anime Lashes", values: ["$140", "$85"] },
          { name: "Fox Eye Set", values: ["$130", "$80"] },
          { name: "Mega Volume", values: ["$150", "$90"] },
        ],
      },
      {
        kind: "list",
        title: "Lash Lifts",
        items: [
          { name: "Lash Lift", price: "$80" },
          { name: "Lash Lift + Tint", price: "$100" },
        ],
      },
      {
        kind: "list",
        title: "Add-ons",
        items: [
          { name: "Lash Bath", price: "$10" },
          { name: "Lash Removal", price: "$20" },
          { name: "Coloured Lashes", price: "$15" },
          { name: "Eyebrow Tint", price: "$20" },
          { name: "Bottom Lashes", price: "$20" },
        ],
      },
    ],
  },
  {
    id: "waxing",
    nav: "Waxing",
    title: "Waxing",
    subtitle: "Smooth skin, gentle care",
    image: "/price-list/waxing.webp",
    categories: [
      {
        kind: "list",
        title: "Face Waxing",
        items: [
          { name: "Eyebrows", price: "$15", meta: min(15) },
          { name: "Lip", price: "$15", meta: min(15) },
          { name: "Chin", price: "$15", meta: min(15) },
          { name: "Sides of Face", price: "$20", meta: min(15) },
          { name: "Full Face", price: "$40", meta: min(30) },
        ],
      },
      {
        kind: "list",
        title: "Upper Body",
        items: [
          { name: "Stomach Strip", price: "$10", meta: min(15) },
          { name: "Under Arms", price: "$20", meta: min(15) },
          { name: "Full Stomach", price: "$25", meta: min(25) },
          { name: "Lower Back", price: "$25", meta: min(30) },
          { name: "Half Arms", price: "$30", meta: min(30) },
          { name: "Chest", price: "$40", meta: min(30) },
          { name: "Full Back", price: "$45", meta: min(35) },
          { name: "Full Arms", price: "$50", meta: min(45) },
        ],
      },
      {
        kind: "list",
        title: "Lower Body",
        items: [
          { name: "Feet & Toes", price: "$15", meta: min(15) },
          { name: "Lower Legs", price: "$40", meta: min(30) },
          { name: "Half Legs", price: "$40", meta: min(30) },
          { name: "Upper Legs", price: "$45", meta: min(30) },
          { name: "Full Legs", price: "$60", meta: min(45) },
        ],
      },
      {
        kind: "list",
        title: "Bikini Body",
        items: [
          { name: "Bikini Line", price: "$30", meta: min(15) },
          { name: "Extended Bikini", price: "$40", meta: min(30) },
          { name: "Maintenance Brazilian (4–6 Weeks)", price: "$50", meta: min(30) },
          { name: "Brazilian", price: "$60", meta: min(30) },
        ],
      },
      {
        kind: "list",
        title: "Men’s Body",
        items: [
          { name: "Chest", price: "$45", meta: min(50) },
          { name: "Full Arms", price: "$50", meta: min(50) },
          { name: "Full Legs", price: "$50", meta: min(50) },
          { name: "Back & Shoulders", price: "$70", meta: min(60) },
        ],
      },
    ],
  },
];

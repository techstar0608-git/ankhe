/**
 * Price list content transcribed from the An Khe Wellness Figma file
 * (page "iPhone 14 & 15 Pro - 2", node 229:2).
 */

export type PriceRow = {
  name: string;
  desc?: string;
  price: string;
};

/** A row in a table-style block, e.g. NAILS / LASHES with two price columns. */
export type MatrixRow = {
  name: string;
  values: (string | null)[];
};

export type Block =
  | { kind: "list"; title?: string; rows: PriceRow[] }
  | { kind: "matrix"; title?: string; columns: string[]; rows: MatrixRow[] }
  | { kind: "compact"; title?: string; rows: PriceRow[] }
  | { kind: "note"; title?: string; text: string };

export type PriceSection = {
  id: string;
  title: string;
  blocks: Block[];
};

export const priceSections: PriceSection[] = [
  {
    id: "headspa",
    title: "Headspa",
    blocks: [
      {
        kind: "list",
        rows: [
          {
            name: "Pure Calm Glow Ritual",
            desc: "Head spa paired with gentle facial care, refreshing both scalp and complexion together.",
            price: "$115 / 70 min",
          },
          {
            name: "Pure Calm Sanctuary",
            desc: "Hands-off head spa featuring jade gua sha and Waterfall Massage, no facial contact.",
            price: "$115 / 70 min",
          },
          {
            name: "Tranquil Glow Ritual",
            desc: "Full head spa and facial combined, with custom serum infusion and steam-enhanced masking.",
            price: "$165 / 100 min",
          },
          {
            name: "Soothing Foot Wellness Journey",
            desc: "Extended foot and calf massage paired with a calming head spa, head-to-toe relief.",
            price: "$165 / 100 min",
          },
          {
            name: "The An Khê Signature Journey",
            desc: "Our flagship head-to-toe ritual: full body massage, hot stone, facial, head spa and Waterfall Dome.",
            price: "$215 / 140 min",
          },
        ],
      },
      {
        kind: "compact",
        title: "Add-On",
        rows: [
          { name: "Hair Mask Treatment", price: "$15 / 15 min" },
          { name: "Blow Dry Styling", price: "$15 / 15 min" },
          { name: "Facial Mask Upgrade", price: "$15 / 15 min" },
          { name: "Deep Foot Massage", price: "$20 / 15 min" },
          { name: "Hand Paraffin Wax Treatment", price: "$20 / 15 min" },
          { name: "Shoulder & Neck Massage", price: "$20 / 15 min" },
        ],
      },
    ],
  },
  {
    id: "body-rituals",
    title: "Body Rituals",
    blocks: [
      {
        kind: "list",
        rows: [
          {
            name: "Traditional Japanese Massage",
            desc: "Gentle stretching and pressure point techniques to restore balance and promote relaxation.",
            price: "$85 / 60 min",
          },
          {
            name: "Hot Oil Relaxation Massage",
            desc: "A soothing full body massage using warm aromatic oils to ease tension and calm the mind.",
            price: "$85 / 60 min",
          },
          {
            name: "Deep Tissue Massage",
            desc: "Targets deep muscle layers to relieve chronic tension, stiffness and muscular discomfort.",
            price: "$95 / 60 min",
          },
          {
            name: "Infrared Hot Stone Massage",
            desc: "Combines therapeutic massage with infrared heated stones to relax muscles and improve circulation.",
            price: "$135 / 90 min",
          },
          {
            name: "An Khê Herbal Compress Massage",
            desc: "Warm herbal compresses infused with traditional herbs are applied to soothe tired muscles and enhance relaxation.",
            price: "$145 / 90 min",
          },
          {
            name: "Bridal Body Glow Ritual",
            desc: "Full body scrub, hydrating body mask and massage for soft, radiant bridal glow.",
            price: "$250 / 120 min",
          },
        ],
      },
      {
        kind: "compact",
        title: "Add-On",
        rows: [
          { name: "Scalp Massage", price: "$20 / 15 min" },
          { name: "Herbal Steam Therapy", price: "$25 / 15 min" },
          { name: "Infrared Hot Stone Enhancement", price: "$25 / 20 min" },
          { name: "Deep Foot Massage", price: "$20 / 20 min" },
          { name: "Hydrating Body Mask", price: "$35 / 20 min" },
        ],
      },
    ],
  },
  {
    id: "skin-treatments",
    title: "Skin Treatments",
    blocks: [
      {
        kind: "compact",
        rows: [
          { name: "Skin Needling Full Face", price: "$250 / 90 min" },
          { name: "Skin Needling Rejuvenation", price: "$250 / 90 min" },
          { name: "Cold plasma needling", price: "$350 / 90 min" },
          { name: "Scar Refinement Needling", price: "$450 / 90 min" },
          { name: "Plasma Forehead", price: "$600 / 45 min" },
          { name: "Plasma Eye Area", price: "$750 / 45 min" },
          { name: "Plasma Chin", price: "$950 / 45 min" },
          { name: "Plasma Full Face Renewal", price: "$1800 / 5 hr" },
          { name: "Meso Therapy", price: "$450 / 120 min" },
          { name: "HIFU", price: "$550 / 120 min" },
          { name: "HIFU V-Max", price: "$199 / 75 min" },
        ],
      },
    ],
  },
  {
    id: "facial",
    title: "Facial",
    blocks: [
      {
        kind: "list",
        rows: [
          {
            name: "Basic Facial",
            desc: "Gentle stretching and pressure point techniques to restore balance and promote relaxation.",
            price: "$90 / 60 min",
          },
          {
            name: "Serums Cocktail Infusion",
            desc: "A custom three-serum blend infused deep for targeted hydration, brightening and repair.",
            price: "$160 / 75 min",
          },
          {
            name: "Hollywood Facial",
            desc: "Oxygen infusion facial for an instantly refreshed, plumped and radiant glow.",
            price: "$180 / 75 min",
          },
          {
            name: "Ceya RF Facial",
            desc: "Radiofrequency treatment that gently firms and tightens for a refreshed, youthful look.",
            price: "$180 / 75 min",
          },
          {
            name: "Brightening Facial",
            desc: "Niacinamide infusion and brightening mask to even tone and boost radiance.",
            price: "$250 / 90 min",
          },
          {
            name: "Nano Algae Infusion Facial",
            desc: "Nano marine algae infusion deeply hydrates tired, dehydrated and dull-looking skin.",
            price: "$250 / 90 min",
          },
          {
            name: "Carbon Laser Facial",
            desc: "Carbon laser technology purifies pores and refines texture for a clearer glow.",
            price: "$250 / 90 min",
          },
        ],
      },
    ],
  },
  {
    id: "nails",
    title: "Nails",
    blocks: [
      {
        kind: "matrix",
        title: "Manicure",
        columns: ["Standard Colour", "Shellac"],
        rows: [
          { name: "Buff, Shape & Polish (Hands)", values: ["$12", "$20"] },
          { name: "Buff, Shape & Polish (Feet)", values: ["$16", "$24"] },
          { name: "Manicure", values: ["$20", "$28"] },
          { name: "Buff, Shape & Polish (Hands & Feet)", values: ["$28", "$40"] },
          { name: "Spa Pedicure", values: ["$28", "$36"] },
          { name: "Manicure & Spa Pedicure", values: ["$40", "$60"] },
        ],
      },
      {
        kind: "matrix",
        title: "Builder Gel",
        columns: ["Standard Colour", "Shellac"],
        rows: [
          { name: "Builder Gel Overlay (natural nails)", values: [null, "$55"] },
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
          { name: "Acrylic Infill", values: ["$28", "$36"] },
          { name: "Acrylic Full Set", values: ["$32", "$40"] },
          { name: "French Tip Infill", values: ["$40", "$48"] },
          { name: "French Tip Full Set", values: ["$44", "$52"] },
        ],
      },
      {
        kind: "matrix",
        title: "Gel Powder",
        columns: ["Standard Colour", "Shellac"],
        rows: [
          { name: "Gel Powder Infill", values: ["$32", null] },
          { name: "Gel Powder Full Set", values: ["$44", null] },
          { name: "Pink & White Powder Infill", values: ["$48", null] },
          { name: "Pink & White Powder Full Set", values: ["$64", null] },
          { name: "Acrylic Infill (Feet)", values: ["$36", "$48"] },
          { name: "Acrylic Full Set (Feet)", values: ["$48", "$60"] },
        ],
      },
      {
        kind: "compact",
        title: "Add-On",
        rows: [
          { name: "Diamontes", price: "Large $1 / Small $0.50" },
          { name: "Nail Art Design — per nail", price: "Simple $2.5 / Complex $5" },
          { name: "Nail Art Chrome Colour", price: "$2.5 per nail / $20 full set" },
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
    title: "Lashes",
    blocks: [
      {
        kind: "matrix",
        columns: ["Fullset", "Refill"],
        rows: [
          { name: "Classic", values: ["$80", "$50 / 2 weeks"] },
          { name: "Hybrid", values: ["$100", "$80"] },
          { name: "Volume", values: ["$120", "$70"] },
          { name: "Wispy Volume", values: ["$130", "$80"] },
          { name: "Wet Look Set", values: ["$130", "$80"] },
          { name: "Anime Lashes", values: ["$140", "$85"] },
          { name: "Fox Eye Set", values: ["$130", "$80"] },
          { name: "Mega Volume", values: ["$150", "$90"] },
          { name: "Lash Lift", values: ["$80", null] },
          { name: "Lash Lift + Tint", values: ["$100", null] },
        ],
      },
      {
        kind: "compact",
        title: "Add-On",
        rows: [
          { name: "Lash Bath", price: "$10" },
          { name: "Colored Lashes", price: "$15" },
          { name: "Colored Lashes", price: "$20" },
          { name: "Lash Removal", price: "$20" },
          { name: "Eyebrow Tint", price: "$20" },
        ],
      },
    ],
  },
  {
    id: "waxing",
    title: "Waxing",
    blocks: [
      {
        kind: "compact",
        title: "Face Waxing",
        rows: [
          { name: "Eyebrows", price: "$15 / 15 min" },
          { name: "Lip", price: "$15 / 15 min" },
          { name: "Chin", price: "$15 / 15 min" },
          { name: "Sides of Face", price: "$20 / 15 min" },
          { name: "Full Face", price: "$40 / 30 min" },
        ],
      },
      {
        kind: "compact",
        title: "Upper Body",
        rows: [
          { name: "Stomach Strip", price: "$10 / 15 min" },
          { name: "Under Arms", price: "$20 / 15 min" },
          { name: "Full Stomach", price: "$25 / 25 min" },
          { name: "Lower Back", price: "$25 / 30 min" },
          { name: "Half Arms", price: "$30 / 30 min" },
          { name: "Chest", price: "$40 / 30 min" },
          { name: "Full Back", price: "$45 / 35 min" },
          { name: "Full Arms", price: "$50 / 45 min" },
        ],
      },
      {
        kind: "compact",
        title: "Lower Body",
        rows: [
          { name: "Feet & Toes", price: "$15 / 15 min" },
          { name: "Lower Legs", price: "$40 / 30 min" },
          { name: "Half Legs", price: "$40 / 30 min" },
          { name: "Upper Legs", price: "$45 / 30 min" },
          { name: "Full Legs", price: "$60 / 45 min" },
        ],
      },
      {
        kind: "compact",
        title: "Bikini Body",
        rows: [
          { name: "Bikini Line", price: "$30 / 15 min" },
          { name: "Extended Bikini", price: "$40 / 15 min" },
          { name: "Maintenance Brazilian (4–6 Weeks)", price: "$50 / 15 min" },
          { name: "Brazilian", price: "$60 / 15 min" },
        ],
      },
      {
        kind: "compact",
        title: "Men's Body",
        rows: [
          { name: "Chest", price: "$45 / 50 min" },
          { name: "Full Arms", price: "$50 / 50 min" },
          { name: "Full Legs", price: "$50 / 50 min" },
          { name: "Back & Shoulders", price: "$70 / 60 min" },
        ],
      },
    ],
  },
  {
    id: "sauna-ritual",
    title: "Sauna Ritual",
    blocks: [
      {
        kind: "note",
        title: "$30 / 15 min",
        text: "A warm sauna ritual to gently open the senses, ease the body and prepare you for the journey ahead.",
      },
    ],
  },
];

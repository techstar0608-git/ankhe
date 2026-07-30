/**
 * Price list sections — each one is the artwork exported from Figma (node 229:2),
 * not re-built HTML. Order follows the Figma frame top to bottom.
 */
export type Section = {
  id: string;
  title: string;
  src: string;
};

export const sections: Section[] = [
  { id: "headspa", title: "Price List — Headspa", src: "/sections/01-headspa.jpg" },
  { id: "body-rituals", title: "Body Rituals", src: "/sections/02-body-rituals.jpg" },
  { id: "skin-treatments", title: "Skin Treatments", src: "/sections/03-skin-treatments.jpg" },
  { id: "facial", title: "Facial", src: "/sections/04-facial.jpg" },
  { id: "nails", title: "Nails", src: "/sections/05-nails.jpg" },
  { id: "lashes", title: "Lashes", src: "/sections/06-lashes.jpg" },
  { id: "waxing", title: "Waxing", src: "/sections/07-waxing.jpg" },
  { id: "sauna", title: "Sauna Ritual", src: "/sections/08-sauna.jpg" },
];

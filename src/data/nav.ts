/**
 * Site menu, shared by the header menu (|||) and the footer "Useful Links".
 * `href: null` = page not built yet; shown as plain text, not clickable.
 */
export type NavLink = { label: string; href: string | null };

export const siteLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: null },
  { label: "Services", href: "/" },
  { label: "Promotion", href: "/promotions" },
];

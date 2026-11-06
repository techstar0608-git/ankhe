/**
 * Shared contact + booking links. When the Fresha booking URL is supplied,
 * set BOOKING_URL and every "book / enquire" CTA switches over automatically.
 */
export const PHONE_DISPLAY = "+61 448 289 368";
export const PHONE_HREF = "tel:+61448289368";

/** Fresha booking link supplied by the client. */
export const BOOKING_URL: string | null = "https://l.fresha.com/3bh1hmdbw";

export const bookingHref = BOOKING_URL ?? PHONE_HREF;



export const EMAIL = "contact@ankhewellness.com.au";
export const MAPS_URL = "https://maps.app.goo.gl/Dcwnd7rhSibvuixe8";


/** Official social profiles. */
export const FACEBOOK_URL = "https://www.facebook.com/ankhewellness";
export const INSTAGRAM_URL = "https://www.instagram.com/ankhewellness2166/";

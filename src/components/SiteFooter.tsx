import Image from "next/image";
import Link from "next/link";
import { FACEBOOK_URL, INSTAGRAM_URL, SITE_URL, BOOKING_URL, EMAIL, MAPS_URL, PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

/** Footer from Figma node 45:302 ("Group 82") — shared by both pages. */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Image
        className="footer-hours"
        src="/footer/hours.webp"
        alt="An Khê opening hours: Monday – Sunday, 9:00am – 9:00pm. www.ankhewellness.com.au"
        width={1000}
        height={1000}
        sizes="(max-width: 510px) 100vw, 510px"
      />

      <div className="footer-panel">
        <Image className="footer-bg" src="/footer/zen-stones.webp" alt="" fill sizes="(max-width: 510px) 100vw, 510px" />

        <div className="footer-content">
          <h2 className="footer-title">Connect With An Khê</h2>
          <div className="footer-rule" aria-hidden="true" />

          <div className="footer-social">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="An Khê on Facebook">
              <Image src="/footer/facebook.svg" alt="" width={28} height={28} />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="An Khê on Instagram">
              <Image src="/footer/instagram.svg" alt="" width={28} height={28} />
            </a>
            {BOOKING_URL && (
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" aria-label="Book on Fresha">
                <Image src="/footer/fresha.svg" alt="" width={95} height={25} />
              </a>
            )}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label="Open in Google Maps">
              <Image src="/footer/map.webp" alt="" width={35} height={35} />
            </a>
          </div>

          <address className="footer-contact">
            <p>
              <strong>Cabramatta</strong>
              <br />
              Shop 6-7/104 John St, Cabramatta NSW 2166
            </p>
            <a href={`mailto:${EMAIL}`}>
              <Image src="/footer/mail.svg" alt="" width={28} height={28} />
              {EMAIL}
            </a>
            <a href={PHONE_HREF}>
              <Image src="/footer/call.svg" alt="" width={28} height={28} />
              {PHONE_DISPLAY}
            </a>
          </address>

          <nav className="footer-links" aria-label="Useful links">
            <h3>Useful Links</h3>
            <div className="footer-rule left" aria-hidden="true" />
            {/* TODO: confirm Home / About Us URLs on the main website. */}
            <a href={SITE_URL}>Home</a>
            <a href={SITE_URL}>About Us</a>
            <Link href="/">Services</Link>
            <Link href="/promotions">Promotion</Link>
          </nav>
        </div>

        <p className="footer-copy">© 2026 Copyright Designed by S.T.A.R Marketing &amp; Tech</p>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { sections } from "@/data/sections";

export default function PriceListPage() {
  return (
    <main className="page">
      {/* Header mirrors Figma node 233:175 — hamburger menu intentionally hidden. */}
      <header className="masthead">
        <Image
          className="brand"
          src="/logo-ankhe.svg"
          alt="An Khê — Where calm flows naturally"
          width={189}
          height={45}
          priority
        />
        <Image
          className="search"
          src="/icon-search.svg"
          alt=""
          width={20}
          height={19}
          aria-hidden="true"
        />
      </header>

      <div className="sheets">
        {sections.map((s, i) => (
          <section className="sheet" id={s.id} key={s.id}>
            <Image
              src={s.src}
              alt={s.title}
              width={1500}
              height={2123}
              sizes="(max-width: 420px) 100vw, 420px"
              priority={i === 0}
            />
          </section>
        ))}
      </div>

      <div className="cta">
        <a className="pill" href="#headspa">
          BEGIN YOUR JOURNEY
        </a>
      </div>

      {/* Figma nodes 229:97 → 229:122 */}
      <footer className="foot">
        <div className="foot-inner">
          <h2>More information</h2>

          <nav className="foot-links" aria-label="More information">
            <a href="#headspa">Search</a>
            <a href="#headspa">Book an appointment</a>
            <a href="#headspa">FAQ</a>
          </nav>

          <p className="foot-tagline">
            Welcome to An Khê Wellness.
            <br />
            Where calm flows naturally.
          </p>

          <address className="foot-contact">
            <div>6-7 / 104 John St Cabramatta NSW 2166</div>
            <div>
              <a href="https://wa.me/84448289368">(+84) 448 289 368 (WhatsApp)</a>
            </div>
            <div>
              <a href="mailto:ankhe.wellness@gmail.com">ankhe.wellness@gmail.com</a>
            </div>
          </address>

          {/* Social row + WhatsApp badge share one centre line in Figma (238:255 / 238:260) */}
          <div className="foot-social-row">
            <Image
              className="foot-social"
              src="/social.svg"
              alt="Facebook, Instagram"
              width={72}
              height={27}
            />
            <a
              className="wa-badge"
              href="https://wa.me/84448289368"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat với An Khê Wellness trên WhatsApp"
            >
              {/* Animated GIF is the image fill of Figma node 238:260 — used as-is. */}
              <Image
                src="/whatsapp.gif"
                alt=""
                width={138}
                height={138}
                unoptimized
                aria-hidden="true"
              />
            </a>
          </div>

          <p className="copy">
            © 2026 Copyright Designed by S.T.A.R Marketing &amp; Tech
          </p>
        </div>
      </footer>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import SectionNav from "@/components/SectionNav";
import SiteFooter from "@/components/SiteFooter";
import { promotions } from "@/data/promotions";
import { BOOKING_URL, bookingHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Special Offers — An Khê Wellness",
  description:
    "An Khê Wellness special offers in Cabramatta: Calm Together, Gift Cards and Summer Glow & Flow.",
};

const external = BOOKING_URL ? { target: "_blank", rel: "noopener noreferrer" } : {};

const lines = (parts: string[]) =>
  parts.map((line, i) => (
    <span key={i}>
      {i > 0 && <br />}
      {line}
    </span>
  ));

export default function PromotionsPage() {
  return (
    <main className="app">
      <Masthead />

      <div className="pr-hero">
        <div className="pr-kicker">Thoughtful treats · More moments of calm</div>
        <h1>Special Offers</h1>
        <p>A little extra care, whether you’re treating yourself or sharing the moment with someone special.</p>
      </div>

      <SectionNav
        variant="tabs"
        label="Jump to promotion"
        links={promotions.map((p) => ({ id: p.id, label: p.nav }))}
      />

      {promotions.map((p, i) => (
        <section key={p.id} id={p.id} className="promo" aria-labelledby={`${p.id}-title`}>
          <div className="promo-kicker">{p.kicker}</div>
          <div className="promo-head">
            <h2 id={`${p.id}-title`} className={p.title.length > 1 ? "two-line" : undefined}>
              {lines(p.title)}
            </h2>
            <span className="promo-num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="promo-lead">{p.lead}</p>

          <div className="promo-photo" style={{ height: p.image.displayHeight }}>
            <Image
              src={p.image.src}
              alt={p.image.alt}
              fill
              sizes="(max-width: 510px) 90vw, 466px"
              priority={i === 0}
            />
          </div>

          <h3 className="promo-heading">{p.heading}</h3>
          {p.supporting && <p className="promo-supporting">{p.supporting}</p>}

          {p.tiers && (
            <ul className="tier-grid" aria-label={`${p.title.join(" ")} discounts`}>
              {p.tiers.map((t) => (
                <li className={`tier${t.featured ? " is-featured" : ""}`} key={t.label}>
                  <span className="tier-label">{t.label}</span>
                  <strong className="tier-value">{t.value}</strong>
                </li>
              ))}
            </ul>
          )}

          {p.fineprint && <p className="fineprint">{p.fineprint}</p>}

          {p.rituals && (
            <div className="rituals">
              {p.rituals.map((r) => (
                <article className={`ritual${r.featured ? " featured" : ""}`} key={r.name}>
                  <div className="ritual-top">
                    <div>
                      <h4>{r.name}</h4>
                      <span className="sub">{r.sub}</span>
                    </div>
                    <div className="ritual-price">
                      <strong>{r.price}</strong>
                      <small>{r.duration}</small>
                    </div>
                  </div>
                  <ul className="includes">
                    {r.includes.map((inc) => (
                      <li key={inc}>{inc}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}

          {p.serumNote && (
            <aside className="serum-note">
              <strong>{p.serumNote.title}</strong>
              <p>{p.serumNote.text}</p>
            </aside>
          )}

          <a className="button" href={bookingHref} {...external}>
            {p.cta}
          </a>
        </section>
      ))}

      <SiteFooter />

      <div className="bottom-bar" aria-label="Quick actions">
        <Link href="/">Price List</Link>
        <a href={bookingHref} className="primary" {...external}>
          {BOOKING_URL ? "Book Now →" : "Call to Book →"}
        </a>
      </div>
    </main>
  );
}

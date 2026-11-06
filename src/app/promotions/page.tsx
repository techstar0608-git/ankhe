import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import Masthead from "@/components/Masthead";
import SectionNav from "@/components/SectionNav";
import { promotions } from "@/data/promotions";
import { BOOKING_URL, bookingHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Special Offers — An Khê Wellness",
  description:
    "An Khê Wellness special offers in Cabramatta: Calm Together, Gift Cards and Summer Glow & Flow.",
};

const external = BOOKING_URL ? { target: "_blank", rel: "noopener noreferrer" } : {};

export default function PromotionsPage() {
  return (
    <main className="app">
      <Masthead />

      <div className="hero">
        <div className="eyebrow">Thoughtful treats · Moments of calm</div>
        <h1>Special Offers</h1>
        <p>A little extra care, whether you are treating yourself or sharing a moment with someone special.</p>
        <div className="ornament" aria-hidden="true" />
      </div>

      <SectionNav label="Jump to promotion" links={promotions.map((p) => ({ id: p.id, label: p.nav }))} />

      {promotions.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`promo${p.alt ? " promo-alt" : ""}`}
          aria-labelledby={`${p.id}-title`}
        >
          <div className="section-head">
            <div>
              <div className="eyebrow">{p.kicker}</div>
              <h2 id={`${p.id}-title`}>
                {p.title.map((line, li) => (
                  <span key={li}>
                    {li > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <span className="number" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="lead">{p.lead}</p>

          <div className="promo-photo">
            <Image
              src={p.image.src}
              alt={p.image.alt}
              width={p.image.width}
              height={p.image.height}
              sizes="(max-width: 510px) 100vw, 466px"
              style={{ objectPosition: p.image.position }}
              priority={i === 0}
            />
          </div>

          <p className="eyebrow-line">{p.eyebrow}</p>
          {p.supporting && <p className="supporting">{p.supporting}</p>}

          {p.tiers && (
            <ul className="tier-grid" aria-label={`${p.nav} discounts`}>
              {p.tiers.map((t) => (
                <li className={`tier${t.featured ? " is-featured" : ""}`} key={t.label}>
                  <span className="tier-label">{t.label}</span>
                  <strong className="tier-number">{t.value}</strong>
                </li>
              ))}
            </ul>
          )}

          {p.rituals && (
            <>
              <div className="rituals">
                {p.rituals.map((r) => (
                  <article className={`ritual${r.featured ? " featured" : ""}`} key={r.name}>
                    <div className="ritual-top">
                      <div>
                        <h3>{r.name}</h3>
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
              <aside className="serum-note">
                <div className="serum-icon" aria-hidden="true">✧</div>
                <div>
                  <strong>Synergie Skin</strong>
                  <p>Both rituals include a Glow Facial with Synergie SuperSerum+.</p>
                </div>
              </aside>
            </>
          )}

          {p.fineprint && <p className="fineprint">{p.fineprint}</p>}

          <a className="button" href={bookingHref} {...external}>
            <span>{p.cta}</span>
            <span className="arrow" aria-hidden="true">→</span>
          </a>

          {p.note && <p className="small-note">{p.note}</p>}
          {p.id === "summer-glow" && (
            <p className="small-note">
              Planning a group visit? <a href="#calm-together">Explore Calm Together</a>. Please confirm
              current offers and availability before booking.
            </p>
          )}
        </section>
      ))}

      <SiteFooter />

      <div className="bottom-bar">
        <Link href="/">Price List</Link>
        <a href={bookingHref} className="primary" {...external}>
          {BOOKING_URL ? "Book Now →" : "Call to Book →"}
        </a>
      </div>
    </main>
  );
}

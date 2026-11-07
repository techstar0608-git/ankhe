import Image from "next/image";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import SectionNav from "@/components/SectionNav";
import SiteFooter from "@/components/SiteFooter";
import { serviceSections, type Category } from "@/data/priceList";

function CategoryBlock({ category }: { category: Category }) {
  if (category.kind === "list") {
    return (
      <div className={`category${category.midPrice ? " mid-price" : ""}`}>
        {category.title && <h3>{category.title}</h3>}
        {category.items.map((item) => (
          <div className={`menu-item${item.desc ? " has-desc" : ""}`} key={item.name}>
            <div className="item-name">
              {item.name}
              {item.signature && <span aria-label="Signature"> ♕</span>}
            </div>
            <div className="item-value">
              <strong>{item.price}</strong>
              {item.meta && <small>{item.meta}</small>}
            </div>
            {item.desc && <p className="desc">{item.desc}</p>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="category">
      <h3>{category.title}</h3>
      <div className="price-legend" aria-hidden="true">
        <span />
        <span>{category.columns[0]}</span>
        <span>{category.columns[1]}</span>
      </div>
      {category.rows.map((row) => (
        <div className="menu-item multi" key={row.name}>
          <div className="item-name">{row.name}</div>
          {row.values.map((v, i) => (
            <div className="price" key={i}>
              {v ?? <span aria-label="not available">—</span>}
              {i === 1 && row.note && <small>{row.note}</small>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const total = String(serviceSections.length).padStart(2, "0");

export default function PriceListPage() {
  return (
    <main className="app">
      <Masthead />

      <div className="pl-hero">
        <div className="pl-kicker">Our Services &amp; Pricing</div>
        <h1>Price List</h1>
        <p className="pl-intro">Discover your moment of calm, from signature Headspa rituals to beauty treatments.</p>
        <p className="pl-browse">Browse the menu below</p>
      </div>

      <SectionNav
        variant="pills"
        label="Service categories"
        links={serviceSections.map((s) => ({ id: s.id, label: [s.nav] }))}
      />

      {serviceSections.map((s, i) => (
        <section className="service-section" id={s.id} key={s.id} aria-labelledby={`${s.id}-title`}>
          <div className="section-meta">
            <span>An Khê · Price List</span>
            <span className="count">
              {String(i + 1).padStart(2, "0")} / {total}
            </span>
          </div>
          <h2 id={`${s.id}-title`}>{s.title}</h2>
          <p className="section-sub">{s.subtitle}</p>
          <div className="photo">
            <Image
              src={s.image}
              alt={`${s.title} at An Khê Wellness`}
              fill
              sizes="(max-width: 510px) 90vw, 460px"
              style={{
                objectPosition: s.imagePosition,
                transform: s.imageZoom ? `scale(${s.imageZoom.scale})` : undefined,
                transformOrigin: s.imageZoom?.origin,
              }}
              priority={i === 0}
            />
          </div>
          {s.categories.map((c, ci) => (
            <CategoryBlock category={c} key={ci} />
          ))}
        </section>
      ))}

      <div className="offer-wrap">
        <aside className="offer-banner">
          <div className="offer-kicker">A little something extra</div>
          <h2>Special Offers</h2>
          <p>Explore our current promotions and share a little more calm.</p>
          <Link href="/promotions" className="offer-cta">
            View Special Offers&nbsp;&nbsp;→
          </Link>
        </aside>
      </div>

      <SiteFooter />

      <div className="bottom-bar" aria-label="Quick actions">
        <Link href="/promotions">Special Offers</Link>
        <a href="#headspa" className="primary">
          Explore Services ↑
        </a>
      </div>
    </main>
  );
}

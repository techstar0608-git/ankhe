import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import Masthead from "@/components/Masthead";
import SectionNav from "@/components/SectionNav";
import { serviceSections, type Category } from "@/data/priceList";


function CategoryBlock({ category }: { category: Category }) {
  if (category.kind === "list") {
    return (
      <div className="category">
        {category.title && <h3>{category.title}</h3>}
        {category.items.map((item) => (
          <div className="menu-item" key={item.name}>
            <div className="item-top">
              <div className="item-name">
                {item.name}
                {item.signature && (
                  <span className="signature" aria-label="Signature">
                    {" "}♕
                  </span>
                )}
              </div>
              <div className="item-value">
                <strong>{item.price}</strong>
                {item.meta && <small>{item.meta}</small>}
              </div>
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
      {category.columns ? (
        <div className="price-legend" aria-hidden="true">
          <span>Service</span>
          <span>{category.columns[0]}</span>
          <span>{category.columns[1]}</span>
        </div>
      ) : (
        <div className="single-legend" aria-hidden="true">
          {category.singleColumnLabel}
        </div>
      )}
      {category.rows.map((row) => (
        <div className="menu-item multi" key={row.name}>
          <div className="item-name">{row.name}</div>
          {row.values.map((v, i) => (
            <div className="price" key={i}>
              {v ?? "—"}
            </div>
          ))}
          {row.desc && <p className="desc">{row.desc}</p>}
        </div>
      ))}
    </div>
  );
}

export default function PriceListPage() {
  return (
    <main className="app">
      <Masthead />

      <div className="hero">
        <div className="eyebrow">Rituals · Beauty · Restoration</div>
        <h1>Price List</h1>
        <p>Thoughtfully curated treatments for your moments of calm.</p>
      </div>

      <SectionNav
        label="Service categories"
        links={serviceSections.map((s) => ({ id: s.id, label: s.nav }))}
      />

      {serviceSections.map((s, i) => (
        <section className="service-section" id={s.id} key={s.id} aria-labelledby={`${s.id}-title`}>
          <div className="section-head">
            <div>
              <div className="eyebrow">An Khê · Wellness Menu</div>
              <h2 id={`${s.id}-title`}>{s.title}</h2>
              <p>{s.subtitle}</p>
            </div>
            <span className="number" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="photo">
            <Image
              src={s.image}
              alt={`${s.title} at An Khê Wellness`}
              fill
              sizes="(max-width: 510px) 100vw, 466px"
              priority={i === 0}
            />
          </div>
          {s.categories.map((c, ci) => (
            <CategoryBlock category={c} key={ci} />
          ))}
        </section>
      ))}

      <aside className="offer-teaser">
        <div className="eyebrow">A little something extra</div>
        <h2>Special Offers</h2>
        <p>Discover our latest promotions for moments of relaxation, together or just for you.</p>
        <Link href="/promotions">View Special Offers →</Link>
      </aside>

      <p className="note">
        Prices in AUD. Please confirm current availability and prices with our team when booking.
      </p>

      <SiteFooter />

      <div className="bottom-bar">
        <Link href="/promotions">Special Offers</Link>
        <a href="#headspa" className="primary">
          Explore Services ↑
        </a>
      </div>
    </main>
  );
}

import PriceSheet from "@/components/PriceSheet";
import { priceSections } from "@/data/priceList";

export default function PriceListPage() {
  return (
    <main className="page">
      {/* Nav/menu is intentionally omitted — this build ships the price list only. */}
      <header className="masthead">
        <div className="logo">
          An Khê
          <small>Wellness</small>
        </div>
      </header>

      <div className="hero">
        <h1>Price List</h1>
        <p>An Khê Wellness</p>
      </div>

      <nav className="index" aria-label="Sections">
        {priceSections.map((s) => (
          <a href={`#${s.id}`} key={s.id}>
            {s.title}
          </a>
        ))}
      </nav>

      <div className="sheets">
        {priceSections.map((s) => (
          <PriceSheet section={s} key={s.id} />
        ))}
      </div>

      <footer className="foot">
        <div className="rule" />
        <div>6-7 / 104 John St Cabramatta NSW 2166</div>
        <div>(+84) 448 289 368 (WhatsApp)</div>
        <div>ankhe.wellness@gmail.com</div>
        <div style={{ marginTop: 16, opacity: 0.7 }}>
          © 2026 Copyright Designed by S.T.A.R Marketing &amp; Tech
        </div>
      </footer>
    </main>
  );
}

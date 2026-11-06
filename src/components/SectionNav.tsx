"use client";

import { useEffect, useRef, useState } from "react";

type Link = { id: string; label: string[] };

/**
 * Sticky section nav. `pills` = Price List chips (swipeable, edge arrow — Figma 14:18);
 * `tabs` = Promotions buttons (Figma 1:9).
 */
export default function SectionNav({
  links,
  label,
  variant,
}: {
  links: Link[];
  label: string;
  variant: "pills" | "tabs";
}) {
  const [active, setActive] = useState(links[0]?.id ?? "");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    // Active = last section whose top has scrolled past the sticky nav (+ a little slack).
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = (navRef.current?.getBoundingClientRect().bottom ?? 0) + 40;
      let current = targets[0]?.id;
      for (const t of targets) {
        if (t.getBoundingClientRect().top <= line) current = t.id;
      }
      if (current) setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [links]);

  useEffect(() => {
    const nav = navRef.current;
    const pill = nav?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (!pill || !nav) return;
    const left = pill.offsetLeft - (nav.clientWidth - pill.clientWidth) / 2;
    nav.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <div className={`nav-shell nav-${variant}`}>
      <nav className="nav" aria-label={label} ref={navRef}>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`nav-item${l.id === active ? " is-active" : ""}`}
            aria-current={l.id === active ? "true" : undefined}
          >
            {l.label.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </a>
        ))}
      </nav>
      {variant === "pills" && (
        <span className="nav-edge" aria-hidden="true">
          ›
        </span>
      )}
    </div>
  );
}

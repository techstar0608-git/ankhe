"use client";

import { useEffect, useRef, useState } from "react";

type Link = { id: string; label: string };

/**
 * Sticky, horizontally swipeable pill nav. Highlights the section in view and
 * keeps the active pill scrolled into the visible strip.
 */
export default function SectionNav({ links, label }: { links: Link[]; label: string }) {
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
    const pill = navRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    const nav = navRef.current;
    if (!pill || !nav) return;
    const left = pill.offsetLeft - (nav.clientWidth - pill.clientWidth) / 2;
    nav.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <div className="nav-shell">
      <nav className="nav" aria-label={label} ref={navRef}>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`nav-pill${l.id === active ? " is-active" : ""}`}
            aria-current={l.id === active ? "true" : undefined}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

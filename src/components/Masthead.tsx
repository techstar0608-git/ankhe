"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteLinks } from "@/data/nav";

/** Header: logo left, menu mark right (Figma 25:2 / 25:329). The mark opens the site menu. */
export default function Masthead() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="masthead">
      <Link href="/" aria-label="An Khê Wellness — Home">
        <Image
          src="/logo-ankhe.svg"
          alt="An Khê — Where calm flows naturally"
          width={189}
          height={45}
          priority
        />
      </Link>

      <button
        type="button"
        className="menu-button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <Image src="/menu-mark.svg" alt="" width={27} height={40} />
      </button>

      {open && (
        <>
          <div className="menu-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
          <nav id="site-menu" className="site-menu" aria-label="Site menu">
            {siteLinks.map((l) =>
              l.href ? (
                <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ) : (
                <span key={l.label} aria-disabled="true">
                  {l.label}
                </span>
              ),
            )}
          </nav>
        </>
      )}
    </header>
  );
}

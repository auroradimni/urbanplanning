import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const NAV = [
    { label: t("nav.about"), href: "#rreth-nesh" },
    { label: t("nav.projects"), href: "#projektet" },
    { label: t("nav.services"), href: "#sherbimet" },
    { label: t("nav.process"), href: "#procesi" },
    { label: t("nav.contact"), href: "#kontakti" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-deep text-white">
      <div className="flex items-center justify-between px-4 py-3 sm:px-5 lg:px-10">
        <div className="flex items-center gap-6 lg:gap-10">
          <a href="#home" className="flex items-center gap-2.5">
            <img
              src="/logo-white.png"
              alt="Urban Visionary"
              className="h-9 w-auto object-contain sm:h-11"
            />
            <span className="leading-none">
              <span className="block text-[13px] font-bold tracking-tight text-white sm:text-[15px]">
                URBAN
              </span>
              <span className="block text-[9px] tracking-[0.22em] text-white/70 sm:text-[10px]">
                VISIONARY
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] tracking-[0.12em] text-white/85 transition-colors hover:text-white"
              >
                {item.label.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href="https://www.instagram.com/_urbanvisionary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @_urbanvisionary"
            className="inline-flex text-white/80 transition-colors hover:text-white"
          >
            <InstagramIcon />
          </a>

          <div className="flex items-center gap-1 text-[12px] tracking-[0.12em]">
            <button
              type="button"
              onClick={() => setLang("sq")}
              className={lang === "sq" ? "text-white" : "text-white/40 hover:text-white/70"}
              aria-pressed={lang === "sq"}
            >
              AL
            </button>
            <span className="text-white/25">|</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-white" : "text-white/40 hover:text-white/70"}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className="-mr-1 p-1 text-white lg:hidden"
            aria-label={open ? t("nav.close") : t("nav.open")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-white/10 px-4 pb-4 sm:px-5 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-4 text-[13px] tracking-[0.12em] text-white/85 last:border-b-0"
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

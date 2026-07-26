type ContactItem = { text: string; href?: string };

const COLUMNS: { label: string; items: ContactItem[] }[] = [
  {
    label: "SHKRUAJ",
    items: [
      {
        text: "contact@urbanvisionary.com",
        href: "mailto:contact@urbanvisionary.com",
      },
    ],
  },
  {
    label: "VIZITO",
    items: [{ text: "Rr. e Kavajës" }, { text: "Tiranë, Shqipëri" }],
  },
  {
    label: "NA NDIQ",
    items: [
      {
        text: "@_urbanvisionary",
        href: "https://www.instagram.com/_urbanvisionary",
      },
    ],
  },
];

export default function Contact() {
  return (
    <section id="kontakti" className="bg-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_2fr] lg:gap-14 lg:px-10 lg:py-24">
        <h2 className="text-[clamp(26px,5vw,44px)] font-light leading-[1.15] tracking-tight">
          NA
          <br />
          <span className="font-bold">KONTAKTONI</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
          {COLUMNS.map((col) => (
            <div key={col.label}>
              <div className="mb-6">
                <span className="text-[11px] tracking-[0.25em] text-white/70">
                  {col.label}
                </span>
              </div>
              <div className="space-y-2">
                {col.items.map((item) =>
                  item.href ? (
                    <a
                      key={item.text}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block break-words text-[14px] text-white/80 transition-colors hover:text-white"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p
                      key={item.text}
                      className="break-words text-[14px] text-white/80"
                    >
                      {item.text}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-white/10 px-5 py-7 text-center sm:flex-row sm:px-6 sm:py-8 sm:text-left lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo-white.png"
            alt="Urban Visionary"
            className="h-8 w-auto object-contain"
          />
          <span className="text-[11px] tracking-[0.25em] text-white/70">
            URBAN VISIONARY
          </span>
        </a>
        <p className="text-[12px] text-white/40">
          © {new Date().getFullYear()} UrbanVisionary. Të gjitha të drejtat e
          rezervuara.
        </p>
      </div>
    </section>
  );
}

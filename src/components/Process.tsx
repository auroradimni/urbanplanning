import { useLanguage } from "../i18n/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const STEPS = [
    {
      n: "01",
      title: t("process.01.title"),
      desc: t("process.01.desc"),
    },
    {
      n: "02",
      title: t("process.02.title"),
      desc: t("process.02.desc"),
    },
    {
      n: "03",
      title: t("process.03.title"),
      desc: t("process.03.desc"),
    },
    {
      n: "04",
      title: t("process.04.title"),
      desc: t("process.04.desc"),
    },
  ];

  return (
    <section id="procesi" className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-[12px] tracking-[0.25em] text-ink">
            {t("process.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4">
          {STEPS.map(({ n, title, desc }) => (
            <div key={n} className="border-t border-line pt-5 sm:pt-6">
              <p className="mb-4 text-[11px] tracking-[0.25em] text-stone sm:mb-5">
                {n}
              </p>
              <h3 className="mb-2 text-[15px] font-medium tracking-tight text-ink sm:mb-3">
                {title}
              </h3>
              <p className="text-[13px] leading-relaxed text-ink/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

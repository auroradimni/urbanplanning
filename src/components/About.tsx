import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="rreth-nesh" className="bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-paper sm:aspect-[4/3]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/media/hero-poster.jpg"
          >
            <source src="/media/mixed-use.mp4" type="video/mp4" />
          </video>
        </div>

        <div>
          <h2 className="text-[clamp(26px,5vw,46px)] font-light tracking-tight text-ink">
            {t("about.title.a")}{" "}
            <span className="font-bold">{t("about.title.b")}</span>
          </h2>
          <p className="mt-6 max-w-lg text-[14px] leading-[1.85] text-ink/70 sm:mt-8 sm:text-justify">
            {t("about.p1")}
          </p>
          <p className="mt-5 max-w-lg text-[14px] leading-[1.85] text-ink/70 sm:text-justify">
            {t("about.p2")}
          </p>

          <a
            href="#projektet"
            className="mt-8 inline-block text-[12px] tracking-[0.25em] text-ink transition-opacity hover:opacity-70 sm:mt-10"
          >
            {t("about.more")}
          </a>
        </div>
      </div>
    </section>
  );
}

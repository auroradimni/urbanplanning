import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative bg-deep">
      <div className="relative h-[calc(100svh-64px)] min-h-[440px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero-poster.jpg"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-deep/60" aria-hidden="true" />

        <div className="absolute inset-0 z-10 flex items-center justify-center px-5">
          <div className="w-full max-w-2xl text-center">
            <h1 className="text-[clamp(24px,7vw,68px)] font-light leading-tight tracking-[0.14em] text-white sm:tracking-[0.2em]">
              URBAN
              <span className="font-semibold sm:ml-[0.2em]">
                <br className="sm:hidden" />
                VISIONARY
              </span>
            </h1>

            <p className="mt-5 text-[10px] leading-relaxed tracking-[0.2em] text-white/75 sm:text-[12px] sm:tracking-[0.28em]">
              {t("hero.tagline")}
            </p>

            <p className="mt-8 border border-white/25 bg-deep/40 px-5 py-4 text-[15px] font-light italic leading-relaxed text-white sm:mt-10 sm:px-6 sm:py-5 sm:text-[22px]">
              {t("hero.slogan")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

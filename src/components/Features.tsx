import { Lightbulb, Home, PenTool, Eye, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const FEATURES = [
    {
      icon: Lightbulb,
      title: t("services.urban.title"),
      desc: t("services.urban.desc"),
    },
    {
      icon: Home,
      title: t("services.arch.title"),
      desc: t("services.arch.desc"),
    },
    {
      icon: PenTool,
      title: t("services.interior.title"),
      desc: t("services.interior.desc"),
    },
    {
      icon: Eye,
      title: t("services.viz.title"),
      desc: t("services.viz.desc"),
    },
    {
      icon: MessageCircle,
      title: t("services.consult.title"),
      desc: t("services.consult.desc"),
    },
  ];

  return (
    <section id="sherbimet" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-[12px] tracking-[0.25em] text-ink">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-5">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <Icon size={24} strokeWidth={1.1} className="mb-4 text-ink sm:mb-6" />
              <h3 className="mb-2 text-[12px] font-medium tracking-[0.12em] text-ink sm:mb-3">
                {title.toUpperCase()}
              </h3>
              <p className="text-[13px] leading-relaxed text-ink/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

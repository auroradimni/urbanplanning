import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "sq" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const translations: Record<Lang, Record<string, string>> = {
  sq: {
    "nav.about": "Rreth Nesh",
    "nav.projects": "Projektet",
    "nav.services": "Shërbimet",
    "nav.process": "Procesi",
    "nav.contact": "Kontakti",
    "nav.open": "Hap menynë",
    "nav.close": "Mbyll menynë",
    "hero.tagline": "PLANIFIKIM URBAN / ARKITEKTURË / DIZAJN",
    "hero.slogan": "Mënyra më e mirë për të parashikuar të ardhmen është ta projektosh atë.",
    "about.title.a": "RRETH",
    "about.title.b": "NESH",
    "about.p1":
      "UrbanVisionary është një studio arkitekture dhe planifikimi urban e përkushtuar për të krijuar hapësira që përmirësojnë jetën e njerëzve dhe formësojnë qytetet e së ardhmes. Me ekipin tonë të arkitektëve dhe planifikuesve synojmë të krijojmë hapësira të qëndrueshme, të menduara me kujdes dhe të përshtatura për çdo kontekst urban.",
    "about.p2":
      "Çdo projekt është një bashkëpunim — nga analiza e territorit, te modelimi 3D dhe ndjekja e zbatimit deri në përfundim.",
    "about.more": "MË SHUMË",
    "projects.title": "PROJEKTET",
    "projects.more": "MË SHUMË",
    "projects.tapAgain": "PREK PËRSËRI PËR DETAJE",
    "projects.label": "PROJEKT",
    "services.title": "SHËRBIMET",
    "services.urban.title": "Planifikim Urban",
    "services.urban.desc": "Zhvillojmë ide që nxisin komunitete dhe qëndrueshmëri.",
    "services.arch.title": "Arkitekturë",
    "services.arch.desc": "Dizajn bashkëkohor i personalizuar sipas nevojës suaj.",
    "services.interior.title": "Dizajn i Brendshëm",
    "services.interior.desc": "Hapësira funksionale dhe estetike deri në detajin e fundit.",
    "services.viz.title": "Vizualizime 3D",
    "services.viz.desc": "Pamje realiste për të parë idenë tuaj para se të ndërtohet.",
    "services.consult.title": "Konsulencë",
    "services.consult.desc": "Udhëzim profesional në çdo hap të projektit.",
    "process.title": "PROCESI",
    "process.01.title": "Konsultimi",
    "process.01.desc": "Dëgjojmë idetë tuaja dhe analizojmë nevojat.",
    "process.02.title": "Konceptimi",
    "process.02.desc": "Krijojmë konceptin dhe zhvillojmë zgjidhjen më të mirë.",
    "process.03.title": "Projektimi",
    "process.03.desc": "Punojmë vizatimet dhe detajet teknike me precizion.",
    "process.04.title": "Realizimi",
    "process.04.desc": "Ndjekim zbatimin për të garantuar cilësi në çdo hap.",
    "contact.title.a": "NA",
    "contact.title.b": "KONTAKTONI",
    "contact.write": "SHKRUAJ",
    "contact.visit": "VIZITO",
    "contact.follow": "NA NDIQ",
    "contact.city": "Tiranë, Shqipëri",
    "contact.rights": "Të gjitha të drejtat e rezervuara.",
  },
  en: {
    "nav.about": "About Us",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "hero.tagline": "URBAN PLANNING / ARCHITECTURE / DESIGN",
    "hero.slogan": "The best way to predict the future is to design it.",
    "about.title.a": "ABOUT",
    "about.title.b": "US",
    "about.p1":
      "UrbanVisionary is an architecture and urban planning studio dedicated to creating spaces that improve people’s lives and shape the cities of the future. With our team of architects and planners, we aim to create sustainable spaces that are carefully considered and tailored to every urban context.",
    "about.p2":
      "Every project is a collaboration — from site analysis and 3D modeling to following implementation through to completion.",
    "about.more": "LEARN MORE",
    "projects.title": "PROJECTS",
    "projects.more": "MORE",
    "projects.tapAgain": "TAP AGAIN FOR DETAILS",
    "projects.label": "PROJECT",
    "services.title": "SERVICES",
    "services.urban.title": "Urban Planning",
    "services.urban.desc": "We develop ideas that foster community and sustainability.",
    "services.arch.title": "Architecture",
    "services.arch.desc": "Contemporary design tailored to your needs.",
    "services.interior.title": "Interior Design",
    "services.interior.desc": "Functional and aesthetic spaces down to the last detail.",
    "services.viz.title": "3D Visualization",
    "services.viz.desc": "Realistic views to see your idea before it is built.",
    "services.consult.title": "Consulting",
    "services.consult.desc": "Professional guidance at every step of the project.",
    "process.title": "PROCESS",
    "process.01.title": "Consultation",
    "process.01.desc": "We listen to your ideas and analyze your needs.",
    "process.02.title": "Concept",
    "process.02.desc": "We create the concept and develop the best solution.",
    "process.03.title": "Design",
    "process.03.desc": "We prepare drawings and technical details with precision.",
    "process.04.title": "Delivery",
    "process.04.desc": "We follow implementation to ensure quality at every step.",
    "contact.title.a": "GET IN",
    "contact.title.b": "TOUCH",
    "contact.write": "WRITE",
    "contact.visit": "VISIT",
    "contact.follow": "FOLLOW",
    "contact.city": "Tirana, Albania",
    "contact.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("uv-lang");
    return saved === "en" || saved === "sq" ? saved : "sq";
  });

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem("uv-lang", next);
  };

  const toggleLang = () => setLang(lang === "sq" ? "en" : "sq");

  useEffect(() => {
    document.documentElement.lang = lang === "sq" ? "sq" : "en";
  }, [lang]);

  const t = (key: string) => translations[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

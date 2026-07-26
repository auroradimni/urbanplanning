import { Lightbulb, Home, PenTool, Eye, MessageCircle } from "lucide-react";

const FEATURES = [
  {
    icon: Lightbulb,
    title: "Planifikim Urban",
    desc: "Zhvillojmë ide që nxisin komunitete dhe qëndrueshmëri.",
  },
  {
    icon: Home,
    title: "Arkitekturë",
    desc: "Dizajn bashkëkohor i personalizuar sipas nevojës suaj.",
  },
  {
    icon: PenTool,
    title: "Dizajn i Brendshëm",
    desc: "Hapësira funksionale dhe estetike deri në detajin e fundit.",
  },
  {
    icon: Eye,
    title: "Vizualizime 3D",
    desc: "Pamje realiste për të parë idenë tuaj para se të ndërtohet.",
  },
  {
    icon: MessageCircle,
    title: "Konsulencë",
    desc: "Udhëzim profesional në çdo hap të projektit.",
  },
];

export default function Features() {
  return (
    <section id="sherbimet" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-[12px] tracking-[0.25em] text-ink">SHËRBIMET</h2>
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

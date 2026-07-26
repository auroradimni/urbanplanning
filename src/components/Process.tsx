const STEPS = [
  {
    n: "01",
    title: "Konsultimi",
    desc: "Dëgjojmë idetë tuaja dhe analizojmë nevojat.",
  },
  {
    n: "02",
    title: "Konceptimi",
    desc: "Krijojmë konceptin dhe zhvillojmë zgjidhjen më të mirë.",
  },
  {
    n: "03",
    title: "Projektimi",
    desc: "Punojmë vizatimet dhe detajet teknike me precizion.",
  },
  {
    n: "04",
    title: "Realizimi",
    desc: "Ndjekim zbatimin për të garantuar cilësi në çdo hap.",
  },
];

export default function Process() {
  return (
    <section id="procesi" className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-[12px] tracking-[0.25em] text-ink">PROCESI</h2>
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

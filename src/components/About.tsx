export default function About() {
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
            RRETH <span className="font-bold">NESH</span>
          </h2>
          <p className="mt-6 max-w-lg text-[14px] leading-[1.85] text-ink/70 sm:mt-8 sm:text-justify">
            UrbanVisionary është një studio arkitekture dhe planifikimi urban e
            përkushtuar për të krijuar hapësira që përmirësojnë jetën e njerëzve
            dhe formësojnë qytetet e së ardhmes. Me ekipin tonë të arkitektëve
            dhe planifikuesve synojmë të krijojmë hapësira të qëndrueshme, të
            menduara me kujdes dhe të përshtatura për çdo kontekst urban.
          </p>
          <p className="mt-5 max-w-lg text-[14px] leading-[1.85] text-ink/70 sm:text-justify">
            Çdo projekt është një bashkëpunim — nga analiza e territorit, te
            modelimi 3D dhe ndjekja e zbatimit deri në përfundim.
          </p>

          <a
            href="#projektet"
            className="mt-8 inline-block text-[12px] tracking-[0.25em] text-ink transition-opacity hover:opacity-70 sm:mt-10"
          >
            MË SHUMË
          </a>
        </div>
      </div>
    </section>
  );
}

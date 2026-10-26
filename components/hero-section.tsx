import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

function ScrollCTA({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-[0.375rem] text-sm font-semibold transition-all duration-200 ${
        variant === "primary"
          ? "bg-[#B8F34A] text-[#090B0A] hover:bg-[#8fc435] hover:gap-3"
          : "border border-[#2E382E] text-[#F2F4EF] hover:border-[#B8F34A] hover:text-[#B8F34A]"
      }`}
    >
      {children}
      {variant === "primary" && <ArrowRight size={16} />}
    </a>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-detailing-studio.jpg"
          alt="42Torque Detail Lab stüdyosunda tavan hegzagon LED aydınlatması altında kusursuz detaylandırılmış süper spor araç"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090B0A] via-[#090B0A]/85 to-[#090B0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B0A] via-transparent to-[#090B0A]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-[72px]">
        <div className="container-site w-full py-20 lg:py-32">
          <div className="max-w-2xl">
            {/* Label */}
            <div className="section-label mb-6 flex items-center gap-3 animate-fade-in-up">
              <span className="w-8 h-px bg-[#B8F34A]" />
              Premium Araç Detaylandırma
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#F2F4EF] mb-6 animate-fade-in-up animation-delay-100"
            >
              Gerçek kalite,
              <br />
              <span className="text-[#B8F34A]">detaylarda</span> saklı.
            </h1>

            {/* Supporting copy */}
            <p className="text-[#A3AAA1] text-lg leading-relaxed mb-8 max-w-xl animate-fade-in-up animation-delay-200">
              Aracının görünümünü korumak ve her çizgide daha fazlasını görmek
              için profesyonel detailing çözümleri.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <ScrollCTA href="#hizmetler" variant="primary">
                Hizmetleri Keşfet
              </ScrollCTA>
              <ScrollCTA href="#iletisim" variant="secondary">
                İletişime Geç
              </ScrollCTA>
            </div>

            {/* Technical detail */}
            <div className="mt-16 flex items-center gap-4 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 text-[#A3AAA1] text-xs font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]" />
                Her yüzeyde hassasiyet
              </div>
              <div className="w-px h-4 bg-[#2E382E]" />
              <div className="flex items-center gap-2 text-[#A3AAA1] text-xs font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]" />
                Her detayda kalite
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-10 animate-fade-in-up animation-delay-500">
        <a
          href="#hizmetler"
          aria-label="Hizmetler bölümüne kaydır"
          className="flex flex-col items-center gap-2 text-[#A3AAA1] hover:text-[#B8F34A] transition-colors duration-200"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Keşfet</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

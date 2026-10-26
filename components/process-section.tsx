interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "İhtiyacı Belirle",
    description:
      "Aracının ihtiyaçlarını ve tercih ettiğin uygulamaları birlikte değerlendirelim.",
  },
  {
    number: "02",
    title: "Uygun Uygulamayı Planla",
    description:
      "Aracın ve yüzeylerin ihtiyaçlarına uygun bir bakım planı oluşturalım.",
  },
  {
    number: "03",
    title: "Detaylara Odaklan",
    description:
      "Her aşamada kontrollü, özenli ve planlı bir uygulama yaklaşımı benimseyelim.",
  },
];

function ProcessStep({
  step,
  isLast,
}: {
  step: ProcessStep;
  isLast: boolean;
}) {
  return (
    <div className="relative flex flex-col lg:flex-row lg:flex-1">
      {/* Step content */}
      <div className="flex flex-col flex-1">
        {/* Number + connector line row */}
        <div className="flex items-center gap-4 mb-6">
          {/* Number circle */}
          <div className="relative flex-shrink-0 w-14 h-14 rounded-full border border-[#2E382E] flex items-center justify-center bg-[#171B17]">
            <span className="text-[#B8F34A] font-bold text-sm tracking-widest">
              {step.number}
            </span>
          </div>

          {/* Horizontal connector line (desktop only) */}
          {!isLast && (
            <div
              aria-hidden="true"
              className="hidden lg:block flex-1 h-px bg-[#232A23] relative"
            >
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2E382E]" />
            </div>
          )}
        </div>

        {/* Vertical connector (mobile only) */}
        {!isLast && (
          <div
            aria-hidden="true"
            className="lg:hidden w-px h-8 bg-[#232A23] ml-7 mb-0"
          />
        )}

        {/* Text */}
        <div className="lg:pr-8">
          <h3 className="text-[#F2F4EF] font-semibold text-lg mb-2">
            {step.title}
          </h3>
          <p className="text-[#A3AAA1] text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section
      id="surec"
      className="py-24 lg:py-32 bg-[#090B0A] scroll-mt-20"
      aria-labelledby="process-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="section-label mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#B8F34A]" />
            Nasıl Çalışıyoruz
          </div>
          <h2
            id="process-heading"
            className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight text-[#F2F4EF]"
          >
            Bakım Sürecimiz
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 pt-8 border-t border-[#232A23]">
          <p className="text-[#A3AAA1] text-sm leading-relaxed max-w-2xl">
            Bu bölüm, 42Torque Detail Lab&apos;ın önerdiği hizmet sürecini
            temsilen hazırlanmıştır. Gerçek uygulama süreci araç durumuna ve
            seçilen hizmete göre farklılık gösterebilir.
          </p>
        </div>
      </div>
    </section>
  );
}

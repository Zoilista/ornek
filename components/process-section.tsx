interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "İhtiyaç Analizi",
    description:
      "Aracınızın mevcut boya ve iç mekan kondisyonunu, beklentilerinize uygun şekilde değerlendiriyoruz.",
  },
  {
    number: "02",
    title: "Uygulama Planı",
    description:
      "Yüzey yapısına ve aracınızın kullanım koşullarına en uygun işlem adımlarını ve takvimi belirliyoruz.",
  },
  {
    number: "03",
    title: "Hassas İşçilik",
    description:
      "Kontrollü atölye koşullarında, her adımda yüzeye duyarlı ekipmanlar ve titiz el işçiliğiyle çalışıyoruz.",
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
    <div className="relative flex flex-col lg:flex-row lg:flex-1 min-w-0">
      {/* Step content */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Number + connector line row */}
        <div className="flex items-center gap-4 mb-5 sm:mb-6">
          {/* Number circle */}
          <div className="relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#2E382E] flex items-center justify-center bg-[#171B17]">
            <span className="text-[#B8F34A] font-bold text-xs sm:text-sm tracking-widest">
              {step.number}
            </span>
          </div>

          {/* Horizontal connector line (desktop only) */}
          {!isLast && (
            <div
              aria-hidden="true"
              className="hidden lg:block flex-1 h-px bg-[#232A23] relative min-w-4"
            >
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2E382E]" />
            </div>
          )}
        </div>

        {/* Vertical connector (mobile only) */}
        {!isLast && (
          <div
            aria-hidden="true"
            className="lg:hidden w-px h-7 sm:h-8 bg-[#232A23] ml-6 sm:ml-7 -mt-2 mb-3"
          />
        )}

        {/* Text */}
        <div className="lg:pr-8 min-w-0">
          <h3 className="text-[#F2F4EF] font-semibold text-base sm:text-lg mb-2 break-words">
            {step.title}
          </h3>
          <p className="text-[#A3AAA1] text-sm leading-relaxed break-words">
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
      className="py-20 sm:py-24 lg:py-32 bg-[#090B0A] scroll-mt-20"
      aria-labelledby="process-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-xl mb-12 sm:mb-16">
          <div className="section-label mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#B8F34A] shrink-0" />
            Nasıl Çalışıyoruz
          </div>
          <h2
            id="process-heading"
            className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight text-[#F2F4EF] break-words"
          >
            Bakım Sürecimiz
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

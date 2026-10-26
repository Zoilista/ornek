"use client";

import { useState, useId } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Detailing ile standart araç yıkama arasındaki fark nedir?",
    answer:
      "Standart araç yıkama, aracın yüzeysel temizliğini sağlarken detailing; boya yüzeyinin derinlemesine temizlenmesini, pasta-cila uygulamalarını, iç mekan detay çalışmalarını ve koruyucu kaplamaları kapsar. Detailing, aracın her yüzeyine ayrı ayrı odaklanarak uzun vadeli bir bakım sağlamayı hedefler.",
  },
  {
    question:
      "Aracım için hangi hizmetin uygun olduğunu nasıl öğrenebilirim?",
    answer:
      "Uygun hizmet; aracının yaşı, boya durumu, kullanım alışkanlıkları ve beklentilerine göre belirlenir. En doğru değerlendirme için aracının mevcut durumunu inceleyerek bir öneri sunmak gerekir. Bu konuda iletişime geçerek bilgi alabilirsiniz.",
  },
  {
    question: "Seramik kaplama her araç için gerekli midir?",
    answer:
      "Seramik kaplama, boya yüzeyini korumak için etkili bir çözüm olmakla birlikte her araç için zorunlu değildir. Yeni araçlar, boya değeri yüksek araçlar veya açık havada park edilen araçlar için daha sık tercih edilir. Aracının durumuna göre alternatif koruma çözümleri de değerlendirilebilir.",
  },
  {
    question: "Uygulamalar için önceden iletişime geçebilir miyim?",
    answer:
      "Evet. Herhangi bir uygulama için önceden bilgi almak ve değerlendirme yapmak üzere iletişime geçebilirsiniz. Bu sayede ihtiyacınıza uygun hizmet ve planlama konusunda daha doğru bir yönlendirme yapılabilir.",
  },
  {
    question: "Fiyat teklifi nasıl alabilirim?",
    answer:
      "Fiyat teklifi için iletişim bölümündeki kanallardan ulaşabilirsiniz. Teklif; aracın markası, modeli, boya durumu ve istenen hizmete göre değişebileceğinden yerinde değerlendirme veya fotoğraf üzerinden ön bilgi verilmesi önerilir.",
  },
];

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const uid = useId();
  const buttonId = `faq-btn-${uid}-${index}`;
  const panelId = `faq-panel-${uid}-${index}`;

  return (
    <div className="border-b border-[#232A23]">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 py-5 text-left text-[#F2F4EF] font-medium text-base hover:text-[#B8F34A] transition-colors duration-200 group"
        >
          <span>{item.question}</span>
          <span
            aria-hidden="true"
            className="flex-shrink-0 w-7 h-7 rounded-full border border-[#2E382E] flex items-center justify-center text-[#B8F34A] group-hover:border-[#B8F34A] transition-colors duration-200"
          >
            {isOpen ? <Minus size={14} /> : <Plus size={14} />}
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
      >
        <div className="pb-5 pr-10">
          <p className="text-[#A3AAA1] text-sm leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="sss"
      className="py-24 lg:py-32 bg-[#111411] scroll-mt-20"
      aria-labelledby="faq-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          {/* Left — heading */}
          <div>
            <div className="section-label mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#B8F34A]" />
              SSS
            </div>
            <h2
              id="faq-heading"
              className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight text-[#F2F4EF] mb-4"
            >
              Aklındaki Sorular
            </h2>
            <p className="text-[#A3AAA1] text-sm leading-relaxed">
              Yanıtını bulamadığın sorular için iletişim bölümünden ulaşabilirsin.
            </p>
          </div>

          {/* Right — accordion */}
          <div>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

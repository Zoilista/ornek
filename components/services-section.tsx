"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, X, Clock, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

interface Service {
  number: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  imageAlt: string;
  estimatedDuration: string;
  features: string[];
  fullDescription: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Detaylı İç & Dış Temizlik",
    shortDescription:
      "Aracınızın iç ve dış yüzeyleri için hassas, pH dengeli ve kapsamlı temizlik uygulaması.",
    imageUrl: "/images/service-interior-detailing.jpg",
    imageAlt:
      "Kabin içi havalandırma kanalları ve kokpit aksamının detay fırçasıyla temizliği",
    estimatedDuration: "Tahmini 1 Gün (Kapsama göre değişir)",
    features: [
      "pH dengeli, kumaş ve deri dokusuna duyarlı araç bakım şampuanları",
      "Koltuk ve döşemelerin derinlemesine buharlı temizliği",
      "Klima kanalları ve kokpit aksamının detay fırçalarıyla arındırılması",
      "Deri ve plastik yüzeyler için koruyucu ve mat besleyici bakım",
    ],
    fullDescription:
      "Standart araç yıkamanın ötesinde; kapı fitillerinden havalandırma ızgaralarına, döşemelerden kokpit detaylarına kadar tüm yüzeyler araç materyallerine uygun ürünler ve hassas fırçalar yardımıyla özenle temizlenir.",
  },
  {
    number: "02",
    title: "Pasta & Cila (Boya Düzeltme)",
    shortDescription:
      "Boya yüzeyindeki hare ve ince çiziklerin durumuna göre kademeli polisaj uygulaması.",
    imageUrl: "/images/service-paint-correction.jpg",
    imageAlt:
      "Dual-action polisaj makinesi ile otomobil kaputunda boya düzeltme işlemi",
    estimatedDuration: "Tahmini 1 - 2 Gün (Vernik durumuna göre değişir)",
    features: [
      "Boya kalınlığı ve vernik durumu göz önüne alınarak yapılan yüzey analizi",
      "Kil hamuru ve demir tozu temizliği ile yüzey arındırma",
      "Vernik kalınlığına uygun kademeli polisaj adımları",
      "Maskeleme yapmayan, boya berraklığını öne çıkaran cila uygulaması",
    ],
    fullDescription:
      "Boya yüzeyindeki kusurları geçici dolgularla kapatmak yerine, vernik yapısı korunarak mikron seviyesinde polisaj işlemi uygulanır. Amaç; boyanın durumuna göre mümkün olan en temiz ve berrak yüzey derinliğini elde etmektir.",
  },
  {
    number: "03",
    title: "Seramik Kaplama",
    shortDescription:
      "Boya yüzeyine koruyucu kaplama uygulanarak su ve kir tutunmasının azaltılmasına yardımcı olunur.",
    imageUrl: "/images/service-ceramic-coating.jpg",
    imageAlt:
      "Aplikatör bloğu ile araç yüzeyine koruyucu seramik kaplama uygulaması",
    estimatedDuration: "Tahmini 2 Gün (Kürlenme süresi dahil)",
    features: [
      "Boya yüzeyiyle bütünleşen koruyucu seramik kaplama katmanı",
      "Kuş pisliği, reçine ve yol kirlerine karşı direnç desteği",
      "Yüksek hidrofobik etki ile su ve kir iticilik",
      "Rutin araç yıkamalarında kolay temizlenme ve uzun süreli parlaklık desteği",
    ],
    fullDescription:
      "Boya düzeltme ve yüzey hazırlığı sonrasında uygulanan koruyucu kaplama, kontrollü atölye koşullarında yüzeye uygulanır ve kürlenmeye bırakılır. Yüzeyde hidrofobik bir katman oluşturarak çevresel kirleticilerin boyaya tutunmasını zorlaştırır.",
  },
  {
    number: "04",
    title: "Boya Koruma Filmi (PPF)",
    shortDescription:
      "Şeffaf boya koruma filmi, günlük kullanımda oluşabilecek taş izi ve yüzey sürtünmelerine karşı ek bir koruma katmanı sağlar.",
    imageUrl: "/images/service-paint-protection.jpg",
    imageAlt:
      "Araç ön panellerine şeffaf boya koruma filmi (PPF) montajı",
    estimatedDuration: "Tahmini 2 - 3 Gün (Uygulama alanına göre değişir)",
    features: [
      "Yüksek optik berraklığa sahip şeffaf termoplastik poliüretan (TPU) film",
      "Isı etkisiyle hafif kılcal çizikleri tolere edebilen üst katman yapısı",
      "Orijinal boya yüzeyini taş çarpmaları ve sürtünme izlerine karşı koruma desteği",
      "Panel hatlarına uygun titiz montaj ve kenar kıvırma işçiliği",
    ],
    fullDescription:
      "Özellikle ön kaput, tampon ve çamurluk gibi darbeye açık bölgelerde veya tüm gövdede uygulanabilen şeffaf koruma filmi, sürüş esnasında taş fırlaması ve hafif sürtünmelere karşı fiziksel bir koruma kalkanı sunar.",
  },
];

function ServiceCard({
  service,
  onOpenDetails,
}: {
  service: Service;
  onOpenDetails: (service: Service) => void;
}) {
  return (
    <div className="group relative flex flex-col h-full bg-[#171B17] border border-[#232A23] rounded-[0.75rem] overflow-hidden hover:border-[#2E382E] transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#111411] shrink-0">
        <Image
          src={service.imageUrl}
          alt={service.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171B17] via-transparent to-transparent" />

        {/* Number badge */}
        <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 text-[#B8F34A] text-xs font-bold tracking-[0.15em] bg-[#090B0A]/85 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#B8F34A]/30 shrink-0">
          {service.number}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 min-w-0">
        <h3 className="text-[#F2F4EF] font-semibold text-base sm:text-lg leading-snug mb-2">
          {service.title}
        </h3>
        <p className="text-[#A3AAA1] text-sm leading-relaxed mb-4 flex-1">
          {service.shortDescription}
        </p>

        {/* Detaylar button with clear interactive destination */}
        <button
          type="button"
          onClick={() => onOpenDetails(service)}
          aria-haspopup="dialog"
          aria-label={`${service.title} hizmet detaylarını incele`}
          className="flex items-center justify-between gap-3 w-full min-h-[44px] pt-3.5 mt-auto border-t border-[#232A23] text-left group/btn focus-visible:ring-1 focus-visible:ring-[#B8F34A] rounded-sm cursor-pointer"
        >
          <span className="text-[#B8F34A] text-xs sm:text-sm font-semibold group-hover/btn:text-[#d4ff6e] transition-colors leading-none min-w-0">
            Detayları Gör
          </span>
          <div className="w-7 h-7 rounded-full bg-[#111411] border border-[#232A23] flex items-center justify-center text-[#B8F34A] shrink-0 group-hover/btn:border-[#B8F34A] group-hover/btn:bg-[#B8F34A] group-hover/btn:text-[#090B0A] transition-colors duration-200">
            <ArrowUpRight size={14} className="shrink-0" />
          </div>
        </button>
      </div>

      {/* Accent line on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8F34A] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
      }
    };
    if (selectedService) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  const handleContactScroll = useCallback(() => {
    setSelectedService(null);
    const target = document.querySelector("#iletisim");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section
      id="hizmetler"
      className="py-20 sm:py-24 lg:py-32 bg-[#090B0A] scroll-mt-20"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="section-label mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#B8F34A] shrink-0" />
            Hizmetler
          </div>
          <h2
            id="services-heading"
            className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight text-[#F2F4EF] mb-4 break-words"
          >
            Aracınıza Özel Bakım Çözümleri
          </h2>
          <p className="text-[#A3AAA1] text-sm sm:text-base leading-relaxed break-words">
            Her yüzeyin yapısına uygun yöntem, kontrollü stüdyo koşulları ve
            özenli işçilikle profesyonel uygulamalar.
          </p>
        </div>

        {/* Cards grid: 1 col on mobile, 2 cols on tablet/small-desktop, 4 cols on large desktop (xl) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              service={service}
              onOpenDetails={setSelectedService}
            />
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#090B0A]/85 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedService(null)}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#171B17] border border-[#2E382E] rounded-[1rem] p-5 sm:p-8 shadow-2xl z-10 flex flex-col my-auto">
            {/* Header with Close */}
            <div className="flex items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-[#232A23]">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-[#B8F34A] text-xs font-bold tracking-[0.15em] bg-[#090B0A] px-2.5 py-1 rounded-full border border-[#B8F34A]/30 shrink-0">
                  {selectedService.number}
                </span>
                <span className="text-[#A3AAA1] text-xs font-medium flex items-center gap-1.5 truncate">
                  <Clock size={13} className="text-[#B8F34A] shrink-0" />
                  <span className="truncate">{selectedService.estimatedDuration}</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Kapat"
                className="w-9 h-9 rounded-full bg-[#111411] border border-[#232A23] flex items-center justify-center text-[#A3AAA1] hover:text-[#F2F4EF] hover:border-[#B8F34A] transition-colors shrink-0 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-5 sm:py-6 space-y-5 sm:space-y-6">
              <div>
                <h3
                  id="service-modal-title"
                  className="text-xl sm:text-2xl font-bold text-[#F2F4EF] mb-2.5 break-words"
                >
                  {selectedService.title}
                </h3>
                <p className="text-[#A3AAA1] text-sm leading-relaxed break-words">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Image banner inside modal */}
              <div className="relative h-44 sm:h-52 w-full rounded-[0.75rem] overflow-hidden border border-[#232A23] shrink-0">
                <Image
                  src={selectedService.imageUrl}
                  alt={selectedService.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B17] via-transparent to-transparent" />
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-[#B8F34A] mb-3 flex items-center gap-2">
                  <ShieldCheck size={15} className="shrink-0" />
                  Uygulama Standartları
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-[#F2F4EF] bg-[#111411] p-3 rounded-[0.5rem] border border-[#232A23] min-w-0 break-words"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[#B8F34A] shrink-0 mt-0.5"
                      />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-4 sm:pt-5 border-t border-[#232A23] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <span className="text-[#A3AAA1] text-xs leading-relaxed">
                Uygulama kapsamı ve süresi, aracınızın fiziksel durumuna göre planlanır.
              </span>
              <button
                type="button"
                onClick={handleContactScroll}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] bg-[#B8F34A] text-[#090B0A] text-xs sm:text-sm font-semibold rounded-[0.375rem] hover:bg-[#8fc435] transition-colors shrink-0 text-center cursor-pointer"
              >
                <span>İletişime Geç & Bilgi Al</span>
                <ArrowRight size={15} className="shrink-0" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

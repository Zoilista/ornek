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
  duration: string;
  features: string[];
  fullDescription: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Detaylı İç & Dış Temizlik",
    shortDescription:
      "Aracının iç ve dış yüzeyleri için hassas, pH nötr ve kapsamlı temizlik uygulaması.",
    imageUrl: "/images/service-interior-detailing.jpg",
    imageAlt:
      "Kabin içi havalandırma kanalları ve deri direksiyonun narin fırça ile detay temizliği",
    duration: "1 İş Günü",
    features: [
      "pH nötr, kumaş ve deri dokusuna duyarlı premium şampuanlar",
      "Koltuk ve döşemelerin derinlemesine buharlı ekstraksiyonu",
      "Klima kanalları ve kokpit aksamının detay fırçalarıyla arındırılması",
      "Deri yüzeyler için UV koruyucu mat besleyici bakım",
    ],
    fullDescription:
      "Standart araç yıkamadan farklı olarak; kapı fitillerinden havalandırma ızgaralarına, pedal takımlarından tavan döşemesine kadar her köşe at kılı fırçalar ve özel formüllerle el işçiliğiyle arındırılır.",
  },
  {
    number: "02",
    title: "Pasta & Cila (Boya Düzeltme)",
    shortDescription:
      "Girdap izleri, kılcal çizikler ve oksidasyonu gideren kademeli düzeltme işlemi.",
    imageUrl: "/images/service-paint-correction.jpg",
    imageAlt:
      "Dual-action polisaj makinesi ve LED kontrol ışığıyla otomobil kaputunda kademeli boya düzeltme",
    duration: "1 - 2 İş Günü",
    features: [
      "Dijital mikron cihazı ile boya kalınlık analizi",
      "Kil hamuru ve demir tozu temizliği ile yüzey dekontaminasyonu",
      "Kademeli pasta ile hare, girdap ve çiziklerin kalıcı giderilmesi",
      "Silikonsuz, maskeleme yapmayan saf ayna parlaklığı",
    ],
    fullDescription:
      "Boya yüzeyindeki kusurları geçici cilalarla doldurmak yerine, vernik tabakasına zarar vermeden mikron seviyesinde düzeltiriz. Sonuç; ışık altında sıfır hare ve kusursuz derinliktir.",
  },
  {
    number: "03",
    title: "Seramik Kaplama",
    shortDescription:
      "Vernik katmanına moleküler düzeyde bağlanan dayanıklı 9H nano koruma kalkanı.",
    imageUrl: "/images/service-ceramic-coating.jpg",
    imageAlt:
      "Süet aplikatör bloğu ile derin parlaklık sağlayan 9H nano seramik kaplama uygulaması",
    duration: "2 İş Günü (Kürlenme Dahil)",
    features: [
      "9H sertlik standardında kristalize nano seramik tabaka",
      "Kuş pisliği, asit yağmuru ve reçinelere karşı kimyasal bariyer",
      "Maksimum hidrofobik su ve kir iticilik (kontakt açısı >110°)",
      "Yıkamalarda zahmetsiz temizlik ve derin cam parlaklığı",
    ],
    fullDescription:
      "Boya düzeltme sonrasında uygulanan seramik kaplama, kontrollü stüdyo ortamında panellere tek tek yedirilir ve kürlenmeye bırakılır. Aracınız aylarca ilk günkü vitrin parlaklığını korur.",
  },
  {
    number: "04",
    title: "Boya Koruma Filmi (PPF)",
    shortDescription:
      "Taş çarpmaları, sürtmeler ve çizilmelere karşı kendi kendini onaran şeffaf zırh.",
    imageUrl: "/images/service-paint-protection.jpg",
    imageAlt:
      "Spor araç ön çamurluk ve far çevresine şeffaf boya koruma filmi (PPF) montajı",
    duration: "2 - 3 İş Günü",
    features: [
      "Kendi kendini yenileyen (self-healing) termoplastik poliüretan",
      "Yüksek optik berraklık; sararma ve portakal kabuğu yapmaz",
      "Orijinal boyayı taş vuruğu, anahtar çiziği ve sürtmelerden korur",
      "Milimetrik kenar kıvırma tekniğiyle neredeyse görünmez montaj",
    ],
    fullDescription:
      "Yüksek hızda seyahat eden araçların en büyük tehdidi olan taş darbeleri ve dış etkenlere karşı en üst düzey fiziksel kalkandır. Isı ile kendi yüzeyindeki ince çizikleri kendiliğinden kapatır.",
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
    <div className="group relative flex flex-col bg-[#171B17] border border-[#232A23] rounded-[0.75rem] overflow-hidden hover:border-[#2E382E] transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#111411]">
        <Image
          src={service.imageUrl}
          alt={service.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171B17] via-transparent to-transparent" />

        {/* Number badge */}
        <div className="absolute top-4 left-4 text-[#B8F34A] text-xs font-bold tracking-[0.15em] bg-[#090B0A]/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#B8F34A]/30">
          {service.number}
        </div>

        {/* Duration badge */}
        <div className="absolute top-4 right-4 text-[#A3AAA1] text-[0.6875rem] font-medium bg-[#090B0A]/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#232A23] flex items-center gap-1.5">
          <Clock size={11} className="text-[#B8F34A]" />
          <span>{service.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h3 className="text-[#F2F4EF] font-semibold text-lg leading-snug">
          {service.title}
        </h3>
        <p className="text-[#A3AAA1] text-sm leading-relaxed flex-1">
          {service.shortDescription}
        </p>

        {/* Detaylar button with clear interactive destination */}
        <button
          type="button"
          onClick={() => onOpenDetails(service)}
          aria-haspopup="dialog"
          aria-label={`${service.title} hizmet detaylarını incele`}
          className="flex items-center justify-between w-full pt-3 mt-1 border-t border-[#232A23] text-left group/btn focus-visible:ring-1 focus-visible:ring-[#B8F34A]"
        >
          <span className="text-[#B8F34A] text-xs font-semibold tracking-wide uppercase group-hover/btn:underline">
            Uygulama Detayları
          </span>
          <div className="w-6 h-6 rounded-full bg-[#111411] border border-[#232A23] flex items-center justify-center text-[#B8F34A] group-hover/btn:border-[#B8F34A] group-hover/btn:bg-[#B8F34A] group-hover/btn:text-[#090B0A] transition-colors duration-200">
            <ArrowUpRight size={13} />
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
      className="py-24 lg:py-32 bg-[#090B0A] scroll-mt-20"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="section-label mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#B8F34A]" />
            Hizmetler
          </div>
          <h2
            id="services-heading"
            className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight text-[#F2F4EF] mb-4"
          >
            Aracına Özel Bakım Çözümleri
          </h2>
          <p className="text-[#A3AAA1] text-base leading-relaxed">
            Her yüzeyin yapısına uygun yöntem, kontrollü stüdyo koşulları ve
            endüstri standardı kimyasallarla hassas işçilik.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#090B0A]/85 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedService(null)}
            aria-hidden="true"
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#171B17] border border-[#2E382E] rounded-[1rem] p-6 sm:p-8 shadow-2xl z-10 flex flex-col">
            {/* Header with Close */}
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#232A23]">
              <div className="flex items-center gap-3">
                <span className="text-[#B8F34A] text-xs font-bold tracking-[0.15em] bg-[#090B0A] px-2.5 py-1 rounded-full border border-[#B8F34A]/30">
                  {selectedService.number}
                </span>
                <span className="text-[#A3AAA1] text-xs font-medium flex items-center gap-1.5">
                  <Clock size={13} className="text-[#B8F34A]" />
                  {selectedService.duration}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Kapat"
                className="w-9 h-9 rounded-full bg-[#111411] border border-[#232A23] flex items-center justify-center text-[#A3AAA1] hover:text-[#F2F4EF] hover:border-[#B8F34A] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6">
              <div>
                <h3
                  id="service-modal-title"
                  className="text-2xl font-bold text-[#F2F4EF] mb-3"
                >
                  {selectedService.title}
                </h3>
                <p className="text-[#A3AAA1] text-sm leading-relaxed">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Image banner inside modal */}
              <div className="relative h-48 w-full rounded-[0.75rem] overflow-hidden border border-[#232A23]">
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
                  <ShieldCheck size={15} />
                  Uygulama Standartları
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-[#F2F4EF] bg-[#111411] p-3 rounded-[0.5rem] border border-[#232A23]"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[#B8F34A] flex-shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-5 border-t border-[#232A23] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[#A3AAA1] text-xs">
                Araç durumunuza göre kişiselleştirilmiş program hazırlanır.
              </span>
              <button
                type="button"
                onClick={handleContactScroll}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#B8F34A] text-[#090B0A] text-sm font-semibold rounded-[0.375rem] hover:bg-[#8fc435] transition-colors"
              >
                <span>İletişime Geç & Bilgi Al</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

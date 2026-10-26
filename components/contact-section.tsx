import { Phone, MessageCircle, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface ContactChannel {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  value: string | null;
  href: string | null;
}

export default function ContactSection() {
  const channels: ContactChannel[] = [
    {
      id: "telefon",
      badge: "TELEFON",
      title: "Telefon Danışmanlığı",
      description:
        "Uygulama seçenekleri, boya koruma paketleri ve randevu planlaması için doğrudan görüşün.",
      icon: <Phone size={20} className="shrink-0" />,
      value: siteConfig.phone,
      href: siteConfig.phone ? `tel:${siteConfig.phone}` : null,
    },
    {
      id: "whatsapp",
      badge: "WHATSAPP",
      title: "WhatsApp Ön Değerlendirme",
      description:
        "Aracınızın güncel fotoğraflarını ileterek hızlı durum analizi ve servis tavsiyesi talep edin.",
      icon: <MessageCircle size={20} className="shrink-0" />,
      value: siteConfig.whatsapp,
      href: siteConfig.whatsapp
        ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`
        : null,
    },
    {
      id: "konum",
      badge: "KONUM",
      title: "Stüdyo Randevusu",
      description:
        "Kontrollü LED aydınlatma altında boya mikron ölçümü ve yüzey analiz seansı.",
      icon: <MapPin size={20} className="shrink-0" />,
      value: siteConfig.location,
      href: siteConfig.locationMapUrl,
    },
  ];

  return (
    <section
      id="iletisim"
      className="py-20 sm:py-24 lg:py-32 bg-[#090B0A] border-t border-[#232A23] scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="container-site">
        <div className="max-w-4xl">
          {/* Section label */}
          <div className="section-label mb-4 sm:mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#B8F34A] shrink-0" />
            İletişim & Danışmanlık
          </div>

          {/* Heading */}
          <h2
            id="contact-heading"
            className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight text-[#F2F4EF] mb-4 break-words"
          >
            Aracın için doğru uygulamayı
            <br className="hidden sm:block" /> birlikte belirleyelim.
          </h2>

          <p className="text-[#A3AAA1] text-sm sm:text-base leading-relaxed mb-10 sm:mb-12 max-w-2xl break-words">
            42Torque Detail Lab, her araca özel bireysel değerlendirme ve
            kontrollü randevu sistemiyle hizmet sunar. İhtiyacınıza en uygun
            uygulama paketini belirlemek için bize ulaşın.
          </p>

          {/* 3 Contact cards: 1 col on mobile, 2 cols on tablet, 3 cols on large desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {channels.map((ch) => {
              const isConfigured = !!ch.value && !!ch.href;

              const cardContent = (
                <div
                  className={`flex flex-col h-full p-5 sm:p-6 rounded-[0.75rem] border bg-[#171B17] transition-all duration-300 min-w-0 ${
                    isConfigured
                      ? "border-[#232A23] hover:border-[#B8F34A] hover:-translate-y-1 group"
                      : "border-[#232A23] hover:border-[#2E382E]"
                  }`}
                >
                  {/* Top row: Icon + short badge */}
                  <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center border shrink-0 transition-colors duration-200 ${
                        isConfigured
                          ? "border-[#2E382E] text-[#B8F34A] bg-[#111411] group-hover:bg-[#B8F34A] group-hover:text-[#090B0A] group-hover:border-[#B8F34A]"
                          : "border-[#2E382E] text-[#B8F34A] bg-[#111411]"
                      }`}
                    >
                      {ch.icon}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[0.6875rem] font-bold tracking-wider text-[#A3AAA1] px-2.5 py-1 rounded-full bg-[#111411] border border-[#232A23] uppercase">
                        {ch.badge}
                      </span>
                      {isConfigured && (
                        <div className="text-[#B8F34A] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight size={16} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title & description */}
                  <h3 className="text-[#F2F4EF] font-semibold text-base sm:text-lg mb-2 leading-snug">
                    {ch.title}
                  </h3>
                  <p className="text-[#A3AAA1] text-xs sm:text-sm leading-relaxed flex-1 mb-4">
                    {ch.description}
                  </p>

                  {/* Bottom channel indicator */}
                  <div className="pt-3.5 border-t border-[#232A23] mt-auto">
                    {isConfigured ? (
                      <span className="text-[#B8F34A] text-xs sm:text-sm font-semibold tracking-wide">
                        {ch.value}
                      </span>
                    ) : (
                      <span className="text-[#A3AAA1]/70 text-xs flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]/50 shrink-0" />
                        <span>Canlı yayında aktifleşir</span>
                      </span>
                    )}
                  </div>
                </div>
              );

              if (isConfigured) {
                return (
                  <a
                    key={ch.id}
                    href={ch.href!}
                    id={`contact-${ch.id}`}
                    aria-label={`${ch.title}: ${ch.value}`}
                    target={ch.id === "konum" ? "_blank" : undefined}
                    rel={ch.id === "konum" ? "noopener noreferrer" : undefined}
                    className="block h-full"
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <div
                  key={ch.id}
                  id={`contact-${ch.id}`}
                  role="region"
                  aria-label={`${ch.title} — ${ch.badge}`}
                  className="block h-full"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>

          {/* Unified demo explanation banner */}
          {siteConfig.isDemo && (
            <div className="mt-8 p-4 sm:p-5 rounded-[0.75rem] border border-[#232A23] bg-[#111411]/80 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-7 h-7 rounded-full bg-[#B8F34A]/10 border border-[#B8F34A]/30 flex items-center justify-center text-[#B8F34A] shrink-0">
                    <Sparkles size={14} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#A3AAA1] text-xs leading-relaxed">
                      <span className="text-[#F2F4EF] font-medium mr-1.5">
                        Kurgusal Portföy Gösterimi:
                      </span>
                      Müşteri yayını sırasında telefon, WhatsApp ve atölye adresi{" "}
                      <code className="text-[#B8F34A] font-mono text-[0.6875rem] bg-[#171B17] px-1.5 py-0.5 rounded border border-[#232A23]">
                        lib/site-config.ts
                      </code>{" "}
                      üzerinden tanımlanır.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 self-start sm:self-center">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.6875rem] font-medium text-[#B8F34A] bg-[#B8F34A]/10 border border-[#B8F34A]/20 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A] shrink-0" />
                    Entegrasyona Hazır
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

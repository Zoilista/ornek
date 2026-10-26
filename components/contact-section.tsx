import { Phone, MessageCircle, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface ContactChannel {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  value: string | null;
  href: string | null;
  placeholderBadge: string;
  placeholderHint: string;
}

export default function ContactSection() {
  const channels: ContactChannel[] = [
    {
      id: "telefon",
      title: "Telefon & Birebir Danışmanlık",
      description:
        "Uygulama seçenekleri, boya koruma paketleri ve güncel randevu takvimi için birebir görüşme.",
      icon: <Phone size={20} className="shrink-0" />,
      value: siteConfig.phone,
      href: siteConfig.phone ? `tel:${siteConfig.phone}` : null,
      placeholderBadge: "Doğrudan İletişim Hattı",
      placeholderHint: "İstemci yayını sırasında kurumsal santrale bağlanır.",
    },
    {
      id: "whatsapp",
      title: "WhatsApp Ön Değerlendirme",
      description:
        "Aracının güncel durumunu gösteren fotoğrafları ileterek hızlı ön inceleme ve öneri talep etme.",
      icon: <MessageCircle size={20} className="shrink-0" />,
      value: siteConfig.whatsapp,
      href: siteConfig.whatsapp
        ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`
        : null,
      placeholderBadge: "Görsel İnceleme Kanalı",
      placeholderHint: "Fotoğraf & video ile ön ekspertiz için yapılandırılır.",
    },
    {
      id: "konum",
      title: "Stüdyo & Randevulu Kabul",
      description:
        "Kontrollü LED aydınlatma altında boya mikron ölçümü ve yüzey analiz seansı.",
      icon: <MapPin size={20} className="shrink-0" />,
      value: siteConfig.location,
      href: siteConfig.locationMapUrl,
      placeholderBadge: "Özel Kabul Seansı",
      placeholderHint: "Stüdyo adresi ve Google Maps rotası ile eşleştirilir.",
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
                  {/* Top row: Icon + status badge */}
                  <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center border shrink-0 transition-colors duration-200 ${
                        isConfigured
                          ? "border-[#2E382E] text-[#B8F34A] group-hover:bg-[#B8F34A] group-hover:text-[#090B0A] group-hover:border-[#B8F34A]"
                          : "border-[#2E382E] text-[#B8F34A] bg-[#111411]"
                      }`}
                    >
                      {ch.icon}
                    </div>

                    {isConfigured ? (
                      <div className="text-[#B8F34A] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={16} />
                      </div>
                    ) : (
                      <span className="text-[0.6875rem] font-medium text-[#A3AAA1] px-2.5 py-1 rounded-full bg-[#111411] border border-[#232A23] text-right leading-tight break-words max-w-[calc(100%-3.5rem)]">
                        {ch.placeholderBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & description */}
                  <h3 className="text-[#F2F4EF] font-semibold text-base mb-2 break-words">
                    {ch.title}
                  </h3>
                  <p className="text-[#A3AAA1] text-xs leading-relaxed flex-1 mb-4 break-words">
                    {ch.description}
                  </p>

                  {/* Bottom channel indicator */}
                  <div className="pt-3 border-t border-[#232A23] mt-auto">
                    {isConfigured ? (
                      <span className="text-[#B8F34A] text-xs font-semibold tracking-wide break-words">
                        {ch.value}
                      </span>
                    ) : (
                      <span className="text-[#A3AAA1]/70 text-[0.6875rem] flex items-center gap-1.5 break-words">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]/50 shrink-0" />
                        <span className="leading-tight">{ch.placeholderHint}</span>
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
                  aria-label={`${ch.title} — ${ch.placeholderBadge}`}
                  className="block h-full"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>

          {/* Unified demo explanation banner */}
          {siteConfig.isDemo && (
            <div className="mt-8 p-5 sm:p-6 rounded-[0.75rem] border border-[#232A23] bg-[#111411]/90 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-[#B8F34A]/10 border border-[#B8F34A]/30 flex items-center justify-center text-[#B8F34A] shrink-0 mt-0.5">
                    <Sparkles size={16} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[#F2F4EF] font-semibold text-sm mb-1 break-words">
                      Kurgusal Portföy Gösterimi
                    </h4>
                    <p className="text-[#A3AAA1] text-xs leading-relaxed max-w-2xl break-words">
                      Bu web sitesi, otomotiv ve detailing işletmelerine yönelik
                      dijital vitrin ve kullanıcı deneyimi standartlarını
                      sergilemek amacıyla hazırlanmıştır. Canlı müşteri
                      entegrasyonunda telefon, WhatsApp ve atölye adresi{" "}
                      <code className="text-[#B8F34A] font-mono text-[0.6875rem] bg-[#171B17] px-1.5 py-0.5 rounded border border-[#232A23] whitespace-nowrap">
                        lib/site-config.ts
                      </code>{" "}
                      üzerinden tanımlanarak tüm bağlantılar anında aktifleşir.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 self-start sm:self-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.6875rem] font-medium text-[#B8F34A] bg-[#B8F34A]/10 border border-[#B8F34A]/20 whitespace-nowrap">
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

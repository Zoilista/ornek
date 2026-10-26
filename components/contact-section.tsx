import { Phone, MessageCircle, MapPin, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface ContactAction {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  href: string | null;
  isDemo: boolean;
}

function buildContactActions(): ContactAction[] {
  return [
    {
      id: "telefon",
      label: "Telefon",
      sublabel: siteConfig.phone ?? "Demo — bilgi eklenmedi",
      icon: <Phone size={22} />,
      href: siteConfig.phone ? `tel:${siteConfig.phone}` : null,
      isDemo: !siteConfig.phone,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      sublabel: siteConfig.whatsapp ?? "Demo — bilgi eklenmedi",
      icon: <MessageCircle size={22} />,
      href: siteConfig.whatsapp
        ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`
        : null,
      isDemo: !siteConfig.whatsapp,
    },
    {
      id: "konum",
      label: "Konum",
      sublabel: siteConfig.location ?? "Demo — bilgi eklenmedi",
      icon: <MapPin size={22} />,
      href: siteConfig.locationMapUrl ?? null,
      isDemo: !siteConfig.location,
    },
  ];
}

function ContactCard({ action }: { action: ContactAction }) {
  const isClickable = !!action.href && !action.isDemo;

  const inner = (
    <div
      className={`group flex flex-col items-start gap-4 p-6 rounded-[0.75rem] border transition-all duration-300 ${
        isClickable
          ? "bg-[#171B17] border-[#232A23] hover:border-[#B8F34A] hover:-translate-y-1 cursor-pointer"
          : "bg-[#171B17]/60 border-[#232A23]/60 opacity-70 cursor-not-allowed"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-11 h-11 rounded-full flex items-center justify-center border ${
          isClickable
            ? "border-[#2E382E] text-[#B8F34A] group-hover:bg-[#B8F34A] group-hover:text-[#090B0A] group-hover:border-[#B8F34A]"
            : "border-[#232A23] text-[#A3AAA1]"
        } transition-all duration-200`}
      >
        {action.icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-[#F2F4EF] font-semibold text-base mb-1">
          {action.label}
        </p>
        <p className={`text-sm ${action.isDemo ? "text-[#A3AAA1]/60 italic" : "text-[#A3AAA1]"}`}>
          {action.sublabel}
        </p>
      </div>

      {/* Demo badge */}
      {action.isDemo && (
        <div className="flex items-center gap-1.5 text-[#A3AAA1]/60 text-xs">
          <AlertCircle size={12} />
          <span>Bu alan yapılandırılmadı</span>
        </div>
      )}
    </div>
  );

  if (isClickable) {
    return (
      <a
        href={action.href!}
        id={`contact-${action.id}`}
        aria-label={`${action.label}: ${action.sublabel}`}
        target={action.id === "konum" ? "_blank" : undefined}
        rel={action.id === "konum" ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      id={`contact-${action.id}`}
      role="group"
      aria-label={`${action.label} — ${action.isDemo ? "yapılandırılmamış demo alanı" : action.sublabel}`}
    >
      {inner}
    </div>
  );
}

export default function ContactSection() {
  const actions = buildContactActions();

  return (
    <section
      id="iletisim"
      className="py-24 lg:py-32 bg-[#090B0A] border-t border-[#232A23]"
      aria-labelledby="contact-heading"
    >
      <div className="container-site">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="section-label mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#B8F34A]" />
            İletişim
          </div>

          {/* Heading */}
          <h2
            id="contact-heading"
            className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight text-[#F2F4EF] mb-4"
          >
            Aracın için doğru uygulamayı
            <br className="hidden sm:block" /> birlikte belirleyelim.
          </h2>

          <p className="text-[#A3AAA1] text-base leading-relaxed mb-12">
            Hizmetler hakkında bilgi almak ve ihtiyaçlarını değerlendirmek için
            iletişime geç.
          </p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {actions.map((action) => (
              <ContactCard key={action.id} action={action} />
            ))}
          </div>

          {/* Demo note */}
          {siteConfig.isDemo && (
            <div className="mt-8 flex items-start gap-3 p-4 rounded-[0.75rem] border border-[#232A23] bg-[#111411]">
              <AlertCircle size={16} className="text-[#A3AAA1] flex-shrink-0 mt-0.5" />
              <p className="text-[#A3AAA1] text-sm leading-relaxed">
                <strong className="text-[#F2F4EF]">Portföy demosu:</strong> Bu
                sayfa kurgusal bir işletme için hazırlanmıştır. İletişim
                bilgileri henüz yapılandırılmamıştır. Gerçek bir istemci için
                uyarlandığında{" "}
                <code className="text-[#B8F34A] text-xs bg-[#171B17] px-1.5 py-0.5 rounded">
                  lib/site-config.ts
                </code>{" "}
                dosyasındaki alanlar güncellenir.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

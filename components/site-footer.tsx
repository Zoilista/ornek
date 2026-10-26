import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Uygulamalar", href: "#uygulamalar" },
  { label: "Süreç", href: "#surec" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111411] border-t border-[#232A23]" role="contentinfo">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Wordmark */}
            <div className="flex items-center gap-3 mb-4">
              <div aria-hidden="true" className="w-7 h-7 flex-shrink-0">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="16" cy="16" r="14" stroke="#B8F34A" strokeWidth="1.5" />
                  <path
                    d="M10 16 L16 9 L22 16 L16 23 Z"
                    stroke="#B8F34A"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="16" cy="16" r="2.5" fill="#B8F34A" />
                </svg>
              </div>
              <div>
                <span className="block text-[#F2F4EF] font-bold text-base leading-none">
                  42Torque
                </span>
                <span className="block text-[#B8F34A] text-[0.5rem] font-semibold tracking-[0.18em] uppercase leading-none mt-0.5">
                  Detail Lab
                </span>
              </div>
            </div>

            <p className="text-[#A3AAA1] text-sm leading-relaxed max-w-sm">
              {siteConfig.slogan}
            </p>

            {/* Demo notice */}
            {siteConfig.isDemo && (
              <p className="mt-4 text-[#A3AAA1]/50 text-xs italic">
                {siteConfig.demoNotice}
              </p>
            )}
          </div>

          {/* Quick links */}
          <nav aria-label="Footer gezinmesi">
            <p className="text-[#F2F4EF] text-xs font-semibold tracking-widest uppercase mb-4">
              Bağlantılar
            </p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#A3AAA1] text-sm hover:text-[#B8F34A] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#232A23] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-[#A3AAA1]/60 text-xs">
            © {year} {siteConfig.brandName} {siteConfig.brandSuffix}. Tüm
            hakları saklıdır.
          </p>
          <p className="text-[#A3AAA1]/40 text-xs">
            Portföy amaçlı hazırlanmıştır.
          </p>
        </div>
      </div>
    </footer>
  );
}

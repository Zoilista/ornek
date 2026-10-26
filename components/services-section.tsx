import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Service {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Detaylı İç & Dış Temizlik",
    description:
      "Aracının iç ve dış yüzeyleri için özenli, kapsamlı temizlik uygulaması.",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Araç iç temizliği detay çalışması",
  },
  {
    number: "02",
    title: "Pasta & Cila",
    description:
      "Boya yüzeyinin görünümünü iyileştirmeye yönelik profesyonel uygulama.",
    imageUrl:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Araca pasta ve cila uygulaması",
  },
  {
    number: "03",
    title: "Seramik Kaplama",
    description:
      "Boya yüzeyinin bakımı ve korunmasına yönelik kaplama uygulamaları.",
    imageUrl:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Seramik kaplama uygulaması",
  },
  {
    number: "04",
    title: "Boya Koruma",
    description:
      "Aracının boya yüzeyini korumaya yönelik profesyonel çözümler.",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Araç boya koruma uygulaması",
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex flex-col bg-[#171B17] border border-[#232A23] rounded-[0.75rem] overflow-hidden hover:border-[#2E382E] transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.imageUrl}
          alt={service.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171B17] via-transparent to-transparent" />

        {/* Number badge */}
        <div className="absolute top-4 left-4 text-[#B8F34A] text-xs font-bold tracking-[0.15em] bg-[#090B0A]/70 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#B8F34A]/30">
          {service.number}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h3 className="text-[#F2F4EF] font-semibold text-lg leading-snug">
          {service.title}
        </h3>
        <p className="text-[#A3AAA1] text-sm leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Arrow */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[#B8F34A] text-xs font-medium tracking-wide uppercase group-hover:underline">
            Detaylar
          </span>
          <ArrowUpRight
            size={14}
            className="text-[#B8F34A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>

      {/* Accent line on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8F34A] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="hizmetler"
      className="py-24 lg:py-32 bg-[#090B0A]"
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
            Her uygulamada doğru yöntem, doğru ürün ve titiz işçilik.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

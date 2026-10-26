import Image from "next/image";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  label: string;
  span?: "tall" | "wide" | "normal";
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/gallery-studio.jpg",
    alt: "Stüdyo aydınlatması altında sergilenen spor otomobil ve showroom alanı",
    label: "Stüdyo & Showroom",
    span: "tall",
  },
  {
    id: "g2",
    src: "/images/gallery-paint-correction.jpg",
    alt: "Otomobil yüzeyinde polisaj makinesi ile boya düzeltme işlemi",
    label: "Boya Düzeltme",
  },
  {
    id: "g3",
    src: "/images/gallery-ceramic-beading.jpg",
    alt: "Koruma uygulanmış araç yüzeyinde hidrofobik su damlacıkları ve ışık yansıması",
    label: "Hidrofobik Koruma",
  },
  {
    id: "g4",
    src: "/images/gallery-interior-wide.jpg",
    alt: "Spor otomobil kabin içi detayları, alcantara direksiyon ve koltuk yapısı",
    label: "Kabin Detaylandırma",
    span: "wide",
  },
  {
    id: "g5",
    src: "/images/gallery-ppf-installation.jpg",
    alt: "Araç ayna kapağı üzerine şeffaf boya koruma filmi (PPF) yerleşimi",
    label: "PPF Şeffaf Kaplama",
  },
  {
    id: "g6",
    src: "/images/gallery-equipment.jpg",
    alt: "Detaylandırma atölyesinde kullanılan polisaj pedleri, makineleri ve bakım ekipmanları",
    label: "Ekipman & Kimyasallar",
  },
];

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[0.75rem] bg-[#171B17] border border-[#232A23] hover:border-[#2E382E] transition-all duration-300 min-w-0 ${
        item.span === "tall"
          ? "row-span-2"
          : item.span === "wide"
          ? "sm:col-span-2"
          : ""
      }`}
    >
      <div
        className={`relative w-full ${
          item.span === "tall" ? "h-full min-h-[380px] sm:min-h-[420px]" : "h-52 sm:h-64"
        }`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B0A]/85 via-[#090B0A]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

        {/* Label */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 translate-y-0.5 group-hover:translate-y-0 transition-transform duration-300 min-w-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A] shrink-0" />
          <span className="text-[#F2F4EF] text-xs font-semibold tracking-wider uppercase truncate">
            {item.label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  return (
    <section
      id="uygulamalar"
      className="py-20 sm:py-24 lg:py-32 bg-[#111411] scroll-mt-20"
      aria-labelledby="gallery-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="section-label mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#B8F34A] shrink-0" />
              Uygulama Galerisi
            </div>
            <h2
              id="gallery-heading"
              className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight text-[#F2F4EF] break-words"
            >
              İşçilik, yakından
              <br className="hidden sm:block" /> bakınca belli olur.
            </h2>
          </div>
          <p className="text-[#A3AAA1] text-sm leading-relaxed max-w-sm break-words">
            Araç bakım, boya düzeltme, seramik kaplama ve koruma filmi süreçlerini temsil eden örnek stüdyo ve uygulama fotoğrafları.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

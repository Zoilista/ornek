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
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80&auto=format&fit=crop",
    alt: "Atölyede duran premium bir araç",
    label: "Atölye",
    span: "tall",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=700&q=80&auto=format&fit=crop",
    alt: "Boya yüzeyine pasta uygulaması",
    label: "Pasta & Cila",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=700&q=80&auto=format&fit=crop",
    alt: "Seramik kaplama uygulaması detayı",
    label: "Seramik Kaplama",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop",
    alt: "Araç iç mekan detay temizliği",
    label: "İç Temizlik",
    span: "wide",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80&auto=format&fit=crop",
    alt: "Araç boya koruma filmi uygulaması",
    label: "Boya Koruma",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=700&q=80&auto=format&fit=crop",
    alt: "Detaylandırma ekipmanları ve profesyonel uygulama",
    label: "Ekipman",
  },
];

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[0.75rem] bg-[#171B17] ${
        item.span === "tall"
          ? "row-span-2"
          : item.span === "wide"
          ? "sm:col-span-2"
          : ""
      }`}
    >
      <div
        className={`relative w-full ${
          item.span === "tall" ? "h-full min-h-[400px]" : "h-56 sm:h-64"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B0A]/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Label */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8F34A]" />
          <span className="text-[#F2F4EF] text-xs font-semibold tracking-wider uppercase">
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
      className="py-24 lg:py-32 bg-[#111411]"
      aria-labelledby="gallery-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#B8F34A]" />
              Uygulama Detayları
            </div>
            <h2
              id="gallery-heading"
              className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight text-[#F2F4EF]"
            >
              İşçilik, yakından
              <br className="hidden sm:block" /> bakınca belli olur.
            </h2>
          </div>
          <p className="text-[#A3AAA1] text-sm leading-relaxed max-w-xs">
            Bu görseller genel detaylandırma çalışmalarını temsilen sunulmuş
            örneklerdir.
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

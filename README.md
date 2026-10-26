# 42Torque Detail Lab

Premium araç detaylandırma stüdyosu için hazırlanmış **kurgusal portföy demo sitesi**.

> **Not:** Bu proje gerçek bir işletmeyi temsil etmemektedir. Konya, Türkiye'deki otomotiv işletmelerine yönelik web geliştirme hizmetlerini sergilemek amacıyla hazırlanmıştır.

---

## Teknoloji Yığını

| Katman | Teknoloji |
|--------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Dil | TypeScript (strict) |
| Stil | Tailwind CSS v4 |
| İkonlar | Lucide React |
| Görseller | `public/images/` yerel optimize edilmiş yüksek çözünürlüklü detaylandırma fotoğrafları |

---

## Kurulum ve Geliştirme

### Ön Koşullar

- Node.js 20 veya üzeri
- npm 10 veya üzeri

### Kurulum

```bash
npm install
```

### Geliştirme Sunucusu

```bash
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

### Üretim Derlemesi

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Proje Yapısı

```
ornek_website/
├── app/
│   ├── globals.css        # Tasarım sistemi, CSS değişkenleri, scroll padding
│   ├── layout.tsx         # Kök layout, meta veriler, Inter font
│   └── page.tsx           # Ana sayfa — tüm bölümler bir arada
├── components/
│   ├── demo-notice.tsx    # Demo bildirim şeridi
│   ├── site-header.tsx    # Yapışkan başlık, pürüzsüz kaydırma, mobil menü
│   ├── hero-section.tsx   # Stüdyo görselli hero ve harekete geçirici butonlar
│   ├── services-section.tsx  # Hizmet kartları ve interaktif teknik detay modalı
│   ├── gallery-section.tsx   # 6'lı detaylandırma uygulama galerisi
│   ├── process-section.tsx   # 3 adımlı çalışma süreci
│   ├── faq-section.tsx    # Erişilebilir SSS akordeonu
│   ├── contact-section.tsx   # İletişim kanalları ve portföy mimari açıklaması
│   └── site-footer.tsx    # Alt bilgi, site haritası
├── lib/
│   └── site-config.ts     # Marka ve iletişim yapılandırması ⬅️
└── public/
    └── images/            # Doğrulanmış yerel detaylandırma fotoğrafları
```

---

## Görsel Varlıkları ve Doğrulama

Tüm görseller doğrudan otomotiv detaylandırma, boya düzeltme, seramik kaplama ve PPF uygulamalarını yansıtacak şekilde seçilmiş, yerel olarak `public/images/` dizininde optimize edilmiştir:

| Dosya | Bölüm | Konu ve İçerik |
|-------|-------|----------------|
| `hero-detailing-studio.jpg` | Hero | Hegzagon tavan LED ışıkları altında süper spor otomobil ve stüdyo |
| `service-interior-detailing.jpg` | Hizmet 01 | Deri direksiyon ve konsol havalandırma kanallarının fırçayla detay temizliği |
| `service-paint-correction.jpg` | Hizmet 02 | Rupes polisaj makinesi ve LED kontrol ışığıyla kademeli boya düzeltme |
| `service-ceramic-coating.jpg` | Hizmet 03 | Süet aplikatör bloğu ile 9H nano seramik kaplama uygulaması |
| `service-paint-protection.jpg` | Hizmet 04 | Ön çamurluk ve far çevresine şeffaf boya koruma filmi (PPF) montajı |
| `gallery-studio.jpg` | Galeri 01 | Stüdyo showroomunda sergilenen spor otomobil |
| `gallery-paint-correction.jpg` | Galeri 02 | Metalik mavi boya üzerinde polisaj makinesiyle ayna parlaklığı düzeltme |
| `gallery-ceramic-beading.jpg` | Galeri 03 | Seramik kaplama sonrası yüzeyde yüksek temas açılı hidrofobik su damlacıkları |
| `gallery-interior-wide.jpg` | Galeri 04 | Alcantara direksiyon, yeşil dikişli karbon bucket koltuklar ve deri kokpit |
| `gallery-ppf-installation.jpg` | Galeri 05 | Karbon ayna kapağı üzerine şeffaf PPF montajı |
| `gallery-equipment.jpg` | Galeri 06 | Profesyonel polisaj makineleri, pedler, kimyasallar ve fırçalarla servis arabası |

---

## Gerçek Müşteri için Uyarlama

Tüm özelleştirilebilir bilgiler **`lib/site-config.ts`** dosyasında toplanmıştır:

```typescript
// lib/site-config.ts

export const siteConfig = {
  // İletişim bilgilerini buraya girin:
  phone: "+90 332 000 00 00",        // Telefon numarası
  whatsapp: "+905320000000",          // WhatsApp numarası (+ ile başlamalı)
  email: "info@42torque.com",         // E-posta
  location: "Selçuklu, Konya",       // Konum etiketi
  locationMapUrl: "https://maps.google.com/?q=...",  // Harita bağlantısı
  openingHours: "Pzt–Cmt 09:00–18:00",

  // Demo modunu kapat:
  isDemo: false,  // true → demo bandını ve portföy notlarını göster
};
```

`isDemo: false` yapıldığında demo bildirim şeridi ve portföy açıklama alanları gizlenir; tanımlanan telefon, WhatsApp ve harita bağlantıları doğrudan tıklanabilir hale gelir.

---

## Tasarım Sistemi

| Değişken | Değer | Kullanım |
|----------|-------|----------|
| `--color-bg-base` | `#090B0A` | Ana arka plan (yakın siyah) |
| `--color-bg-secondary` | `#111411` | İkincil bölümler |
| `--color-bg-card` | `#171B17` | Kart arka planları |
| `--color-text-primary` | `#F2F4EF` | Başlık ve ana metin |
| `--color-text-secondary` | `#A3AAA1` | İkincil metin |
| `--color-accent` | `#B8F34A` | Vurgu rengi (lime yeşil) |
| `--color-border` | `#232A23` | İnce kenarlıklar |

---

## Lisans

Bu proje portföy demo amaçlıdır.

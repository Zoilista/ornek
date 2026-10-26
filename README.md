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
| Görseller | Unsplash (uzaktan optimize edilmiş) |

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

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

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
│   ├── globals.css        # Tasarım sistemi, CSS değişkenleri
│   ├── layout.tsx         # Kök layout, meta veriler, font
│   └── page.tsx           # Ana sayfa — tüm bölümler bir arada
├── components/
│   ├── demo-notice.tsx    # Demo uyarı bandı (kolayca kaldırılabilir)
│   ├── site-header.tsx    # Yapışkan başlık, mobil menü
│   ├── hero-section.tsx   # Hero bölümü
│   ├── services-section.tsx  # Hizmet kartları
│   ├── gallery-section.tsx   # Uygulama galerisi
│   ├── process-section.tsx   # Bakım süreci adımları
│   ├── faq-section.tsx    # Erişilebilir SSS akordeonu
│   ├── contact-section.tsx   # İletişim bölümü
│   └── site-footer.tsx    # Alt bilgi
├── lib/
│   └── site-config.ts     # Marka ve iletişim yapılandırması ⬅️
└── public/
    └── images/            # Yerel görseller için (isteğe bağlı)
```

---

## Gerçek Müşteri için Uyarlama

Tüm özelleştirilebilir bilgiler **`lib/site-config.ts`** dosyasında toplanmıştır.

```typescript
// lib/site-config.ts

export const siteConfig = {
  // İletişim bilgilerini buraya gir:
  phone: "+90 332 000 00 00",        // Telefon numarası
  whatsapp: "+905320000000",          // WhatsApp numarası (+ ile başlamalı)
  email: "info@42torque.com",         // E-posta
  location: "Selçuklu, Konya",       // Konum etiketi
  locationMapUrl: "https://maps.google.com/?q=...",  // Harita bağlantısı
  openingHours: "Pzt–Cmt 09:00–18:00",

  // Demo modunu kapat:
  isDemo: false,  // true → demo bandını ve uyarıları göster
};
```

### Demo Bildirimini Kaldırma

`isDemo: false` yapmak yeterli. Demo bandı, demo kartları ve portföy notları otomatik olarak gizlenir.

---

## Tasarım Sistemi

Renk paleti ve tipografi `app/globals.css` dosyasındaki CSS özel özellikleriyle tanımlanmıştır:

| Değişken | Değer | Kullanım |
|----------|-------|----------|
| `--color-bg-base` | `#090B0A` | Ana arka plan |
| `--color-bg-secondary` | `#111411` | İkincil bölümler |
| `--color-bg-card` | `#171B17` | Kart arka planları |
| `--color-text-primary` | `#F2F4EF` | Başlık ve ana metin |
| `--color-text-secondary` | `#A3AAA1` | İkincil metin |
| `--color-accent` | `#B8F34A` | Vurgu rengi (lime yeşil) |
| `--color-border` | `#232A23` | İnce kenarlıklar |

---

## Erişilebilirlik

- Semantik HTML işaretlemesi
- Tüm etkileşimli öğelerde `aria-*` nitelikleri
- SSS akordeonu: `aria-expanded`, `aria-controls`, klavye desteği
- Görünür odak göstergeleri (`focus-visible`)
- `prefers-reduced-motion` desteği
- Yeterli renk kontrastı
- Açıklayıcı `alt` metni

---

## Fotoğraflar

Tüm görseller [Unsplash](https://unsplash.com) platformundan alınmış olup ticari kullanım için ücretsizdir (Unsplash Lisansı). Görseller 42Torque Detail Lab'ın gerçek çalışmalarını temsil etmemektedir.

---

## Lisans

Bu proje portföy demo amaçlıdır. Gerçek bir müşteri için uyarlandığında lisans koşulları ayrıca belirlenir.

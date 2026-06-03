import type { Metadata } from "next";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "Pertanyaan Umum (FAQ)",
  description:
    "Jawaban pertanyaan umum seputar pengiriman kontainer, layanan FCL/LCL, estimasi waktu, harga, dan prosedur pengiriman PT Diva Mutiara Logistik.",
  openGraph: {
    title: "FAQ — PT Diva Mutiara Logistik",
    description: "Pertanyaan umum seputar pengiriman kontainer dan layanan logistik kami.",
  },
};

const faqItems = [
  { q: "Apa itu PT Diva Mutiara Logistik?", a: "PT Diva Mutiara Logistik adalah perusahaan jasa pengiriman kontainer domestik yang melayani rute-rute strategis di Pulau Jawa. Kami menyediakan layanan FCL, LCL, Door-to-Door, Warehousing, dan Custom Clearance." },
  { q: "Dimana lokasi kantor PT Diva Mutiara Logistik?", a: "Kantor terdaftar kami berada di Cimone Mas Permai 2, Jl. Dilli Blok C 11 No.5, Tangerang. Kantor operasional berada di Jl. Sukapura, Kec. Cilincing, Jakarta Utara, DKI Jakarta 14140." },
  { q: "Apa jam operasional kantor?", a: "Kantor kami beroperasi pada hari Senin sampai Jumat, pukul 09:00 - 17:00 WIB. Sabtu, Minggu, dan hari libur nasional tutup." },
  { q: "Apa perbedaan FCL dan LCL?", a: "FCL (Full Container Load) adalah pengiriman menggunakan kontainer penuh yang didedikasikan untuk cargo Anda. LCL (Less than Container Load) adalah pengiriman parsial dimana cargo Anda berbagi kontainer dengan cargo lain untuk efisiensi biaya." },
  { q: "Berapa minimum volume untuk menggunakan layanan FCL?", a: "Kami merekomendasikan FCL untuk volume di atas 15 CBM. Untuk volume dibawah itu, layanan LCL lebih efisien dari segi biaya." },
  { q: "Apakah tersedia layanan Door-to-Door?", a: "Ya, kami menyediakan layanan Door-to-Door yang mencakup pengambilan cargo dari lokasi pengirim dan pengantaran langsung ke lokasi tujuan." },
  { q: "Berapa lama estimasi waktu pengiriman?", a: "Estimasi waktu bervariasi tergantung rute. Untuk area Jabodetabek bisa same day, Jakarta-Semarang 1-2 hari, Jakarta-Surabaya 2-3 hari. Untuk detail lebih lanjut, silakan cek halaman Rute kami." },
  { q: "Rute pengiriman apa saja yang tersedia?", a: "Saat ini kami melayani pengiriman ke seluruh kota utama di Pulau Jawa termasuk Jakarta (hub utama), Surabaya, Semarang, Bandung, Yogyakarta, Solo, Cirebon, Malang, Tangerang, Bekasi, dan Karawang." },
  { q: "Bagaimana cara menghitung kubikasi cargo?", a: "Kubikasi dihitung dengan rumus: Panjang (m) × Lebar (m) × Tinggi (m) × Jumlah Unit = Total CBM. Tim kami siap membantu menghitung dan merekomendasikan tipe kontainer yang paling sesuai." },
  { q: "Bagaimana cara mendapatkan penawaran harga?", a: "Anda bisa menghubungi kami via WhatsApp atau melalui form kontak di halaman Hubungi Kami. Tim kami akan memberikan penawaran harga terbaik sesuai kebutuhan pengiriman Anda." },
  { q: "Metode pembayaran apa saja yang tersedia?", a: "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BNI, BRI). Detail pembayaran akan diinformasikan pada invoice penawaran." },
  { q: "Apakah harga sudah termasuk asuransi?", a: "Asuransi pengiriman tersedia sebagai layanan tambahan. Kami sangat menyarankan asuransi untuk cargo bernilai tinggi. Detail premi akan diinformasikan dalam penawaran." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <FAQPageClient items={faqItems} />
    </>
  );
}

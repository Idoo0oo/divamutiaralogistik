import type { Metadata } from "next";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "Pertanyaan Umum (FAQ)",
  description:
    "Jawaban pertanyaan umum seputar layanan Container Haulage, armada Prime Mover, prosedur pengiriman, dan jaminan keamanan kargo PT Diva Mutiara Logistik.",
  openGraph: {
    title: "FAQ — PT Diva Mutiara Logistik",
    description: "Pertanyaan umum seputar layanan logistik dan mobilitas kontainer kami.",
  },
};

const faqItems = [
  { q: "Apa itu layanan utama PT Diva Mutiara Logistik?", a: "Kami adalah perusahaan penyedia jasa Container Haulage (trucking kontainer darat). Kami berfokus pada mobilitas dan penarikan kontainer dari pelabuhan (Port) ke kawasan pergudangan (Warehouse) atau sebaliknya, untuk berbagai sektor industri." },
  { q: "Dimana lokasi kantor operasional PT Diva Mutiara Logistik?", a: "Kantor terdaftar kami berada di Tangerang, namun pusat operasional dan pool armada kami berpusat di Jl. Sukapura, Kec. Cilincing, Jakarta Utara, sangat strategis dan dekat dengan Pelabuhan Tanjung Priok." },
  { q: "Apakah armada truk milik perusahaan sendiri?", a: "Ya, seluruh operasional haulage didukung oleh armada Prime Mover dan sasis (20ft & 40ft) milik perusahaan sendiri. Hal ini menjamin ketersediaan, perawatan yang terjamin, serta keamanan kargo Anda." },
  { q: "Apa saja jenis kontainer yang bisa ditarik?", a: "Kami dapat menangani penarikan kontainer standar (Dry Container) berukuran 20ft dan 40ft, High Cube, Flat Rack, hingga kontainer khusus seperti Reefer dan ISO Tank." },
  { q: "Apakah melayani Custom Clearance di pelabuhan?", a: "Tentu. Selain menyediakan truk, kami juga memiliki tim ahli yang mengurus Custom Clearance (PPJK) untuk melancarkan proses bongkar muat kontainer ekspor dan impor Anda di pelabuhan." },
  { q: "Apakah jangkauan pengiriman hanya di Pulau Jawa?", a: "Meski basis operasional utama kami ada di sekitar pelabuhan utama Jawa, layanan haulage kami bersifat fleksibel dan dapat menyesuaikan dengan kebutuhan rute rantai pasok industri Anda di seluruh Nusantara melalui koordinasi jaringan mitra kami." },
  { q: "Bagaimana standar keamanan kargo selama perjalanan?", a: "Keamanan adalah prioritas. Armada kami dikemudikan oleh sopir berlisensi dan berpengalaman. Truk dilengkapi fasilitas standar keamanan pengikatan (twist lock) yang kokoh untuk mencegah guncangan ekstrem." },
  { q: "Apakah layanan mencakup asuransi barang?", a: "Layanan dasar kami mencakup standar asuransi perjalanan armada darat. Namun untuk kargo bernilai tinggi (seperti elektronik atau alat medis), kami siap memfasilitasi asuransi pengiriman pihak ketiga dengan premi tambahan." },
  { q: "Bagaimana cara mendapatkan penawaran harga (Quotation)?", a: "Harga sangat bergantung pada jarak (titik muat ke titik bongkar), jenis kontainer, dan berat muatan. Silakan hubungi kami melalui tombol WhatsApp untuk mendapatkan penawaran yang cepat dan transparan." },
  { q: "Metode pembayaran apa yang didukung?", a: "Kami menerima pembayaran melalui transfer bank antar-perusahaan (BCA, Mandiri, BNI, BRI). Sistem term of payment (TOP) dapat dinegosiasikan untuk kontrak kerja sama B2B jangka panjang." },
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

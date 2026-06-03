import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "Tentang Kami & Armada",
  description:
    "Profil perusahaan PT Diva Mutiara Logistik. Armada kontainer 20ft & 40ft, layanan FCL/LCL, legalitas resmi, dan nilai-nilai perusahaan kami.",
  openGraph: {
    title: "Tentang PT Diva Mutiara Logistik",
    description:
      "Profil perusahaan logistik kontainer nasional. Armada lengkap, legalitas resmi, pelayanan terpercaya.",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Tentang PT Diva Mutiara Logistik",
  description:
    "Profil perusahaan jasa pengiriman kontainer domestik terpercaya di Indonesia.",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <AboutPageClient />
    </>
  );
}

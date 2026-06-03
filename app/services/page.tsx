import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Layanan Pengiriman Kontainer",
  description:
    "Layanan pengiriman kontainer lengkap: FCL, LCL, Door-to-Door, Warehousing, dan Custom Clearance. Solusi logistik terpercaya di Pulau Jawa.",
  openGraph: {
    title: "Layanan Pengiriman Kontainer — PT Diva Mutiara Logistik",
    description:
      "Layanan FCL, LCL, Door-to-Door, Warehousing, dan Custom Clearance untuk kebutuhan pengiriman cargo Anda.",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "PT Diva Mutiara Logistik",
  },
  serviceType: "Container Shipping Service",
  areaServed: {
    "@type": "Place",
    name: "Pulau Jawa, Indonesia",
  },
  description:
    "Jasa pengiriman kontainer domestik meliputi FCL, LCL, Door-to-Door, Warehousing, dan Custom Clearance.",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ServicesPageClient />
    </>
  );
}

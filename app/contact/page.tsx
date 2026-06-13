import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi PT Diva Mutiara Logistik untuk konsultasi pengiriman kontainer. Kantor di Tangerang dan Jakarta Utara. Senin-Jumat 09:00-17:00 WIB.",
  openGraph: {
    title: "Hubungi Kami — PT Diva Mutiara Logistik",
    description: "Konsultasi gratis untuk kebutuhan pengiriman kontainer Anda.",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PT Diva Mutiara Logistik",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Sukapura, Kec. Cilincing",
    addressLocality: "Jakarta Utara",
    postalCode: "14140",
    addressRegion: "DKI Jakarta",
    addressCountry: "ID",
  },
  telephone: "+62-818-851-514",
  email: "support@divamutiaralogistik.com",
  openingHours: "Mo-Fr 09:00-17:00",
  url: "https://www.divamutiaralogistik.com",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ContactPageClient />
    </>
  );
}

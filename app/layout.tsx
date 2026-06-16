import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.divamutiaralogistik.com"),
  title: {
    default: "PT Diva Mutiara Logistik | Jasa Pengiriman Kontainer Nasional",
    template: "%s | PT Diva Mutiara Logistik",
  },
  description:
    "PT Diva Mutiara Logistik - Jasa pengiriman kontainer domestik terpercaya dengan harga kompetitif. Layanan FCL & LCL ke seluruh Indonesia.",
  keywords: [
    "pengiriman kontainer",
    "ekspedisi cargo",
    "logistik nasional",
    "FCL",
    "LCL",
    "shipping kontainer domestik",
    "jasa pengiriman seluruh Indonesia", "logistik antar pulau",
  ],
  authors: [{ name: "PT Diva Mutiara Logistik" }],
  creator: "PT Diva Mutiara Logistik",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "PT Diva Mutiara Logistik",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon-logo.svg",
  },
  alternates: {
    canonical: "https://www.divamutiaralogistik.com",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Diva Mutiara Logistik",
  url: "https://www.divamutiaralogistik.com",
  logo: "https://www.divamutiaralogistik.com/logo-dml.svg",
  description:
    "Perusahaan jasa pengiriman kontainer domestik terpercaya di Indonesia, melayani rute strategis di seluruh Indonesia.",
  address: [
    {
      "@type": "PostalAddress",
      name: "Kantor Terdaftar",
      streetAddress: "Cimone Mas Permai 2, Jl. Dilli Blok C 11 No.5",
      addressLocality: "Tangerang",
      addressRegion: "Banten",
      addressCountry: "ID",
    },
    {
      "@type": "PostalAddress",
      name: "Kantor Operasional",
      streetAddress: "Jl. Sukapura, Kec. Cilincing",
      addressLocality: "Jakarta Utara",
      postalCode: "14140",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+62-818-851-514",
    availableLanguage: ["Indonesian"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import IndustriesPageClient from "./IndustriesPageClient";

export const metadata: Metadata = {
  title: "Sektor Industri | PT Diva Mutiara Logistik",
  description:
    "Mendukung berbagai sektor industri mulai dari FMCG, Manufaktur, Konstruksi hingga Ekspor Impor dengan layanan mobilitas kontainer yang efisien.",
  openGraph: {
    title: "Sektor Industri — PT Diva Mutiara Logistik",
    description: "Mendukung berbagai sektor industri dengan layanan mobilitas kontainer.",
  },
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
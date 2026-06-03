import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Galeri & Dokumentasi",
  description:
    "Galeri foto armada, kontainer, dan operasional PT Diva Mutiara Logistik. Lihat langsung kualitas layanan pengiriman kontainer kami.",
  openGraph: {
    title: "Galeri — PT Diva Mutiara Logistik",
    description: "Dokumentasi visual armada dan operasional pengiriman kontainer kami.",
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}

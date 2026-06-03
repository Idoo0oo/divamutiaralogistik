import type { Metadata } from "next";
import RoutesPageClient from "./RoutesPageClient";

export const metadata: Metadata = {
  title: "Rute & Jangkauan Nasional",
  description:
    "Rute pengiriman kontainer PT Diva Mutiara Logistik mencakup kota-kota utama di Pulau Jawa: Jakarta, Surabaya, Semarang, Bandung, Yogyakarta, dan lainnya.",
  openGraph: {
    title: "Rute & Jangkauan — PT Diva Mutiara Logistik",
    description: "Rute pengiriman kontainer di seluruh Pulau Jawa.",
  },
};

export default function RoutesPage() {
  return <RoutesPageClient />;
}

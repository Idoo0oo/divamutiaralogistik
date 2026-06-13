import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Container as ContainerIcon,
  Package,
  Truck,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Rute & Jangkauan", href: "/routes" },
  { label: "Galeri", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Hubungi Kami", href: "/contact" },
];

const serviceLinks = [
  { label: "Port-to-Port", href: "/services", icon: ContainerIcon },
  { label: "Port-to-Warehouse", href: "/services", icon: Warehouse },
  { label: "Warehouse-to-Port", href: "/services", icon: Package },
  { label: "Container Haulage", href: "/services", icon: Truck },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Company */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-dml.svg"
              alt="PT Diva Mutiara Logistik"
              width={160}
              height={62}
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Spesialis jasa angkutan kontainer terpercaya, fokus melayani rute operasional antar pelabuhan dan kawasan pergudangan secara cepat dan efisien.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <Clock size={14} />
              <span>Senin – Jumat, 09:00 – 17:00 WIB</span>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    <link.icon size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-4">
              <a
                href="tel:+62818851514"
                className="flex items-start gap-3 text-white/60 hover:text-primary text-sm transition-colors group"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+62-818-851-514</span>
              </a>
              <a
                href="mailto:support@divamutiaralogistik.com"
                className="flex items-start gap-3 text-white/60 hover:text-primary text-sm transition-colors"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>support@divamutiaralogistik.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white/80 mb-1">Kantor Terdaftar</p>
                  <p>Cimone Mas Permai 2, Jl. Dilli Blok C 11 No.5, Tangerang</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white/80 mb-1">Kantor Operasional</p>
                  <p>Jl. Sukapura, Kec. Cilincing, Jakarta Utara, DKI Jakarta 14140</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-sm">
            <p>© {new Date().getFullYear()} PT Diva Mutiara Logistik. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>NPWP: XX.XXX.XXX.X-XXX.XXX</span>
              <span className="hidden sm:inline">•</span>
              <span>SIUP: XXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  MapPin,
  Shield,
  Container as ContainerIcon,
  Package,
  Truck,
  Warehouse,
  Users,
  Route,
  Calendar,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const valueProps = [
  {
    icon: DollarSign,
    title: "Harga Kompetitif",
    description:
      "Penawaran harga terbaik di rute-rute strategis Pulau Jawa, transparan tanpa biaya tersembunyi.",
  },
  {
    icon: MapPin,
    title: "Rute Jawa Strategis",
    description:
      "Jaringan pengiriman yang mencakup kota-kota utama di seluruh Pulau Jawa, dari Jakarta hingga Surabaya.",
  },
  {
    icon: Shield,
    title: "Armada Terjamin",
    description:
      "Kontainer dan armada yang terawat dengan standar keamanan tinggi untuk keselamatan cargo Anda.",
  },
];

const services = [
  {
    icon: ContainerIcon,
    title: "FCL (Full Container Load)",
    description: "Pengiriman kontainer penuh 20ft & 40ft untuk volume besar.",
    href: "/services",
  },
  {
    icon: Package,
    title: "LCL (Less Container Load)",
    description: "Pengiriman parsial hemat biaya dengan sistem berbagi kontainer.",
    href: "/services",
  },
  {
    icon: Truck,
    title: "Door-to-Door",
    description: "Layanan pengambilan & pengantaran langsung ke lokasi tujuan.",
    href: "/services",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Fasilitas penyimpanan sementara di lokasi-lokasi strategis.",
    href: "/services",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Pengiriman Sukses", icon: CheckCircle },
  { value: 150, suffix: "+", label: "Klien Aktif", icon: Users },
  { value: 15, suffix: "+", label: "Rute Aktif", icon: Route },
  { value: 10, suffix: "+", label: "Tahun Pengalaman", icon: Calendar },
];

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/50 blur-[100px]" />
        </div>

        <Container className="relative z-10 pt-32 pb-20 lg:pt-28 lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Solusi Pengiriman{" "}
                <span className="text-primary">Kontainer</span>{" "}
                Nasional Terpercaya
              </h1>

              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                PT Diva Mutiara Logistik menyediakan jasa pengiriman kontainer
                domestik dengan harga kompetitif di rute-rute strategis. Layanan
                FCL & LCL untuk kebutuhan bisnis Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button href="/contact" variant="primary" size="lg">
                  Hubungi Kami
                  <ArrowRight size={18} />
                </Button>
                <Button
                  href="/services"
                  variant="whiteOutline"
                  size="lg"
                >
                  Lihat Layanan
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 lg:gap-10 justify-center lg:justify-start">
                {[
                  { value: "500+", label: "Pengiriman" },
                  { value: "150+", label: "Klien Aktif" },
                  { value: "15+", label: "Rute Jawa" },
                ].map((badge) => (
                  <div key={badge.label} className="text-center lg:text-left min-w-[90px] sm:min-w-0">
                    <div className="text-2xl font-bold text-white">
                      {badge.value}
                    </div>
                    <div className="text-white/50 text-sm">{badge.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right side — decorative container illustration */}
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((s, i) => (
                      <motion.div
                        key={s.title}
                        className="bg-white/5 rounded-2xl p-4 border border-white/5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <s.icon size={24} className="text-primary mb-2" />
                        <p className="text-white/80 text-sm font-medium">
                          {s.title.split(" (")[0]}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ========== VALUE PROPOSITION ========== */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <SectionHeading
            title="Mengapa Kami"
            subtitle="Keunggulan PT Diva Mutiara Logistik"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, i) => (
              <Card key={prop.title} delay={i * 0.1}>
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-5">
                  <prop.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== SERVICES PREVIEW ========== */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <Container>
          <SectionHeading
            title="Layanan Kami"
            subtitle="Solusi Pengiriman Kontainer Lengkap"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Card key={service.title} delay={i * 0.1} className="group relative">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon
                    size={24}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
                >
                  Selengkapnya <ArrowRight size={14} />
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== STATS COUNTER ========== */}
      <section className="py-20 lg:py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/50 rounded-full blur-[80px]" />
        </div>
        <Container className="relative z-10">
          <SectionHeading
            title="Track Record"
            subtitle="Dipercaya oleh Ratusan Perusahaan"
            light
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <stat.icon size={32} className="text-primary mx-auto mb-3" />
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-primary to-[#F47B2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        </div>
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Butuh Penawaran Harga Kompetitif?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Hubungi tim kami sekarang untuk konsultasi gratis dan dapatkan
              penawaran terbaik untuk pengiriman kontainer Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="white"
                size="lg"
              >
                Minta Penawaran
                <ArrowRight size={18} />
              </Button>
              <Button
                href="https://wa.me/62XXXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                variant="whiteOutline"
                size="lg"
              >
                Chat WhatsApp
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

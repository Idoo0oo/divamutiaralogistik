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
      "Penawaran harga logistik terbaik dan paling masuk akal, transparan tanpa biaya tersembunyi.",
  },
  {
    icon: MapPin,
    title: "Rute Fleksibel",
    description:
      "Spesialisasi pada mobilitas kontainer antar pelabuhan dan kawasan pergudangan untuk efisiensi waktu yang tinggi.",
  },
  {
    icon: Shield,
    title: "Armada Terjamin",
    description:
      "Kondisi truk dan sasis selalu terawat dengan standar keamanan tinggi untuk keselamatan kargo Anda.",
  },
];

const services = [
  {
    icon: ContainerIcon,
    title: "Port-to-Port",
    description: "Pengiriman kontainer antar pelabuhan utama secara cepat dan efisien.",
    href: "https://wa.me/62818851514?text=Halo%20admin%20Diva%20Mutiara%20Logistik%2C%20saya%20ingin%20konsultasi%20terkait%20pengiriman%20kontainer",
  },
  {
    icon: Warehouse,
    title: "Port-to-Warehouse",
    description: "Pengambilan kontainer dari pelabuhan untuk diantar langsung ke gudang Anda.",
    href: "https://wa.me/62818851514?text=Halo%20admin%20Diva%20Mutiara%20Logistik%2C%20saya%20ingin%20konsultasi%20terkait%20pengiriman%20kontainer",
  },
  {
    icon: Package,
    title: "Warehouse-to-Port",
    description: "Layanan muat kontainer dari gudang untuk diserahkan ke pihak pelabuhan.",
    href: "https://wa.me/62818851514?text=Halo%20admin%20Diva%20Mutiara%20Logistik%2C%20saya%20ingin%20konsultasi%20terkait%20pengiriman%20kontainer",
  },
  {
    icon: Truck,
    title: "Container Haulage",
    description: "Layanan angkutan truk kontainer handal untuk rute jarak dekat & menengah.",
    href: "https://wa.me/62818851514?text=Halo%20admin%20Diva%20Mutiara%20Logistik%2C%20saya%20ingin%20konsultasi%20terkait%20pengiriman%20kontainer",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Pengiriman Sukses", icon: CheckCircle },
  { value: 150, suffix: "+", label: "Klien Aktif", icon: Users },
  { value: 15, suffix: "+", label: "Rute Aktif", icon: Route },
  { value: 5, suffix: "+", label: "Tahun Pengalaman", icon: Calendar },
];

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero_bg_port.png"
            alt="Logistik Kontainer Pelabuhan"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
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

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] mb-6">
                Mitra Terpercaya{" "}
                <span className="text-primary">Logistik Kontainer</span>{" "}
                Anda
              </h1>

              <p className="text-base text-white/70 leading-relaxed mb-8 max-w-xl">
                PT Diva Mutiara Logistik hadir sebagai mitra logistik andalan Anda. Kami berspesialisasi dalam mobilitas kontainer darat antar pelabuhan dan area pergudangan, memastikan setiap pengiriman berjalan efisien, aman, dan tepat waktu.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  href="https://wa.me/62818851514?text=Halo%20admin%20Diva%20Mutiara%20Logistik%2C%20saya%20ingin%20konsultasi%20terkait%20pengiriman%20kontainer" 
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary" 
                  size="md"
                >
                  Konsultasi via WhatsApp
                  <ArrowRight size={18} />
                </Button>
              </div>

            </motion.div>

            {/* Right side — decorative container illustration & Trust Badges */}
            <motion.div
              className="flex flex-col items-center justify-center w-full gap-10 mt-10 lg:mt-0"
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

              {/* Trust Badges Restored Here */}
              <div className="flex flex-wrap gap-6 justify-center w-full max-w-lg bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
                {[
                  { value: "500+", label: "Pengiriman" },
                  { value: "150+", label: "Klien Aktif" },
                  { value: "20+", label: "Unit Armada" },
                  { value: "Rute", label: "Fleksibel" },
                ].map((badge) => (
                  <div key={badge.label} className="text-center flex-1 min-w-[80px] sm:min-w-0">
                    <div className="text-xl font-bold text-white mb-1">
                      {badge.value}
                    </div>
                    <div className="text-white/50 text-xs uppercase tracking-wider">{badge.label}</div>
                  </div>
                ))}
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

      {/* ========== SPESIALISASI RUTE ========== */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <Container>
          <SectionHeading
            title="Spesialisasi Rute"
            subtitle="Fokus Layanan Rute Pelabuhan"
          />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Rute Operasional Fleksibel
                </div>
                <h3 className="text-3xl font-bold mb-4">Pelabuhan <ArrowRight className="inline mx-2 text-primary" /> Gudang</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  Keahlian utama kami terletak pada pengiriman kontainer antar pelabuhan dan kawasan pergudangan secara tepat waktu. Dengan armada truk yang selalu siap (standby), kami menangani pergerakan kontainer Anda ke berbagai tujuan tanpa waktu tunggu yang lama.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Fleksibilitas rute pengiriman",
                    "Armada truk kontainer terawat",
                    "Supir berpengalaman di area pelabuhan",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="https://wa.me/62818851514?text=Halo%20admin%20Diva%20Mutiara%20Logistik%2C%20saya%20ingin%20konsultasi%20terkait%20pengiriman%20kontainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Pesan Rute Ini
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200"
            >
              <Image 
                src="/images/container_truck_port.jpg" 
                alt="Armada Truk Kontainer Diva Mutiara Logistik" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 lg:p-8 text-white">
                <p className="font-bold text-lg mb-1">Armada Siap Jalan</p>
                <p className="text-white/80 text-sm">Ilustrasi armada operasional standby kami</p>
              </div>
            </motion.div>
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
                href="https://wa.me/62818851514?text=Halo%20admin%20Diva%20Mutiara%20Logistik%2C%20saya%20ingin%20konsultasi%20terkait%20pengiriman%20kontainer"
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                size="lg"
              >
                Chat WhatsApp Admin
                <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

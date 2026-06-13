"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, Container as ContainerIcon, ArrowRight, Star, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";

const routes = [
  { city: "Jakarta", province: "DKI Jakarta", hub: true, transit: "Hub Utama", containers: "20ft, 40ft, LCL" },
  { city: "Surabaya", province: "Jawa Timur", hub: false, transit: "2-3 Hari", containers: "20ft, 40ft, LCL" },
  { city: "Semarang", province: "Jawa Tengah", hub: false, transit: "1-2 Hari", containers: "20ft, 40ft, LCL" },
  { city: "Bandung", province: "Jawa Barat", hub: false, transit: "1 Hari", containers: "20ft, 40ft, LCL" },
  { city: "Yogyakarta", province: "DIY", hub: false, transit: "1-2 Hari", containers: "20ft, 40ft, LCL" },
  { city: "Solo", province: "Jawa Tengah", hub: false, transit: "1-2 Hari", containers: "20ft, 40ft" },
  { city: "Cirebon", province: "Jawa Barat", hub: false, transit: "1 Hari", containers: "20ft, 40ft" },
  { city: "Surakarta", province: "Jawa Tengah", hub: false, transit: "1-2 Hari", containers: "20ft, 40ft" },
  { city: "Malang", province: "Jawa Timur", hub: false, transit: "2-3 Hari", containers: "20ft, 40ft" },
  { city: "Tangerang", province: "Banten", hub: false, transit: "Same Day", containers: "20ft, 40ft, LCL" },
  { city: "Bekasi", province: "Jawa Barat", hub: false, transit: "Same Day", containers: "20ft, 40ft, LCL" },
  { city: "Karawang", province: "Jawa Barat", hub: false, transit: "Same Day", containers: "20ft, 40ft, LCL" },
];

export default function RoutesPageClient() {
  return (
    <>
      {/* Page Hero */}
            <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero_bg_port.png"
            alt="Diva Mutiara Logistik"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: "Rute & Jangkauan" }]} />
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Rute & Jangkauan Nasional
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Jaringan pengiriman kontainer kami mencakup kota-kota utama di seluruh Pulau Jawa.
          </motion.p>
        </Container>
      </section>

      {/* Java Map Visual */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <SectionHeading title="Peta Jangkauan" subtitle="Cakupan Rute Pulau Jawa" />
          <motion.div
            className="relative bg-gradient-to-br from-navy to-navy-light rounded-3xl p-8 lg:p-12 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-[60px]" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary rounded-full blur-[80px]" />
            </div>

            {/* Stylized Map Placeholder */}
            <div className="relative min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
                {routes.map((route, i) => (
                  <motion.div
                    key={route.city}
                    className={`relative rounded-2xl p-4 text-center ${
                      route.hub
                        ? "bg-primary text-white col-span-1"
                        : "bg-white/10 text-white/80 hover:bg-white/20"
                    } transition-colors`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {route.hub && (
                      <Star size={14} className="absolute top-2 right-2" fill="white" />
                    )}
                    <MapPin size={20} className="mx-auto mb-1" />
                    <p className="font-bold text-sm">{route.city}</p>
                    <p className="text-xs opacity-70">{route.transit}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span>Hub Utama</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <div className="w-3 h-3 bg-white/20 rounded-full" />
                <span>Rute Aktif</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Zap size={12} />
                <span>Same Day: Jabodetabek & sekitarnya</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Route List */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <Container>
          <SectionHeading title="Detail Rute" subtitle="Kota Tujuan & Estimasi Waktu" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, i) => (
              <Card key={route.city} delay={i * 0.05} style={route.hub ? {border: "2px solid #E55C24"} : undefined}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-dark">{route.city}</h3>
                    <p className="text-sm text-gray-500">{route.province}</p>
                  </div>
                  {route.hub && (
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-semibold">
                      HUB
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={14} className="text-primary" />
                    <span>Transit: <strong>{route.transit}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ContainerIcon size={14} className="text-primary" />
                    <span>{route.containers}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-primary-50">
        <Container className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Zap size={32} className="text-primary mx-auto mb-3" />
            <h3 className="text-xl font-bold text-dark mb-2">Segera Hadir: Rute Luar Jawa</h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Kami terus memperluas jaringan pengiriman. Rute ke Sumatera, Kalimantan, dan Sulawesi segera tersedia.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-primary to-[#F47B2A]">
        <Container className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tanyakan Rute Anda</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Rute yang Anda butuhkan tidak ada di daftar? Hubungi kami untuk informasi rute khusus.
            </p>
            <Button href="/contact" variant="white" size="lg">
              Hubungi Kami <ArrowRight size={18} />
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

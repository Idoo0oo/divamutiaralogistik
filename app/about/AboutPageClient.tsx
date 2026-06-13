"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  Handshake,
  Lightbulb,
  ShieldCheck,
  FileText,
  Ruler,
  Weight,
  Box,
  ArrowRight,
  Truck,
  Users,
  Package,
  Settings,
  Maximize,
  Droplet,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";

const values = [
  { icon: ShieldCheck, title: "Integritas", description: "Jujur dan transparan dalam setiap aspek bisnis kami." },
  { icon: Award, title: "Keandalan", description: "Pengiriman tepat waktu dengan standar keamanan tinggi." },
  { icon: Lightbulb, title: "Inovasi", description: "Terus berinovasi untuk memberikan solusi logistik terbaik." },
  { icon: Handshake, title: "Kemitraan", description: "Membangun hubungan jangka panjang yang saling menguntungkan." },
];

const legality = [
  { title: "NPWP", value: "XX.XXX.XXX.X-XXX.XXX", icon: FileText },
  { title: "SIUP", value: "XXXXX/XX/XX/XXXX", icon: FileText },
  { title: "TDP", value: "XX.XX.X.XX.XXXXX", icon: FileText },
  { title: "Akta Notaris", value: "No. XX Tanggal XX/XX/XXXX", icon: FileText },
];

const fleet = [
  {
    title: "Truk Prime Mover (Head)",
    specs: [
      { icon: Truck, label: "Tipe", value: "Truk Penarik Heavy Duty" },
      { icon: ShieldCheck, label: "Perawatan", value: "Rutin & Berkala" },
      { icon: Users, label: "Driver", value: "Berpengalaman" },
    ],
    description: "Armada truk tangguh yang siap beroperasi di medan pelabuhan dan kawasan pergudangan industri dengan efisiensi tinggi.",
    color: "from-primary/10 to-primary/5",
  },
  {
    title: "Sasis Trailer 20ft & 40ft",
    specs: [
      { icon: Ruler, label: "Kapasitas", value: "20 Feet & 40 Feet" },
      { icon: Weight, label: "Muatan Maks", value: "Sesuai Standar Jalan" },
      { icon: ShieldCheck, label: "Keamanan", value: "Twist Lock Khusus" },
    ],
    description: "Sasis berkualitas tinggi untuk memastikan kontainer terkunci dengan sangat aman selama perjalanan pengiriman Anda.",
    color: "from-navy/10 to-navy/5",
  },
  {
    title: "Kontainer Dry Cargo (FCL)",
    specs: [
      { icon: Box, label: "Jenis", value: "General Cargo" },
      { icon: Ruler, label: "Ukuran", value: "20ft & 40ft Standard" },
      { icon: Package, label: "Cocok Untuk", value: "Barang Industri, Ritel" },
    ],
    description: "Kapasitas angkut unggulan kami untuk berbagai kontainer standar yang memuat barang-barang manufaktur umum.",
    color: "from-green-50 to-green-50/50",
  },
  {
    title: "Special Container Handling",
    specs: [
      { icon: Settings, label: "Reefer", value: "Kontainer Berpendingin" },
      { icon: Maximize, label: "Open Top", value: "Cargo Oversize" },
      { icon: Droplet, label: "ISO Tank", value: "Muatan Cair/Gas" },
    ],
    description: "Kemampuan armada kami untuk menarik dan menangani tipe kontainer khusus dengan keahlian dan penanganan ekstra hati-hati.",
    color: "from-emerald-50 to-emerald-50/50",
  },
];

export default function AboutPageClient() {
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
          <Breadcrumb items={[{ label: "Tentang Kami" }]} />
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Tentang PT Diva Mutiara Logistik
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Perusahaan jasa pengiriman kontainer terpercaya, melayani mobilitas kargo operasional antar pelabuhan dan kawasan pergudangan secara efisien.
          </motion.p>
        </Container>
      </section>

      {/* Company Profile */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative aspect-[4/3] bg-gradient-to-br from-primary-50 to-gray-100 rounded-3xl overflow-hidden flex items-center justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={48} className="text-primary" />
                </div>
                <p className="text-gray-500 text-sm">Company Photo</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-primary-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Profil Perusahaan
              </div>
              <h2 className="text-3xl font-bold text-dark mb-6">
                Mitra Andalan untuk Mobilitas Kontainer Anda
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  PT Diva Mutiara Logistik adalah mitra strategis untuk layanan mobilitas kontainer yang handal. Kami berpengalaman dalam memastikan kelancaran operasional pengiriman barang dari pelabuhan menuju berbagai titik gudang maupun sebaliknya.
                </p>
                <p>
                  Dengan armada yang terawat dan tim profesional, kami berkomitmen untuk memberikan layanan pengiriman yang aman, tepat waktu, dan dengan harga yang kompetitif di setiap rute yang kami layani.
                </p>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-sm font-semibold text-dark mb-1">Visi</p>
                <p className="text-sm text-gray-600">Menjadi perusahaan logistik kontainer domestik terdepan di Indonesia yang dikenal atas keandalannya.</p>
                <p className="text-sm font-semibold text-dark mb-1 mt-3">Misi</p>
                <p className="text-sm text-gray-600">Menyediakan layanan pengiriman kontainer yang aman, efisien, dan terjangkau dengan mengutamakan kepuasan pelanggan.</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Legality */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <Container>
          <SectionHeading title="Legalitas" subtitle="Dokumen Resmi Perusahaan" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {legality.map((doc, i) => (
              <Card key={doc.title} delay={i * 0.1} className="text-center">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <doc.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-2">{doc.title}</h3>
                <p className="text-sm text-gray-500 font-mono">{doc.value}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Corporate Values */}
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading title="Nilai Perusahaan" subtitle="Prinsip yang Kami Pegang" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Card key={value.title} delay={i * 0.1} className="text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Fleet & Containers */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <Container>
          <SectionHeading title="Armada & Kemampuan" subtitle="Armada Truk & Jenis Kontainer yang Kami Tangani" />
          <div className="grid md:grid-cols-2 gap-8">
            {fleet.map((item, i) => (
              <Card key={item.title} delay={i * 0.1} className={`bg-gradient-to-br ${item.color} !shadow-md`}>
                <h3 className="text-xl font-bold text-dark mb-4">{item.title}</h3>
                <div className="space-y-3 mb-4">
                  {item.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <spec.icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">{spec.label}</span>
                        <p className="text-sm font-semibold text-dark">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-primary to-[#F47B2A]">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Bermitra dengan Kami?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Hubungi kami untuk konsultasi gratis dan dapatkan solusi pengiriman terbaik.
            </p>
            <Button 
              href="https://wa.me/62818851514?text=Halo%20admin%20Diva%20Mutiara%20Logistik%2C%20saya%20ingin%20konsultasi%20terkait%20pengiriman%20kontainer" 
              target="_blank"
              rel="noopener noreferrer"
              variant="white" 
              size="lg"
            >
              Chat via WhatsApp <ArrowRight size={18} />
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

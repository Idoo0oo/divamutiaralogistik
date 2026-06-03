"use client";

import { motion } from "framer-motion";
import {
  Container as ContainerIcon,
  Package,
  Truck,
  Warehouse,
  FileCheck,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  ClipboardList,
  CalendarCheck,
  PackageCheck,
  Ship,
  PartyPopper,
  Shield,
  Eye,
  Users,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: ContainerIcon,
    title: "FCL (Full Container Load)",
    description: "Pengiriman menggunakan kontainer penuh, tersedia ukuran 20ft dan 40ft untuk kebutuhan volume besar.",
    features: [
      "Kontainer 20ft (33 CBM) & 40ft (67 CBM)",
      "Pengiriman dedicated tanpa berbagi",
      "Keamanan cargo lebih terjamin",
      "Cocok untuk volume di atas 15 CBM",
    ],
  },
  {
    icon: Package,
    title: "LCL (Less Container Load)",
    description: "Pengiriman parsial dengan sistem berbagi kontainer, solusi hemat untuk volume kecil hingga menengah.",
    features: [
      "Minimum pengiriman 1 CBM",
      "Berbagi kontainer untuk efisiensi biaya",
      "Cocok untuk UKM dan pengiriman reguler",
      "Jadwal konsolidasi rutin",
    ],
  },
  {
    icon: Truck,
    title: "Door-to-Door Delivery",
    description: "Layanan pengambilan dari lokasi pengirim dan pengantaran langsung ke lokasi tujuan.",
    features: [
      "Pengambilan dari gudang/pabrik",
      "Pengantaran langsung ke tujuan",
      "Tracking real-time",
      "Satu PIC untuk setiap pengiriman",
    ],
  },
  {
    icon: Warehouse,
    title: "Warehousing & Storage",
    description: "Fasilitas penyimpanan sementara di lokasi strategis untuk kebutuhan distribusi Anda.",
    features: [
      "Gudang di lokasi strategis Jakarta",
      "Keamanan 24/7 dengan CCTV",
      "Manajemen inventory",
      "Loading & unloading termasuk",
    ],
  },
  {
    icon: FileCheck,
    title: "Custom Clearance",
    description: "Pengurusan dokumen dan perizinan pengiriman untuk memastikan kelancaran proses pengiriman.",
    features: [
      "Pengurusan surat jalan",
      "Dokumen pengiriman lengkap",
      "Koordinasi dengan pihak terkait",
      "Konsultasi regulasi pengiriman",
    ],
  },
];

const processSteps = [
  { icon: MessageSquare, title: "Konsultasi", desc: "Diskusi kebutuhan pengiriman Anda" },
  { icon: ClipboardList, title: "Penawaran", desc: "Harga transparan dan kompetitif" },
  { icon: CalendarCheck, title: "Booking", desc: "Jadwal pengiriman dikonfirmasi" },
  { icon: PackageCheck, title: "Loading", desc: "Cargo dimuat dengan aman" },
  { icon: Ship, title: "Pengiriman", desc: "Proses pengiriman dipantau" },
  { icon: PartyPopper, title: "Delivered", desc: "Cargo sampai dengan selamat" },
];

const whyUs = [
  { icon: Shield, title: "Keamanan Terjamin", description: "Cargo diasuransikan dan ditangani dengan standar keamanan tinggi." },
  { icon: Eye, title: "Harga Transparan", description: "Tidak ada biaya tersembunyi. Semua biaya diinformasikan di awal." },
  { icon: Users, title: "Tim Berpengalaman", description: "Tim profesional yang siap membantu setiap kebutuhan logistik Anda." },
];

export default function ServicesPageClient() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary rounded-full blur-[100px]" />
        </div>
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: "Layanan" }]} />
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Layanan Pengiriman Kontainer
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Solusi pengiriman kontainer lengkap untuk kebutuhan bisnis Anda di seluruh Pulau Jawa.
          </motion.p>
        </Container>
      </section>

      {/* Services Detail */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="space-y-8">
            {services.map((service, i) => (
              <Card key={service.title} delay={i * 0.08} className="p-0 overflow-hidden" style={{padding: 0}}>
                <div className="grid md:grid-cols-[1fr,1.5fr] gap-0">
                  <div className="bg-gradient-to-br from-primary-50 to-white p-8 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="p-8 border-t md:border-t-0 md:border-l border-gray-100">
                    <p className="text-sm font-semibold text-dark mb-4 uppercase tracking-wider">Fitur Layanan</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Flow */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <Container>
          <SectionHeading title="Proses Kerja" subtitle="Alur Pengiriman Kami" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-3 border border-gray-100">
                    <step.icon size={28} className="text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white rounded-full text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h4 className="font-bold text-dark text-sm mb-1">{step.title}</h4>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading title="Keunggulan" subtitle="Mengapa Memilih Kami" />
          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <Card key={item.title} delay={i * 0.1} className="text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-primary to-[#F47B2A]">
        <Container className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Konsultasi Gratis</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Diskusikan kebutuhan pengiriman Anda dengan tim kami dan dapatkan penawaran harga terbaik.
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

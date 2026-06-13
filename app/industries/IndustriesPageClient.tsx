"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ShoppingCart, 
  Factory, 
  HardHat, 
  Leaf, 
  Cpu, 
  Globe,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Briefcase
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";

const industries = [
  {
    title: "FMCG & Ritel",
    icon: ShoppingCart,
    description: "Distribusi barang konsumsi yang cepat dan aman dari pelabuhan menuju berbagai pusat distribusi ritel.",
    features: ["Pengiriman tepat waktu", "Penanganan kargo sensitif waktu", "Kapasitas angkut besar"],
    color: "from-blue-50 to-blue-50/50",
    iconColor: "text-blue-500",
  },
  {
    title: "Manufaktur & Otomotif",
    icon: Factory,
    description: "Layanan logistik andal untuk komponen pabrik, mesin, dan suku cadang industri otomotif.",
    features: ["Pengamanan kargo bernilai", "Rute langsung ke kawasan industri", "Dukungan rantai pasok"],
    color: "from-primary-50 to-primary-50/50",
    iconColor: "text-primary",
  },
  {
    title: "Konstruksi & Infrastruktur",
    icon: HardHat,
    description: "Pengangkutan material bangunan berat, baja, semen, dan peralatan konstruksi dari pelabuhan.",
    features: ["Armada heavy-duty", "Penanganan muatan berat", "Sopir berpengalaman"],
    color: "from-orange-50 to-orange-50/50",
    iconColor: "text-orange-500",
  },
  {
    title: "Agrikultur & Komoditas",
    icon: Leaf,
    description: "Mobilitas hasil bumi, pupuk, dan komoditas pertanian lainnya dengan aman menuju gudang penyimpanan.",
    features: ["Kontainer standar & khusus", "Penjadwalan fleksibel", "Kapasitas muat maksimal"],
    color: "from-green-50 to-green-50/50",
    iconColor: "text-green-500",
  },
  {
    title: "Elektronik & Teknologi",
    icon: Cpu,
    description: "Pengiriman barang elektronik bernilai tinggi dengan pengamanan ekstra ketat selama di jalan.",
    features: ["Keamanan tingkat tinggi", "Twist-lock khusus", "Asuransi pengiriman"],
    color: "from-purple-50 to-purple-50/50",
    iconColor: "text-purple-500",
  },
  {
    title: "Ekspor Impor (General Trading)",
    icon: Globe,
    description: "Dukungan operasional darat untuk segala jenis barang komersial dan konsolidasi kargo umum.",
    features: ["Layanan Port-to-Warehouse", "Penanganan dokumen", "Koordinasi pelabuhan"],
    color: "from-navy/10 to-navy/5",
    iconColor: "text-navy",
  },
];

export default function IndustriesPageClient() {
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
          <Breadcrumb items={[{ label: "Sektor Industri" }]} />
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Sektor Industri yang Kami Layani
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Armada truk kami siap mendukung mobilitas berbagai jenis kargo dari beragam sektor industri, memastikan rantai pasok Anda tidak pernah terputus.
          </motion.p>
        </Container>
      </section>

      {/* Industry Grid */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <Container>
          <SectionHeading 
            title="Dukungan Industri" 
            subtitle="Solusi Mobilitas Kontainer untuk Berbagai Sektor" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <Card 
                key={industry.title} 
                delay={i * 0.1} 
                className={`bg-gradient-to-br ${industry.color} hover:-translate-y-2 transition-transform duration-300`}
              >
                <div className={`w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6`}>
                  <industry.icon size={28} className={industry.iconColor} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{industry.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <ul className="space-y-2 border-t border-black/5 pt-4">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="bg-navy rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px]" />
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Keamanan & Kecepatan untuk Setiap Kargo
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Apapun jenis industri Anda, PT Diva Mutiara Logistik menjamin bahwa setiap kontainer diperlakukan dengan standar keamanan tertinggi dan diantar tepat waktu.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 flex-1 backdrop-blur-sm border border-white/10">
                    <ShieldCheck size={24} className="text-primary mb-2" />
                    <h4 className="text-white font-bold text-sm mb-1">Aman Terkendali</h4>
                    <p className="text-white/60 text-xs">Penanganan profesional</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 flex-1 backdrop-blur-sm border border-white/10">
                    <Clock size={24} className="text-primary mb-2" />
                    <h4 className="text-white font-bold text-sm mb-1">Tepat Waktu</h4>
                    <p className="text-white/60 text-xs">Operasional efisien</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 flex-1 backdrop-blur-sm border border-white/10">
                    <MapPin size={24} className="text-primary mb-2" />
                    <h4 className="text-white font-bold text-sm mb-1">Jangkauan Luas</h4>
                    <p className="text-white/60 text-xs">Akses rute fleksibel</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 flex-1 backdrop-blur-sm border border-white/10">
                    <Briefcase size={24} className="text-primary mb-2" />
                    <h4 className="text-white font-bold text-sm mb-1">Solusi B2B</h4>
                    <p className="text-white/60 text-xs">Kemitraan jangka panjang</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <Image 
                  src="/images/truck_industrial_park.png"
                  alt="Operasional Logistik di Kawasan Industri"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-primary to-[#F47B2A]">
        <Container className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Konsultasikan Kebutuhan Industri Anda</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Setiap industri memiliki tantangan logistik yang berbeda. Hubungi kami untuk mendapatkan solusi mobilitas kontainer yang disesuaikan dengan kebutuhan Anda.
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

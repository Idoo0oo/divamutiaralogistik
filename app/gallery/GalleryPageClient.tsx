"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Truck, Container as ContainerIcon, Settings, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import LightboxModal from "@/components/ui/LightboxModal";

const categories = [
  { id: "all", label: "Semua", icon: Camera },
  { id: "fleet", label: "Armada", icon: Truck },
  { id: "container", label: "Kontainer", icon: ContainerIcon },
  { id: "operations", label: "Operasional", icon: Settings },
];

// Placeholder gallery items — will use colored placeholder boxes
const galleryItems = [
  { id: 1, category: "fleet", title: "Armada Truk Kontainer", color: "from-blue-500 to-blue-700" },
  { id: 2, category: "container", title: "Kontainer 20ft", color: "from-orange-500 to-orange-700" },
  { id: 3, category: "operations", title: "Proses Loading", color: "from-green-500 to-green-700" },
  { id: 4, category: "fleet", title: "Truk Trailer", color: "from-indigo-500 to-indigo-700" },
  { id: 5, category: "container", title: "Kontainer 40ft", color: "from-red-500 to-red-700" },
  { id: 6, category: "operations", title: "Warehouse", color: "from-teal-500 to-teal-700" },
  { id: 7, category: "fleet", title: "Armada di Depo", color: "from-sky-500 to-sky-700" },
  { id: 8, category: "container", title: "Container Yard", color: "from-amber-500 to-amber-700" },
  { id: 9, category: "operations", title: "Tim Operasional", color: "from-cyan-500 to-cyan-700" },
];

export default function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const lightboxImages = filtered.map((item) => ({
    src: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${item.color.includes('blue') ? '#3b82f6' : item.color.includes('orange') ? '#f97316' : item.color.includes('green') ? '#22c55e' : item.color.includes('indigo') ? '#6366f1' : item.color.includes('red') ? '#ef4444' : item.color.includes('teal') ? '#14b8a6' : item.color.includes('sky') ? '#0ea5e9' : item.color.includes('amber') ? '#f59e0b' : '#06b6d4'}"/><stop offset="100%" style="stop-color:${item.color.includes('blue') ? '#1d4ed8' : item.color.includes('orange') ? '#c2410c' : item.color.includes('green') ? '#15803d' : item.color.includes('indigo') ? '#4338ca' : item.color.includes('red') ? '#b91c1c' : item.color.includes('teal') ? '#0f766e' : item.color.includes('sky') ? '#0369a1' : item.color.includes('amber') ? '#d97706' : '#0e7490'}"/></linearGradient></defs><rect fill="url(#g)" width="800" height="600"/><text x="400" y="300" text-anchor="middle" dy=".35em" fill="white" font-size="24" font-family="sans-serif">${item.title}</text></svg>`)}`,
    alt: item.title,
  }));

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
          <Breadcrumb items={[{ label: "Galeri" }]} />
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Galeri & Dokumentasi
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Dokumentasi visual armada, kontainer, dan aktivitas operasional kami.
          </motion.p>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-24">
        <Container>
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveCategory(cat.id);
                  }
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <cat.icon size={16} />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
            layout
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => {
                  setCurrentImageIndex(i);
                  setLightboxOpen(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setCurrentImageIndex(i);
                    setLightboxOpen(true);
                  }
                }}
              >
                <div
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${item.color}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Camera
                        size={32}
                        className="mx-auto mb-2 opacity-50"
                      />
                      <p className="text-sm font-medium opacity-80">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Lihat
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: "20+", label: "Unit Armada" },
              { value: "100+", label: "Kontainer" },
              { value: "2", label: "Gudang" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-primary to-[#F47B2A]">
        <Container className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ingin Lihat Langsung?</h2>
            <p className="text-white/80 text-lg mb-8">Kunjungi kantor operasional kami atau hubungi via WhatsApp untuk informasi lebih lanjut.</p>
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

      {/* Lightbox */}
      <LightboxModal
        images={lightboxImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentImageIndex((prev) => Math.min(prev + 1, filtered.length - 1))}
        onPrev={() => setCurrentImageIndex((prev) => Math.max(prev - 1, 0))}
      />
    </>
  );
}

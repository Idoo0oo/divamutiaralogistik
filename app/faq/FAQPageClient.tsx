"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HelpCircle, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";

interface FAQPageClientProps {
  items: { q: string; a: string }[];
}

export default function FAQPageClient({ items }: FAQPageClientProps) {
  const faqForAccordion = items.map((item) => ({
    question: item.q,
    answer: item.a,
  }));

  // Split into categories
  const categories = [
    { title: "Umum & Layanan Utama", items: faqForAccordion.slice(0, 4) },
    { title: "Operasional & Jangkauan", items: faqForAccordion.slice(4, 7) },
    { title: "Keamanan & Pembayaran", items: faqForAccordion.slice(7, 10) },
  ];

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
          <Breadcrumb items={[{ label: "FAQ" }]} />
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Pertanyaan Umum (FAQ)
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Temukan jawaban untuk pertanyaan yang sering ditanyakan seputar layanan pengiriman kontainer kami.
          </motion.p>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                    <HelpCircle size={20} className="text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-dark">{cat.title}</h2>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6">
                  <Accordion items={cat.items} />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-primary to-[#F47B2A]">
        <Container className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pertanyaan Lain?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Tidak menemukan jawaban yang Anda cari? Hubungi tim kami langsung untuk bantuan lebih lanjut.
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

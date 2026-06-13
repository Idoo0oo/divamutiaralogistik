"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, Building2, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";



export default function ContactPageClient() {
  const [form, setForm] = useState({
    name: "", company: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Halo Tim Diva Mutiara Logistik,\n\nSaya ingin berkonsultasi mengenai pengiriman kontainer.\n\n*Nama:* ${form.name}\n*Perusahaan:* ${form.company || '-'}\n\n*Pesan / Kebutuhan:*\n${form.message}`
    );
    window.open(`https://wa.me/62818851514?text=${msg}`, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
          <Breadcrumb items={[{ label: "Hubungi Kami" }]} />
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hubungi Kami
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Konsultasi gratis untuk kebutuhan pengiriman kontainer Anda.
          </motion.p>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-dark mb-6">Mulai Konsultasi</h2>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100" id="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Perusahaan (Opsional)
                  </label>
                  <input
                    id="company" name="company" type="text" value={form.company} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark"
                    placeholder="PT. Perusahaan Anda"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan & Kebutuhan *
                  </label>
                  <textarea
                    id="message" name="message" rows={5} required value={form.message} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark resize-none"
                    placeholder="Ceritakan detail rute atau kebutuhan mobilitas kontainer Anda..."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full justify-center mt-2">
                  <Send size={18} className="mr-2" />
                  Kirim Pesan via WhatsApp
                </Button>
              </form>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Kantor Terdaftar</h3>
                    <p className="text-gray-600 text-sm">Cimone Mas Permai 2, Jl. Dilli Blok C 11 No.5, Tangerang, Banten</p>
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Kantor Operasional</h3>
                    <p className="text-gray-600 text-sm">Jl. Sukapura, Kec. Cilincing, Jakarta Utara, DKI Jakarta 14140</p>
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Telepon</h3>
                    <a href="tel:+62818851514" className="text-primary font-medium text-sm hover:underline">+62-818-851-514</a>
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Email</h3>
                    <a href="mailto:support@divamutiaralogistik.com" className="text-primary font-medium text-sm hover:underline">support@divamutiaralogistik.com</a>
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Jam Operasional</h3>
                    <p className="text-gray-600 text-sm">Senin – Jumat: 09:00 – 17:00 WIB</p>
                    <p className="text-gray-400 text-xs mt-1">Sabtu, Minggu & Hari Libur: Tutup</p>
                  </div>
                </div>
              </Card>

              {/* Quick WhatsApp */}
              <Button
                href="https://wa.me/62818851514"
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                className="w-full"
              >
                <MessageCircle size={20} />
                Chat WhatsApp Langsung
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Google Maps */}
      <section className="pb-20 lg:pb-24">
        <Container>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.84401213908!2d106.9362210744091!3d-6.151639960296736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b007fc91e13%3A0xf5a2530962e89b1!2sGarasi%20Marsk!5e0!3m2!1sid!2sid!4v1781353732531!5m2!1sid!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor Operasional PT Diva Mutiara Logistik"
              className="w-full"
            />
          </div>
        </Container>
      </section>
    </>
  );
}

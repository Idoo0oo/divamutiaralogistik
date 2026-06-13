"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Building2, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "FCL (Full Container Load)",
  "LCL (Less Container Load)",
  "Door-to-Door Delivery",
  "Warehousing & Storage",
  "Custom Clearance",
  "Lainnya",
];

export default function ContactPageClient() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Halo PT Diva Mutiara Logistik,\n\nNama: ${form.name}\nEmail: ${form.email}\nNo. HP: ${form.phone}\nPerusahaan: ${form.company}\nLayanan: ${form.service}\n\nPesan:\n${form.message}\n\nTerima kasih.`
    );
    window.open(`https://wa.me/62818851514?text=${msg}`, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary rounded-full blur-[100px]" />
        </div>
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
              <h2 className="text-2xl font-bold text-dark mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      No. Handphone *
                    </label>
                    <input
                      id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark"
                      placeholder="08XX-XXXX-XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nama Perusahaan
                    </label>
                    <input
                      id="company" name="company" type="text" value={form.company} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark"
                      placeholder="PT. Company"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Layanan yang Dibutuhkan
                  </label>
                  <select
                    id="service" name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark bg-white"
                  >
                    <option value="">Pilih layanan...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Pesan *
                  </label>
                  <textarea
                    id="message" name="message" rows={4} required value={form.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark resize-none"
                    placeholder="Detail kebutuhan pengiriman Anda..."
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  <Send size={18} />
                  Kirim via WhatsApp
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

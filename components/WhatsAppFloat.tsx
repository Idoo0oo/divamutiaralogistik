"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "62818851514"; // Placeholder
  const message = encodeURIComponent(
    "Halo PT Diva Mutiara Logistik, saya ingin menanyakan informasi tentang layanan pengiriman kontainer. Terima kasih."
  );
  const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-shadow group"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Hubungi kami via WhatsApp"
        >


          {/* Icon */}
          <span className="relative flex items-center justify-center w-14 h-14 shrink-0">
            <MessageCircle size={28} fill="white" stroke="white" />
          </span>

          {/* Label — visible on desktop hover */}
          <span className="hidden lg:block text-sm font-semibold opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] transition-all duration-300 overflow-hidden whitespace-nowrap">
            <span className="pr-6 pl-1 inline-block">Chat WhatsApp</span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

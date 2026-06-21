"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence  } from 'framer-motion';
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "./ui/Button";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/services" },
  { label: "Tentang", href: "/about" },
  { label: "Industri", href: "/industries" },
  { label: "Galeri", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <m.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="PT Diva Mutiara Logistik - Home">
              <Image
                src="/logo-dml.svg"
                alt="PT Diva Mutiara Logistik"
                width={160}
                height={62}
                className={`h-10 lg:h-12 w-auto transition-all duration-300 ${
                  scrolled ? "" : "brightness-0 invert"
                }`}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      active
                        ? scrolled
                          ? "text-primary"
                          : "text-white"
                        : scrolled
                          ? "text-gray-700 hover:text-primary hover:bg-primary-50"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full"
                        style={{ backgroundColor: "#E55C24" }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                href="/contact"
                variant={scrolled ? "primary" : "whiteOutline"}
                size="sm"
              >
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                scrolled
                  ? "text-dark hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </m.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <m.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <m.div
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <Image
                    src="/logo-dml.svg"
                    alt="PT Diva Mutiara Logistik"
                    width={120}
                    height={47}
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-gray-500 hover:text-dark cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex-1 py-4" aria-label="Mobile navigation">
                  {navLinks.map((link, index) => (
                    <m.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-6 py-3 text-gray-700 hover:text-primary hover:bg-primary-50 font-medium transition-colors"
                      >
                        {link.label}
                      </Link>
                    </m.div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-gray-100">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => setMobileOpen(false)}
                  >
                    Hubungi Kami
                  </Button>
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

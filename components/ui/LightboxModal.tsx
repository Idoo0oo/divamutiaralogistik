"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function LightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && images[currentIndex] && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white/60 text-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Previous button */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Image */}
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          {currentIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

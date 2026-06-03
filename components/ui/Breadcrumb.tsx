import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      <Link
        href="/"
        className="flex items-center gap-1 text-white/60 hover:text-white transition-colors"
      >
        <Home size={14} />
        <span>Beranda</span>
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <ChevronRight size={14} className="text-white/40" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-white/60 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

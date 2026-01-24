"use client";

import Link from "next/link";
import { GraduationCap, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Matematik Dersi", href: "/ozel-ders/matematik" },
    { name: "Fen Bilimleri", href: "/ozel-ders/fen-bilimleri" },
    { name: "Yazılım Eğitimi", href: "/ozel-ders/yazilim" },
    { name: "Sınav Koçluğu", href: "/sinav-koclugu" },
    { name: "Yabancı Dil", href: "/ozel-ders/yabanci-dil" },
  ],
  exams: [
    { name: "LGS Koçluğu", href: "/sinav-koclugu/lgs" },
    { name: "TYT Koçluğu", href: "/sinav-koclugu/tyt" },
    { name: "AYT Koçluğu", href: "/sinav-koclugu/ayt" },
    { name: "Tüm Dersler", href: "/ozel-ders" },
  ],
  company: [
    { name: "Hakkımızda", href: "/#about" },
    { name: "Blog", href: "/blog" },
    { name: "Başarı Hikayeleri", href: "/blog" },
    { name: "Kariyer", href: "/iletisim" },
  ],
  support: [
    { name: "İletişim", href: "/#contact" },
    { name: "SSS", href: "/blog" },
    { name: "Gizlilik Politikası", href: "#" },
    { name: "Kullanım Koşulları", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-card-foreground">MatÖzel</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Ortaokul ve lise öğrencileri için birebir özel ders, sınav koçluğu ve yazılım eğitimi. Türkiye geneli aynı gün kaynak temini.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Hizmetler</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Kurumsal</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Destek</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 MatÖzel. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-muted-foreground">
            Türkiye&apos;nin 81 iline aynı gün kaynak gönderimi
          </p>
        </div>
      </div>
    </footer>
  );
}

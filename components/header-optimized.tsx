"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { MegaMenu, MobileMenu } from "@/components/mega-menu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">MatÖzel</span>
          </Link>

          <MegaMenu />

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Giriş Yap
            </Button>
            <Button size="sm">Ücretsiz Dene</Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </header>
  );
}

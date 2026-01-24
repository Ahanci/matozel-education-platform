"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { levels, exams, cities, allSubjects } from "@/lib/data";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Atom,
  Leaf,
  Globe,
  Clock,
  Brain,
  Languages,
  Heart,
  Landmark,
  Users,
  Code,
  BookText,
  Triangle,
  ChevronDown,
  GraduationCap,
  MapPin,
  FileText,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Calculator,
  FlaskConical,
  Atom,
  Leaf,
  Globe,
  Clock,
  Brain,
  Languages,
  Heart,
  Landmark,
  Users,
  Code,
  BookText,
  Triangle,
};

interface MegaMenuProps {
  className?: string;
}

export function MegaMenu({ className }: MegaMenuProps) {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  return (
    <nav className={cn("hidden lg:flex items-center gap-1", className)}>
      {/* Dersler */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("dersler")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-secondary">
          <BookOpen className="w-4 h-4" />
          Dersler
          <ChevronDown className="w-4 h-4" />
        </button>
        {activeMenu === "dersler" && (
          <div className="absolute top-full left-0 mt-1 w-[600px] bg-card rounded-xl shadow-xl border p-6 z-50">
            <div className="grid grid-cols-3 gap-4">
              {allSubjects.slice(0, 12).map((subject) => {
                const Icon = iconMap[subject.icon] || BookOpen;
                return (
                  <Link
                    key={subject.slug}
                    href={`/ozel-ders/${subject.slug}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{subject.name}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {subject.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Link
                href="/ozel-ders"
                className="text-sm text-primary hover:underline font-medium"
              >
                Tüm Dersleri Gör →
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Seviyeler */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("seviyeler")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-secondary">
          <GraduationCap className="w-4 h-4" />
          Seviyeler
          <ChevronDown className="w-4 h-4" />
        </button>
        {activeMenu === "seviyeler" && (
          <div className="absolute top-full left-0 mt-1 w-[500px] bg-card rounded-xl shadow-xl border p-6 z-50">
            <div className="grid grid-cols-2 gap-6">
              {/* Ortaokul */}
              <div>
                <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Ortaokul
                </h3>
                <div className="space-y-2">
                  {levels.ortaokul.grades.map((grade) => (
                    <Link
                      key={grade.slug}
                      href={`/ozel-ders/matematik/${grade.slug}`}
                      className="block px-3 py-2 text-sm rounded-lg hover:bg-secondary transition-colors"
                    >
                      {grade.name}
                    </Link>
                  ))}
                  <div className="pt-2 mt-2 border-t">
                    <Link
                      href="/ozel-ders/matematik/lgs"
                      className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      LGS Hazırlık
                    </Link>
                  </div>
                </div>
              </div>

              {/* Lise */}
              <div>
                <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Lise
                </h3>
                <div className="space-y-2">
                  {levels.lise.grades.map((grade) => (
                    <Link
                      key={grade.slug}
                      href={`/ozel-ders/matematik/${grade.slug}`}
                      className="block px-3 py-2 text-sm rounded-lg hover:bg-secondary transition-colors"
                    >
                      {grade.name}
                    </Link>
                  ))}
                  <div className="pt-2 mt-2 border-t space-y-2">
                    <Link
                      href="/ozel-ders/matematik/tyt"
                      className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      TYT Hazırlık
                    </Link>
                    <Link
                      href="/ozel-ders/matematik/ayt"
                      className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-accent/10 text-accent font-medium hover:bg-accent/20 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      AYT Hazırlık
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sınavlar */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("sinavlar")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-secondary">
          <FileText className="w-4 h-4" />
          Sınavlar
          <ChevronDown className="w-4 h-4" />
        </button>
        {activeMenu === "sinavlar" && (
          <div className="absolute top-full left-0 mt-1 w-[700px] bg-card rounded-xl shadow-xl border p-6 z-50">
            <div className="grid grid-cols-3 gap-6">
              {/* LGS */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="font-bold text-accent">LGS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">LGS</h3>
                    <p className="text-xs text-muted-foreground">8. Sınıf</p>
                  </div>
                </div>
                <div className="space-y-1">
                  {exams.lgs.subjects.map((subject) => {
                    const Icon = iconMap[subject.icon] || BookOpen;
                    return (
                      <Link
                        key={subject.slug}
                        href={`/ozel-ders/${subject.slug}/lgs`}
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-secondary transition-colors"
                      >
                        <Icon className="w-4 h-4 text-muted-foreground" />
                        {subject.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* TYT */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">TYT</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">TYT</h3>
                    <p className="text-xs text-muted-foreground">9-12. Sınıf</p>
                  </div>
                </div>
                <div className="space-y-1">
                  {exams.tyt.subjects.map((subject) => {
                    const Icon = iconMap[subject.icon] || BookOpen;
                    return (
                      <Link
                        key={subject.slug}
                        href={`/ozel-ders/${subject.slug}/tyt`}
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-secondary transition-colors"
                      >
                        <Icon className="w-4 h-4 text-muted-foreground" />
                        {subject.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* AYT */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-chart-3/20 flex items-center justify-center">
                    <span className="font-bold text-chart-3">AYT</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">AYT</h3>
                    <p className="text-xs text-muted-foreground">11-12. Sınıf</p>
                  </div>
                </div>
                <div className="space-y-1">
                  {exams.ayt.subjects.map((subject) => {
                    const Icon = iconMap[subject.icon] || BookOpen;
                    return (
                      <Link
                        key={subject.slug}
                        href={`/ozel-ders/${subject.slug}/ayt`}
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-secondary transition-colors"
                      >
                        <Icon className="w-4 h-4 text-muted-foreground" />
                        {subject.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Şehirler */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("sehirler")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-secondary">
          <MapPin className="w-4 h-4" />
          Şehirler
          <ChevronDown className="w-4 h-4" />
        </button>
        {activeMenu === "sehirler" && (
          <div className="absolute top-full left-0 mt-1 w-[400px] bg-card rounded-xl shadow-xl border p-6 z-50">
            <h3 className="font-semibold text-sm mb-4">Hizmet Verdiğimiz Şehirler</h3>
            <div className="grid grid-cols-2 gap-2">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/ozel-ders/matematik/${city.slug}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-secondary transition-colors"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sınav Koçluğu */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("kocluk")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-secondary">
          <Users className="w-4 h-4" />
          Sınav Koçluğu
          <ChevronDown className="w-4 h-4" />
        </button>
        {activeMenu === "kocluk" && (
          <div className="absolute top-full left-0 mt-1 w-[300px] bg-card rounded-xl shadow-xl border p-4 z-50">
            <div className="space-y-2">
              <Link
                href="/sinav-koclugu"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Tüm Koçluk Hizmetleri</p>
                  <p className="text-xs text-muted-foreground">Genel bakış</p>
                </div>
              </Link>
              <Link
                href="/sinav-koclugu/lgs"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="font-bold text-accent text-sm">LGS</span>
                </div>
                <div>
                  <p className="font-medium text-sm">LGS Koçluğu</p>
                  <p className="text-xs text-muted-foreground">8. Sınıf</p>
                </div>
              </Link>
              <Link
                href="/sinav-koclugu/tyt"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <span className="font-bold text-blue-600 text-sm">TYT</span>
                </div>
                <div>
                  <p className="font-medium text-sm">TYT Koçluğu</p>
                  <p className="text-xs text-muted-foreground">9-12. Sınıf</p>
                </div>
              </Link>
              <Link
                href="/sinav-koclugu/ayt"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="font-bold text-purple-600 text-sm">AYT</span>
                </div>
                <div>
                  <p className="font-medium text-sm">AYT Koçluğu</p>
                  <p className="text-xs text-muted-foreground">11-12. Sınıf</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Blog */}
      <Link
        href="/blog"
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
      >
        <BookText className="w-4 h-4" />
        Blog
      </Link>

      {/* Yazılım */}
      <Link
        href="/ozel-ders/yazilim"
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
      >
        <Code className="w-4 h-4" />
        Yazılım
      </Link>
    </nav>
  );
}

// Mobile Menu
export function MobileMenu() {
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="lg:hidden py-4 space-y-2">
      {/* Dersler */}
      <div>
        <button
          onClick={() => toggleSection("dersler")}
          className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg hover:bg-secondary"
        >
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Dersler
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform",
              openSection === "dersler" && "rotate-180"
            )}
          />
        </button>
        {openSection === "dersler" && (
          <div className="mt-2 ml-4 space-y-1">
            {allSubjects.slice(0, 10).map((subject) => (
              <Link
                key={subject.slug}
                href={`/ozel-ders/${subject.slug}`}
                className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary"
              >
                {subject.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Sınavlar */}
      <div>
        <button
          onClick={() => toggleSection("sinavlar")}
          className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg hover:bg-secondary"
        >
          <span className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Sınavlar
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform",
              openSection === "sinavlar" && "rotate-180"
            )}
          />
        </button>
        {openSection === "sinavlar" && (
          <div className="mt-2 ml-4 space-y-1">
            <Link
              href="/ozel-ders/matematik/lgs"
              className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary font-medium text-accent"
            >
              LGS Hazırlık
            </Link>
            <Link
              href="/ozel-ders/matematik/tyt"
              className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary font-medium text-primary"
            >
              TYT Hazırlık
            </Link>
            <Link
              href="/ozel-ders/matematik/ayt"
              className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary font-medium text-chart-3"
            >
              AYT Hazırlık
            </Link>
          </div>
        )}
      </div>

      {/* Seviyeler */}
      <div>
        <button
          onClick={() => toggleSection("seviyeler")}
          className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg hover:bg-secondary"
        >
          <span className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Seviyeler
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform",
              openSection === "seviyeler" && "rotate-180"
            )}
          />
        </button>
        {openSection === "seviyeler" && (
          <div className="mt-2 ml-4 space-y-1">
            <p className="px-4 py-1 text-xs font-semibold text-muted-foreground">
              Ortaokul
            </p>
            {levels.ortaokul.grades.map((grade) => (
              <Link
                key={grade.slug}
                href={`/ozel-ders/matematik/${grade.slug}`}
                className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary"
              >
                {grade.name}
              </Link>
            ))}
            <p className="px-4 py-1 text-xs font-semibold text-muted-foreground mt-2">
              Lise
            </p>
            {levels.lise.grades.map((grade) => (
              <Link
                key={grade.slug}
                href={`/ozel-ders/matematik/${grade.slug}`}
                className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary"
              >
                {grade.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Şehirler */}
      <div>
        <button
          onClick={() => toggleSection("sehirler")}
          className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg hover:bg-secondary"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Şehirler
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform",
              openSection === "sehirler" && "rotate-180"
            )}
          />
        </button>
        {openSection === "sehirler" && (
          <div className="mt-2 ml-4 grid grid-cols-2 gap-1">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/ozel-ders/matematik/${city.slug}`}
                className="block px-4 py-2 text-sm rounded-lg hover:bg-secondary"
              >
                {city.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Yazılım */}
      <Link
        href="/ozel-ders/yazilim"
        className="flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg hover:bg-secondary"
      >
        <Code className="w-4 h-4" />
        Yazılım Eğitimi
      </Link>
    </div>
  );
}

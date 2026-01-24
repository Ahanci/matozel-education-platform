"use client";

import React from "react"

import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/button";
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
  MapPin,
  GraduationCap,
  FileText,
  CheckCircle,
  Phone,
} from "lucide-react";
import type { Subject, City, Exam } from "@/lib/data";

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

interface SubjectHeroProps {
  subject: Subject;
  city?: City | null;
  exam?: Exam | null;
  grade?: { slug: string; name: string; number: number } | null;
}

export function SubjectHero({ subject, city, exam, grade }: SubjectHeroProps) {
  const Icon = iconMap[subject.icon] || BookOpen;

  // Build title
  let title = `${subject.name} Özel Ders`;
  let subtitle = subject.description;

  if (exam) {
    title = `${subject.name} ${exam.name} Hazırlık`;
    subtitle = `${exam.fullName} sınavına hazırlık için birebir özel ders`;
  }

  if (grade) {
    title = `${grade.name} ${subject.name} Özel Ders`;
    subtitle = `${grade.name} müfredatına uygun, kişiselleştirilmiş eğitim`;
  }

  // Build breadcrumb
  const breadcrumbs = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Özel Ders", href: "/ozel-ders" },
    { name: subject.name, href: `/ozel-ders/${subject.slug}` },
  ];

  if (exam) {
    breadcrumbs.push({
      name: exam.name,
      href: `/ozel-ders/${subject.slug}/${exam.slug}`,
    });
  }

  if (grade) {
    breadcrumbs.push({
      name: grade.name,
      href: `/ozel-ders/${subject.slug}/${grade.slug}`,
    });
  }

  if (city) {
    breadcrumbs.push({
      name: city.name,
      href: `/ozel-ders/${subject.slug}/${city.slug}`,
    });
  }

  return (
    <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Meteors number={20} />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap"
        >
          {breadcrumbs.map((item, index) => (
            <span key={item.name} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              <a
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            </span>
          ))}
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              {exam && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <FileText className="w-4 h-4" />
                  {exam.name} Hazırlık
                </span>
              )}
              {grade && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  <GraduationCap className="w-4 h-4" />
                  {grade.name}
                </span>
              )}
              {city && (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  {city.name}
                </span>
              )}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              {subtitle}
            </motion.p>

            {/* Features */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              {[
                "Deneyimli ve alanında uzman eğitmenler",
                "Birebir veya online ders seçeneği",
                "Kişiselleştirilmiş ders programı",
                "Düzenli performans takibi",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Hemen Ara
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                Ücretsiz Deneme Dersi
              </Button>
            </motion.div>
          </div>

          {/* Icon Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon className="w-32 h-32 text-primary" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 flex items-center justify-center">
                {exam && <FileText className="w-12 h-12 text-accent" />}
                {grade && !exam && (
                  <GraduationCap className="w-12 h-12 text-accent" />
                )}
                {!exam && !grade && <CheckCircle className="w-12 h-12 text-accent" />}
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Users className="w-10 h-10 text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

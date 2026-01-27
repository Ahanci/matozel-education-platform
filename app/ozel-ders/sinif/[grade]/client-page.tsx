"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { levels, allSubjects, exams } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
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
  ArrowRight,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { notFound } from "next/navigation";

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

interface GradeLevelClientPageProps {
  gradeSlug: string;
}

export function GradeLevelClientPage({ gradeSlug }: GradeLevelClientPageProps) {
  const allGrades = [...levels.ortaokul.grades, ...levels.lise.grades];
  const gradeData = allGrades.find((g) => g.slug === gradeSlug);

  if (!gradeData) {
    notFound();
  }

  // Determine if high school or middle school to show relevant exams
  const isLise = levels.lise.grades.some((g) => g.slug === gradeSlug);
  const relevantExams = isLise ? [exams.tyt, exams.ayt] : [exams.lgs];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              {gradeData.name} Öğrencileri İçin
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {gradeData.name} Özel Ders ile
              <span className="text-primary block mt-2">
                Geleceğini Şekillendir
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              {gradeData.name} müfredatına %100 uygun, sınav odaklı ve kazanım
              temelli birebir özel ders programları.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">
                Ücretsiz Deneme Dersi
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
                asChild
              >
                <Link href="/iletisim">Programa Başla</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dersler Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              {gradeData.name} Dersleri
            </h2>
            <p className="text-muted-foreground">
              İhtiyacın olan tüm derslerde uzman desteği
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allSubjects.slice(0, 9).map((subject, index) => {
              const Icon = iconMap[subject.icon] || BookOpen;
              return (
                <motion.div
                  key={subject.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/ozel-ders/${subject.slug}/${gradeSlug}`}>
                    <Card className="p-6 h-full hover:border-primary/50 transition-colors group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {subject.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {subject.description}
                      </p>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sınav Hazırlık Banner */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">
                  Hedefin Sınavlar mı?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {relevantExams.map((e) => e.name).join(" ve ")} sınavlarına
                  şimdiden hazırlık yapmaya başla, rakiplerinin önüne geç.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Yeni nesil soru çözüm teknikleri</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Zaman yönetimi ve sınav stratejileri</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Kişiye özel çalışma planı</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  {relevantExams.map((exam) => (
                    <Button key={exam.slug} asChild variant="default">
                      <Link href={`/sinav-koclugu/${exam.slug}`}>
                        {exam.name} Paketleri
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <GraduationCap className="w-64 h-64 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

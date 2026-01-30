"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { levels, allSubjects, exams, cities } from "@/lib/data";
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
  MapPin,
  Star,
  Target,
  TrendingUp,
  FileText,
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

  const isLise = levels.lise.grades.some((g) => g.slug === gradeSlug);
  const relevantExams = isLise ? [exams.tyt, exams.ayt] : [exams.lgs];

  const level = isLise ? levels.lise : levels.ortaokul;

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

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Users, value: "500+", label: "Mutlu Öğrenci" },
              { icon: Star, value: "4.9/5", label: "Müşteri Puanı" },
              { icon: TrendingUp, value: "%95", label: "Başarı Oranı" },
              { icon: Target, value: "24/7", label: "Destek" },
            ].map((stat, index) => (
              <Card
                key={stat.label}
                className="text-center border-none shadow-lg"
              >
                <div className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <stat.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <p className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </Card>
            ))}
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
            {level.subjects.map((subject, index) => {
              const fullSubject = allSubjects.find(
                (s) => s.slug === subject.slug,
              );
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
                        {fullSubject?.description || subject.slug}
                      </p>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lokasyon Seçimi */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {gradeData.name} Özel Ders Hizmet Verdiğimiz Şehirler
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Türkiye'nin 81 ilinde {gradeData.name} öğrencileri için birebir
              özel ders hizmeti
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {cities.map((city) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link href={`/ozel-ders/konum/${city.slug}`}>
                  <Card className="p-4 text-center hover:border-primary/50 transition-colors group">
                    <MapPin className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="font-medium text-sm">{city.name}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Öğrenci Yorumları */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              {gradeData.name} Öğrencilerimizden Yorumlar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Binlerce öğrenci başarı hikayesi, yüzlerce memnun veli
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Ahmet Y.",
                grade: "11. Sınıf",
                subject: "Matematik",
                text: "Matematik korkumu yendim! Öğretmenim konuları çok net anlatıyor.",
                rating: 5,
              },
              {
                name: "Elif K.",
                grade: "8. Sınıf",
                subject: "Fen Bilimleri",
                text: "LGS hazırlık sürecinde çok destek oldular, hedef okulumu kazandım!",
                rating: 5,
              },
              {
                name: "Mehmet D.",
                grade: "12. Sınıf",
                subject: "Fizik",
                text: "AYT fizik sorularında büyük ilerleme kaydettim. Teşekkürler!",
                rating: 5,
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-none shadow-lg">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {review.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {review.grade} - {review.subject}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sınav Hazırlık Banner */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Sınav Hazırlık
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Hedefin {relevantExams.map((e) => e.name).join(" & ")} mı?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {gradeData.name} öğrencileri için{" "}
                  {relevantExams.map((e) => e.fullName).join(" ve ")}{" "}
                  sınavlarına şimdiden hazırlık yapmaya başla, rakiplerinin
                  önüne geç.
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
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Aynı gün kaynak temini</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  {relevantExams.map((exam) => (
                    <Button key={exam.slug} asChild size="lg" variant="default">
                      <Link href={`/ozel-ders/${exam.slug}`}>
                        {exam.name} Özel Ders
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <GraduationCap className="w-64 h-64 text-primary/20" />
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center">
                    <Target className="w-10 h-10 text-accent" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

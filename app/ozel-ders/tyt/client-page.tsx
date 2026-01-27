"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cities, exams } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  MapPin,
  CheckCircle2,
  Award,
  Clock,
  Users,
  Star,
  Target,
  TrendingUp,
  Quote,
  Play,
  BarChart3,
  GraduationCap,
  Calendar,
  MessageSquare,
  ChevronRight,
  ArrowUp,
  Sparkles,
  Zap,
} from "lucide-react";

const tytSubjects = [
  {
    slug: "turkce",
    name: "Türkçe",
    questions: 40,
    icon: BookOpen,
    color: "bg-red-500",
    price: "600",
  },
  {
    slug: "matematik",
    name: "Matematik",
    questions: 40,
    icon: Calculator,
    color: "bg-blue-500",
    price: "700",
  },
  {
    slug: "fen-bilimleri",
    name: "Fen Bilimleri",
    questions: 20,
    icon: FlaskConical,
    color: "bg-green-500",
    price: "650",
  },
  {
    slug: "sosyal-bilimler",
    name: "Sosyal Bilimler",
    questions: 20,
    icon: Globe,
    color: "bg-amber-500",
    price: "550",
  },
];

const teachers = [
  {
    name: "Mehmet Özkan",
    subject: "Matematik",
    rating: 4.9,
    students: 200,
    experience: "12 yıl",
  },
  {
    name: "Ayşe Yıldız",
    subject: "Türkçe",
    rating: 5.0,
    students: 180,
    experience: "15 yıl",
  },
  {
    name: "Caner Erkin",
    subject: "Fen Bilimleri",
    rating: 4.8,
    students: 150,
    experience: "10 yıl",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Birebir Eğitim",
    desc: "Tamamen kişiselleştirilmiş çalışma programı",
  },
  {
    icon: Clock,
    title: "Esnek Zaman",
    desc: "Size uygun saatlerde ders alma imkanı",
  },
  {
    icon: Target,
    title: "Hedef Odaklı",
    desc: "Net hedeflerinize özel program",
  },
  {
    icon: TrendingUp,
    title: "Sürekli İlerleme",
    desc: "Haftalık takip ve analiz",
  },
];

const studyPlan = [
  {
    phase: "Başlangıç",
    focus: "Konu anlatımı ve temel kavramlar",
    duration: "1-2 ay",
  },
  {
    phase: "Geliştirme",
    focus: "Soru çözümü ve pekiştirme",
    duration: "2-3 ay",
  },
  {
    phase: "Yoğunlaşma",
    focus: "Deneme sınavları ve analiz",
    duration: "1-2 ay",
  },
  { phase: "Final", focus: "Son tekrar ve strateji", duration: "1 ay" },
];

export default function TYTOzelDersClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-background to-green-500/5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium mb-6">
              Üniversite Sınavı Birinci Aşama
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              TYT Özel Ders ile
              <span className="text-blue-600 block mt-2">
                Üniversite Kapılarını Aç
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Uzman TYT koçlarımızla birebir özel ders. Türkçe, Matematik, Fen
              ve Sosyal dersler için alanında uzman öğretmenler.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="text-lg px-8 bg-blue-600 hover:bg-blue-700"
              >
                Ücretsiz Deneme Dersi
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
                asChild
              >
                <Link href="/iletisim">İletişime Geç</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              TYT Dersleri
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Her ders için uzman öğretmenler ve kişiselleştirilmiş eğitim
              programı
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tytSubjects.map((subject, index) => (
              <motion.div
                key={subject.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all group h-full">
                  <div className="flex flex-col">
                    <div
                      className={`w-14 h-14 ${subject.color} rounded-xl flex items-center justify-center text-white mb-4`}
                    >
                      <subject.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {subject.questions} Soru
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-2xl font-bold text-blue-600">
                          {subject.price}
                        </span>
                        <span className="text-muted-foreground">₺/saat</span>
                      </div>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href={`/ozel-ders/${subject.slug}/tyt`}>
                          Ders Al
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Neden MatÖzel TYT Özel Ders?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Uzman Öğretmenlerimiz
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Alanında deneyimli, öğrenci odaklı öğretmenler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {teacher.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {teacher.name}
                  </h3>
                  <p className="text-blue-600 text-sm mb-3">
                    {teacher.subject}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">
                      {teacher.rating}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    {teacher.experience} deneyim
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {teacher.students} öğrenci
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              TYT Hazırlık Planı
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              4 aşamalı sistematik TYT hazırlık programı
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {studyPlan.map((plan, index) => (
              <motion.div
                key={plan.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-32">
                      <span className="font-semibold text-blue-600">
                        {plan.phase}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground">{plan.focus}</p>
                    </div>
                    <div className="md:w-24 text-right">
                      <span className="text-sm text-muted-foreground">
                        {plan.duration}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hizmet Verdiğimiz Şehirler
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Türkiye'nin 81 ilinde yapay zeka destekli online özel ders hizmeti
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {cities.map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 text-center hover:shadow-md transition-all cursor-pointer group">
                  <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground">
                    {city.name}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-green-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ücretsiz Deneme Dersi Hemen Al
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              TYT başarınızı artırın. İlk ders tamamen ücretsiz!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="text-lg px-8 bg-blue-600 hover:bg-blue-700"
              >
                Ücretsiz Ders Rezervasyonu
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
              >
                0850 XXX XX XX
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

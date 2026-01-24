"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  BookOpen,
  Target,
  Clock,
  TrendingUp,
  CheckCircle2,
  Users,
  Calendar,
  Award,
  FileText,
  Truck,
  MapPin,
} from "lucide-react";
import Link from "next/link";



const lgsSubjects = [
  { name: "Türkçe", questions: 20, icon: BookOpen, color: "bg-red-500" },
  { name: "Matematik", questions: 20, icon: Target, color: "bg-blue-500" },
  {
    name: "Fen Bilimleri",
    questions: 20,
    icon: TrendingUp,
    color: "bg-green-500",
  },
  {
    name: "T.C. İnkılap Tarihi",
    questions: 10,
    icon: FileText,
    color: "bg-amber-500",
  },
  {
    name: "Din Kültürü",
    questions: 10,
    icon: BookOpen,
    color: "bg-purple-500",
  },
  { name: "Yabancı Dil", questions: 10, icon: Users, color: "bg-teal-500" },
];

const packages = [
  {
    name: "LGS Başlangıç",
    price: "2.500",
    duration: "Aylık",
    features: [
      "Haftada 4 saat birebir ders",
      "Konu anlatımı ve soru çözümü",
      "Haftalık ödev takibi",
      "Online deneme sınavları",
      "WhatsApp destek hattı",
    ],
  },
  {
    name: "LGS Yoğun",
    price: "4.500",
    duration: "Aylık",
    popular: true,
    features: [
      "Haftada 8 saat birebir ders",
      "Tüm dersler dahil",
      "Günlük çalışma programı",
      "Haftalık deneme sınavları",
      "Aynı gün kaynak temini",
      "7/24 soru çözüm desteği",
      "Veli bilgilendirme raporları",
    ],
  },
  {
    name: "LGS Garanti",
    price: "7.500",
    duration: "Aylık",
    features: [
      "Haftada 12 saat birebir ders",
      "Kişisel koç eşliğinde çalışma",
      "Birebir motivasyon desteği",
      "Sınırsız deneme sınavı",
      "Aynı gün kaynak temini",
      "Psikolojik destek danışmanlığı",
      "Başarı garantisi",
    ],
  },
];

const studyPlan = [
  {
    month: "Eylül-Ekim",
    focus: "Temel kavramlar ve konu taraması",
    intensity: 60,
  },
  {
    month: "Kasım-Aralık",
    focus: "Konu pekiştirme ve soru tipleri",
    intensity: 75,
  },
  {
    month: "Ocak-Şubat",
    focus: "Yoğun soru çözümü ve denemeler",
    intensity: 85,
  },
  { month: "Mart-Nisan", focus: "Eksik konu tamamlama", intensity: 90 },
  {
    month: "Mayıs-Haziran",
    focus: "Son tekrar ve mental hazırlık",
    intensity: 100,
  },
];

export default function LGSKocluguPage() {
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
              8. Sınıf Öğrencileri İçin
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              LGS Sınav Koçluğu ile
              <span className="text-primary block mt-2">
                Hayalindeki Liseye Ulaş
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Deneyimli LGS koçlarımız eşliğinde, kişiselleştirilmiş çalışma
              programı ve birebir takip ile hedefine en kısa yoldan ulaş.
              Türkiye genelinde aynı gün kaynak temini.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="#paketler">Paketleri İncele</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
                asChild
              >
                <Link href="/iletisim">Ücretsiz Danışmanlık</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "500+", label: "LGS Öğrencisi" },
                { value: "%92", label: "Başarı Oranı" },
                { value: "50+", label: "LGS Koçu" },
                { value: "81 İl", label: "Kaynak Teslimatı" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kaynak Temini Banner */}
      <section className="py-12 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Truck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Aynı Gün Kaynak Temini</h3>
                <p className="text-white/80">
                  Türkiye'nin 81 iline aynı gün kargo ile kaynak gönderimi
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5" />
              <span>
                İstanbul, Ankara, İzmir ve tüm illere ekspres teslimat
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LGS Dersleri */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              LGS Sınav Yapısı
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Toplam 90 soru, 120 dakika süre. Her ders için uzman koçlarımızla
              çalışın.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lgsSubjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${subject.color} rounded-xl flex items-center justify-center text-white`}
                    >
                      <subject.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {subject.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {subject.questions} Soru
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link
                      href={`/ozel-ders/${subject.name.toLowerCase().replace(/\s+/g, "-").replace(/ü/g, "u").replace(/ö/g, "o").replace(/ı/g, "i").replace(/ş/g, "s").replace(/ç/g, "c").replace(/ğ/g, "g")}/lgs`}
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      LGS {subject.name} Dersi Al →
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Çalışma Planı */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Yıllık LGS Çalışma Planı
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aylık hedefler ve yoğunluk planı ile sistematik LGS hazırlığı
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {studyPlan.map((plan, index) => (
              <motion.div
                key={plan.month}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-32">
                      <span className="font-semibold text-primary">
                        {plan.month}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground">{plan.focus}</p>
                    </div>
                    <div className="md:w-48">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${plan.intensity}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-12">
                          %{plan.intensity}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Paketler */}
      <section id="paketler" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              LGS Koçluk Paketleri
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hedefinize ve bütçenize uygun paketi seçin, hemen başlayın.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`p-8 h-full flex flex-col ${pkg.popular ? "border-primary shadow-lg scale-105" : ""}`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm rounded-full">
                      En Popüler
                    </span>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-primary">
                        {pkg.price}
                      </span>
                      <span className="text-muted-foreground">
                        ₺/{pkg.duration}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-6"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Hemen Başla
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              LGS Yolculuğuna Bugün Başla
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Ücretsiz seviye tespit sınavı ve danışmanlık görüşmesi ile
              hedeflerinizi belirleyelim. Türkiye'nin her yerine aynı gün kaynak
              gönderimi ile hiç zaman kaybetmeyin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">
                Ücretsiz Kayıt Ol
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

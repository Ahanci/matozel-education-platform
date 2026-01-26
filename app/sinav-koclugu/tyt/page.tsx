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
  Calculator,
  Atom,
  Globe,
  Truck,
  MapPin,
  Award,
} from "lucide-react";
import Link from "next/link";



const tytSubjects = [
  {
    name: "Türkçe",
    questions: 40,
    icon: BookOpen,
    color: "bg-red-500",
    href: "/ozel-ders/turkce/tyt",
  },
  {
    name: "Matematik",
    questions: 40,
    icon: Calculator,
    color: "bg-blue-500",
    href: "/ozel-ders/matematik/tyt",
  },
  {
    name: "Fen Bilimleri",
    questions: 20,
    icon: Atom,
    color: "bg-green-500",
    href: "/ozel-ders/fen-bilimleri/tyt",
  },
  {
    name: "Sosyal Bilimler",
    questions: 20,
    icon: Globe,
    color: "bg-amber-500",
    href: "/ozel-ders/sosyal-bilimler/tyt",
  },
];

const packages = [
  {
    name: "TYT Temel",
    price: "3.000",
    duration: "Aylık",
    features: [
      "Haftada 6 saat birebir ders",
      "2 ders seçimi",
      "Haftalık deneme sınavları",
      "Konu takip sistemi",
      "Online soru bankası erişimi",
    ],
  },
  {
    name: "TYT Tam Paket",
    price: "5.500",
    duration: "Aylık",
    popular: true,
    features: [
      "Haftada 10 saat birebir ders",
      "4 ders dahil (Türkçe, Mat, Fen, Sosyal)",
      "Günlük çalışma programı",
      "Aynı gün kaynak temini - 81 il",
      "Haftalık TYT denemeleri",
      "7/24 soru çözüm desteği",
      "Veli bilgilendirme sistemi",
    ],
  },
  {
    name: "TYT Premium",
    price: "8.500",
    duration: "Aylık",
    features: [
      "Haftada 15 saat birebir ders",
      "Tüm dersler + AYT entegrasyonu",
      "Kişisel koç ve mentor desteği",
      "Sınırsız deneme sınavı",
      "Aynı gün kaynak temini",
      "Motivasyon ve psikolojik destek",
      "Üniversite tercih danışmanlığı",
    ],
  },
];

const examInfo = {
  totalQuestions: 120,
  duration: "135 dakika",
  coefficient: "TYT puanı toplam puanın %40'ını oluşturur",
};

export default function TYTKocluguPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
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
              TYT Sınav Koçluğu ile
              <span className="text-blue-600 block mt-2">
                Üniversite Kapılarını Aç
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Temel Yeterlilik Testi'nde maksimum puan için stratejik hazırlık.
              Uzman koçlarımız ve Türkiye geneli aynı gün kaynak teslimatı ile
              fark yarat.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="text-lg px-8 bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <Link href="#paketler">Paketleri İncele</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
                asChild
              >
                <Link href="/iletisim">Bilgi Alın</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "1000+", label: "TYT Öğrencisi" },
                { value: "420+", label: "Ortalama TYT Puanı" },
                { value: "80+", label: "Uzman Koç" },
                { value: "81 İl", label: "Aynı Gün Teslimat" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">
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
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Truck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  Türkiye Geneli Aynı Gün Kaynak Gönderimi
                </h3>
                <p className="text-white/80">
                  81 ile aynı gün kargo - En güncel TYT kaynakları kapınızda
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5" />
              <span>Tüm büyükşehirlere ekspres teslimat</span>
            </div>
          </div>
        </div>
      </section>

      {/* TYT Sınav Yapısı */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              TYT Sınav Yapısı
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Toplam {examInfo.totalQuestions} soru, {examInfo.duration}.{" "}
              {examInfo.coefficient}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tytSubjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all group h-full">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 ${subject.color} rounded-2xl flex items-center justify-center text-white mb-4`}
                    >
                      <subject.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {subject.questions} Soru
                    </p>
                    <Link
                      href={subject.href}
                      className="text-blue-600 text-sm font-medium hover:underline"
                    >
                      TYT {subject.name} Dersi →
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TYT Stratejileri */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MatÖzel TYT Stratejileri
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Başarılı TYT hazırlığı için kanıtlanmış yöntemlerimiz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Hedef Odaklı Çalışma",
                desc: "Net hedefler ve haftalık kontrol noktaları ile ilerleme takibi",
              },
              {
                icon: Clock,
                title: "Zaman Yönetimi",
                desc: "135 dakikada 120 soruyu çözmek için pratik ve strateji",
              },
              {
                icon: TrendingUp,
                title: "Deneme Analizi",
                desc: "Her deneme sonrası detaylı analiz ve eksik belirleme",
              },
              {
                icon: BookOpen,
                title: "Kaynak Optimizasyonu",
                desc: "Seviyeye uygun kaynak seçimi ve aynı gün teslimat",
              },
              {
                icon: Users,
                title: "Birebir Koçluk",
                desc: "Kişiselleştirilmiş ders programı ve motivasyon desteği",
              },
              {
                icon: Award,
                title: "Başarı Garantisi",
                desc: "Hedef puana ulaşamazsanız ek destek garantisi",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
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
              TYT Koçluk Paketleri
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              İhtiyacınıza uygun paketi seçin, üniversite yolculuğunuza
              başlayın.
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
                className="relative"
              >
                <Card
                  className={`p-8 h-full flex flex-col ${pkg.popular ? "border-blue-600 shadow-lg scale-105" : ""}`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm rounded-full">
                      En Popüler
                    </span>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-blue-600">
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
                    className={`w-full mt-6 ${pkg.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
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
      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-green-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              TYT Başarısı İçin İlk Adımı At
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Seviye tespit sınavı ile mevcut durumunuzu öğrenin.
              Türkiye'nin her köşesine aynı gün kaynak gönderimi ile zaman
              kaybetmeyin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="text-lg px-8 bg-blue-600 hover:bg-blue-700"
              >
                Hemen Başvur
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

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  BookOpen,
  Target,
  CheckCircle2,
  Calculator,
  Atom,
  Globe,
  Truck,
  MapPin,
  Award,
  Beaker,
  Leaf,
  Triangle,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { Meteors } from "@/components/ui/meteors";



const aytSayisal = [
  { name: "Matematik", questions: 40, icon: Calculator, color: "bg-blue-500", href: "/ozel-ders/matematik/ayt" },
  { name: "Geometri", questions: 10, icon: Triangle, color: "bg-indigo-500", href: "/ozel-ders/geometri/ayt" },
  { name: "Fizik", questions: 14, icon: Atom, color: "bg-orange-500", href: "/ozel-ders/fizik/ayt" },
  { name: "Kimya", questions: 13, icon: Beaker, color: "bg-green-500", href: "/ozel-ders/kimya/ayt" },
  { name: "Biyoloji", questions: 13, icon: Leaf, color: "bg-emerald-500", href: "/ozel-ders/biyoloji/ayt" },
];

const aytSozel = [
  { name: "Edebiyat", questions: 24, icon: BookOpen, color: "bg-red-500", href: "/ozel-ders/edebiyat/ayt" },
  { name: "Tarih", questions: 10, icon: FileText, color: "bg-amber-500", href: "/ozel-ders/tarih/ayt" },
  { name: "Coğrafya", questions: 6, icon: Globe, color: "bg-teal-500", href: "/ozel-ders/cografya/ayt" },
];

const packages = [
  {
    name: "AYT Sayısal",
    price: "4.000",
    duration: "Aylık",
    features: [
      "Haftada 8 saat birebir ders",
      "Mat, Geo, Fizik, Kimya, Bio",
      "Haftalık AYT denemeleri",
      "Konu bazlı soru bankası",
      "Aynı gün kaynak temini",
      "7/24 soru desteği",
    ],
  },
  {
    name: "AYT Eşit Ağırlık",
    price: "5.500",
    duration: "Aylık",
    popular: true,
    features: [
      "Haftada 10 saat birebir ders",
      "TYT + AYT entegre program",
      "Matematik + Edebiyat odaklı",
      "Günlük çalışma programı",
      "Aynı gün kaynak temini - 81 il",
      "Haftalık deneme + analiz",
      "Tercih danışmanlığı",
    ],
  },
  {
    name: "AYT Sözel",
    price: "3.500",
    duration: "Aylık",
    features: [
      "Haftada 8 saat birebir ders",
      "Edebiyat, Tarih, Coğrafya",
      "Paragraf ve yorum teknikleri",
      "Haftalık denemeler",
      "Aynı gün kaynak temini",
      "Eser okuma programı",
    ],
  },
];

export default function AYTKocluguPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-background to-pink-500/5" />
        <Meteors number={15} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-600 rounded-full text-sm font-medium mb-6">
              Üniversite Sınavı İkinci Aşama
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              AYT Sınav Koçluğu ile
              <span className="text-purple-600 block mt-2">Hayalindeki Bölüme Yerleş</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Alan Yeterlilik Testi'nde yüksek puan için uzmanlaşmış koçluk. 
              Sayısal, Sözel ve Eşit Ağırlık alanlarında Türkiye'nin en iyi koçları ile çalışın.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="#paketler">Paketleri İncele</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/iletisim">Ücretsiz Danışmanlık</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "800+", label: "AYT Öğrencisi" },
                { value: "Top 10K", label: "Başarılı Yerleşim" },
                { value: "100+", label: "Alan Uzmanı Koç" },
                { value: "81 İl", label: "Aynı Gün Teslimat" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kaynak Temini Banner */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Truck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Aynı Gün Kaynak Gönderimi</h3>
                <p className="text-white/80">AYT kaynakları aynı gün kargoda - Türkiye'nin her yerine</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5" />
              <span>81 ile ekspres teslimat garantisi</span>
            </div>
          </div>
        </div>
      </section>

      {/* AYT Sayısal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AYT Sayısal Dersler
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mühendislik, Tıp ve Fen Bilimleri için sayısal alan dersleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {aytSayisal.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all group h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-14 h-14 ${subject.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                      <subject.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-600 transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{subject.questions} Soru</p>
                    <Link
                      href={subject.href}
                      className="text-purple-600 text-sm font-medium hover:underline"
                    >
                      Ders Al →
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AYT Sözel */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AYT Sözel Dersler
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hukuk, İktisat ve Sosyal Bilimler için sözel alan dersleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {aytSozel.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all group h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-14 h-14 ${subject.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                      <subject.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-purple-600 transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{subject.questions} Soru</p>
                    <Link
                      href={subject.href}
                      className="text-purple-600 text-sm font-medium hover:underline"
                    >
                      Ders Al →
                    </Link>
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
              AYT Koçluk Paketleri
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Alanınıza uygun paketi seçin, hedef bölümünüze ulaşın.
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
                <Card className={`p-8 h-full flex flex-col ${pkg.popular ? "border-purple-600 shadow-lg scale-105" : ""}`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 text-white text-sm rounded-full">
                      En Popüler
                    </span>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-purple-600">{pkg.price}</span>
                      <span className="text-muted-foreground">₺/{pkg.duration}</span>
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
                    className={`w-full mt-6 ${pkg.popular ? "bg-purple-600 hover:bg-purple-700" : ""}`} 
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
      <section className="py-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AYT Başarısı İçin Doğru Adres
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Ücretsiz alan belirleme danışmanlığı ile size en uygun programı oluşturalım.
              Türkiye geneli aynı gün kaynak gönderimi ile hiç zaman kaybetmeyin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700">
                Ücretsiz Kayıt Ol
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
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

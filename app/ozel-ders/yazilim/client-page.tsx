"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code,
  Terminal,
  Cpu,
  Globe,
  Database,
  Smartphone,
  CheckCircle2,
  Video,
  Award,
  Zap,
} from "lucide-react";

const courses = [
  {
    title: "Algoritma ve Mantık",
    description: "Kodlamanın temelleri, blok tabanlı kodlama (Scratch) ve problem çözme becerileri.",
    icon: Cpu,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Python ile Kodlama",
    description: "Dünyanın en popüler dili ile programlamaya giriş, veri analizi ve yapay zeka temelleri.",
    icon: Terminal,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Web Geliştirme",
    description: "HTML, CSS ve JavaScript ile kendi web siteni ve oyununu tasarla.",
    icon: Globe,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Robotik Kodlama",
    description: "Arduino ve temel elektronik ile kodları fiziksel dünyada çalıştır.",
    icon: Zap,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

export function SoftwarePageClient() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-background to-purple-500/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Code className="w-5 h-5 text-indigo-600" />
              <span className="inline-block px-4 py-2 bg-indigo-500/10 text-indigo-600 rounded-full text-sm font-medium">
                Geleceğin Dili Kodlama
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Online Birebir
              <span className="text-indigo-600 block mt-2">Yazılım Özel Dersleri</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Uzman mühendisler eşliğinde, çocuğunuzun geleceğini kodlamayla şekillendirin. 
              Sadece kod yazmayı değil, algoritmik düşünmeyi öğretiyoruz.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8 bg-indigo-600 hover:bg-indigo-700">
                20 dk Deneme Dersi
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
                asChild
              >
                <Link href="#paketler">Eğitimleri İncele</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="paketler" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Eğitim Programlarımız</h2>
            <p className="text-muted-foreground">Her yaş ve seviyeye uygun kişiselleştirilmiş müfredat</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all border-indigo-100 dark:border-indigo-900">
                  <div className={`w-14 h-14 rounded-2xl ${course.bgColor} flex items-center justify-center mb-4`}>
                    <course.icon className={`w-7 h-7 ${course.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm">{course.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Neden Yazılım Eğitimi?</h2>
              <div className="space-y-4">
                {[
                  "Analitik düşünme becerisini geliştirir",
                  "Problem çözme yeteneği kazandırır",
                  "Yaratıcılığı artırır",
                  "Geleceğin mesleklerine hazırlar",
                  "Matematik ve Fen başarısını destekler"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8 gap-2 bg-indigo-600" size="lg">
                <Video className="w-4 h-4" />
                Ders Programı Oluştur
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Farklı Programlama Dili</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">%100</div>
                <div className="text-sm text-muted-foreground">Online Canlı Ders</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">Proje</div>
                <div className="text-sm text-muted-foreground">Tabanlı Eğitim</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">Sertifika</div>
                <div className="text-sm text-muted-foreground">Başarı Belgesi</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Campaign */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-indigo-900 text-white flex flex-col justify-center">
                <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium w-fit mb-6">
                  Özel Kampanya
                </span>
                <h2 className="text-3xl font-bold mb-4">
                  8+1 Yazılım Fırsatı
                </h2>
                <p className="text-indigo-100 text-lg mb-8">
                  Matematik özel ders paketi alan öğrencilerimize 
                  <span className="font-bold text-white"> 1 Saat Yazılım Dersi Hediye!</span>
                </p>
                <ul className="space-y-2 mb-8 text-indigo-100">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    Birebir Canlı Ders
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    Python veya Scratch Seçeneği
                  </li>
                </ul>
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-white/90 w-fit">
                  Hemen Yararlan
                </Button>
              </div>
              <div className="p-8 md:p-12 bg-white dark:bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Sertifikalı Program</h3>
                    <p className="text-sm text-muted-foreground">Eğitim sonu başarı belgesi</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8">
                  Yazılım dünyasına ilk adımı atın. Uzman eğitmenlerimizle çocuğunuzun 
                  ilgi alanına göre (Oyun yapımı, Web sitesi veya Robotik) özel program belirliyoruz.
                </p>
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-sm font-medium text-center">
                    Tek Ders Ücreti: <span className="text-2xl font-bold text-indigo-600">1.250 TL</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

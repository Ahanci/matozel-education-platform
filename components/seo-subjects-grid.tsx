"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { 
  BookOpen, 
  Calculator, 
  FlaskConical, 
  Globe, 
  Clock, 
  Brain, 
  Languages, 
  Code, 
  Leaf, 
  Atom, 
  Laptop, 
  Wifi,
  CheckCircle2,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const subjects = [
  {
    title: "Online Matematik Özel Ders",
    slug: "matematik",
    description: "LGS, TYT, AYT ve okul takviye için birebir online matematik eğitimi.",
    icon: Calculator,
    features: ["Yeni Nesil Sorular", "Haftalık Ödev Takibi", "Video Çözümler"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Online Türkçe & Edebiyat",
    slug: "turkce",
    description: "Dil bilgisi, paragraf teknikleri ve edebiyat konu anlatımları.",
    icon: BookOpen,
    features: ["Hızlı Okuma", "Paragraf Taktikleri", "Hafıza Teknikleri"],
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    title: "Online Fen Bilimleri",
    slug: "fen-bilimleri",
    description: "Fizik, Kimya ve Biyoloji derslerinde deneyimli öğretmenlerle başarıya ulaşın.",
    icon: FlaskConical,
    features: ["Görsel Konu Anlatımı", "Deney Videoları", "Sınav Odaklı"],
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Online İngilizce",
    slug: "ingilizce",
    description: "Konuşma, gramer ve sınav ingilizcesi (YDS, YÖKDİL).",
    icon: Languages,
    features: ["Speaking Pratiği", "Kelime Çalışması", "Kelime Kartları"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Yazılım & Kodlama",
    slug: "yazilim",
    description: "Çocuklar ve gençler için algoritma, Python ve Web geliştirme.",
    icon: Code,
    features: ["Proje Tabanlı", "Algoritma Mantığı", "Portfolyo Oluşturma"],
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    title: "Online Koçluk Sistemi",
    slug: "kocluk",
    description: "Öğrenci koçluğu ile çalışma programı ve motivasyon desteği.",
    icon: Brain,
    features: ["Haftalık Plan", "Deneme Analizi", "Sürekli Takip"],
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
];

export function SeoSubjectsGrid() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            %100 Online Eğitim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Türkiye'nin En Kapsamlı <span className="text-primary">Online Özel Ders</span> Platformu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Evinizin konforunda, alanında uzman öğretmenlerle birebir canlı dersler. 
            Zaman ve mekan sınırlaması olmadan hedeflerinize ulaşın.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full p-6 hover:shadow-lg transition-all border-border/50 hover:border-primary/50 group flex flex-col">
                <div className={`w-14 h-14 rounded-2xl ${subject.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <subject.icon className={`w-7 h-7 ${subject.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {subject.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {subject.description}
                </p>

                <div className="space-y-3 mb-6">
                  {subject.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className={`w-4 h-4 ${subject.color}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground" variant="outline" asChild>
                  <Link href={`/ozel-ders/${subject.slug}`}>
                    Ders İncele
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing / Campaign Highlight */}
        <div className="mt-20">
            <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Zap className="w-32 h-32" />
                </div>
                
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Avantajlı Online Ders Paketleri
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8">
                        Birebir online özel ders saati sadece <span className="text-foreground font-bold text-2xl">1.250 TL</span>. 
                        Üstelik paket alımlarında kaçırılmayacak fırsatlar!
                    </p>

                    <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-background p-2 rounded-2xl shadow-sm border border-border/50">
                        <div className="px-6 py-2 bg-accent/10 text-accent rounded-xl font-bold">
                            KAMPANYA
                        </div>
                        <p className="px-4 font-medium">
                            8 Ders Paketi Alana + <span className="text-primary font-bold">1 Ücretsiz Yazılım Dersi</span> Hediye!
                        </p>
                        <Button size="lg" className="rounded-xl ml-auto w-full md:w-auto">
                            Hemen Başvur
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

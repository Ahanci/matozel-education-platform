"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cities, allSubjects } from "@/lib/data";
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
  Code,
  Sparkles,
  Cpu,
  TrendingUp,
  CheckCircle2,
  MapPin,
  Video,
  Users,
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
  Code,
};

interface CityPageClientProps {
  citySlug: string;
}

export function CityPageClient({ citySlug }: CityPageClientProps) {
  const cityData = cities.find((c) => c.slug === citySlug);

  if (!cityData) {
    notFound();
  }

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
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {cityData.name} Online Özel Ders
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {cityData.name}'da
              <span className="text-primary block mt-2">Yapay Zeka Destekli Online Özel Ders</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              {cityData.name} için %100 online, yapay zeka destekli birebir özel ders hizmeti. 
              Evden çıkmadan, uzman öğretmenlerle canlı dersler.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">
                20 dk Deneme Dersi
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

      {/* AI Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-8 h-8 text-primary" />
              Yapay Zeka Destekli Eğitim Sistemi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {cityData.name}'da teknoloji ve eğitimi birleştiren yenilikçi yaklaşımımız
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Cpu,
                title: "AI Kişiselleştirme",
                desc: "Yapay zeka öğrenme hızınızı ve stilinizi analiz eder, size özel ders planı oluşturur"
              },
              {
                icon: TrendingUp,
                title: "Akıllı İlerleme Takibi",
                desc: "Her ders sonrası AI destekli performans analizi ve gelişim raporları"
              },
              {
                icon: Brain,
                title: "Adaptif Öğrenme",
                desc: "Zorlandığınız konularda otomatik pekiştirme, güçlü olduğunuz alanlarda hızlandırma"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{cityData.name} Online Özel Ders Programları</h2>
            <p className="text-muted-foreground">Tüm dersler için uzman eğitmenler ve AI desteği</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allSubjects.slice(0, 12).map((subject, index) => {
              const Icon = iconMap[subject.icon] || BookOpen;
              return (
                <motion.div
                  key={subject.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/ozel-ders/${subject.slug}/${citySlug}`}>
                    <Card className="p-6 h-full hover:border-primary/50 transition-colors group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <Video className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{subject.name}</h3>
                      <p className="text-sm text-muted-foreground">{subject.description}</p>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Online */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Neden {cityData.name} için Online Özel Ders?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Video,
                  title: "Evden Çıkmadan Eğitim",
                  desc: `${cityData.name} trafiğinde zaman kaybetmeyin, evinizin konforunda ders alın`
                },
                {
                  icon: Users,
                  title: "Türkiye'nin En İyi Öğretmenleri",
                  desc: "Sadece şehrinizle sınırlı kalmayın, tüm Türkiye'den uzman eğitmenlere erişin"
                },
                {
                  icon: Clock,
                  title: "Esnek Ders Saatleri",
                  desc: "Size uygun saatlerde, hafta içi veya hafta sonu ders programı"
                },
                {
                  icon: Sparkles,
                  title: "AI Destekli Takip",
                  desc: "Yapay zeka ile sürekli gelişim analizi ve kişiselleştirilmiş öneriler"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {cityData.name} Online Özel Ders'e Başlayın
            </h2>
            <p className="text-muted-foreground mb-8">
              20 dakikalık deneme dersi ile yapay zeka destekli eğitim sistemimizi keşfedin
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">
                Hemen Başvur
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

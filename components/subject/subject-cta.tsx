"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Calendar, Check } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import type { Subject, Exam } from "@/lib/data";

interface SubjectCTAProps {
  subject: Subject;
  exam?: Exam | null;
}

export function SubjectCTA({ subject, exam }: SubjectCTAProps) {
  const packages = [
    {
      name: "Başlangıç",
      price: "₺450",
      period: "/ders",
      description: "Tek ders denemek isteyenler için",
      features: [
        "60 dakika birebir ders",
        "Online veya yüz yüze",
        "Ders notu ve ödev",
        "WhatsApp destek",
      ],
      popular: false,
    },
    {
      name: "Paket",
      price: "₺3.600",
      period: "/8 ders",
      description: "En popüler seçim",
      features: [
        "8 ders paketi (%10 indirimli)",
        "Haftalık 2 ders önerisi",
        "Konu takip sistemi",
        "Deneme sınavları",
        "Aile görüşmeleri",
      ],
      popular: true,
    },
    {
      name: "Profesyonel",
      price: "₺6.400",
      period: "/16 ders",
      description: "Yoğun hazırlık için",
      features: [
        "16 ders paketi (%15 indirimli)",
        "Kişisel çalışma programı",
        "Sınırsız soru desteği",
        "Aylık performans raporu",
        "Motivasyon koçluğu",
      ],
      popular: false,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <BackgroundBeams className="opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {subject.name} Ders Paketleri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {exam
              ? `${exam.name} sınavına hazırlık için size en uygun paketi seçin`
              : "Hedefinize uygun paketi seçin ve hemen başlayın"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full ${
                  pkg.popular
                    ? "border-2 border-primary shadow-xl"
                    : "border shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    En Popüler
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {pkg.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Hemen Başla
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Detaylı Bilgi Alın
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Hangi paketin size uygun olduğunu bilmiyor musunuz? Eğitim
                    danışmanlarımız size yardımcı olsun.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="gap-2 text-foreground"
                    >
                      <Phone className="w-5 h-5" />
                      0850 123 45 67
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="flex items-center gap-4 p-6 rounded-2xl bg-primary-foreground/10">
                    <Calendar className="w-12 h-12" />
                    <div>
                      <p className="font-semibold">20 dk Deneme Dersi</p>
                      <p className="text-sm text-primary-foreground/80">
                        İlk dersiniz bizden!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

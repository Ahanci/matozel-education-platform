"use client";

import { motion } from "framer-motion";
import { Award, Clock, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Uzman Kadro",
    description:
      "Alanında deneyimli ve sertifikalı öğretmenlerden oluşan kadromuz.",
  },
  {
    icon: Heart,
    title: "Kişisel İlgi",
    description:
      "Her öğrenciye özel hazırlanan ders planları ve birebir ilgi.",
  },
  {
    icon: Clock,
    title: "Esnek Zamanlama",
    description:
      "Size uygun saatlerde, online veya yüz yüze ders imkanı.",
  },
  {
    icon: Shield,
    title: "Garanti Başarı",
    description:
      "Hedef puanına ulaşamayan öğrencilere ek ders garantisi.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Hakkımızda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Eğitimde Fark Yaratan Yaklaşım
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              2018&apos;den beri binlerce öğrenciye eğitim desteği sağlıyoruz.
              Amacımız sadece ders anlatmak değil, öğrencilerimize öğrenmeyi
              öğretmek ve onları hayata hazırlamak.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Her öğrenci farklıdır ve farklı öğrenme stillerine sahiptir.
              Bu yüzden kişiselleştirilmiş eğitim planları hazırlıyor ve
              düzenli takip ile başarıyı garanti altına alıyoruz.
            </p>

            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">Yıllık Deneyim</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2000+</div>
                <div className="text-sm text-muted-foreground">Mezun Öğrenci</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">%98</div>
                <div className="text-sm text-muted-foreground">Memnuniyet</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

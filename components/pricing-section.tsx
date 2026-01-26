"use client";

import { Button } from "@/components/ui/button";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Standart Paket",
    description: "Birebir online özel ders",
    price: "1.250",
    period: "saat başı",
    features: [
      "Birebir canlı ders",
      "Kişiye özel müfredat",
      "Ders notları (PDF)",
      "Veli bilgilendirme",
    ],
    popular: false,
  },
  {
    name: "Kampanyalı Paket",
    description: "8 ders alana 1 yazılım dersi hediye",
    price: "10.000",
    period: "8 derslik paket",
    features: [
      "8 Saat Canlı Ders",
      "+1 Saat Yazılım Dersi Hediye",
      "Kaynak Gönderimi",
      "Haftalık Planlama",
      "WhatsApp Soru Çözümü",
      "Ayda 1 Deneme Analizi",
    ],
    popular: true,
  },
  {
    name: "Sınav Koçluğu",
    description: "LGS/YKS tam kapsamlı koçluk",
    price: "4.000",
    period: "aylık",
    features: [
      "Haftalık 4 Görüşme",
      "Günlük Program Takibi",
      "Detaylı Deneme Analizi",
      "Stres Yönetimi",
      "Tercih Danışmanlığı",
      "7/24 Motivasyon",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Fiyatlandırma
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Bütçenize Uygun Eğitim Paketleri
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tüm paketlerimizde 20 dk online deneme dersi imkanı sunuyoruz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "relative rounded-2xl p-8 bg-card border transition-all duration-300 hover:shadow-lg",
                plan.popular
                  ? "border-primary shadow-lg scale-105 md:scale-110"
                  : "border-border hover:border-primary/50"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full text-center">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    8 ALANA 1 YAZILIM DERSİ HEDİYE
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-card-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">TL</span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">
                  {plan.period}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-card-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.popular ? (
                <MovingBorderButton
                  borderRadius="0.75rem"
                  className="w-full h-11 font-semibold"
                  containerClassName="w-full"
                >
                  Hemen Başla
                </MovingBorderButton>
              ) : (
                <Button variant="outline" className="w-full bg-transparent">
                  Paket Seç
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      <BackgroundBeams className="opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Sorularınız mı Var?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ücretsiz danışmanlık için bizimle iletişime geçin. Size en uygun
            eğitim programını birlikte belirleyelim.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                <p className="text-muted-foreground">+90 (555) 123 45 67</p>
                <p className="text-sm text-muted-foreground">
                  Pazartesi - Cumartesi, 09:00 - 21:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
                <p className="text-muted-foreground">info@edumentor.com.tr</p>
                <p className="text-sm text-muted-foreground">
                  24 saat içinde yanıt garantisi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                <p className="text-muted-foreground">
                  İstanbul, Kadıköy
                </p>
                <p className="text-sm text-muted-foreground">
                  Online ve yüz yüze ders imkanı
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h3 className="text-xl font-semibold text-card-foreground mb-6">
              Ücretsiz Danışmanlık Formu
            </h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Ad Soyad
                  </label>
                  <Input id="name" placeholder="Adınızı girin" />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Telefon
                  </label>
                  <Input id="phone" placeholder="05XX XXX XX XX" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  E-posta
                </label>
                <Input id="email" type="email" placeholder="ornek@email.com" />
              </div>
              <div>
                <label
                  htmlFor="grade"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Sınıf Seviyesi
                </label>
                <select
                  id="grade"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Sınıf seçin</option>
                  <option value="5">5. Sınıf</option>
                  <option value="6">6. Sınıf</option>
                  <option value="7">7. Sınıf</option>
                  <option value="8">8. Sınıf (LGS)</option>
                  <option value="9">9. Sınıf</option>
                  <option value="10">10. Sınıf</option>
                  <option value="11">11. Sınıf</option>
                  <option value="12">12. Sınıf (YKS)</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Hangi derslerle ilgileniyorsunuz?"
                />
              </div>
              <Button className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Gönder
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

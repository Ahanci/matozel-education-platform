"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle2,
} from "lucide-react";

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                İletişime Geçin
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Uzman eğitmenlerimizle tanışın, sorularınızı yöneltin ve eğitim
                hedeflerinize birlikte ulaşalım.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Bizimle İletişime Geçin
                </h2>

                <Card className="p-6 mb-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          E-posta
                        </h3>
                        <p className="text-muted-foreground">
                          info@matozel.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Telefon
                        </h3>
                        <p className="text-muted-foreground">
                          +90 555 123 45 67
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Adres
                        </h3>
                        <p className="text-muted-foreground">
                          İstanbul, Türkiye
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Çalışma Saatleri
                        </h3>
                        <p className="text-muted-foreground">
                          Pazartesi - Cumartesi: 09:00 - 21:00
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Sosyal Medya
                  </h3>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-primary" />
                    </Link>
                    <Link
                      href="#"
                      className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-primary" />
                    </Link>
                    <Link
                      href="#"
                      className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-primary" />
                    </Link>
                    <Link
                      href="#"
                      className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </Link>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Mesaj Gönderin
                  </h2>

                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ad Soyad</Label>
                        <Input id="name" placeholder="Adınız Soyadınız" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-posta</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" placeholder="+90 555 123 45 67" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Konu</Label>
                      <Input id="subject" placeholder="Mesajınızın konusu" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mesaj</Label>
                      <Textarea
                        id="message"
                        placeholder="Mesajınızı buraya yazın..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Mesaj Gönder
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Hemen Başlayın
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Eğitim yolculuğunuza bugün başlayın. Uzman eğitmenlerimiz size
                rehberlik ederek hedeflerinize ulaşmanızı sağlayacak.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ozel-ders">
                  <Button size="lg" variant="default">
                    Özel Derslerimizi İnceleyin
                  </Button>
                </Link>
                <Link href="/sinav-koclugu">
                  <Button size="lg" variant="outline">
                    Sınav Koçluğumuzu Keşfedin
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>

      <Footer />
    </div>
  );
}

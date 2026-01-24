import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, Target, Calendar, Users, CheckCircle, 
  ArrowRight, Star, Clock, BookOpen, TrendingUp, Award
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sınav Koçluğu | MatÖzel - LGS, TYT, AYT Hazırlık",
  description: "LGS, TYT ve AYT sınavlarına profesyonel koçluk desteği. Kişisel çalışma planı, motivasyon desteği ve düzenli takip ile hedeflerinize ulaşın.",
};

const examTypes = [
  {
    slug: "lgs",
    name: "LGS Koçluğu",
    fullName: "Liselere Geçiş Sınavı",
    description: "8. sınıf öğrencileri için kapsamlı LGS hazırlık koçluğu",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    features: [
      "Kişisel çalışma programı",
      "Haftalık deneme takibi",
      "Konu eksikliği analizi",
      "Motivasyon desteği",
      "Veli görüşmeleri",
      "Hedef okul planlaması"
    ],
    subjects: ["Türkçe", "Matematik", "Fen Bilimleri", "T.C. İnkılap", "Din Kültürü", "Yabancı Dil"],
    price: "2.500",
    duration: "Aylık"
  },
  {
    slug: "tyt",
    name: "TYT Koçluğu",
    fullName: "Temel Yeterlilik Testi",
    description: "Üniversite sınavının ilk basamağı için stratejik hazırlık",
    icon: Target,
    color: "from-emerald-500 to-emerald-600",
    features: [
      "120 soru için strateji",
      "Zaman yönetimi eğitimi",
      "Net artırma teknikleri",
      "Haftalık analiz",
      "Motivasyon seansları",
      "Tercih danışmanlığı"
    ],
    subjects: ["Türkçe", "Matematik", "Fen Bilimleri", "Sosyal Bilimler"],
    price: "3.000",
    duration: "Aylık"
  },
  {
    slug: "ayt",
    name: "AYT Koçluğu",
    fullName: "Alan Yeterlilik Testi",
    description: "Alan sınavına yönelik uzman koçluk desteği",
    icon: Award,
    color: "from-purple-500 to-purple-600",
    features: [
      "Alan bazlı strateji",
      "Derinlemesine konu çalışması",
      "Soru tipleri analizi",
      "Deneme değerlendirmesi",
      "Psikolojik destek",
      "Tercih planlaması"
    ],
    subjects: ["Edebiyat", "Tarih", "Coğrafya", "Matematik", "Geometri", "Fizik", "Kimya", "Biyoloji"],
    price: "3.500",
    duration: "Aylık"
  }
];

const benefits = [
  {
    icon: Calendar,
    title: "Kişisel Çalışma Planı",
    description: "Sizin seviyenize ve hedeflerinize özel haftalık ve aylık çalışma programı"
  },
  {
    icon: TrendingUp,
    title: "Düzenli Takip",
    description: "Haftalık görüşmeler, deneme analizleri ve ilerleme raporları"
  },
  {
    icon: Users,
    title: "Veli İletişimi",
    description: "Aylık veli toplantıları ve düzenli bilgilendirme"
  },
  {
    icon: BookOpen,
    title: "Kaynak Yönlendirme",
    description: "Seviyenize uygun kitap, test ve online kaynak önerileri"
  },
  {
    icon: Target,
    title: "Hedef Belirleme",
    description: "Gerçekçi hedefler koyma ve adım adım ilerleme"
  },
  {
    icon: Star,
    title: "Motivasyon Desteği",
    description: "Sınav kaygısı yönetimi ve motivasyon teknikleri"
  }
];

const testimonials = [
  {
    name: "Elif K.",
    exam: "LGS 2025",
    result: "Fen Lisesi",
    quote: "MatÖzel koçluğu sayesinde LGS'de 485 puan aldım ve hayalimdeki fen lisesini kazandım!"
  },
  {
    name: "Ahmet Y.",
    exam: "TYT-AYT 2025",
    result: "Tıp Fakültesi",
    quote: "Düzenli koçluk seansları ve kişisel programım sayesinde tıp fakültesini kazandım."
  },
  {
    name: "Zeynep M.",
    exam: "LGS 2025",
    result: "Anadolu Lisesi",
    quote: "Koçumun desteğiyle sınav kaygımı yendim ve hedefimin üzerinde bir sonuç aldım."
  }
];

export default function SinavKocluguPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                Profesyonel Sınav Koçluğu
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Sınav Başarınız İçin <span className="text-primary">Yanınızdayız</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                LGS, TYT ve AYT sınavlarına profesyonel koçluk desteği ile hazırlanın. 
                Kişisel plan, düzenli takip ve motivasyon desteği ile hedeflerinize ulaşın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/iletisim">
                    Ücretsiz Görüşme <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#paketler">Paketleri İncele</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sınav Koçluğu Ne Sağlar?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Özel ders almak yetmez, düzenli takip ve stratejik planlama ile başarıya ulaşırsınız.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Exam Packages Section */}
        <section id="paketler" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sınav Koçluğu Paketleri
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hedeflerinize uygun paketi seçin ve profesyonel koçluk desteği alın.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {examTypes.map((exam) => (
                <Card key={exam.slug} className="relative overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${exam.color}`} />
                  <CardHeader className="pt-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exam.color} flex items-center justify-center mb-4`}>
                      <exam.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="outline" className="w-fit mb-2">{exam.fullName}</Badge>
                    <CardTitle className="text-2xl">{exam.name}</CardTitle>
                    <CardDescription className="text-base">
                      {exam.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Subjects */}
                    <div>
                      <h4 className="font-semibold mb-2">Kapsanan Dersler:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exam.subjects.map((subject) => (
                          <Badge key={subject} variant="secondary" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-2">Paket İçeriği:</h4>
                      <ul className="space-y-2">
                        {exam.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-3xl font-bold text-foreground">{exam.price} TL</span>
                        <span className="text-muted-foreground">/ {exam.duration}</span>
                      </div>
                      <Button className="w-full" asChild>
                        <Link href={`/sinav-koclugu/${exam.slug}`}>
                          Detaylı Bilgi <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Başarı Hikayeleri
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                MatÖzel koçluğu ile hedeflerine ulaşan öğrencilerimiz
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.exam}</p>
                      </div>
                      <Badge variant="secondary">{testimonial.result}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nasıl Çalışıyoruz?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                4 adımda sınav koçluğu süreci
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Tanışma Görüşmesi", desc: "Ücretsiz görüşme ile tanışma ve hedef belirleme" },
                { step: 2, title: "Seviye Tespiti", desc: "Mevcut durumun analizi ve eksiklerin belirlenmesi" },
                { step: 3, title: "Plan Oluşturma", desc: "Kişiye özel çalışma programı hazırlama" },
                { step: 4, title: "Düzenli Takip", desc: "Haftalık görüşmeler ve sürekli destek" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Sınav Başarınız İçin İlk Adımı Atın
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Ücretsiz tanışma görüşmesi için hemen iletişime geçin. 
              Hedefinize ulaşmanız için yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/iletisim">
                  <Clock className="mr-2 w-5 h-5" />
                  Ücretsiz Görüşme Ayarla
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="tel:+905551234567">
                  Hemen Ara: 0555 123 45 67
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

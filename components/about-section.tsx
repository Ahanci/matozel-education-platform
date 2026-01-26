import { motion } from "framer-motion";
import { Sparkles, Brain, TrendingUp, Cpu } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Kişiselleştirme",
    description:
      "Yapay zeka öğrenme hızınızı analiz eder ve size özel ders planı oluşturur.",
  },
  {
    icon: Brain,
    title: "Akıllı Koçluk",
    description:
      "AI destekli koçluk sistemi sürekli gelişiminizi takip eder ve önerilerde bulunur.",
  },
  {
    icon: TrendingUp,
    title: "Performans Analizi",
    description:
      "Her ders sonrası detaylı AI analizi ile güçlü ve zayıf yönlerinizi görün.",
  },
  {
    icon: Cpu,
    title: "%100 Online",
    description:
      "Evden çıkmadan, dilediğiniz zaman yapay zeka destekli eğitim alın.",
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
              Yapay Zeka ile Eğitimde Yeni Dönem
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              MatÖzel olarak, yapay zeka teknolojisini eğitimle birleştirerek 
              her öğrenciye özel, kişiselleştirilmiş online öğrenme deneyimi sunuyoruz.
              AI destekli sistemimiz, öğrenme hızınızı ve stilinizi analiz ederek 
              size en uygun ders planını oluşturur.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sadece ders anlatmıyoruz; yapay zeka koçumuz sürekli gelişiminizi 
              takip ediyor, zorlandığınız konuları tespit ediyor ve başarınızı 
              maksimize etmek için öneriler sunuyor. Yazılım eğitiminden sınav 
              koçluğuna, tüm hizmetlerimiz %100 online ve AI destekli.
            </p>

            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">AI</div>
                <div className="text-sm text-muted-foreground">Destekli Sistem</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2000+</div>
                <div className="text-sm text-muted-foreground">Başarılı Öğrenci</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">%100</div>
                <div className="text-sm text-muted-foreground">Online</div>
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

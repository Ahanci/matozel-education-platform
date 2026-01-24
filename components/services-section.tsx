"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Meteors } from "@/components/ui/meteors";
import {
  BookOpen,
  Code2,
  Target,
  Users,
  Calculator,
  Microscope,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Matematik Özel Ders",
    description:
      "Temel kavramlardan ileri düzey konulara kadar birebir matematik eğitimi. TYT ve AYT'ye tam hazırlık.",
    icon: <Calculator className="w-5 h-5 text-primary" />,
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
        <Meteors number={10} />
      </div>
    ),
  },
  {
    title: "Fen Bilimleri",
    description:
      "Fizik, Kimya ve Biyoloji derslerinde uzman öğretmenlerle derinlemesine öğrenme deneyimi.",
    icon: <Microscope className="w-5 h-5 text-primary" />,
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent relative overflow-hidden">
        <Meteors number={8} />
      </div>
    ),
  },
  {
    title: "Yazılım Eğitimi",
    description:
      "Python, JavaScript, Web geliştirme ve mobil uygulama programlama. Geleceğin mesleklerine hazır olun.",
    icon: <Code2 className="w-5 h-5 text-primary" />,
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-chart-3/10 via-chart-3/5 to-transparent relative overflow-hidden">
        <Meteors number={12} />
      </div>
    ),
  },
  {
    title: "Sınav Koçluğu",
    description:
      "LGS, TYT, AYT sınavlarına özel strateji ve planlama. Hedeflerinize uygun çalışma programı.",
    icon: <Target className="w-5 h-5 text-primary" />,
    className: "md:col-span-2",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-chart-5/10 via-chart-5/5 to-transparent relative overflow-hidden">
        <Meteors number={15} />
      </div>
    ),
  },
  {
    title: "Yabancı Dil",
    description:
      "İngilizce ve Almanca eğitimi. Akademik ve günlük kullanım için kapsamlı dil programları.",
    icon: <Globe className="w-5 h-5 text-primary" />,
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-chart-4/10 via-chart-4/5 to-transparent relative overflow-hidden">
        <Meteors number={8} />
      </div>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Her Seviyeye Uygun Eğitim Programları
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ortaokul ve lise öğrencileri için özel olarak hazırlanmış, kişiselleştirilmiş
            eğitim programlarımızla başarıya ulaşın.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BentoGrid>
            {services.map((service, i) => (
              <BentoGridItem
                key={i}
                title={service.title}
                description={service.description}
                header={service.header}
                icon={service.icon}
                className={service.className}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Brain,
  Atom,
  Leaf,
  BookText,
  Clock,
  Triangle,
  Languages,
  Heart,
  Landmark,
  Users,
  Code,
  Target,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { exams, allSubjects } from "@/lib/data";

const tabs = [
  {
    id: "hizmetler",
    label: "Hizmetler",
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: "sinavlar",
    label: "Sınavlar",
    icon: <GraduationCap className="w-4 h-4" />,
  },
  { id: "dersler", label: "Dersler", icon: <BookOpen className="w-4 h-4" /> },
];

const services = [
  {
    id: "ozel-ders",
    title: "Özel Ders",
    description: "Birebir eğitim ile eksiklerinizi hızla tamamlayın",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    link: "/ozel-ders",
  },
  {
    id: "sinav-koclugu",
    title: "Sınav Koçluğu",
    description: "Hedeflerinize uygun stratejik çalışma programları",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
    link: "/sinav-koclugu",
  },
  {
    id: "sinif-destek",
    title: "Sınıf Desteği",
    description: "Okul derslerinde başarınızı artırın",
    icon: <GraduationCap className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500",
    link: "/",
  },
  {
    id: "online-egitim",
    title: "Online Eğitim",
    description: "Evden konforlu eğitim imkanı",
    icon: <Code className="w-8 h-8" />,
    gradient: "from-orange-500 to-amber-500",
    link: "/",
  },
];

const examData = Object.values(exams).map((exam) => ({
  id: exam.slug,
  title: exam.name,
  description: exam.fullName,
  icon: <Target className="w-8 h-8" />,
  gradient:
    exam.slug === "lgs"
      ? "from-blue-500 to-cyan-500"
      : exam.slug === "tyt"
        ? "from-purple-500 to-pink-500"
        : "from-green-500 to-emerald-500",
  link: `/sinav-koclugu/${exam.slug}`,
}));

const subjectData = allSubjects.slice(0, 8).map((subject) => {
  const iconMap: Record<string, React.ReactNode> = {
    turkce: <BookOpen className="w-6 h-6" />,
    matematik: <Calculator className="w-6 h-6" />,
    geometri: <Triangle className="w-6 h-6" />,
    fizik: <Atom className="w-6 h-6" />,
    kimya: <FlaskConical className="w-6 h-6" />,
    biyoloji: <Leaf className="w-6 h-6" />,
    "fen-bilimleri": <FlaskConical className="w-6 h-6" />,
    edebiyat: <BookText className="w-6 h-6" />,
    tarih: <Clock className="w-6 h-6" />,
    cografya: <Globe className="w-6 h-6" />,
    felsefe: <Brain className="w-6 h-6" />,
    ingilizce: <Languages className="w-6 h-6" />,
    "yabanci-dil": <Languages className="w-6 h-6" />,
    "din-kulturu": <Heart className="w-6 h-6" />,
    "tc-inkilap": <Landmark className="w-6 h-6" />,
    "sosyal-bilgiler": <Users className="w-6 h-6" />,
    yazilim: <Code className="w-6 h-6" />,
  };

  const gradientMap: Record<string, string> = {
    turkce: "from-blue-500 to-cyan-500",
    matematik: "from-purple-500 to-pink-500",
    geometri: "from-indigo-500 to-purple-500",
    fizik: "from-orange-500 to-amber-500",
    kimya: "from-green-500 to-emerald-500",
    biyoloji: "from-teal-500 to-cyan-500",
    "fen-bilimleri": "from-cyan-500 to-blue-500",
    edebiyat: "from-rose-500 to-pink-500",
    tarih: "from-amber-500 to-orange-500",
    cografya: "from-emerald-500 to-green-500",
    felsefe: "from-violet-500 to-purple-500",
    ingilizce: "from-sky-500 to-blue-500",
    "yabanci-dil": "from-sky-500 to-blue-500",
    "din-kulturu": "from-red-500 to-rose-500",
    "tc-inkilap": "from-red-600 to-orange-600",
    "sosyal-bilgiler": "from-yellow-500 to-amber-500",
    yazilim: "from-slate-500 to-zinc-500",
  };

  return {
    id: subject.slug,
    title: subject.name,
    description: subject.description,
    icon: iconMap[subject.slug] || <BookOpen className="w-6 h-6" />,
    gradient: gradientMap[subject.slug] || "from-gray-500 to-gray-600",
    link: `/ozel-ders/${subject.slug}`,
  };
});

export function ServicesGridSection() {
  const [activeTab, setActiveTab] = useState("hizmetler");

  const getContent = () => {
    switch (activeTab) {
      case "hizmetler":
        return services;
      case "sinavlar":
        return examData;
      case "dersler":
        return subjectData;
      default:
        return services;
    }
  };

  const content = getContent();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Keşfedin
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Eğitim Olanaklarımız
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Geniş hizmet yelpazemiz, uzman eğitmenlerimiz ve kapsamlı
            derslerimizle başarınızı garanti altına alın.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-secondary/50 p-1.5 rounded-xl backdrop-blur-sm border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-150",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80",
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {content.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: Math.min(index * 0.03, 0.15) }}
            >
              <Link href={item.link} className="block">
                <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <div className="relative">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-4 shadow-lg shadow-primary/25`}
                      >
                        {item.icon}
                      </motion.div>

                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Detaylar
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

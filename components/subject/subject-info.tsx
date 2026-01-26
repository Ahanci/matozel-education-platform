"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Users,
  Target,
  TrendingUp,
  BookOpen,
  Video,
  FileText,
  CheckCircle,
  Award,
  BarChart,
  Truck,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Subject, City, Exam } from "@/lib/data";
import { exams } from "@/lib/data";
import { subjectCurriculums, getCurriculumByExam } from "@/lib/curriculum-data";

interface SubjectInfoProps {
  subject: Subject;
  city?: City | null;
  exam?: Exam | null;
  grade?: { slug: string; name: string; number: number } | null;
}

export function SubjectInfo({ subject, city, exam, grade }: SubjectInfoProps) {
  // Get curriculum data for this subject
  const curriculum =
    subjectCurriculums[subject.slug as keyof typeof subjectCurriculums];

  // Get grade-specific curriculum if available
  const gradeCurriculum =
    grade &&
    (curriculum?.curriculum.ortaokul?.[grade.slug] ||
      curriculum?.curriculum.lise?.[grade.slug]);

  // Get exam-specific curriculum if available
  const examCurriculum = exam && getCurriculumByExam(subject.slug, exam.slug);

  // Dynamic content based on exam
  const getExamTopics = () => {
    if (!exam) return null;
    const examData = exams[exam.slug as keyof typeof exams];
    if (!examData) return null;
    return examData.subjects.map((s) => s.name);
  };

  const examTopics = getExamTopics();

  // SEO-focused description
  const getSEODescription = () => {
    let desc = curriculum?.seoDescription || subject.description;

    if (city) {
      desc += ` ${city.name} ve çevresinde yüz yüze ders imkanı ile öğrencilerimize en kaliteli eğitimi sunuyoruz.`;
    }
    if (exam) {
      desc += ` ${exam.fullName} sınavına yönelik özel müfredat ve soru çözüm teknikleri ile hedeflerinize ulaşmanızı sağlıyoruz.`;
    }
    if (grade) {
      desc += ` ${grade.name} müfredatına tam uyumlu ders içerikleri ile okul başarınızı artırıyoruz.`;
    }

    return desc;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Users, value: "500+", label: "Mutlu Öğrenci" },
            { icon: Award, value: "50+", label: "Uzman Eğitmen" },
            { icon: Clock, value: "10.000+", label: "Ders Saati" },
            { icon: TrendingUp, value: "%95", label: "Başarı Oranı" },
          ].map((stat, index) => (
            <Card
              key={stat.label}
              className="text-center border-none shadow-lg"
            >
              <CardContent className="pt-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <p className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Kaynak Temini Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Aynı Gün Kaynak Temini
                </h3>
                <p className="text-muted-foreground">
                  {subject.name} kaynakları Türkiye&apos;nin 81 iline aynı gün
                  temin edilir.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary font-medium">
              <MapPin className="w-5 h-5" />
              {city
                ? `${city.name}'a ekspres teslimat`
                : "Tüm illere ekspres teslimat"}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {city ? `${city.name} ` : ""}
              {subject.name} Özel Ders{exam ? ` - ${exam.name} Hazırlık` : ""}
              {grade ? ` - ${grade.name}` : ""}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {getSEODescription()}
            </p>

            {/* Why MatOzel */}
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Neden MatÖzel?
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                {
                  icon: Video,
                  text: "Online veya yüz yüze ders seçeneği",
                },
                {
                  icon: Target,
                  text: "Hedefe yönelik kişiselleştirilmiş program",
                },
                {
                  icon: BookOpen,
                  text: "Aynı gün kaynak temini - 81 il",
                },
                {
                  icon: BarChart,
                  text: "Düzenli değerlendirme ve ilerleme raporu",
                },
                {
                  icon: Clock,
                  text: "Esnek ders saatleri",
                },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 text-foreground"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>

            {/* Grade-specific curriculum */}
            {gradeCurriculum && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {grade?.name} {subject.name} Müfredatı
                </h3>
                <div className="space-y-3">
                  {gradeCurriculum.map((unit, index) => (
                    <Card key={unit.title} className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {unit.title}
                          </h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {unit.subtopics.map((topic) => (
                              <span
                                key={topic}
                                className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column - Exam Topics or Curriculum */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Exam-specific content */}
            {examCurriculum ? (
              <Card className="border-2 border-primary/20 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exam?.name} {subject.name} Konuları
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {exam?.fullName}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {examCurriculum.map((topic, index) => (
                      <div
                        key={topic.title}
                        className="p-4 rounded-lg bg-secondary"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-xs font-bold text-primary">
                              {index + 1}
                            </span>
                          </div>
                          <h4 className="font-semibold text-foreground">
                            {topic.title}
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2 ml-8">
                          {topic.subtopics.map((sub) => (
                            <span
                              key={sub}
                              className="px-2 py-1 text-xs bg-background rounded-md text-muted-foreground"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : exam && examTopics ? (
              <Card className="border-2 border-primary/20 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exam.name} Sınav Konuları
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {exam.fullName}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {examTopics.map((topic) => (
                      <div
                        key={topic}
                        className="flex items-center gap-2 p-3 rounded-lg bg-secondary"
                      >
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : null}

            {/* General curriculum overview */}
            {curriculum && !examCurriculum && !gradeCurriculum && (
              <Card className="border-2 border-accent/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {subject.name} Dersi Kapsamı
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {curriculum.heroDescription}
                  </p>

                  <h4 className="font-semibold text-foreground mb-3">
                    Avantajlar
                  </h4>
                  <ul className="space-y-2">
                    {curriculum.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Study Program */}
            <Card className="border-2 border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Örnek Ders Programı
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      week: "1-2. Hafta",
                      content: "Seviye belirleme ve temel kavramlar",
                    },
                    {
                      week: "3-6. Hafta",
                      content: "Konu anlatımı ve örnek çözümler",
                    },
                    {
                      week: "7-10. Hafta",
                      content: "Pekiştirme ve soru bankası çalışmaları",
                    },
                    {
                      week: "11-12. Hafta",
                      content: "Deneme sınavları ve performans analizi",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.week}
                      className="flex items-start gap-4 p-4 rounded-lg bg-secondary"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {item.week}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

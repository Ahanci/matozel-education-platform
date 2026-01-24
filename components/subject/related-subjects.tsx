"use client";

import React from "react"

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Atom,
  Leaf,
  Globe,
  Clock,
  Brain,
  Languages,
  Heart,
  Landmark,
  Users,
  Code,
  BookText,
  Triangle,
  ArrowRight,
} from "lucide-react";
import { allSubjects, type Subject, type Exam } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Calculator,
  FlaskConical,
  Atom,
  Leaf,
  Globe,
  Clock,
  Brain,
  Languages,
  Heart,
  Landmark,
  Users,
  Code,
  BookText,
  Triangle,
};

interface RelatedSubjectsProps {
  currentSubject: Subject;
  exam?: Exam | null;
}

export function RelatedSubjects({ currentSubject, exam }: RelatedSubjectsProps) {
  // Get related subjects (exclude current)
  const relatedSubjects = allSubjects
    .filter((s) => s.slug !== currentSubject.slug)
    .slice(0, 6);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Diğer Derslerimiz
          </h2>
          <p className="text-muted-foreground">
            {exam
              ? `${exam.name} sınavına hazırlık için diğer derslerimize de göz atın`
              : "Tüm derslerimizde aynı kaliteli eğitimi sunuyoruz"}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedSubjects.map((subject, index) => {
            const Icon = iconMap[subject.icon] || BookOpen;
            const href = exam
              ? `/ozel-ders/${subject.slug}/${exam.slug}`
              : `/ozel-ders/${subject.slug}`;

            return (
              <motion.div
                key={subject.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={href}>
                  <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {subject.name}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {subject.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/ozel-ders"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Tüm Dersleri Gör
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

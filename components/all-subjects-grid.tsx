"use client";

import React from "react"

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  GraduationCap,
  FileText,
} from "lucide-react";
import { allSubjects, levels, exams } from "@/lib/data";
import { cn } from "@/lib/utils";

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

type FilterType = "all" | "ortaokul" | "lise" | "lgs" | "tyt" | "ayt";

export function AllSubjectsGrid() {
  const [filter, setFilter] = useState<FilterType>("all");

  const getFilteredSubjects = () => {
    switch (filter) {
      case "ortaokul":
        return levels.ortaokul.subjects;
      case "lise":
        return levels.lise.subjects;
      case "lgs":
        return exams.lgs.subjects;
      case "tyt":
        return exams.tyt.subjects;
      case "ayt":
        return exams.ayt.subjects;
      default:
        return allSubjects;
    }
  };

  const filteredSubjects = getFilteredSubjects();

  const filters = [
    { key: "all", label: "Tümü", icon: BookOpen },
    { key: "ortaokul", label: "Ortaokul", icon: GraduationCap },
    { key: "lise", label: "Lise", icon: GraduationCap },
    { key: "lgs", label: "LGS", icon: FileText },
    { key: "tyt", label: "TYT", icon: FileText },
    { key: "ayt", label: "AYT", icon: FileText },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <Button
              key={f.key}
              variant={filter === f.key ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f.key as FilterType)}
              className="gap-2"
            >
              <f.icon className="w-4 h-4" />
              {f.label}
            </Button>
          ))}
        </div>

        {/* Subjects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSubjects.map((subject, index) => {
            const Icon = iconMap[subject.icon] || BookOpen;
            const href =
              filter === "lgs" ||
              filter === "tyt" ||
              filter === "ayt"
                ? `/ozel-ders/${subject.slug}/${filter}`
                : `/ozel-ders/${subject.slug}`;

            return (
              <motion.div
                key={subject.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.03 }}
              >
                <Link href={href}>
                  <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {subject.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {"description" in subject
                          ? subject.description
                          : "Uzman eğitmenlerle birebir ders"}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Detaylar
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Level Sections */}
        <div className="mt-20 space-y-16">
          {/* Ortaokul */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Ortaokul</h2>
                <p className="text-muted-foreground">
                  5, 6, 7, 8. sınıflar ve LGS hazırlık
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {levels.ortaokul.grades.map((grade) => (
                <Link key={grade.slug} href={`/ozel-ders/matematik/${grade.slug}`}>
                  <Card className="hover:shadow-lg hover:border-accent/50 transition-all group">
                    <CardContent className="p-4 flex items-center justify-between">
                      <span className="font-medium group-hover:text-accent transition-colors">
                        {grade.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
              <Link href="/ozel-ders/matematik/lgs">
                <Card className="bg-accent/10 hover:bg-accent/20 border-accent/30 transition-all group">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-accent">
                        LGS Hazırlık
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Lise */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Lise</h2>
                <p className="text-muted-foreground">
                  9, 10, 11, 12. sınıflar, TYT ve AYT hazırlık
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {levels.lise.grades.map((grade) => (
                <Link key={grade.slug} href={`/ozel-ders/matematik/${grade.slug}`}>
                  <Card className="hover:shadow-lg hover:border-primary/50 transition-all group">
                    <CardContent className="p-4 flex items-center justify-between">
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {grade.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <Link href="/ozel-ders/matematik/tyt">
                <Card className="bg-primary/10 hover:bg-primary/20 border-primary/30 transition-all group">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <span className="font-semibold text-primary">
                          TYT Hazırlık
                        </span>
                        <p className="text-xs text-muted-foreground">
                          Temel Yeterlilik Testi
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </Link>
              <Link href="/ozel-ders/matematik/ayt">
                <Card className="bg-chart-3/10 hover:bg-chart-3/20 border-chart-3/30 transition-all group">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-chart-3" />
                      <div>
                        <span className="font-semibold text-chart-3">
                          AYT Hazırlık
                        </span>
                        <p className="text-xs text-muted-foreground">
                          Alan Yeterlilik Testi
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-chart-3 group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

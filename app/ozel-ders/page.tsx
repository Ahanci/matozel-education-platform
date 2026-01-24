import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AllSubjectsGrid } from "@/components/all-subjects-grid";
import { Meteors } from "@/components/ui/meteors";
import { allSubjects, levels, exams, cities } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özel Ders | MatÖzel - Türkiye Geneli Birebir Eğitim",
  description:
    "Ortaokul ve lise öğrencileri için matematik, fen, edebiyat, yazılım ve daha fazlası. LGS, TYT, AYT hazırlık. Türkiye'nin 81 iline aynı gün kaynak gönderimi.",
};

export default function OzelDersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <Meteors number={15} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Tüm Dersler
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ortaokul ve lise seviyesinde tüm dersler için uzman eğitmenlerle
              birebir özel ders hizmeti
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-card shadow-sm">
              <p className="text-3xl font-bold text-primary">
                {allSubjects.length}
              </p>
              <p className="text-sm text-muted-foreground">Ders</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-card shadow-sm">
              <p className="text-3xl font-bold text-primary">
                {Object.keys(exams).length}
              </p>
              <p className="text-sm text-muted-foreground">Sınav Türü</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-card shadow-sm">
              <p className="text-3xl font-bold text-primary">
                {levels.ortaokul.grades.length + levels.lise.grades.length}
              </p>
              <p className="text-sm text-muted-foreground">Sınıf Seviyesi</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-card shadow-sm">
              <p className="text-3xl font-bold text-primary">{cities.length}</p>
              <p className="text-sm text-muted-foreground">Şehir</p>
            </div>
          </div>
        </div>
      </section>

      <AllSubjectsGrid />
      <Footer />
    </main>
  );
}

import { GradeLevelClientPage } from "./client-page";
import { levels } from "@/lib/data";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateMetadata({ params }: { params: { grade: string } }) {
  const allGrades = [...levels.ortaokul.grades, ...levels.lise.grades];
  const gradeData = allGrades.find((g) => g.slug === params.grade);

  if (!gradeData) {
    return {
      title: "Sınıf Bulunamadı | MatÖzel",
    };
  }

  return {
    title: `${gradeData.name} Özel Ders | MatÖzel Eğitim Platformu`,
    description: `${gradeData.name} müfredatına uygun, kişiselleştirilmiş birebir özel ders. Matematik, Fen, Türkçe ve tüm derslerde uzman desteği.`,
    openGraph: {
      title: `${gradeData.name} Özel Ders | MatÖzel`,
      description: `${gradeData.name} öğrencileri için LGS/YKS temelli özel ders programları.`,
    },
  };
}

export async function generateStaticParams() {
  const allGrades = [...levels.ortaokul.grades, ...levels.lise.grades];
  return allGrades.map((grade) => ({
    grade: grade.slug,
  }));
}

export default function GradeLevelPage({ params }: { params: { grade: string } }) {
  return <GradeLevelClientPage gradeSlug={params.grade} />;
}

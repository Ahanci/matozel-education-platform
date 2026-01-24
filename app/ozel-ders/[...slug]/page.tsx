import { notFound } from "next/navigation";
import {
  getSubjectBySlug,
  getCityBySlug,
  getExamBySlug,
  getGradeBySlug,
  allSubjects,
  cities,
  exams,
  levels,
} from "@/lib/data";
import { SubjectHero } from "@/components/subject/subject-hero";
import { SubjectInfo } from "@/components/subject/subject-info";
import { SubjectCTA } from "@/components/subject/subject-cta";
import { RelatedSubjects } from "@/components/subject/related-subjects";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface PageParams {
  slug: string[];
}

// Parse slug to extract subject, location, exam, grade
function parseSlug(slugArray: string[]) {
  const [subjectSlug, ...rest] = slugArray;

  const subject = getSubjectBySlug(subjectSlug);
  if (!subject) return null;

  let city = null;
  let exam = null;
  let grade = null;

  for (const segment of rest) {
    if (!city && getCityBySlug(segment)) {
      city = getCityBySlug(segment);
    } else if (!exam && getExamBySlug(segment)) {
      exam = getExamBySlug(segment);
    } else if (!grade && getGradeBySlug(segment)) {
      grade = getGradeBySlug(segment);
    }
  }

  return { subject, city, exam, grade };
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    return {
      title: "Sayfa Bulunamadı | MatÖzel",
    };
  }

  const { subject, city, exam, grade } = parsed;

  let title = `${subject.name} Özel Ders`;
  let description = `${subject.name} dersi için profesyonel özel ders hizmeti.`;

  if (exam) {
    title = `${subject.name} ${exam.name} Hazırlık`;
    description = `${exam.fullName} sınavı için ${subject.name} özel ders ve koçluk hizmeti.`;
  }

  if (grade) {
    title = `${grade.name} ${subject.name} Özel Ders`;
    description = `${grade.name} öğrencileri için ${subject.name} özel ders hizmeti.`;
  }

  if (city) {
    title += ` - ${city.name}`;
    description += ` ${city.name} ve çevresinde hizmet veriyoruz.`;
  }

  return {
    title: `${title} | MatÖzel`,
    description: description + " Türkiye geneli aynı gün kaynak temini.",
  };
}

// Generate static params
export async function generateStaticParams() {
  const params: { slug: string[] }[] = [];

  // Just subject
  for (const subject of allSubjects) {
    params.push({ slug: [subject.slug] });
  }

  // Subject + city
  for (const subject of allSubjects) {
    for (const city of cities) {
      params.push({ slug: [subject.slug, city.slug] });
    }
  }

  // Subject + exam
  for (const subject of allSubjects) {
    for (const examKey of Object.keys(exams)) {
      params.push({ slug: [subject.slug, examKey] });
    }
  }

  // Subject + grade
  for (const subject of allSubjects) {
    for (const grade of levels.ortaokul.grades) {
      params.push({ slug: [subject.slug, grade.slug] });
    }
    for (const grade of levels.lise.grades) {
      params.push({ slug: [subject.slug, grade.slug] });
    }
  }

  return params;
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    notFound();
  }

  const { subject, city, exam, grade } = parsed;

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SubjectHero subject={subject} city={city} exam={exam} grade={grade} />
      <SubjectInfo subject={subject} city={city} exam={exam} grade={grade} />
      <SubjectCTA subject={subject} exam={exam} />
      <RelatedSubjects currentSubject={subject} exam={exam} />
      <Footer />
    </main>
  );
}

// Türkiye'nin en büyük 10 ili
export const cities = [
  { slug: "istanbul", name: "İstanbul" },
  { slug: "ankara", name: "Ankara" },
  { slug: "izmir", name: "İzmir" },
  { slug: "bursa", name: "Bursa" },
  { slug: "antalya", name: "Antalya" },
  { slug: "adana", name: "Adana" },
  { slug: "konya", name: "Konya" },
  { slug: "gaziantep", name: "Gaziantep" },
  { slug: "sanliurfa", name: "Şanlıurfa" },
  { slug: "kocaeli", name: "Kocaeli" },
] as const;

// Sınav türleri
export const exams = {
  lgs: {
    slug: "lgs",
    name: "LGS",
    fullName: "Liselere Geçiş Sınavı",
    level: "ortaokul",
    grades: [8],
    subjects: [
      { slug: "turkce", name: "Türkçe", icon: "BookOpen" },
      { slug: "matematik", name: "Matematik", icon: "Calculator" },
      { slug: "fen-bilimleri", name: "Fen Bilimleri", icon: "FlaskConical" },
      { slug: "tc-inkilap", name: "T.C. İnkılap Tarihi", icon: "Landmark" },
      { slug: "din-kulturu", name: "Din Kültürü", icon: "Heart" },
      { slug: "yabanci-dil", name: "Yabancı Dil", icon: "Languages" },
    ],
  },
  tyt: {
    slug: "tyt",
    name: "TYT",
    fullName: "Temel Yeterlilik Testi",
    level: "lise",
    grades: [9, 10, 11, 12],
    subjects: [
      { slug: "turkce", name: "Türkçe", icon: "BookOpen" },
      { slug: "matematik", name: "Matematik", icon: "Calculator" },
      { slug: "fen-bilimleri", name: "Fen Bilimleri", icon: "FlaskConical" },
      { slug: "tarih", name: "Tarih", icon: "Clock" },
      { slug: "cografya", name: "Coğrafya", icon: "Globe" },
      { slug: "felsefe", name: "Felsefe", icon: "Brain" },
      { slug: "din-kulturu", name: "Din Kültürü", icon: "Heart" },
    ],
  },
  ayt: {
    slug: "ayt",
    name: "AYT",
    fullName: "Alan Yeterlilik Testi",
    level: "lise",
    grades: [11, 12],
    subjects: [
      { slug: "edebiyat", name: "Edebiyat", icon: "BookText" },
      { slug: "tarih", name: "Tarih", icon: "Clock" },
      { slug: "cografya", name: "Coğrafya", icon: "Globe" },
      { slug: "matematik", name: "Matematik", icon: "Calculator" },
      { slug: "geometri", name: "Geometri", icon: "Triangle" },
      { slug: "fizik", name: "Fizik", icon: "Atom" },
      { slug: "kimya", name: "Kimya", icon: "FlaskConical" },
      { slug: "biyoloji", name: "Biyoloji", icon: "Leaf" },
    ],
  },
} as const;

// Seviyeler ve sınıflar
export const levels = {
  ortaokul: {
    slug: "ortaokul",
    name: "Ortaokul",
    grades: [
      { slug: "5-sinif", name: "5. Sınıf", number: 5 },
      { slug: "6-sinif", name: "6. Sınıf", number: 6 },
      { slug: "7-sinif", name: "7. Sınıf", number: 7 },
      { slug: "8-sinif", name: "8. Sınıf", number: 8 },
    ],
    exams: ["lgs"],
    subjects: [
      { slug: "turkce", name: "Türkçe", icon: "BookOpen" },
      { slug: "matematik", name: "Matematik", icon: "Calculator" },
      { slug: "fen-bilimleri", name: "Fen Bilimleri", icon: "FlaskConical" },
      { slug: "sosyal-bilgiler", name: "Sosyal Bilgiler", icon: "Users" },
      { slug: "ingilizce", name: "İngilizce", icon: "Languages" },
      { slug: "din-kulturu", name: "Din Kültürü", icon: "Heart" },
    ],
  },
  lise: {
    slug: "lise",
    name: "Lise",
    grades: [
      { slug: "9-sinif", name: "9. Sınıf", number: 9 },
      { slug: "10-sinif", name: "10. Sınıf", number: 10 },
      { slug: "11-sinif", name: "11. Sınıf", number: 11 },
      { slug: "12-sinif", name: "12. Sınıf", number: 12 },
    ],
    exams: ["tyt", "ayt"],
    subjects: [
      { slug: "turkce", name: "Türkçe", icon: "BookOpen" },
      { slug: "matematik", name: "Matematik", icon: "Calculator" },
      { slug: "geometri", name: "Geometri", icon: "Triangle" },
      { slug: "fizik", name: "Fizik", icon: "Atom" },
      { slug: "kimya", name: "Kimya", icon: "FlaskConical" },
      { slug: "biyoloji", name: "Biyoloji", icon: "Leaf" },
      { slug: "edebiyat", name: "Edebiyat", icon: "BookText" },
      { slug: "tarih", name: "Tarih", icon: "Clock" },
      { slug: "cografya", name: "Coğrafya", icon: "Globe" },
      { slug: "felsefe", name: "Felsefe", icon: "Brain" },
      { slug: "ingilizce", name: "İngilizce", icon: "Languages" },
    ],
  },
} as const;

// Tüm dersler (unique)
export const allSubjects = [
  { slug: "turkce", name: "Türkçe", icon: "BookOpen", description: "Dil bilgisi, okuma anlama ve yazılı anlatım" },
  { slug: "matematik", name: "Matematik", icon: "Calculator", description: "Temel matematik ve ileri düzey konular" },
  { slug: "geometri", name: "Geometri", icon: "Triangle", description: "Düzlem ve uzay geometrisi" },
  { slug: "fizik", name: "Fizik", icon: "Atom", description: "Mekanik, elektrik ve modern fizik" },
  { slug: "kimya", name: "Kimya", icon: "FlaskConical", description: "Genel kimya ve organik kimya" },
  { slug: "biyoloji", name: "Biyoloji", icon: "Leaf", description: "Hücre, genetik ve ekoloji" },
  { slug: "fen-bilimleri", name: "Fen Bilimleri", icon: "FlaskConical", description: "Fizik, kimya ve biyoloji temelleri" },
  { slug: "edebiyat", name: "Edebiyat", icon: "BookText", description: "Türk ve dünya edebiyatı" },
  { slug: "tarih", name: "Tarih", icon: "Clock", description: "Türk ve dünya tarihi" },
  { slug: "cografya", name: "Coğrafya", icon: "Globe", description: "Fiziki ve beşeri coğrafya" },
  { slug: "felsefe", name: "Felsefe", icon: "Brain", description: "Mantık ve felsefi düşünce" },
  { slug: "ingilizce", name: "İngilizce", icon: "Languages", description: "Dil bilgisi ve konuşma pratiği" },
  { slug: "yabanci-dil", name: "Yabancı Dil", icon: "Languages", description: "İngilizce ve diğer diller" },
  { slug: "din-kulturu", name: "Din Kültürü", icon: "Heart", description: "Din kültürü ve ahlak bilgisi" },
  { slug: "tc-inkilap", name: "T.C. İnkılap Tarihi", icon: "Landmark", description: "Atatürk ilkeleri ve inkılap tarihi" },
  { slug: "sosyal-bilgiler", name: "Sosyal Bilgiler", icon: "Users", description: "Tarih, coğrafya ve vatandaşlık" },
  { slug: "yazilim", name: "Yazılım", icon: "Code", description: "Programlama ve web geliştirme" },
] as const;

// Helper fonksiyonlar
export function getSubjectBySlug(slug: string) {
  return allSubjects.find((s) => s.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function getExamBySlug(slug: string) {
  return exams[slug as keyof typeof exams];
}

export function getGradeBySlug(slug: string) {
  const allGrades = [...levels.ortaokul.grades, ...levels.lise.grades];
  return allGrades.find((g) => g.slug === slug);
}

export function getLevelBySlug(slug: string) {
  return levels[slug as keyof typeof levels];
}

export type City = (typeof cities)[number];
export type Exam = (typeof exams)[keyof typeof exams];
export type Level = (typeof levels)[keyof typeof levels];
export type Subject = (typeof allSubjects)[number];

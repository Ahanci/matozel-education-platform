import { SoftwarePageClient } from "./client-page";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata = {
  title: "Online Yazılım Özel Ders | Python, Web, Robotik Kodlama",
  description: "Çocuklar ve gençler için birebir online yazılım dersleri. Python, Web Geliştirme, Robotik Kodlama ve Yapay Zeka eğitimi.",
  openGraph: {
    title: "MatÖzel Yazılım Akademisi",
    description: "Geleceğin dili kodlamayı uzman mühendislerden öğrenin. %100 Online birebir eğitim.",
  },
};

export default function SoftwarePage() {
  return <SoftwarePageClient />;
}

import TYTOzelDersClientPage from "./client-page";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateMetadata() {
  return {
    title: "TYT Özel Ders | MatÖzel Eğitim Platformu",
    description: "TYT için birebir özel ders. Türkçe, Matematik, Fen ve Sosyal dersler. Uzman öğretmenler ve Türkiye geneli hizmet.",
    openGraph: {
      title: "TYT Özel Ders | MatÖzel Eğitim Platformu",
      description: "TYT için birebir özel ders. Türkçe, Matematik, Fen ve Sosyal dersler.",
    },
  };
}

export default function TYTOzelDersPage() {
  return <TYTOzelDersClientPage />;
}

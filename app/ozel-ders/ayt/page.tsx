import AYTOzelDersClientPage from "./client-page";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateMetadata() {
  return {
    title: "AYT Özel Ders | MatÖzel Eğitim Platformu",
    description: "AYT için birebir özel ders. Sayısal ve Sözel alan dersleri. Uzman öğretmenler ve Türkiye geneli hizmet.",
    openGraph: {
      title: "AYT Özel Ders | MatÖzel Eğitim Platformu",
      description: "AYT için birebir özel ders. Sayısal ve Sözel alan dersleri.",
    },
  };
}

export default function AYTOzelDersPage() {
  return <AYTOzelDersClientPage />;
}

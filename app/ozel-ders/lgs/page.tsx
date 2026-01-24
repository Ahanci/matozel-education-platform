import LGSOzelDersClientPage from "./client-page";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateMetadata() {
  return {
    title: "LGS Özel Ders | MatÖzel Eğitim Platformu",
    description:
      "LGS için birebir özel ders. Tüm dersler, uzman öğretmenler ve Türkiye geneli hizmet. Ücretsiz deneme dersi fırsatı.",
    openGraph: {
      title: "LGS Özel Ders | MatÖzel Eğitim Platformu",
      description:
        "LGS için birebir özel ders. Tüm dersler, uzman öğretmenler ve Türkiye geneli hizmet.",
    },
  };
}

export default function LGSOzelDersPage() {
  return <LGSOzelDersClientPage />;
}

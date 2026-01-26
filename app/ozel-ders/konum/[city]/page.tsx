import { CityPageClient } from "./client-page";
import { cities } from "@/lib/data";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateMetadata({ params }: { params: { city: string } }) {
  const cityData = cities.find((c) => c.slug === params.city);

  if (!cityData) {
    return {
      title: "Şehir Bulunamadı | MatÖzel",
    };
  }

  return {
    title: `${cityData.name} Online Özel Ders | Yapay Zeka Destekli Eğitim`,
    description: `${cityData.name}'da yapay zeka destekli online özel ders hizmeti. LGS, TYT, AYT ve tüm dersler için birebir canlı eğitim.`,
    openGraph: {
      title: `${cityData.name} Online Özel Ders | MatÖzel`,
      description: `${cityData.name} için yapay zeka destekli online özel ders ve koçluk hizmetleri.`,
    },
  };
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export default function CityPage({ params }: { params: { city: string } }) {
  return <CityPageClient citySlug={params.city} />;
}

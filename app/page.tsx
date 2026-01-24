import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ServicesGridSection } from "@/components/services-grid-section";
import { AboutSection } from "@/components/about-section";
import { PricingSection } from "@/components/pricing-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateMetadata() {
  return {
    title:
      "MatÖzel Eğitim Platformu | LGS, TYT, AYT Sınav Koçluğu ve Özel Ders",
    description:
      "MatÖzel ile LGS, TYT ve AYT sınavlarına hazırlan. Türkiye geneli uzman koçlar, birebir özel ders ve aynı gün kaynak teslimatı.",
    openGraph: {
      title: "MatÖzel Eğitim Platformu",
      description: "LGS, TYT ve AYT sınav koçluğu ve özel ders hizmetleri.",
    },
  };
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesGridSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

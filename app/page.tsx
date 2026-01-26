import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SeoSubjectsGrid } from "@/components/seo-subjects-grid";
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
      "MatÖzel | Yapay Zeka Destekli Online Özel Ders ve Sınav Koçluğu",
    description:
      "AI destekli kişiselleştirilmiş online özel ders, LGS/TYT/AYT sınav koçluğu ve yazılım eğitimi. %100 online, yapay zeka ile öğrenme deneyimi.",
    openGraph: {
      title: "MatÖzel | AI Destekli Online Eğitim Platformu",
      description: "Yapay zeka ile kişiselleştirilmiş online özel ders ve koçluk hizmetleri.",
    },
  };
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesGridSection />
      <SeoSubjectsGrid />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

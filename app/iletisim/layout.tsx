import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim - MatÖzel Eğitim Platformu",
  description: "MatÖzel ile iletişime geçin. Uzman eğitmenlerimizle tanışın, sorularınızı yöneltin.",
  keywords: ["MatÖzel", "iletişim", "eğitim", "özel ders", "sınav koçluğu"],
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

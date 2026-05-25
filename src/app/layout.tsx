import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Header } from "@/components/ui/Header";
import { Toaster } from "sonner";
import { ContactModal } from "@/components/ui/ContactModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "По-Феншую | Премиальные загородные дома",
  description: "Строим дома, в которые хочется возвращаться. От доступных уютных домов до премиальных резиденций под ключ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll>
          <Header />
          {children}
          <ContactModal />
          <Toaster position="bottom-right" />
        </SmoothScroll>
      </body>
    </html>
  );
}

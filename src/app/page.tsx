import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Catalog } from "@/components/sections/Catalog";
import { Calculator } from "@/components/sections/Calculator";
import { Trust } from "@/components/sections/Trust";
import { Lifestyle } from "@/components/sections/Lifestyle";
import { PremiumExclusive } from "@/components/sections/PremiumExclusive";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Hero />
      <Benefits />
      <Catalog />
      <Calculator />
      <Trust />
      <Lifestyle />
      <PremiumExclusive />
      <Process />
      <Reviews />
      <CtaSection />
      <Footer />
    </main>
  );
}

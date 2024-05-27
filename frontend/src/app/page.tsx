import Banner from "@/components/Banner/Banner";
import Image from "next/image";
import CardsSection from "@/components/cardsSection/cardsSection";
import Faq from '@/components/Faq/Faq'
import { BenefitsSection, HeroSection } from "@/components";

export default function Home() {
  return (
    <main className="mobile:p-24 flex min-h-screen flex-col items-center justify-between p-0 bg-slate-50 ">
      <HeroSection />
      <BenefitsSection />
      <CardsSection />
      <Faq />
      <Banner />
    </main>
  );
}

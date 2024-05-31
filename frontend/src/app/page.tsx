import Banner from "@/components/Banner/Banner";
import CardsSection from "@/components/cardsSection/cardsSection";
import { Faq } from '@/components/Faq/Faq'
import { BenefitsSection, HeroSection } from "@/components";
import UserStatus from "@/components/userStatus/UserStatus";


const userData = {
  membershipStatus: 'Activa',
  monthlyValue: 1000,
  expirationDate: '20/10/2025',
  numberOfUses: 850,
};

export default function Home() {
  return (
    <main className="mobile:p-24 flex min-h-screen flex-col items-center justify-between p-0 bg-slate-50 ">
      <HeroSection />
      <BenefitsSection />
      <CardsSection />
      <Faq />
      <Banner />
      {/* <UserStatus {...userData}/> */}
    </main>
  );
}

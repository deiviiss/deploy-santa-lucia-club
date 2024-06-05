import { MembershipTypes } from "@/components";
import Banner from "@/components/Banner/Banner";
import CardsSection from "@/components/cardsSection/cardsSection";
import { Faq } from "@/components/Faq/Faq";
import { BenefitsSection, HeroSection } from "@/components";
import UserStatus from "@/components/userStatus/UserStatus";
import { getMemberShipTypes } from "@/actions";

const userData = {
  membershipStatus: "Activa",
  monthlyValue: 1000,
  expirationDate: "20/10/2025",
  numberOfUses: 850,
};

export default async function Home() {
  const { membershipTypes } = await getMemberShipTypes()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mobile:p-24 p-0 bg-custom-gradient">
      <HeroSection />
      <BenefitsSection />
      <CardsSection />
      <MembershipTypes memberships={membershipTypes} />
      <Faq />
      <Banner />
      {/* <UserStatus {...userData}/> */}
    </main>
  );
}

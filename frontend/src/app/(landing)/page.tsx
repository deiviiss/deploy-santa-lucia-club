//app/(landing)/page.tsx
import { MembershipTypes } from "@/components";
import Banner from "@/components/Banner/Banner";
import CardsSection from "@/components/cardsSection/cardsSection";
import { Faq } from "@/components/Faq/Faq";
import { BenefitsSection, HeroSection } from "@/components";
import UserStatus from "@/components/userStatus/UserStatus";
import { getMemberShipTypes, getUserStatus } from "@/actions";
import { useMemberships } from "@/components/providers/MembershipContext";

export default async function Home() {
  const UserStatus = await getUserStatus(
    "793d7d6d-96b8-413a-bd6e-8f9de5ce5264"
  );
  //const { memberships } = useMemberships();
  const { membershipTypes } = await getMemberShipTypes();

  if (membershipTypes === null) {
    return <div>Loading...</div>;
  }
  console.log("landing se está montando");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full p-0 bg-custom-gradien overflow-hidden">
      <HeroSection />
      <BenefitsSection />
      <CardsSection />
      <MembershipTypes memberships={membershipTypes} />
      <Faq />
      <Banner />
      {/* <UserStatus {...userData}/>  */}
    </main>
  );
}

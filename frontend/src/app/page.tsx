"use client";

import MembershipTypes from "@/components/membershipTypes/MembershipTypes";
import Banner from "@/components/Banner/Banner";
import CardsSection from "@/components/cardsSection/cardsSection";
import { Faq } from "@/components/Faq/Faq";
import { BenefitsSection, HeroSection } from "@/components";
import UserStatus from "@/components/userStatus/UserStatus";

const userData = {
  membershipStatus: "Activa",
  monthlyValue: 1000,
  expirationDate: "20/10/2025",
  numberOfUses: 850,
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mobile:p-24 p-0 bg-custom-gradient">
      <HeroSection />
      <BenefitsSection />
      <CardsSection />
      <MembershipTypes />
      <Faq />
      <Banner />
      {/* <UserStatus {...userData}/> */}
    </main>
  );
}

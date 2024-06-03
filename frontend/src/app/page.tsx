import Image from "next/image";
import CardsSection from "@/components/cardsSection/cardsSection";

export default function Home() {
  return (
    <main className="mobile:p-24 flex min-h-screen flex-col items-center justify-between p-0 bg-gradient-custom ">
      <CardsSection />
    </main>
  );
}

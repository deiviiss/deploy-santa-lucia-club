import Image from "next/image";
import CardsSection from "@/components/cardsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-50 ">
      <section className="flex flex-col items-center justify-center gap-7 ">
        <span className="text-custom-blue font-raleway text-lg font-semibold leading-6 text-left">
          Unidos por la pasión, el esfuerzo y la amistad
        </span>
        <h1 className="font-inter inter text-7xl font-bold leading-snug text-center">
          ¡Un lugar para todos!
        </h1>
        {<CardsSection />}
      </section>
    </main>
  );
}

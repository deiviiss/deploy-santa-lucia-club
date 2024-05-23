import Image from "next/image";
import CardsSection from "@/app/components/cardsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-50 ">
      <section className="flex flex-col items-center justify-center gap-y-32 ">
        <h1 className="font-inter inter text-7xl font-bold leading-snug text-center m-bottom-7">
          <span className="text-custom-blue font-raleway text-lg font-semibold leading-6 text-left inline-block">
            Unidos por la pasión, el esfuerzo y la amistad
          </span>
          <span className="block">¡Un lugar para todos!</span>
        </h1>

        {<CardsSection />}
      </section>
    </main>
  );
}

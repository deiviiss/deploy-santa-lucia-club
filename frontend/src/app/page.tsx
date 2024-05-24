import Banner from "@/components/Banner/Banner";
import Image from "next/image";
import Faq from '@/components/Faq/Faq'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Faq />
      <Banner/>
    </main>
  );
}

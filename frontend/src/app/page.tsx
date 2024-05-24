import Image from "next/image";
import MembershipeTypes from "@/components/membershipTypes/membershipTypes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MembershipeTypes />
    </main>
  );
}

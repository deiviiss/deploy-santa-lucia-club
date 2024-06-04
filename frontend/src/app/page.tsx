"use client";
import MembershipTypes from "@/components/membershipTypes/MembershipTypes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mobile:p-24 p-0 bg-custom-gradient">
      <MembershipTypes />
    </main>
  );
}

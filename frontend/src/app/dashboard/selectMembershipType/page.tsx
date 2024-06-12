//auth/selectMembershipType
"use client";
import { Button } from "@nextui-org/react";
import { MembershipTypes } from "@/components/membershipTypes/membershipTypes";
import { useMemberships } from "@/components/providers/MembershipContext";
import Link from "next/link";

export default function SelectMembershipPage() {
  const { memberships } = useMemberships();
  console.log(memberships);
  console.log("selectedMembershiptype de está montando");

  return (
    <main className="flex flex-col  w-full items-center justify-center bg-gradient-to-b from-[#FFFFFF] via-[#CDEDF5] to-[#C1E9F2] ">
      {memberships && <MembershipTypes memberships={memberships} />}
    </main>
  );
}

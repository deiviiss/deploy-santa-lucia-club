import { ActivitiesSection, ButtonLogout } from "@/components";

export default function DashboardPage() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <ActivitiesSection />

      <ButtonLogout />
    </main >
  );
}

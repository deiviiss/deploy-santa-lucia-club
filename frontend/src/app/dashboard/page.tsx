import { ActivitiesSection, ButtonLogout } from "@/components";
import { UpcomingEvents } from "@/components/UpcomingEvents/UpcomingEvents";

export default function DashboardPage() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      {/* <ActivitiesSection /> */}
      <UpcomingEvents />
      <ButtonLogout />
    </main>
  );
}


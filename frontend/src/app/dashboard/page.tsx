import {
  ActivitiesSection,
  InfoclubSection,
  UpcomingEvents,
} from "@/components";

export default function DashboardPage() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <ActivitiesSection />
      <div className="flex flex-col-reverse md:flex-row w-full justify-start gap-5">
        <UpcomingEvents />
        <InfoclubSection />
      </div>
    </main>
  );
}


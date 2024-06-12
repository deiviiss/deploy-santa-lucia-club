import {
  ActivitiesSection,
  InfoclubSection,
  UpcomingEvents,
  BenefitsPromotionsSection,
} from "@/components";

export default function DashboardPage() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <ActivitiesSection />
      <div className="flex flex-col-reverse md:flex-row w-11/12 gap-5 md:ms-5">
        <UpcomingEvents />
        <InfoclubSection />
      </div>
      <BenefitsPromotionsSection />
    </main>
  );
}


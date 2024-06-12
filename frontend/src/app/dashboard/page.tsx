import {
  ActivitiesSection,
  InfoclubSection,
  UpcomingEvents,
  BenefitsPromotionsSection,
} from "@/components";
import OtherActivities from "@/components/otherActivities/otherActivities";

export default function DashboardPage() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <div className="flex flex-col w-11/12 gap-5 md:ms-5">
        <OtherActivities />
        <div className="flex gap-4">
          <UpcomingEvents />
          <InfoclubSection />
        </div>
        <BenefitsPromotionsSection />
        <ActivitiesSection />
      </div>
    </main>
  );
}


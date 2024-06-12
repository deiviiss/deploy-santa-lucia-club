import { ActivitiesSection } from "@/components";
import BenefitsPromotionsSection from "@/components/BenefitsPromotionsSection/BenefitsPromotionsSection";

export default function DashboardPage() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <ActivitiesSection />
      <BenefitsPromotionsSection />
    </main>
  );
}

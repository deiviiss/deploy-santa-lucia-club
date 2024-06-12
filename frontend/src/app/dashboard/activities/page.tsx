import { getActivities, getSports } from "@/actions";

import { SliderSection } from "@/components";
export default async function ActivityPage() {
  const { activities } = await getActivities();
  const { sports } = await getSports();

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-medium text-[#175F70] text-2xl mt-4 md:mt-8">
        Actividades del club
      </h1>

      <SliderSection title="Deportes" activities={activities || []} />

      <SliderSection title="Mis actividades" activities={sports || []} />

      <div>
        <h2 className="font-medium text-[22px] text-[#175F70]">
          Proximos Eventos
        </h2>
      </div>
    </div>
  );
}

import React from "react";
import { InfoclubCards } from "./InfoclubCards/InfoclubCards";
import { data } from "./Infoclub.helpers";

export function InfoclubSection() {
  return (
    <section className="w-full md:m-3 md:max-w-xs">
      <h2 className="hidden md:block text-[22px] text-[#333B69] font-semibold">
        Información del club
      </h2>
      <InfoclubCards data={data} />
    </section>
  );
}

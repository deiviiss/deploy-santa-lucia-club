"use  client";
import React, { useState } from "react";
import CustomSwitch from "@/components/customSwitch/CustomSwitch";
import MembershipCard from "@/components/membershipCard/MembershipCard";

const memberships = [
  {
    planName: "Plan Nombre 1",
    pricePerMonth: "$10/mes",
    features: [
      "Característica 1",
      "Característica 2",
      "Característica 3",
      "característiica 4",
    ],
  },
  {
    planName: "Plan Nombre 2",
    pricePerMonth: "$20/mes",
    features: [
      "Característica A",
      "Característica B",
      "Característica C",
      "característiica 4",
    ],
  },
  {
    planName: "Plan Nombre 3",
    pricePerMonth: "$30/mes",
    features: [
      "Característica X",
      "Característica Y",
      "Característica Z",
      "característiica 4",
    ],
  },
];

const MembershipTypes: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleSelect = (planName: string) => {
    alert(`Seleccionaste el ${planName}`);
  };

  return (
    <>
      <section className="mobile:max-w-5xl flex flex-col items-center justify-center gap-y-20 w-full">
        <div className=" flex flex-col justify-center max-w-2/3 gap-y-6">
          <h2 className="text-center font-inter text-6xl font-bold leading-none tracking-tighter">
            Tipos de membresias
          </h2>
          <h3 className="w-full font-inter text-center text-xl font-normal leading-9">
            subtitulo subtitulo subtitulo
          </h3>
          <CustomSwitch checked={isChecked} onChange={handleChange} />
        </div>

        <div className="w-full flex flex-wrap justify-center gap-6">
          {memberships.map((membership, index) => (
            <MembershipCard
              key={index}
              planName={membership.planName}
              pricePerMonth={membership.pricePerMonth}
              features={membership.features}
              onSelect={() => handleSelect(membership.planName)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default MembershipTypes;

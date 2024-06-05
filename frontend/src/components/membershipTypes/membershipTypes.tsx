"use  client";
import React, { useState } from "react";
import CustomSwitch from "@/components/customSwitch/CustomSwitch";
import MembershipCard from "@/components/membershipCard/MembershipCard";
import { useMediaQuery } from "react-responsive";
const memberships = [
  {
    planName: "Individual",
    pricePerMonth: "$20 ",
    pricePerYear: "$90 ",
    statement: "For most businesses that want to otpimize web queries",
    features: [
      "Característica 1",
      "Característica 2",
      "Característica 3",
      "característiica 4",
    ],
  },
  {
    planName: "Duo",
    pricePerMonth: "$75 ",
    pricePerYear: "$190",
    statement: "For most businesses that want to otpimize web queries",
    features: [
      "Característica A",
      "Característica B",
      "Característica C",
      "característiica 4",
    ],
  },
  {
    planName: "Familiar",
    pricePerMonth: "$100",
    pricePerYear: "$270",
    statement: "For most businesses that want to otpimize web queries",
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
  const isMobile = useMediaQuery({ query: "(max-width: 376px)" });
  return (
    <>
      <section className="max-w-7xl   flex flex-col items-center justify-center mobile:gap-y-20 gap-y-4 text-primary-300  ">
        <div className=" flex flex-col justify-center max-w-2/3 gap-y-6">
          <h2 className="text-center font-inter mobile:text-6xl  text-xl font-bold leading-none tracking-tighter">
            Tipos de membresias
          </h2>
          {isMobile ? (
            <h3 className="mobile: w-full font-inter text-center mobile:text-xl text-base font-normal font-custom-blue leading-9">
              ¡Elige tu membresía ahora y comienza a disfrutar de los beneficios
              de nuestro club!
            </h3>
          ) : null}

          <CustomSwitch checked={isChecked} onChange={handleChange} />
        </div>

        <div className="flex gap-x-7 ">
          {isMobile ? (
            <p>holi</p>
          ) : (
            <>
              {memberships.map((membership, index) => (
                <MembershipCard
                  key={index}
                  planName={membership.planName}
                  pricePerMonth={membership.pricePerMonth}
                  pricePerYear={membership.pricePerYear}
                  statement={membership.statement}
                  features={membership.features}
                  isAnnual={isChecked}
                  onSelect={() => handleSelect(membership.planName)}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default MembershipTypes;

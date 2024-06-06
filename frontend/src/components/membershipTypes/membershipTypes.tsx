"use client";

import { useState } from "react";
import CustomSwitch from "@/components/customSwitch/CustomSwitch";
import MembershipCard from "@/components/membershipCard/MembershipCard";
import Carousel from "@/components/Carousel/Carousel";
import { useMediaQuery } from "react-responsive";
import { IMemberShipType } from "@/interfaces/memberShipType.interface";
// const memberships = [
//   {
//     planName: "Membresía Individual",
//     pricePerMonth: "$20 ",
//     pricePerYear: "$90 ",
//     statement:
//       "Ideal para quienes entrenan de forma individual o utilizan el club de manera ocasional determinados dias de la semana.",
//     features: [
//       "Uso de las instalaciones del club",
//       "clases grupales de fitness",
//       "Uso de vestuarios, duchas y lockers.",
//     ],
//   },
//   {
//     planName: "Membresía Duo",
//     pricePerMonth: "$75 ",
//     pricePerYear: "$190",
//     statement:
//       "Acceso ilimitado a las instalaciones para toda la familia del club para toda la familia (hasta 5 miembros).",
//     features: [
//       "clases grupales recreativas.",
//       "Uso de vestuarios, duchas y lockers",
//       "Deportes a eleccion y uso del gimnasio",
//     ],
//   },
//   {
//     planName: "Membresía Familiar",
//     pricePerMonth: "$100",
//     pricePerYear: "$270",
//     statement:
//       "Acceso ilimitado a todas las instalaciones, actividades y servicios del club, además de beneficios VIP exclusivos.",
//     features: [
//       "Entrenamientos personalizados  ",
//       "Programas especializados",
//       "Acceso a eventos deportivos exclusivos.",
//     ],
//   },
// ];

interface MembershipPlan {
  name: string;
  description: string;
  idPlanProvider: string;
  price: string;
  numberPeople: number;
  paymentFrequency: string;
  activities: string[];
}

interface IMembershipProps {
  memberships: IMemberShipType[];
}

export const MembershipTypes = ({ memberships }: IMembershipProps) => {
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
      <section className="mobile:max-w-7xl w-full mobile:my-20 my-10  flex flex-col items-center justify-center mobile:gap-y-20 gap-y-4 text-primary-300  ">
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

        <div className="mobile:flex mobile:gap-x-7 w-full justify-center">
          {isMobile ? (
            <Carousel
              cardDataArray={memberships}
              renderCard={(membership) => (
                <MembershipCard
                  planName={membership.name}
                  pricePerMonth={membership.price}
                  pricePerYear={membership.price}
                  statement={membership.description}
                  features={membership.activities}
                  isAnnual={isChecked}
                  onSelect={() => handleSelect(membership.name)}
                />
              )}
            />
          ) : (
            <>
              {memberships.map((membership, index) => (
                <MembershipCard
                  key={index}
                  planName={membership.name}
                  pricePerMonth={membership.price}
                  pricePerYear={membership.price}
                  statement={membership.description}
                  features={membership.activities}
                  isAnnual={isChecked}
                  onSelect={() => handleSelect(membership.name)}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

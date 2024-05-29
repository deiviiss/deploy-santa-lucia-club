import React from "react";
import { Button } from "@nextui-org/react";
const promotions = [
  {
    src: "https://images.unsplash.com/broken",
    name: "Descuentos",
  },
  {
    src: "https://images.unsplash.com/broken",
    name: "Promociones Temporales",
  },
  {
    src: "https://images.unsplash.com/broken",
    name: "Ofertas Especiales",
  },
];

export default function BenefitsPromotionsSection() {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-inter text-2xl font-semibold leading-6 text-elegant-blue">
        Beneficios y Promociones Exclusivas
      </h2>
      <div className="mobile:flex-row flex flex-col  max-w-3xl rounded-xl border-solid border-2 py-7  border-custom-gray">
        {promotions.map((promotion, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center p-4 gap-2 "
              key={index}
            >
              <Button size="lg" isIconOnly></Button>
              <span className="block text-center font-inter font-medium text-base-color font-base leading-5">
                {promotion.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

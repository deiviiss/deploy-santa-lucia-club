// components/MembershipCard.tsx
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import React from "react";

interface MembershipCardProps {
  planName: string;
  pricePerMonth: string;
  features: string[];
  onSelect: () => void;
}

const MembershipCard: React.FC<MembershipCardProps> = ({
  planName,
  pricePerMonth,
  features,
  onSelect,
}) => {
  return (
    <Card className="p-9 w-full max-w-sm rounded-xl flex flex-col flex-wrap gap-y-8">
      <CardHeader className="w-full  flex-col flex-wrap items-start gap-y-3 ">
        <h1 className="font-inter text-4xl font-semibold leading-11 text-left block">
          <span className="text-tiny uppercase font-bold block">
            {planName}
          </span>
          {pricePerMonth}
        </h1>
      </CardHeader>
      <CardBody className="w-full py-2 gap-y-8">
        <ul className="list-disc list-inside mb-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="font-inter text-lg text-ligther-gray font-medium leading-7 text-left"
            >
              {feature}
            </li>
          ))}
        </ul>
        <Button
          className="text-white bg-black"
          radius="sm"
          color="default"
          onClick={onSelect}
        >
          Seleccionar
        </Button>
      </CardBody>
    </Card>
  );
};

export default MembershipCard;

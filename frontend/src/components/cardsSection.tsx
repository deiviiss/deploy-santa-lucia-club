import { Card, CardHeader, CardBody, Avatar } from "@nextui-org/react";
import React from "react";

type CardData = {
  title: string;
  description: string;
  avatarName: string;
  avatarSrc: string;
};
const cardDataArray: CardData[] = [
  //Este array proximamnete puede sustituirse  para traer datos de la API del backend
  {
    title: "Futbol",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatarName: "Joe",
    avatarSrc: "https://images.unsplash.com/broken",
  },
  {
    title: "Basketball",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatarName: "Anna",
    avatarSrc: "https://images.unsplash.com/broken",
  },
  {
    title: "Tennis",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatarName: "Mike",
    avatarSrc: "https://images.unsplash.com/broken",
  },
  {
    title: "Swimming",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatarName: "Sue",
    avatarSrc: "https://images.unsplash.com/broken",
  },
  {
    title: "Running",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    avatarName: "Tim",
    avatarSrc: "https://images.unsplash.com/broken",
  },
  {
    title: "Cycling",
    description:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    avatarName: "Sam",
    avatarSrc: "https://images.unsplash.com/broken",
  },
];

const CardsSection: React.FC = () => {
  return (
    <>
      <div className="flex max-w-6xl justify-center flex-wrap  gap-y-6 gap-x-6 ">
        {cardDataArray.map((card, index) => (
          <Card
            key={index}
            className="max-w-xs min-h-70 m-0 bg-custom-gray p-4"
            radius="none"
            isPressable={true}
          >
            <CardHeader className="flex flex-col items-start gap-y-4">
              <Avatar
                className="bg-white w-20 h-20"
                name={card.avatarName}
                src={card.avatarSrc}
              />
              <h2 className="text-light-gray  font-raleway text-4xl font-semibold leading-9 text-left">
                {card.title}
              </h2>
            </CardHeader>
            <CardBody>
              <p className="text-lightest-gray  font-raleway text-lg font-medium leading-7 text-left">
                {card.description}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CardsSection;

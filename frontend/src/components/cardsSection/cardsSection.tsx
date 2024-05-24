"use client";
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
      <section className="mobile:max-w-5xl flex flex-col items-center justify-center gap-y-32 w-11/12 ">
        <h1 className="flex mobile:flex-col flex-col-reverse justify-center font-inter  inter  font-bold leading-snug text-center m-bottom-7 ">
          <span className="text-custom-blue font-raleway mobile:text-lg text-base font-semibold leading-6  inline-block">
            Unidos por la pasión, el esfuerzo y la amistad
          </span>
          <span className="block  mobile:text-7xl text-xl">
            ¡Un lugar para todos!
          </span>
        </h1>
        <div className="flex max-w-6xl justify-center flex-wrap  gap-y-6 gap-x-6 ">
          {cardDataArray.map((card, index) => (
            <Card
              key={index}
              className=" mobile:max-w-xs mobile:p-4  m-0 bg-custom-gray p-0 w-full "
              radius="none"
              isPressable={true}
            >
              <CardHeader className="flex flex-col items-start gap-y-4">
                <Avatar
                  className="bg-white mobile:w-20 mobile:h-20 w-8 h-8"
                  name={card.avatarName}
                  src={card.avatarSrc}
                />
                <h2 className="text-light-gray  font-raleway mobile:text-4xl text-3xl font-semibold leading-9 text-left">
                  {card.title}
                </h2>
              </CardHeader>
              <CardBody>
                <p className="text-lightest-gray  font-raleway mobile:text-lg text-sm font-medium leading-7 text-left">
                  {card.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default CardsSection;

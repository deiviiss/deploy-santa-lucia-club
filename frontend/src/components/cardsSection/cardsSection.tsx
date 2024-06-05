"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React from "react";
import Carousel from "../Carousel/Carousel";
import { useMediaQuery } from "react-responsive";
import "./styles.css";

type CardData = {
  title: string;
  description: string;
  imageSrc: string;
};
const cardDataArray: CardData[] = [
  //Este array proximamnete puede sustituirse  para traer datos de la API del backend
  {
    title: "Futbol",
    description:
      "En nuestro club, la pasión por el fútbol se vive en cada jugada. Nuestras modernas canchas te brindan el escenario perfecto para desplegar tu talento y vivir la emoción de este deporte junto a tus compañeros.",
    imageSrc: "/images/Football.svg",
  },
  {
    title: "Tennis",
    description:
      "Eleva tu juego a un nuevo nivel en nuestras impecables canchas de tenis. Recibe clases personalizadas de nuestros expertos profesores, quienes te guiarán en el camino hacia el dominio de este apasionante deporte. ",

    imageSrc: "/images/Tennis.svg",
  },
  {
    title: "Natación",
    description:
      "Perfecciona tu técnica en nuestras amplias piscinas. Ofrecemos clases de natación para todas las edades y niveles, desde principiantes que buscan aprender hasta nadadores experimentados que desean mejorar su rendimiento.",
    imageSrc: "/images/Swimming.svg",
  },

  {
    title: "Basquet",
    description:
      "Clases de básquetbol diseñadas para todas las edades y niveles. Desde principiantes hasta jugadores experimentados, en nuestro club encontrarás el entrenamiento ideal para perfeccionar tus habilidades.",
    imageSrc: "/images/Basquetball.svg",
  },
  {
    title: "Gimnasio",
    description:
      "Alcanza tus objetivos fitness en nuestro gimnasio totalmente equipado con tecnología de última generación. Accede a planes personalizados de entrenamiento y asesoría nutricional diseñados por nuestros expertos.",
    imageSrc: "/images/gym.svg",
  },
  {
    title: "Actividades recreativas",
    description:
      "Desconecta del estrés y encuentra tu equilibrio con nuestras clases de yoga, pilates y baile. Estas actividades te ayudarán a mejorar tu flexibilidad, fortalecer tu cuerpo y conectarte con tu bienestar interior..",
    imageSrc: "/images/Activities.svg",
  },
];
const renderCard = (card: CardData) => (
  <Card
    className=" m-0  mobile:w-96 w-80  bg-white mobile:p-7 py-3.5 px-5 shadow-custom"
    isPressable={true}
    classNames={{ body: "cardBody", base: "cardBase" }}
  >
    <CardHeader className="flex flex-col items-center gap-y-4">
      <h2 className="text-perfect-blue font-poppins  text-xl font-semibold leading-8 text-center">
        {card.title}
      </h2>
    </CardHeader>
    <CardBody>
      <p className="text-perfect-blue font-monserrat   text-sm font-normal leading-7 ">
        {card.description}
      </p>
      <Image src={card.imageSrc} alt="Image" className="rounded-none" />
    </CardBody>
  </Card>
);

const CardsSection: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 376px)" });
  return (
    <>
      <section className="mobile:max-w-7xl w-11/12  flex flex-col items-center justify-center gap-y-6 mobile:gap-y-20 ">
        <div className="flex flex-col  justify-center  ">
          <span className="mobile:text-custom-blue text-perfect-blue font-raleway text-base mobile:text-lg font-semibold leading-6 text-center  ">
            Unidos por la pasión, el esfuerzo y la amistad
          </span>
          <h1 className=" text-perfect-blue mobile:text-custom-black  mobile:text-7xl text-xl font-poppins mobile:font-inter  font-bold leading-snug text-center">
            ¡Un lugar para todos!
          </h1>
        </div>
        {isMobile ? (
          <div className="flex w-full justify-center">
            <Carousel cardDataArray={cardDataArray} renderCard={renderCard} />
          </div>
        ) : (
          <div className="flex flex-wrap w-full   gap-x-7 gap-y-12 justify-center items-center">
            {cardDataArray.map((card) => renderCard(card))}
          </div>
        )}
      </section>
    </>
  );
};

export default CardsSection;

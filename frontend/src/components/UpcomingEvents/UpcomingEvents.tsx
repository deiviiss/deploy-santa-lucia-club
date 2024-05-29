import Image from 'next/image';
import React from 'react';


type EventProps = {
  imageUrl: string;
  title: string;
  date: string;
  description: string;
  isFree: boolean;
  buttonText: string;
};

export const UpcomingEvents: React.FC<EventProps> = ({
  imageUrl,
  title,
  date,
  description,
  isFree,
  buttonText,
}) => {
  return (
    <>    
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_2fr_2fr] lg:items-center lg:border-0 p-5 border-b last-of-type:border-0 my-5 gap-5">
      <div>
        <Image 
            src={imageUrl}
            width={300}
            height={300}
            className="w-2/5 m-auto" 
            alt={title} 
        />
      </div>
      <div className="text-center lg:text-left">
        <h2>{title}</h2>
        <p className="text-sm text-sky-600">{date}</p>
      </div>
      <div className="m-auto">{isFree ? 'Evento Gratuito' : description}</div>
      <div className="m-auto">
        <button className="w-full lg:w-auto text-white rounded-lg bg-black border-2 border-black px-5 py-1 hover:border-black hover:bg-transparent hover:text-black transition duration-400 shadow-xl">
          {buttonText}
        </button>
      </div>
    </div>
    </>
  );
};

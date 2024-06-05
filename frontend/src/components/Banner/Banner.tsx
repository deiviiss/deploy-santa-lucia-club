import React from 'react';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div   className="flex flex-col items-center justify-center bg-blue-100 p-4 py-20 w-[1298px] h-[448px] rounded transition duration-300 ease-in-out"
    >
      <div className="flex flex-col items-center">
        {/* Use next/image for automatic optimization */}
        <Image
          src="/images/logoBanner.svg"
          alt="Santa Ana Club Logo"
          width={800}
          height={284}
          
        />

        <Button
          variant="ghost"
          className="flex justify-center items-center px-[14px] py-[14px] gap-[8px] w-[587px] h-[70px] bg-white border-[2px] border-solid border-[#CC6600] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-[16px]"
        >
          Únete Ahora
        </Button>
      </div>
    </div>
  );
};

export default Banner;
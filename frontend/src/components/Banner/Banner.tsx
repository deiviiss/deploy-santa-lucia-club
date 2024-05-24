import React from 'react';
import { Button } from '@nextui-org/react';

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-2">Únete al Club Social X</h1>
      <p className="text-gray-500 mb-4">Subtitulo Subtitulo Subtitulo Subtitulo Subtitulo Subtitulo</p>
      <Button className="bg-black text-white">Unirme al club</Button>
    </div>
  );
};

export default Banner;

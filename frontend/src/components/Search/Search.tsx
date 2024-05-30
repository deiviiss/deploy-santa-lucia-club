import React from 'react';
import { Avatar } from "@nextui-org/avatar";
import { FaBell } from 'react-icons/fa';

type SearchProps = {};

export const Search: React.FC<SearchProps> = () => {
  return (
    <div className="flex justify-center border-b pb-5 lg:justify-end gap-5">
      <div className='hidden lg:flex'>
        <input
          placeholder="Buscar"
          className="border rounded-md px-1 shadow-lg"
        />
      </div>
      <div className="hidden lg:flex items-center">
        <FaBell />
      </div>
      <div>
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          size="md"
          className='shadow-grey hidden lg:flex'
        />
      </div>
    </div>
  );
};



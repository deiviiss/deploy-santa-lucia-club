"use client";

import React, { useEffect, useState } from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { AddressIcon, PhoneIcon, TimeIcon } from "./assets";

type Props = {
  data: {
    address: string;
    phone: number;
    schedule: string;
    user: string;
  };
};

export function InfoclubCards({ data }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const horaActual = new Date().getHours();
    if (horaActual >= 9 && horaActual < 23) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);

  return (
    <Card className="my-5 p-3 w-full bg-transparent md:shadow-lg border-none shadow-none md:border-black md:border md:border-solid radius-none">
      <CardBody className="flex flex-row gap-3 items-center">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRv9NZFlmSjkX1_qc8wd1LZ615jQcXlZpJNbxl16oYWgLx7amgK6Ys_NN1lr_1gsHiM1w&usqp=CAU"
          width={40}
          className="hidden md:block"
        />
        <div className="md:hidden">
          <AddressIcon />
        </div>
        <div className="flex flex-col">
          <p className="text-md">Dirección</p>
          <p className="text-small text-sky-200">{data.address}</p>
        </div>
      </CardBody>
      <CardBody className="flex flex-row gap-3 items-center">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRv9NZFlmSjkX1_qc8wd1LZ615jQcXlZpJNbxl16oYWgLx7amgK6Ys_NN1lr_1gsHiM1w&usqp=CAU"
          width={40}
          className="hidden md:block"
        />
        <div className="md:hidden">
          <PhoneIcon />
        </div>
        <div className="flex flex-col">
          <p className="text-md">Teléfono</p>
          <p className="text-small text-sky-200">{data.phone}</p>
        </div>
      </CardBody>
      <CardBody className="flex flex-row gap-3 items-center">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRv9NZFlmSjkX1_qc8wd1LZ615jQcXlZpJNbxl16oYWgLx7amgK6Ys_NN1lr_1gsHiM1w&usqp=CAU"
          width={40}
          className="hidden md:block"
        />
        <div className="md:hidden">
          <TimeIcon />
        </div>
        <div className="flex flex-col">
          <p className="text-md">Horario</p>
          <p
            className={`text-small ${
              open ? " text-green-500" : " text-red-500"
            }`}
          >
            {open ? "Abierto" : "Cerrado"}
          </p>
          <small className="text-xs">Cierra a las {data.schedule}hs</small>
        </div>
      </CardBody>
      <CardBody className="md:flex flex-row gap-3 items-center hidden">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{data.user}</p>
          <p className="text-small text-sky-200">10 day ago</p>
        </div>
      </CardBody>
    </Card>
  );
}

import React from "react";
import SuccessLogo from "./assets/SuccessLogo";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";

type Props = {};

export function SuccessComponent({}: Props) {
  return (
    <section className="flex flex-col justify-center w-full items-center gap-3">
      <article>
        <Image
          src="/images/logoBanner.svg"
          alt="Santa Ana Club Logo"
          width={400}
          height={150}
        />
      </article>
      <article className="flex flex-col justify-center w-full items-center gap-5">
        <h2 className="text-primary-400-D lg:text-5xl font-poppins font-semibold">
          ¡Pago exitoso!
        </h2>
        <p className="text-primary-400-D lg:text-lg font-inter font-normal">
          ¡Felicidades! Has completado la creación de tu cuenta y la compra de
          tu membresía en Santa Ana Club deportivo.
        </p>
        <SuccessLogo />

        <h2 className="text-primary-400-D lg:text-4xl font-poppins font-semibold">
          ¡Muchas Gracias!
        </h2>
      </article>
      <article>
        <Button as={Link} href={"/dashboard"}>
          Acceder al dashboard
        </Button>
      </article>
    </section>
  );
}

"use  client";
import React from "react";
import { Switch } from "@nextui-org/switch";

const membershipeTypes: React.FC = () => {
  return (
    <>
      <section className="mobile:max-w-5xl flex flex-col items-center justify-center gap-y-32 w-11/12 ">
        <h2 className="text-light-gray  font-raleway mobile:text-4xl text-3xl font-semibold leading-9 text-left">
          Tipos de membresias
          <Switch defaultSelected size="lg" color="success">
            Dark mode
          </Switch>
        </h2>
      </section>
    </>
  );
};

export default membershipeTypes;

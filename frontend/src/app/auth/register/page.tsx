import { RegisterForm } from "@/components";
import Image from "next/image";

export default async function RegisterUserPage() {
  return (
    <main className="flex w-full items-center justify-center bg-gradient-to-b from-[#FFFFFF] via-[#CDEDF5] to-[#C1E9F2] ">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 overflow-hidden gap-6 xl:gap-12 w-full">
        <RegisterForm />

        {/*  circle */}
        <div className="hidden md:block md:w-[1220px] md:h-[1263px] overflow-hidden">

          <div className="w-[1220px] h-[1263px] rounded-full relative lg:-top-40 md:left-10 lg:left-20 xl:left-20 overflow-hidden">
            <div className="w-[1220px] h-[1263px] absolute -top-12 right-80 2xl:right-64">
              <Image src="/imgFormLogin.jpg" alt="form-login" layout="fill" className="h-full" />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

import { LoginForm } from "@/components";
import Image from "next/image";

export default function RegisterUserPage() {
  return (
    <main className="flex w-full items-center justify-center bg-gradient-to-b from-[#FFFFFF] via-[#CDEDF5] to-[#C1E9F2] ">
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 overflow-hidden gap-6 xl:gap-12 w-full">
        <LoginForm />

        {/*  circle */}
        <div className="hidden md:block md:w-[793px] md:h-[724px] relative overflow-hidden">
          <div className="w-[920px] h-[920px] bg-[#87868A] rounded-full absolute left-28 overflow-hidden">
            <div className="relative w-[720px] h-[720px]">
              <div className="w-[720px] h-[720px] absolute md:-left-60 lg:-left-40  xl:-left-20 2xl:-left-5">
                <Image src="/img-form-login.jpg" alt="form-login" layout="fill" className="h-full" />
              </div>

            </div>
          </div>

        </div>
      </div>

    </main>
  );
}

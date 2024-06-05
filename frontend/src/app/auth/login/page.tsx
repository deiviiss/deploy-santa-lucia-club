import { LoginForm } from "@/components";

export default function RegisterUserPage() {
  return (
    <main className="flex w-full items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 py-[71px] max-h-[1150px] overflow-hidden">
        <LoginForm />

        {/*  circle */}
        <div className="hidden md:block md:w-[1150px] md:h-[1150px] relative overflow-hidden">
          <div className="w-[1220px] h-[1220px] bg-[#87868A] rounded-full absolute -top-60 left-20">
          </div>
        </div>
      </div>

    </main>
  );
}

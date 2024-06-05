'use client'

import { login } from "@/actions";
import { FcGoogle } from "react-icons/fc";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormLoginUser {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { handleSubmit, register, formState: { errors } } = useForm<IFormLoginUser>({
    defaultValues: {}
  })

  const onSubmit = async (data: IFormLoginUser) => {
    setErrorMessage('')
    setIsSubmitting(true)

    // server action
    const rta = await login(data)

    setIsSubmitting(false)

    if (!rta.ok) {
      setErrorMessage('Credenciales invalidas')
      return
    }

    router.push('/home')
  }

  return (
    <div className="flex flex-col items-center justify-center w-full px-6 md:pl-10 lg:pl-36">

      <div className="flex flex-col w-full max-w-[600px]">
        <header className="flex flex-col items-start mb-14">
          <h1 className="font-bold text-[40px]">
            Bienvenido de nuevo
          </h1>
          <h2 className="text-[#1F7F95] font-medium text-lg" >Inicia sesión</h2>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {
            errorMessage && (
              <span className="text-red-500 mt-1">
                * {errorMessage}
              </span>
            )
          }
          <div className="flex flex-col">
            <Input
              type="text"
              label="Email o nombre de usuario"
              placeholder="tucorreo@mail.com"
              labelPlacement='outside'
              className="text-[#1F7F95] font-medium"
              {...register('username', { required: true })}
            />
            {errors.username?.type === "required" && (
              <span className="text-red-500 mt-1">
                * El correo electrónico es requerido
              </span>
            )}
          </div>

          <div className="flex flex-col text-[#1F7F95] font-medium">
            <Input
              type="password"
              label="Contraseña"
              placeholder="********"
              labelPlacement='outside'
              className="text-[#1F7F95] font-medium"
              {...register("password", { required: true })}
            />
            {errors.password?.type === 'required' && (
              <span className='text-red-500 mt-1'>* La contraseña es requerida</span>
            )}
          </div>

          <div className="flex justify-between text-[#1F7F95] font-medium" >
            <Link href={'/auth/register-user'}>
              Recordar mi cuenta
            </Link>
            <Link href={'/auth/register-user'}>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <div className="flex flex-col gap-4 pt-5 pb-5">
            <Button
              type="submit"
              isDisabled={isSubmitting}
              className="w-full bg-white text-[#CC6600] border-2 border-[#CC6600]  text-xl h-[50px]"
              variant="solid"
            >
              Iniciar sesión
            </Button>

            <p className="text-[#1F7F95] font-semibold text-center">o continuar con</p>

            <Button
              type="button"
              isDisabled={isSubmitting}
              className="w-full bg-white text-black border border-black  text-xl h-[50px]"
              variant="solid"
            >
              <FcGoogle />
              Google
            </Button>
          </div>
        </form>

        <footer className="w-full text-[#1F7F95] font-semibold sm:flex  sm:justify-center gap-6 ">
          <p>¿No tienes una cuenta?</p><Link href={'/auth/register-user'} className="font-semibold">Registrar aquí</Link>
        </footer>
      </div >
    </div >
  )
}
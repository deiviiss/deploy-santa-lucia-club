'use client'

import { login } from "@/actions";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormRegisterUser {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { handleSubmit, register, formState: { isValid }, formState: { errors } } = useForm<IFormRegisterUser>({
    defaultValues: {}
  })

  const onSubmit = async (data: IFormRegisterUser) => {
    setErrorMessage('')
    setIsSubmitting(true)

    // server action
    const rta = await login(data)

    setIsSubmitting(false)

    if (!rta.ok) {
      setErrorMessage('Credenciales invalidas')
      return
    }

    //? redirect to home or to profile
    router.push('/')
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-[700px] px-6 md:pl-10 lg:pl-36">

      <div className="flex flex-col w-full max-w-[600px]">
        <header className="flex flex-col items-start mb-14">
          <h1 className="font-bold text-[50px]">
            Bienvenido de nuevo
          </h1>
          <h2 className="font-normal text-xl">Inicia sesión</h2>
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
              type="email"
              label="Correo"
              placeholder="tucorreo@mail.com"
              labelPlacement='outside'
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email?.type === "required" && (
              <span className="text-red-500 mt-1">
                * El correo electrónico es requerido
              </span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className='text-red-500 mt-1'>
                * Ingrese un correo electrónico válido
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <Input
              type="password"
              label="Contraseña"
              placeholder="********"
              labelPlacement='outside'
              {...register("password", { required: true })}
            />
            {errors.password?.type === 'required' && (
              <span className='text-red-500 mt-1'>* La contraseña es requerida</span>
            )}
          </div>

          <div className="flex justify-between" >
            <Link href={'/auth/register-user'}>
              Recordar mi cuenta
            </Link>
            <Link href={'/auth/register-user'}>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <div className="flex flex-col gap-4 pt-[70px] pb-[46px]">
            <Button
              type="submit"
              isDisabled={isSubmitting}
              className="w-full bg-black text-white text-2xl h-14"
              variant="solid"
            >
              Iniciar sesión
            </Button>

            <p className="font-normal text-center">o continuar con</p>

            <Button
              type="button"
              isDisabled={isSubmitting}
              className="w-full bg-gray-200 text-black text-2xl h-14"
              variant="solid"
            >
              Google
            </Button>
          </div>
        </form>

        <footer className="w-full sm:flex  sm:justify-center gap-6">
          <p>¿No tienes una cuenta?</p><Link href={'/auth/register-user'} className="font-semibold">Registrar aquí</Link>
        </footer>
      </div>
    </div>
  )
}
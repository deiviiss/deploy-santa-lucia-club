'use client'

import { login } from "@/actions";
import { FcGoogle } from "react-icons/fc";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormRegisterUser {
  email: string
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  dni: number,
  address: string
}

export const RegisterForm = () => {
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { handleSubmit, register, formState: { errors } } = useForm<IFormRegisterUser>({
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

    router.push('/home')
  }

  return (
    <div className="flex flex-col items-center justify-center w-full px-6 md:pl-10 lg:pl-36">

      <div className="flex flex-col w-full max-w-[600px]">
        <header className="flex flex-col items-start mb-14">
          <h1 className="font-bold text-[40px] text-[#1F7F95]">
            Comienza a disfrutar de los beneficios del club!
          </h1>
          <h2 className="text-[#1F7F95] font-medium text-lg" >Para comenzar a disfrutar de todos los beneficios que nuestro club te ofrece, crea tu cuenta y elige tu membresia.</h2>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {
            errorMessage && (
              <span className="text-red-500 mt-1">
                * {errorMessage}
              </span>
            )
          }

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {/* name */}
            <div className="flex flex-col">
              <Input
                type="text"
                label="Nombre"
                placeholder="Charlene"
                labelPlacement='outside'
                className="text-[#1F7F95] font-medium"
                {...register('firstName', { required: true })}
              />
              {errors.firstName?.type === "required" && (
                <span className="text-red-500 mt-1">
                  * El nombre es requerido
                </span>
              )}
            </div>

            {/* lastname */}
            <div className="flex flex-col text-[#1F7F95] font-medium">
              <Input
                type="text"
                label="Apellido"
                placeholder="Reed"
                labelPlacement='outside'
                className="text-[#1F7F95] font-medium"
                {...register("lastName", { required: true })}
              />
              {errors.lastName?.type === 'required' && (
                <span className='text-red-500 mt-1'>* El apellido es requerido</span>
              )}
            </div>

            {/* username */}
            <div className="flex flex-col">
              <Input
                type="text"
                label="Nombre de usuario"
                placeholder="Charlene"
                labelPlacement='outside'
                className="text-[#1F7F95] font-medium"
                {...register('username', { required: true })}
              />
              {errors.username?.type === "required" && (
                <span className="text-red-500 mt-1">
                  * El nombre es requerido
                </span>
              )}
            </div>

            {/* date of birth */}
            <div className="flex flex-col text-[#1F7F95] font-medium">
              <Input
                type='date'
                label="Fecha de nacimiento"
                labelPlacement='outside'
                className="text-[#1F7F95] font-medium"
              />

            </div>

            {/* email */}
            <div className="flex flex-col">
              <Input
                type="email"
                label="Email"
                placeholder="charlenereed@gmail.com"
                labelPlacement='outside'
                className="text-[#1F7F95] font-medium"
                {...register('email', { required: true })}
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500 mt-1">
                  * El correo es requerido
                </span>
              )}
            </div>

            {/* address */}
            <div className="flex flex-col text-[#1F7F95] font-medium">
              <Input
                type="text"
                label="Dirección"
                placeholder="San José, California, USA"
                labelPlacement='outside'
                className="text-[#1F7F95] font-medium"
                {...register("address", { required: true })}
              />
              {errors.address?.type === 'required' && (
                <span className='text-red-500 mt-1'>* La dirección es requerido</span>
              )}
            </div>

            {/* password */}
            <div className="flex flex-col">
              <Input
                type="password"
                label="Contraseña"
                placeholder="******"
                labelPlacement='outside'
                className="text-[#1F7F95] font-medium"
                {...register('password', { required: true })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500 mt-1">
                  * El correo es requerido
                </span>
              )}
            </div>

            {/* cp */}
            <div className="flex flex-col text-[#1F7F95] font-medium">
              <Input
                type="text"
                label="Código postal"
                placeholder="45962"
                labelPlacement='outside'
                className="text-[#1F7F95] font-medium"
              />
            </div>

            {/* cp */}
            <div className="flex flex-col text-[#1F7F95] font-medium">
              <Input
                type="text"
                label="Ciudad"
                placeholder="San José"
                labelPlacement='outside'
                className="text-[#1F7F95] font-medium"
              />
            </div>

          </div>

          {/*  terms & conditions */}
          <div className="mt-[30px] flex justify-center items-center text-center px-5 text-[#2AAECC] font-normal" >
            <p>Al hacer clic en Continuar, acepta nuestros <Link href={'/terms-policy'} className="font-semibold text-[#103F4B]">Términos de servicio y Política de privacidad</Link> </p>
          </div>

          <div className="flex flex-col gap-y-8 mt-10">
            <header className="flex flex-col items-start">
              <h1 className="font-semibold text-3xl text-[#1F7F95]">
                Paso 2
              </h1>
              <h2 className="text-[#1F7F95] font-normal text-lg" >Selecciona la membresia que mejor se adapte a tus necesidades:</h2>
            </header>

            <div
              className="flex h-[107px] w-full bg-white shadow-md p-6 rounded-2xl items-center justify-center"
            >
              <p className="font-semibold text-[#175F70] text-2xl">Membresia Individual</p>
            </div>
            <div
              className="flex h-[107px] w-full bg-white shadow-md p-6 rounded-2xl items-center justify-center"
            >
              <p className="font-semibold text-[#175F70] text-2xl">Membresia Duo</p>
            </div>
            <div
              className="flex h-[107px] w-full bg-white shadow-md p-6 rounded-2xl items-center justify-center"
            >
              <p className="font-semibold text-[#175F70] text-2xl">Membresia Familiar</p>
            </div>
          </div>

          {/* login & google button*/}
          <div className="flex flex-col gap-4 pt-5 mt-20 pb-5">
            <Button
              type="submit"
              isDisabled={isSubmitting}
              className="w-full bg-white text-[#CC6600] border-2 border-[#CC6600]  text-xl h-[55px]"
              variant="solid"
            >
              Continuar
            </Button>
          </div>

        </form>
      </div >
    </div >
  )
}
import { Button } from '@nextui-org/react'
import React from 'react'

type Props = {}

export const HeroSection = (props: Props) => {
    return (
        <article className="mobile:p-24 flex min-h-[50vh] flex-col items-center justify-center gap-6 p-0 bg-slate-50 ">
            <h1 className="text-4xl font-bold text-center">Bienvenidos al Club Social X</h1>
            <p className="text-center">Donde las conexiones se convierten en amistades</p>
            <Button color="primary" variant="flat">Unete ahora</Button>
        </article>
    )
}
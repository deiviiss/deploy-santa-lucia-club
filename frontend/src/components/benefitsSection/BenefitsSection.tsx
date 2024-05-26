import React from 'react'
import { BenefitsCard } from './BenefitsCard'

type Props = {}

export const BenefitsSection = (props: Props) => {
    return (
        <section className='min-h-[50vh] my-6'>
            <h2 className='text-3xl font-bold pb-4'>Beneficios</h2>
            <article className='flex flex-wrap min-w-full justify-between items-between'>
                <BenefitsCard benefit={{ title: 'Eventos Exclusivos', description: 'Texto de ejemplo Texto ejemplo Texto ejemplo' }} />
                <BenefitsCard benefit={{ title: 'Club Familiar', description: 'Texto de ejemplo Texto ejemplo Texto ejemplo' }} />
                <BenefitsCard benefit={{ title: 'Instalaciones Premium', description: 'Texto de ejemplo Texto ejemplo Texto ejemplo' }} />
                <BenefitsCard benefit={{ title: 'Descuentos Especiales', description: 'Texto de ejemplo Texto ejemplo Texto ejemplo' }} />
            </article>
        </section>
    )
}
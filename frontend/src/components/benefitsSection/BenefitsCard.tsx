import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'

type Props = {
    benefit: {
        title: string,
        description: string
    }
}

export const BenefitsCard = ({ benefit }: Props) => {
    return (
        <Card className='w-full md:w-1/2 h-56 max-h-56 bg-[none] [&>*]:p-0' shadow='none'>
            <CardHeader>
                <h3 className='text-xl bold pb-2'>{benefit.title}</h3>
            </CardHeader>
            <CardBody>
                <p>{benefit.description}</p>
                <p>{benefit.description}</p>
                <p>{benefit.description}</p>
            </CardBody>
        </Card>
    )
}
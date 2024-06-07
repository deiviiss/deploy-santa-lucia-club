'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'

interface ProviderProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <NextUIProvider>
      {/* <SessionProvider> */}
      {children}
      {/* </SessionProvider> */}
    </NextUIProvider >
  )
}
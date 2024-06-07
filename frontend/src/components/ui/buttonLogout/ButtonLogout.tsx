'use client'

import { logout } from '@/actions'

interface IButtonBackProps {
  className?: string
}

export const ButtonLogout = ({ className }: IButtonBackProps) => {
  return (
    <div className={`${className}`}>
      <button
        onClick={() => { logout() }}
        className='p-2 text-primary hover:cursor-pointer hover:underline rounded-md'
      >
        Cerrar sesión
      </button>
    </div>
  )
}
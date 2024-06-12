import Image from "next/image"
import Link from "next/link"
import { BiCategory } from "react-icons/bi"
import { DiAptana } from "react-icons/di"
import { FiServer } from "react-icons/fi"
import { ButtonLogout } from "@/components"
import { CiLogout } from "react-icons/ci"
import { GoPaste } from "react-icons/go"

export const Sidebar = () => {
  const navLinks = [
    {
      name: 'Home',
      icon: <BiCategory />,
      url: '/dashboard'
    },
    {
      name: 'Actividades',
      icon: <FiServer />,
      url: '/dashboard/activities'
    },
    {
      name: 'Mi carnet',
      icon: < GoPaste />,
      url: '/dashboard/affiliate'
    },
    {
      name: 'Cuenta',
      icon: <DiAptana />,
      url: '/dashboard/account'
    }
  ]

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-[#175F70] transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div className="w-full h-full py-6 text-white relative">
        <Link href="/">
          <Image
            src="/images/StAnaLogo.png"
            alt="Santa Ana Club Logo"
            width={800}
            height={284}
            className="rounded-lg mb-14" />
        </Link>
        <ul>
          {
            navLinks.map((link, index) => (
              <li key={index} className='flex items-center justify-between rounded-2xl px-2 py-5 text-xl font-medium hover:bg-[#92D8E8]'>
                <Link href={link.url} className='flex items-center'>
                  <span className='mr-5'>{link.icon}</span>
                  <p>{link.name}</p>
                </Link>
              </li>
            ))
          }
        </ul>

        {/* button close session */}
        <div className="flex gap-4 items-center text-xl absolute bottom-0">
          <CiLogout className="w-8 h-8" />
          <ButtonLogout />
        </div>
      </div>
    </aside>
  )
}

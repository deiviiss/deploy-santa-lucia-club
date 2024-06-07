"use client";
import { useState } from "react";


import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

type Props = {};

export const NavBar = (props: Props) => {
  const menuItems = [
    { name: "Beneficios", href: "/" },
    { name: "Precios", href: "/#membership-types" },
    { name: "Contacto", href: "/" },
    { name: "Iniciar Sesión", href: "auth/login" }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-primary-400 w-full py-8"
    >
      <NavbarContent className="sm:max-w-7xl w-full">
        {/* logo desktop */}
        <NavbarContent className="hidden sm:flex pr-3" justify="start">
          <NavbarBrand>
            <Link href="/dashboard">
              <Image
                src="/images/StAnaLogo.png"
                alt="Saint Anna Logo"
                width={300}
                height={100}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        {/* logo mobile */}
        <NavbarContent className="sm:hidden pr-3 " justify="start">
          <NavbarBrand
            className="w-16 h-16"
          >
            <Link href="/dashboard" className="w-16 h-16">
              <Image
                className="w-full h-full"
                src="/images/St-ana-logo.svg"
                alt="Saint Anna Logo"
                width={80}
                height={80}
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* links */}
        <NavbarContent className="hidden sm:flex"
        >
          {menuItems.map((item, index) => (
            <NavbarItem className="flex text-white w-full text-xl font-medium" key={`${item.name}-${index}`}>
              {item.name === "Iniciar Sesión" ? (
                <>
                  <Button className="self-end text-[#CC6600] rounded-2xl bg-white p-6 border-2 border-[#CC6600]">
                    <Link
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </Button>
                </>
              ) : (
                <Link className="w-full" href={item.href} size="lg">
                  {item.name}
                </Link>
              )}
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* menu burger */}
        <NavbarContent className=" sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="filter invert sm:hidden"
          />
          <NavbarMenu className='pt-10'>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={index}>
                <Link className="text-black" href={item.href}>
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </NavbarContent>

      </NavbarContent>
    </Navbar>
  );
};

"use client";
import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";

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

type Props = {};

export const NavBar = (props: Props) => {
  const menuItems = [
    { name: "Iniciar Sesión", href: "auth/login" },
    { name: "Beneficios", href: "/" },
    { name: "Precios", href: "/#membership-types" },
    { name: "Contacto", href: "/" },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-primary-400 w-full"
    >
      <NavbarContent className=" sm:max-w-7xl w-full">
        <NavbarContent className="   pr-3" justify="start">
          <NavbarBrand>
            <Link href="/home">
              <a>
                <Image
                  src="/images/StAnaLogo.png"
                  alt="Saint Anna Logo"
                  width={300}
                  height={100}
                />
              </a>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className=" pr-3" justify="start">
          <NavbarBrand>
            <Link href="/home">
              <a>
                <Image
                  className=""
                  src="/images/St-ana-logo.svg"
                  alt="Saint Anna Logo"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        {isLargeScreen ? (
          <NavbarContent
            classNames={{
              base: "mi-base",
              wrapper: "mi-wrapper",
              brand: "mi-brand",
              content: "mi-content",
              item: "mi-item",
              toggle: "mi-toggle",
              toggleIcon: "mi-toggle-icon",
              menu: "mi-menu",
              menuItem: "mi-menu-item",
            }}
          >
            {menuItems.map((item, index) => (
              <NavbarItem className="flex" key={`${item.name}-${index}`}>
                {item.name === "Iniciar Sesión" ? (
                  <>
                    <Button className="self-end">
                      <Link
                        className="w-full text-sm"
                        href={item.href}
                        size="lg"
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
        ) : null}
        <NavbarMenu className="flex">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link href={item.href}>
                <a className="text-white">{item.name}</a>
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <NavbarContent justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="filter invert sm:hidden block"
          />
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
};

/*      <NavbarContent className="mobile:block hidden pr-3" justify="start">
          <NavbarBrand>
            <Link href="/home">
              <a>
                <Image
                  className=""
                  src="/images/St-ana-logo.svg"
                  alt="Saint Anna Logo"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </NavbarBrand>
        </NavbarContent>*/

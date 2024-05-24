import React from 'react'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

type Props = {}

export const NavBar = (props: Props) => {
    return (
        <Navbar disableAnimation isBordered>
            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">logo mobile</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="end">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-6" justify="end">
                <NavbarBrand>
                    <p className="font-bold text-inherit">logo desktop</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Beneficios
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page" color="foreground">
                        Precios
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contacto
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Iniciar sesion
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className='[&>*]:py-1'>
                <NavbarMenuItem>
                    <Link
                        className="w-full"
                        color="foreground"
                        href="#"
                        size="lg"
                    >
                        Beneficios
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        className="w-full"
                        color="foreground"
                        href="#"
                        size="lg"
                    >
                        Precios
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        className="w-full"
                        color="foreground"
                        href="#"
                        size="lg"
                    >
                        Contacto
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        className="w-full"
                        color="primary"
                        href="#"
                        size="lg"
                    >
                        Iniciar Sesión
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}
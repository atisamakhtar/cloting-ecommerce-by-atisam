import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
import Link from 'next/link';
import Image from 'next/image';
import styles from "../css/mobileNav.module.css";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const MobileNav = () => {

    const [navOpen, setNavOpen] = useState(false);

    const navOpenClose = () => {
        setNavOpen(!navOpen);
    }

    return (
        <>
            <nav className='my-5 container flex justify-between' >
                <div>
                    <Link href={"/"}>
                        <Image width={1000} height={1000} alt='logo' src='/media/Logo.webp' />
                    </Link>
                </div>
                {navOpen ? (<div>
                    <RiCloseFill onClick={navOpenClose} className="text-2xl scale-110" />
                </div>) : (<div>
                    <GiHamburgerMenu onClick={navOpenClose} className="text-2xl" />
                </div>)}
            </nav>

            {navOpen && <section className={`${styles.navbarSmallscreeOverlay}`} >

                <section className='' >
                    <div className='my-5 container flex justify-between' >
                        <div>
                            <Link href={"/"}>
                                <Image width={1000} height={1000} alt='logo' src='/media/Logo.webp' />
                            </Link>
                        </div>
                        {navOpen ? (<div>
                            <RiCloseFill onClick={navOpenClose} className="text-2xl scale-110" />
                        </div>) : (<div>
                            <GiHamburgerMenu onClick={navOpenClose} className="text-2xl" />
                        </div>)}
                    </div>
                </section>

                <NavigationMenu className='m-auto mt-[10%]' >

                    <NavigationMenuList className='flex-col ' >

                        <NavigationMenuItem onClick={() => { setNavOpen(!navOpen) }} className="my-2 text-3xl px-5 block" >
                            <Link href={"/female"} className="px-4" legacyBehavior passHref>
                                <NavigationMenuLink>Female</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem onClick={() => { setNavOpen(!navOpen) }} className="my-2 text-3xl px-5" >
                            <Link href={"/male"} className="px-4" legacyBehavior passHref>
                                <NavigationMenuLink>Male</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem onClick={() => { setNavOpen(!navOpen) }} className="my-2 text-3xl px-5" >
                            <Link href={"/kids"} className="px-4" legacyBehavior passHref>
                                <NavigationMenuLink>Kids</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem onClick={() => { setNavOpen(!navOpen) }} className="my-2 text-3xl px-5" >
                            <Link href={"/products"} className="px-4" legacyBehavior passHref>
                                <NavigationMenuLink>All Products</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                    </NavigationMenuList>

                </NavigationMenu>
            </section>}
        </>
    )
}

export default MobileNav
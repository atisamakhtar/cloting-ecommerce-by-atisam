"use client"

import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
// import logo from "/media/Logo.webp";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AiOutlineSearch } from 'react-icons/ai';
import {FiShoppingCart} from "react-icons/fi";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const MyNavMenu = () => {
    return (
        <>
            {/* <section className='my-10 mx-32 flex justify-between' > */}
            <section className='my-10 container flex justify-between' >

                <div className='' >
                    <Link href={"/"}>
                        <Image alt='logo' height={180} width={180} src='/media/Logo.webp' />
                    </Link>
                </div>

                <NavigationMenu className='' >

                    <NavigationMenuList>

                        <NavigationMenuItem className="px-5" >
                            <Link href={"/female"} className="px-4" legacyBehavior passHref>
                                <NavigationMenuLink>Female</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="px-5" >
                            <Link href={"/male"} className="px-4" legacyBehavior passHref>
                                <NavigationMenuLink>Male</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="px-5" >
                            <Link href={"/kids"} className="px-4" legacyBehavior passHref>
                                <NavigationMenuLink>Kids</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="px-5" >
                            <Link href={"/products"} className="px-4" legacyBehavior passHref>
                                <NavigationMenuLink>All Products</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                    </NavigationMenuList>

                </NavigationMenu>

                <div className='flex items-center px-5 rounded-md border-2 border-gray-300 ronded-sm' >
                    <AiOutlineSearch className="text-2xl mr-2" />
                    <Input placeholder="What are you looking for?" type="text" className='h-5 text-sm border-none outline-none focus:outline-none py-0' />
                    {/* <Button type="submit">Subscribe</Button> */}
                </div>

                <>
                    <div className='relative cartWithCount bg-gray-100 px-2 rounded-full' >
                        <FiShoppingCart className="text-2xl mt-2" />
                        <span className='absolute -top-3 -right-3 slide-out-to-right-4 bg-red-600 px-1.5 rounded-full' >0</span>
                    </div>
                </>

            </section>
        </>
    )
}

export default MyNavMenu
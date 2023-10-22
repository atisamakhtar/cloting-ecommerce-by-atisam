// 'use client'

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import prodImage from "/media/homeProduct1.png";
// import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { ProductsContext } from '../../../../context/productsContext';
import { productType } from '../../../../context/productsContext';
import { Button } from "@/components/ui/button";
import styles from "../../../css/products.module.css";
import client from '@/lib/sanityClient';
import { getSingleProduct } from '@/lib/sanityClient';
import SingleProductCart from '@/components/quantity';
import { urlFor } from '@/lib/imageUrl';
// import {RouterSlug} from '@/components/routerSlug';

const page = async ({ params, searchParams }: {
    params: { id: string },
    searchParams: { id: string },
}) => {

    const container = {
        "margin": "4rem 8rem",
    }
    
    const required = await getSingleProduct(params.id);
    
    return (
        (required) && <section style={container} >
            <section className={styles.singleProductWrapper}>
                <div className={styles.imagesGrid} >
                    <div>
                        <Image className='w-[100%]' src={urlFor(required.image).url()} width={250} height={250}  alt='Product Image' />
                    </div>
                    <div>
                        <Image className='w-[100%]' src={urlFor(required.image).url()} width={250} height={250} alt='Product Image' />
                    </div>

                </div>
                <div className='mt-16' >
                    <h2 className='text-2xl font-semibold' >{required.title}</h2>
                    <p className='text-xl font-semibold text-gray-400' >{required.tagline}</p>
                    <div className='mt-7' >
                        <h3 className='mb-2 uppercase font-semibold' >Select Size</h3>
                        <div className='flex' >
                            <span className='rounded-full bg-gray-50 p-2 flex justify-center h-10 w-10 mr-2' >XS</span>
                            <span className='rounded-full bg-gray-50 p-2 flex justify-center h-10 w-10 mr-2' >S</span>
                            <span className='rounded-full bg-gray-50 p-2 flex justify-center h-10 w-10 mr-2' >M</span>
                            <span className='rounded-full bg-gray-50 p-2 flex justify-center h-10 w-10 mr-2' >L</span>
                            <span className='rounded-full bg-gray-50 p-2 flex justify-center h-10 w-10 mr-2' >XL</span>
                        </div>
                    </div>

                    <SingleProductCart required={required} />
                </div>
            </section>
        </section>
    )
}

export default page
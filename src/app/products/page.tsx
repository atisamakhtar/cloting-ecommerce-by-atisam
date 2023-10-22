// "use client"

// import React, { useContext } from 'react';
import { ProductsContext } from '../../../context/productsContext';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../css/products.module.css";
import generic from "../../css/mainCss.module.css";
import client from "@/lib/sanityClient";
import { urlFor } from '@/lib/imageUrl';

export const fetchSanityProducts = async () => {
    const res = await client.fetch(`*[_type=="product"]`);
    return res;
}

const page = async () => {

    // const required = useContext(ProductsContext);

    const required = await fetchSanityProducts();
    // console.log("Product data from sanity", req);

    return (
        <section className={generic.container}>
            {required.length > 0} <section className={styles.fourGridCols}>

                {required.map((sing: any, index: any) => {
                    console.log(sing);
                    return <div key={index} >
                        <Link href={`/products/${sing._id}`}>
                            <Image width={250} alt='product image' height={250} src={urlFor(sing.image).url()} />
                            <h2 className='mt-4 text-xl font-semibold' >{sing.title}</h2>
                            <p>{sing.tagline}</p>
                            <p className='mt-3 text-xl font-bold'>${sing.price}</p>
                        </Link>
                    </div>
                })}

            </section>
        </section>
    )
}

export default page
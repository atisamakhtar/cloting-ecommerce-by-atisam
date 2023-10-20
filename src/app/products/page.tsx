"use client"

import React, { useContext } from 'react';
import { ProductsContext } from '../../../context/productsContext';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../css/products.module.css";
import generic from "../../css/mainCss.module.css";

const page = () => {

    const required = useContext(ProductsContext);

    return (
        <section className={generic.container}>
            {required.length > 0} <section className={styles.fourGridCols}>

                {required.map((sing: any, index: any) => (
                    <div key={index} >
                        <Link href={`/products/${sing.id}`}>
                            <Image width={250} alt='product image' height={250} src={sing.image} />
                            <h2 className='mt-4 text-xl font-semibold' >{sing.title}</h2>
                            <p>{sing.tagline}</p>
                            <p className='mt-3 text-xl font-bold'>${sing.price}</p>
                        </Link>
                    </div>
                ))}

            </section>
        </section>
    )
}

export default page
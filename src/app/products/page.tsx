"use client"

import React, { useContext } from 'react';
import { ProductsContext } from '../../../context/productsContext';
import Image from 'next/image';
import prodImg from "..//public/media/homeProduct1.png";
import Link from 'next/link';
import styles from "../../css/products.module.css";

const page = () => {

    const required = useContext(ProductsContext);

    const container = {
        "margin": "4rem 8rem",
    }

    return (
        <section style={container}>
            {required.length > 0} <section className={styles.fourColsDesktop}>

                {required.map((sing: any, index: any) => (
                    <div key={index} >
                        <Link href={`/products/${sing.id}`}>
                            <Image width={250} alt='product image' height={250} src={sing.image} />
                            <h2 className='text-xl font-semibold' >{sing.title}</h2>
                            <p>{sing.tagline}</p>
                            <p>${sing.price}</p>
                        </Link>
                    </div>
                ))}

            </section>
        </section>
    )
}

export default page
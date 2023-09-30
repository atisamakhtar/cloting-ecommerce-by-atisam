"use client"

import React, { useContext } from 'react';
import { ProductsContext } from '../../../context/productsContext';
import Image from 'next/image';
import prodImg from "../../../public/media/homeProduct1.png";
import Link from 'next/link';

const page = () => {

    const required = useContext(ProductsContext);

    const styles = {
        "display": "grid",
        "gridTemplateColumns": "1fr 1fr 1fr 1fr",
        "justifyContent": "space-between",
        "justifyItems": "center",
        "gridGap": "4rem",
    }

    const container = {
        "margin": "4rem 8rem",
    }

    return (
        <section style={container}>
            {required.length > 0} <section style={styles}>

                {required.map((sing: any, index: any) => (
                    <div key={index} >
                        <Link href={`/products/${sing.id}`}>
                            <Image width={250} alt='product image' src={prodImg} />
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
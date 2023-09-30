'use client'

import React, { useContext } from 'react';
import Image from 'next/image';
import prodImage from "../../../../public/media/homeProduct1.png";
import { useRouter, useParams } from 'next/navigation';
import { ProductsContext } from '../../../../context/productsContext';
import { productType } from '../../../../context/productsContext';

const page = () => {

    const styles = {
        "display": "grid",
        "gridTemplateColumns": "1fr 1fr",
        "gridGap": "4rem",
        "justifyContent": "space-between",
        // "justifyItems": "center",
    }

    const container = {
        "margin": "4rem 8rem",
    }

    const availableProducts = useContext(ProductsContext);

    const {id} = useParams();
    // console.log(typeof parseInt(id));
    const idToParse:number = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
    
    const required = availableProducts.find((sing:productType) => sing.id === idToParse);

    // console.log("required", required)

    return (
        <section style={container} >
            <section className='' style={styles}>
                <div>
                    <Image className='w-[100%]' src={prodImage} alt='Product Image' />
                </div>
                <div>
                    <h2 className='text-xl font-semibold' >{required.title}</h2>
                    <p>{required.tagline}</p>
                    <p>${required.price}</p>
                </div>
            </section>
        </section>
    )
}

export default page
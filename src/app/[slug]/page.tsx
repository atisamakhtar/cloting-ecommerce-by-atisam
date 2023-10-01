"use client"

import React, { useContext } from 'react';
import { useRouter, usePathname, useParams, useSearchParams } from 'next/navigation';
import { ProductsContext } from '../../../context/productsContext';
import Image from 'next/image';
import prodImg from "../../../public/media/homeProduct1.png";
import Link from 'next/link';

const page = () => {
    const router = useRouter()
    console.log("router", router);

    const { slug } = useParams();
    const availableProducts = useContext(ProductsContext);

    const required = availableProducts.filter((prod: any) => prod.category == slug);

    // const searchParms = useSearchParams();
    // const pathName = usePathname();

    // console.log(slug, searchParms)
    // console.log("pathName", pathName);

    // const url = `${pathName}?${searchParms}`
    console.log(required)

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
                            <Image width={250} alt='product image' height={100} src={sing.image} />
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
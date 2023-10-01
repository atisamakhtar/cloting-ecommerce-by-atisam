'use client'

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import prodImage from "../../../../public/media/homeProduct1.png";
import { useRouter, useParams } from 'next/navigation';
import { ProductsContext } from '../../../../context/productsContext';
import { productType } from '../../../../context/productsContext';
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";

const page = () => {

    const [count, setCount] = useState(1);

    const styles = {
        "display": "grid",
        "gridTemplateColumns": "2fr 1fr",
        "gridGap": "2rem",
        "justifyContent": "space-between",
        // "justifyItems": "center",
    }

    const imagesGrid = {
        "display": "grid",
        "gridTemplateColumns": "0.3fr 2fr",
        "gridGap": "2rem",
    }

    const container = {
        "margin": "4rem 8rem",
    }

    const availableProducts = useContext(ProductsContext);

    const { id } = useParams();
    // console.log(typeof parseInt(id));
    const idToParse: number = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);

    const required: (undefined | productType) = availableProducts.find((sing: productType) => sing.id === idToParse);

    // console.log("required", required)

    return (
        (required) && <section style={container} >
            <section className='' style={styles}>
                <div style={imagesGrid} >
                    <div>
                        <Image className='w-[100%]' src={required.image} width={250} height={250}  alt='Product Image' />
                    </div>
                    <div>
                        <Image className='w-[100%]' src={required.image} width={250} height={250} alt='Product Image' />
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

                    {/* quantity section */}
                    <div className='my-10 flex items-center space-x-4' >
                        <h3 className='mb-2 uppercase font-semibold' >Select Size</h3>
                        <div className='flex items-center justify-center space-x-3' >
                            <button onClick={() => { (count >= 1) && setCount(count - 1) }} className='rounded-full text-2xl bg-gray-50 flex justify-center items-center h-10 w-10 mr-2' >-</button>
                            <span className='ml-0'>{count}</span>
                            <button onClick={() => { setCount(count + 1) }} className='rounded-full text-2xl border-2 border-black bg-gray-50 flex justify-center items-center h-10 w-10 mr-2' >+</button>
                        </div>
                    </div>

                    <div className='flex items-center' >
                        <Button className='px-8 rounded-none' >
                            <FiShoppingCart className="font-semibold text-xl mr-3" />Add to cart
                        </Button>
                        <p className='text-2xl font-bold ml-4' >${required.price}</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default page
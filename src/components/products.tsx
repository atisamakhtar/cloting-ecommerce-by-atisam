import React from 'react';
import Image from 'next/image';

import homeProduct1 from "public/media/homeProduct1.png";
import homeProduct2 from "public/media/homeProduct2.png";
import homeProduct3 from "public/media/homeProduct3.png";

const Products = () => {
    return (
        <section className='container my-20' >

            <div className='text-center mb-10' >
                <span className='text-blue-700 text-sm font-bold' >PRODUCTS</span>
                <h2 className='my-3 text-4xl font-bold'>Check What We Have</h2>
            </div>

            {/* Home product 1 section */}
            <section className='grid md:grid-cols-3 md:space-x-10' >

                <div className="m-auto mb-6 hover:scale-110 transition">
                    <Image src={homeProduct1} alt="Promotion 1 image" />
                    <p className="font-semibold text-xl product-name mt-4 mb-1">Brushed Raglan Sweatshirt</p>
                    <p className="font-semibold text-xl product-price">$ 195</p>
                </div>

                {/* Home product 2 section */}
                <div className='m-auto mb-6 hover:scale-110 transition' >
                    <Image className='' alt='Promotion 2 image' src={homeProduct2} />
                    <p className="font-semibold text-xl product-name mt-4 mb-1">Cameryn Sash Tie Dress</p>
                    <p className="font-semibold text-xl product-price">$ 545</p>
                </div>

                {/* Home product 3 section */}
                <div className='m-auto mb-6 hover:scale-110 transition'>
                    <Image className='' alt='Promotion 2 image' src={homeProduct3} />
                    <p className="font-semibold text-xl product-name mt-4 mb-1">Flex Sweatshirt</p>
                    <p className="font-semibold text-xl product-price">$ 175</p>
                </div>
            </section>
        </section >
    )
}

export default Products
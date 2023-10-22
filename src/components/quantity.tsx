'use client'

import React, {useState} from 'react';
import { Button } from './ui/button';
import { FiShoppingCart } from "react-icons/fi";
import { productType } from '../../context/productsContext';

const SingleProductCart = ({ required }: { required: productType }) => {

    const [count, setCount] = useState(1);

    return (
        <section>
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
        </section>
    )
}

export default SingleProductCart
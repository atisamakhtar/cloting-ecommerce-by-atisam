import React from 'react';
import {FiShoppingCart} from "react-icons/fi";

const Cart = () => {
    return (
        <div className='relative cartWithCount bg-gray-100 px-2 rounded-full' >
            <FiShoppingCart className="text-2xl mt-2" />
            <span className='absolute -top-3 -right-3 slide-out-to-right-4 bg-red-600 px-1.5 rounded-full' >0</span>
        </div>
    )
}

export default Cart
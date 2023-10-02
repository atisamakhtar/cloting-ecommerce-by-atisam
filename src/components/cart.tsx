import React, {useContext} from 'react';
import {FiShoppingCart} from "react-icons/fi";
import { CarttContext } from '../../context/cartContext';

const Cart = () => {

    const {cartState, dispatch} = useContext(CarttContext);

    console.log("cartState from cart component", cartState);

    return (
        <div className='relative cartWithCount bg-gray-100 px-2 rounded-full' >
            <FiShoppingCart className="text-2xl mt-2" />
            <span className='absolute -top-3 -right-3 slide-out-to-right-4 bg-red-600 px-1.5 rounded-full' >{}</span>
        </div>
    )
}

export default Cart
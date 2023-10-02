'use client'

import React, { useState, useReducer } from 'react'
import { createContext } from 'vm'

export type cartProductType = {
    id: number,
    title: string,
    tagline: string,
    price: number,
    qty: number,
}

export const CarttContext = createContext();

const cartReducer = (currState:any, action:any) => {

    if (action.type == "increase") {

    } else if (action.type == "decrease") {

    }

}

const cartInitialState: cartProductType[] = [
    {
        id: 1,
        title: "Brushed Raglan Sweatshirt",
        tagline: "Sweater",
        price: 195,
        qty: 5,
    },
    {
        id: 12,
        title: "Nicker shirt",
        tagline: "Shorts",
        price: 225,
        qty: 7,
    },
    {
        id: 10,
        title: "Flex Push Button Bomber",
        tagline: "Jackets",
        price: 225,
        qty: 3,
    },
]

const CartContext = ({ children }:any) => {

    // const [cartState, dispatch] = useReducer(cartReducer, cartInitialState)

    return (
        <CarttContext.Provider value=''>
            {children}
        </CarttContext.Provider>
    )
}

export default CartContext
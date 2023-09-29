'use client'

import React, { createContext, useState, useEffect, useReducer } from 'react';

export const ProductsContext = createContext();

const availableProducts = [
    {
        title: "Brushed Raglan Sweatshirt",
        category: "Sweater",
        price: 195,
        for: "female"
    },
    {
        title: "Cameryn Sash Tie Dress",
        category: "Dress",
        price: 545,
        for: "female"
    },
    {
        title: "Flex Sweatshirt",
        category: "Sweater",
        price: 175,
        for: "female"
    },
    {
        title: "Flex Sweatpants",
        category: "Pants",
        price: 175,
        for: "female"
    },
    {
        title: "Pink Fleece Sweatpants",
        category: "Pants",
        price: 195,
        for: "female"
    },
    {
        title: "Lite Sweatpants",
        category: "Pants",
        price: 150,
        for: "female"
    },
    {
        title: "Imperial Alpaca Hoodie",
        category: "Jackets",
        price: 525,
        for: "female"
    },
    {
        title: "Muscle Tank",
        category: "T Shirts",
        price: 75,
        for: "female"
    },
    {
        title: "Brushed Bomber",
        category: "Jackets",
        price: 225,
        for: "female"
    },
    {
        title: "Flex Push Button Bomber",
        category: "Jackets",
        price: 225,
        for: "female"
    },
    {
        title: "Raglan Sweatshirt",
        category: "Sweater",
        price: 195,
        for: "male"
    },
    {
        title: "Raglan Sweatshirt",
        category: "Sweater",
        price: 195,
        for: "male"
    },
    {
        title: "Nicker shirt",
        category: "Shorts",
        price: 225,
        for: "kids"
    },
    {
        title: "Kurta Pajama",
        category: "Complete",
        price: 195,
        for: "kids"
    },
]

// const myReducerFunction = (currentState, action) => {

// }

const ProductsContextComponent = ({children}) => {

    // const [products, dispatch] = useReducer(myReducerFunction, initialProducts);

    return (
        <ProductsContext.Provider value={availableProducts}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextComponent;
'use client'

import React, { FC, ReactNode, createContext, useState, useEffect, useReducer } from 'react';

export type productType = {
    id: number,
    title: string,
    tagline: string,
    price: number,
    category: string,
    image: string,
}

export const ProductsContext = createContext<productType[]>([]);

const availableProducts: productType[] = [
    {
        id: 1,
        title: "Brushed Raglan Sweatshirt",
        tagline: "Sweater",
        price: 195,
        category: "female",
        image: "/media/product1.png",
    },
    {
        id: 2,
        title: "Cameryn Sash Tie Dress",
        tagline: "Dress",
        price: 545,
        category: "female",
        image: "/media/product2.png",
    },
    {
        id: 3,
        title: "Flex Sweatshirt",
        tagline: "Sweater",
        price: 175,
        category: "female",
        image: "/media/product3.png",
    },
    {
        id: 4,
        title: "Flex Sweatpants",
        tagline: "Pants",
        price: 175,
        category: "female",
        image: "/media/product4.png",
    },
    {
        id: 5,
        title: "Pink Fleece Sweatpants",
        tagline: "Pants",
        price: 195,
        category: "female",
        image: "/media/product5.png",
    },
    {
        id: 6,
        title: "Lite Sweatpants",
        tagline: "Pants",
        price: 150,
        category: "female",
        image: "/media/product6.png",
    },
    {
        id: 7,
        title: "Imperial Alpaca Hoodie",
        tagline: "Jackets",
        price: 525,
        category: "female",
        image: "/media/product7.png",
    },
    {
        id: 8,
        title: "Muscle Tank",
        tagline: "T Shirts",
        price: 75,
        category: "female",
        image: "/media/product8.png",
    },
    {
        id: 9,
        title: "Brushed Bomber",
        tagline: "Jackets",
        price: 225,
        category: "female",
        image: "/media/product9.png",
    },
    {
        id: 10,
        title: "Flex Push Button Bomber",
        tagline: "Jackets",
        price: 225,
        category: "male",
        image: "/media/product10.png",
    },
    {
        id: 11,
        title: "Raglan Sweatshirt",
        tagline: "Sweater",
        price: 195,
        category: "male",
        image: "/media/product11.png",
    },
    {
        id: 12,
        title: "Nicker shirt",
        tagline: "Shorts",
        price: 225,
        category: "kids",
        image: "/media/product12.jpg",
    },
    {
        id: 13,
        title: "Kurta Pajama",
        tagline: "Complete",
        price: 195,
        category: "kids",
        image: "/media/product13.png",
    },
]

// const myReducerFunction = (currentState, action) => {

// }

interface MyProps {
    children?: ReactNode;
}

const ProductsContextComponent: FC<MyProps> = (props) => {

    // const [products, dispatch] = useReducer(myReducerFunction, initialProducts);

    return (
        <ProductsContext.Provider value={availableProducts}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextComponent;
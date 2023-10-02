import React, { useReducer, createContext, ReactNode } from 'react';

export type cartProductType = {
    id: number,
    title: string,
    tagline: string,
    price: number,
    qty: number,
};

export const CarttContext = createContext<any>(null); // You can replace 'any' with the appropriate type if needed

const cartReducer = (currState: cartProductType[], action: { type: string }) => {
    if (action.type === "increase") {
        console.log("increading product count")
    } else if (action.type === "decrease") {
        console.log("decreasing product count")
    }
    return currState; // Return the updated state or the same state if no changes are made
};

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
];

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [cartState, dispatch] = useReducer(cartReducer, cartInitialState);

    return (
        <CarttContext.Provider value={{ cartState, dispatch }}>
            {children}
        </CarttContext.Provider>
    );
};

export default CartContextProvider;
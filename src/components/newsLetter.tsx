'use client'

import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewsLetter = () => {

    const newsletterBgCss = {
        "color": "#f2f3f7",
        "z- index": "-1",
        "font-size": "3rem", 
    }

    const newsLetter = {
        "width": "",
        "z-index": "1",
    }

return (
    <section className='my-44 relative' style={newsLetter} >
        <div style={newsletterBgCss} className='newsletter-bg absolute text-center top-[45%] left-[48%]'>Newsletter</div>
        <h3 className='text-center mb-6 text-3xl font-bold' >Subscribe Our Newsletter</h3>
        <p className='text-center mb-8'>Get the latest information and promo offers directly</p>
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log("button clicked");
        }} className='form flex justify-center' >
            <Input className='mx-3 w-[20rem]' type='text' placeholder='Input email address' />
            <Button type="submit" className='rounded-none mx-3'>Get Started</Button>
        </form>
    </section>
)
}

export default NewsLetter
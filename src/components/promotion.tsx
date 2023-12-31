import React from 'react';
import Image from 'next/image';
import { Button } from "./ui/button";

const Promotion = () => {
    return (
        <section style={{"overflow": "hidden"}} className='container' >

            <div className='text-center' >
                <span className='text-blue-700 text-sm font-bold' >PROMOTIONS</span>
                <h2 className='my-3 text-4xl font-bold'>Our Promotions Events</h2>
            </div>

            <section className='my-5 grid md:grid-cols-2 md:gap-10' >

                {/* Promotion 1 section */}
                <div>
                    <div className="my-5 pt-5 md:flex items-center bg-gray-300 px-10">
                        <div>
                            <h3 className='text-gray-800 font-bold text-3xl' >GET UP TO <span className='text-4xl' >60%</span> </h3>
                            <p className='text-gray-800 ' >For the summer season</p>
                        </div>
                        <div>
                            <Image width={400} height={400} src='/media/promotion1.webp' alt="Promotion 1 image" />
                        </div>
                    </div>

                    <div>
                        <div className='my-5 text-center text-gray-100 bg-gray-900 px-10 py-16' >
                            <h3 className='font-bold text-5xl mb-3'>GET 30% Off</h3>
                            <p>USE PROMO CODE</p>
                            <Button className='tracking-[.2rem] bg-gray-700 hover:bg-gray-700 text-md font-bold uppercase px-16' >DINEWEEKENDSALE</Button>
                        </div>
                    </div>
                </div>

                {/* promotion 2 section */}
                <section className='my-5 grid md:grid-cols-2 space-y-0 md:space-y-6 md:space-x-10 gap-10'>
                    <div className='bg-yellow-100 flex flex-col justify-between my-0' >
                        <div className='p-5 justify-between' >
                            <p className='text-sm' >Flex Sweatshirt</p>
                            <div className="price text-xl">
                                <span className='text-black pr-3 line-through'>$100.00</span>
                                <span className='text-black font-bold' >$75.00</span>
                            </div>
                        </div>
                        <Image width={1000} height={1000} className='m-auto mt-2 mb-0' alt='Promotion 2 image' src='/media/promotion2.png' />
                    </div>

                    <div style={{"margin": "0px"}} className='bg-gray-300 flex flex-col justify-between my-0' >
                        <div className='p-5 justify-between' >
                            <p className='text-sm' >Flex Sweatshirt</p>
                            <div className="price text-xl">
                                <span className='text-black pr-3 line-through'>$225.00</span>
                                <span className='text-black font-bold' >$190.00</span>
                            </div>
                        </div>
                        <Image width={1000} height={1000} className='m-auto mt-2 mb-0' alt='Promotion 2 image' src='/media/promotion3.webp' />
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Promotion
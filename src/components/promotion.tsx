import React from 'react';
import Image from 'next/image';
import { Button } from "./ui/button";

import promotion1 from "../../public/media/promotion1.webp";
import promotion2 from "../../public/media/promotion2.png";
import promotion3 from "../../public/media/promotion3.webp";

const Promotion = () => {
    return (
        <section className='container' >

            <div className='text-center' >
                <span className='text-blue-700 text-sm font-bold' >PROMOTIONS</span>
                <h2 className='my-3 text-4xl font-bold'>Our Promotions Events</h2>
            </div>

            <section className='my-5 grid grid-cols-2 gap-10' >

                {/* Promotion 1 section */}
                <div>
                    <div className="my-5 flex items-center bg-gray-300 px-10">
                        <div>
                            <h3 className='font-bold text-3xl' >GET UP TO <span>60%</span> </h3>
                            <p>For the summer season</p>
                        </div>
                        <div>
                            <Image src={promotion1} alt="Promotion 1 image" />
                        </div>
                    </div>

                    <div>
                        <div className='my-5 text-center text-gray-100 bg-gray-900 px-10 py-16' >
                            <h3>GET 30% Off</h3>
                            <p>USE PROMO CODE</p>
                            <Button>DINEWEEKENDSALE</Button>
                        </div>
                    </div>
                </div>

                {/* promotion 2 section */}
                <section className='my-5 grid grid-cols-2 space-x-10'>
                    <div className='bg-yellow-100 flex flex-col my-0' >
                        <div className='p-5 justify-between' >
                            <p className='text-sm' >Flex Sweatshirt</p>
                            <div className="price text-xl">
                                <span className='pr-3 line-through'>$100.00</span>
                                <span className='font-bold' >$75.00</span>
                            </div>
                        </div>
                        <Image className='m-auto mt-2 mb-0' alt='Promotion 2 image' src={promotion2} />
                    </div>

                    <div className='bg-gray-300 flex flex-col my-0' >
                        <div className='p-5 justify-between' >
                            <p className='text-sm' >Flex Sweatshirt</p>
                            <div className="price text-xl">
                                <span className='pr-3 line-through'>$225.00</span>
                                <span className='font-bold' >$190.00</span>
                            </div>
                        </div>
                        <Image className='m-auto mt-2 mb-0' alt='Promotion 2 image' src={promotion3} />
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Promotion
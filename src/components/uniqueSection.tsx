import React from 'react';
import Image from 'next/image';
import unique from "public/media/unique-and-authentic.webp"
import { Button } from "@/components/ui/button"

const UniqueSection = () => {
    return (
        <section className='my-16'>

            <h2 className='md:w-[40%] -mb-14 md:ml-auto mx-8 text-3xl md:text-5xl font-bold md:mr-10' >Unique and Authentic Vintage Designer Jewellery</h2>

            <section className='bg-gray-50'>

                <section className='container' >

                    <section className='py-16 pt-24 grid md:grid-cols-2' >

                        <section className='' >

                            <div className='grid grid-cols-2 space-x-3' >
                                <div className='my-10'>
                                    <h3 className='text-xl font-semibold'>Using Good Quality Materials</h3>
                                    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                                </div>
                                <div className='my-10' >
                                    <h3 className='text-xl font-semibold'>Modern Fashion Design</h3>
                                    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 space-x-3' >
                                <div className='my-10'>
                                    <h3 className='text-xl font-semibold'>Using Good Quality Materials</h3>
                                    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                                </div>
                                <div className='my-10' >
                                    <h3 className='text-xl font-semibold'>Modern Fashion Design</h3>
                                    <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                                </div>
                            </div>

                        </section>

                        <section className='z-[100] h-[100%] grid md:grid-cols-2 md:space-x-8' >
                            <Image src={unique} alt='Unique section image' />
                            <div>
                                <p className='mb-7 md:mt-0 mt-10'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                                <Button className='rounded-none capitalize' >See all products</Button>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default UniqueSection
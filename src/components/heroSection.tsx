import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { FiShoppingCart } from "react-icons/fi";

const HeroSection = () => {

  const styles = {
    backgroundColor: "#ffece3",
  }

  const scaleKro = {
    "transform": "scale(1.1)"
  }

  return (
    <section className='my-20 container grid md:grid-cols-2 gap-20 text-3xl' >
      <div className='flex flex-col justify-center' >

        <div>
          <Button className='px-5 bg-blue-200 text-blue-700 font-bold text-[1rem] mb-8' >Sale 70%</Button>
        </div>

        <h2 className='md:text-6xl font-bold md:mr-10' >An Industrial Take on Streetwear</h2>

        <p className='md:mr-32 leading-7 text-[1rem] my-10 text-gray-500' >Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>

        <div>
          <Button className='border-none rounded-none md:text-lg py-7' >
            <FiShoppingCart className="mr-3" />
            Start Shopping
          </Button>
        </div>

        <div className="grid grid-cols-2 space-y-4 md:space-y-0 md:grid-cols-4 my-10 logos justify-between">
          <div><Image width={120} height={100} alt='instyle' src='/media/bazaar.png' /></div>
          <div><Image width={120} height={100} alt='instyle' src='/media/bustle.png' /></div>
          <div><Image width={120} height={100} alt='instyle' src='/media/versace.png' /></div>
          <div><Image width={120} height={100} alt='instyle' src='/media/Instyle.png' /></div>
        </div>

      </div>
      <div style={styles} className='rounded-full'>
        <Image width={1000} height={1000} src='/media/lady.webp' style={scaleKro} alt='Lady hero image' />
      </div>
    </section>
  )
}

export default HeroSection
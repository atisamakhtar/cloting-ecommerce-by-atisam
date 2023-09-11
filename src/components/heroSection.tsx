import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { FiShoppingCart } from "react-icons/fi";
import Bazaar from "../../public/media/bazaar.png";
import Bustle from "../../public/media/bustle.png";
import Versace from "../../public/media/versace.png";
import Instyle from "../../public/media/Instyle.png";

// import lady from "@/public/media/lady.webp";
import lady from "../../public/media/lady.webp";

const HeroSection = () => {

  const styles = {
    backgroundColor: "#ffece3",
  }

  return (
    <section className='my-16 container grid grid-cols-2 gap-20 text-3xl' >
      <div className='flex flex-col justify-center' >

        <div>
          <Button className='px-5 bg-blue-200 text-blue-700 font-bold text-[1rem] mb-8' >Sale 70%</Button>
        </div>

        <h1 className='text-6xl font-bold md:mr-10' >An Industrial Take on Streetwear</h1>

        <p className='mr-32 leading-7 text-[1rem] my-10 text-gray-500' >Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>

        <div>
          <Button className='border-none rounded-none text-lg py-7' >
            <FiShoppingCart className="mr-3" />
            Start Shopping
          </Button>
        </div>

        <div className="my-10 logos flex justify-between">
          <Image alt='instyle' src={Bazaar} />
          <Image alt='instyle' src={Bustle} />
          <Image alt='instyle' src={Versace} />
          <Image alt='instyle' src={Instyle} />
        </div>

      </div>
      <div className='' >
        <Image src={lady} alt='Lady hero image' style={styles} className='rounded-full' />
      </div>
    </section>
  )
}

export default HeroSection
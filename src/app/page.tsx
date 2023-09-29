"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import MyNavMenu from '@/components/myNavMenu';
import HeroSection from '@/components/heroSection';
import Promotion from '@/components/promotion';
import Products from '@/components/products';
import UniqueSection from '@/components/uniqueSection';
import NewsLetter from '@/components/newsLetter';
import Footer from '@/components/footer';

import { useContext } from 'react';

import { ProductsContext } from '../../context/productsContext';

export default function Home() {

  const availableProducts = useContext(ProductsContext);

  console.log("availableProducts from page.tsx", availableProducts);
  return (
    <>
      <MyNavMenu />
      <HeroSection />
      <Promotion />
      <Products />
      <UniqueSection />
      <NewsLetter />
      <Footer />
    </>
  )
}

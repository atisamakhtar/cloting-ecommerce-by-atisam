import { Button } from '@/components/ui/button';
import Image from 'next/image';
import MyNavMenu from '@/components/myNavMenu';
import HeroSection from '@/components/heroSection';
import Promotion from '@/components/promotion';
import Products from '@/components/products';

export default function Home() {
  return (
    <>
      <MyNavMenu />
      <HeroSection/>
      <Promotion/>
      <Products/>
    </>
  )
}

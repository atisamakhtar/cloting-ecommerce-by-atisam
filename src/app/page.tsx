import { Button } from '@/components/ui/button';
import Image from 'next/image';
import MyNavMenu from '@/components/myNavMenu';
import HeroSection from '@/components/heroSection';

export default function Home() {
  return (
    <>
      <MyNavMenu />
      <HeroSection/>
    </>
  )
}

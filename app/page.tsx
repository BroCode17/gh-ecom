import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import {PopularBrands} from '@/components/PopularBrands'
import Products from '@/components/Products'
import RoundedBtn from '@/components/RoundedBtn'
import React from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
const Home = () => {
  return (
    <main className='flex flex-col justify-center sm:mx-10 sm:mb-5'>
      <Navbar />
      <Hero />
      <PopularBrands />
      <div className='flex justify-center gap-2 items-center'>
        <IoIosArrowDropleft className='size-8 font-normal mr-5 max-lg:hidden' />

        <RoundedBtn className='w-24 h-24 bg-[#d9d9d9]'/>
        <RoundedBtn className='w-24 h-24 bg-[#d9d9d9]'/>
        <RoundedBtn className='w-24 h-24 bg-[#d9d9d9]'/>
        <RoundedBtn className='w-24 h-24 bg-[#d9d9d9]'/>
        <RoundedBtn className='w-24 h-24 bg-[#d9d9d9]'/>
        <RoundedBtn className='w-24 h-24 bg-[#d9d9d9]'/>
        <IoIosArrowDropright className='size-8 font-normal ml-5' />
      </div>
      <Products />
    </main>
  )
}

export default Home
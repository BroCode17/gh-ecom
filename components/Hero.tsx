import React from 'react'
import { Button } from './ui/button'
import RoundedBtn from './RoundedBtn'

const Hero = () => {
  return (
    <section className=''>
        <div>
            <div className='relative w-ful rounded-lg bg-[#d9d9d9] h-96'>
                <Button className='bg-white text-black rounded-3xl absolute bottom-10 left-20'>
                    Let's Get Started!
                </Button>

                <div className='left-[45.1%] absolute bottom-3 flex ring-1 gap-1 max-sm:hidden' id='spin-btn'>
                    <RoundedBtn />
                    <RoundedBtn />
                    <RoundedBtn />
                    <RoundedBtn />
                    <RoundedBtn />
                    <RoundedBtn />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
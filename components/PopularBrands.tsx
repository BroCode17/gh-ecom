import { classNameProps } from '@/lib'
import { cn } from '@/lib/utils'
import React from 'react'



export const PopularBrands = ({className}: classNameProps) => {
  return (
    <div className={cn('w-full flex flex-col items-center justify-center my-10 ', className)}>
        <h1 className='font-bold text-lg'>Most Popular Brands</h1>
        <p className='text-xs'>The king was furious, but he couldn't seem to stop Jokester.</p>
    </div>
  )
}


export const PopularBrandsImg = ({className}: classNameProps) => {
  return (
    <div className={cn('',className)}>
        
    </div>
  )
}

import { classNameProps } from '@/lib'
import { cn } from '@/lib/utils'
import React from 'react'

export default function RoundedBtn({className}: classNameProps) {
  return (
    <div className={cn('h-4 w-4 bg-white rounded-full cursor-pointer', className)} ></div>
  )
}

import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from '@/components/ui/input'
import { customForm } from '@/lib'

const CustomInput = ({form,name, placehoder, type, label}: customForm) => {
  return (
    <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
              <div className='flex flex-col gap-1 mb-5'> 
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input placeholder={placehoder}
                   {...field} 
                   type={type}
                   id={name}
                   className='max-md:h-12'
                   />
                </FormControl>
                <FormMessage />
              </div>
            )}
          />
  )
}

export default CustomInput
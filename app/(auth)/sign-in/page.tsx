import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignIn = () => {
  return (
    <div className='flex items-center justify-center w-full md:w-[40%]'>
        <AuthForm  signType='sign-in'/>
    </div>
  )
}

export default SignIn
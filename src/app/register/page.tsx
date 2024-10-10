import React from 'react'
import Image from "next/image"
const RegisterPage = () => {
  return (
    <section className='mt-8'>
        <h1 className='text-center text-primary text-4xl mb-4'>Register</h1>
        <form action="" className='block max-w-xs  mx-auto'>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <button type="submit">Register</button>
            <div className='my-4 text-center text-gray-500'>or login with provider</div>
            <button className='flex gap-4 justify-center'>
                <Image src={'/google_logo.jpg'} alt='' width={24} height={24}></Image>
                Login with google</button>
        </form>
    </section>
  )
}

export default RegisterPage

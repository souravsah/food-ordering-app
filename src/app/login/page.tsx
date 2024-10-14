'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
const LoginPage = () => {
const [email,setEmail]=useState<string>('');
const [password,setPassword]=useState<string>('');
  const handleFormSubmit = async (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    try {
        let loginData = await axios.post("/api/login",{email,password})
    } catch (error) {
        
    }
  }
  return (
    <section className='block max-w-xs  mx-auto' >
       <h1 className='text-center text-primary text-4xl mb-4'>Login</h1>
        <form action="" onSubmit={handleFormSubmit}>
        <input type="email" placeholder='email'value={email} onChange={e=>setEmail(e.target.value)}  />
        <input type="password" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}  />
        <button type="submit" >Login</button>
        <div className='my-4 text-center text-gray-500'>or login with provider</div>
            <button className='flex gap-4 justify-center\'>
                <Image src={'/google_logo.jpg'} alt='' width={24} height={24}></Image>
                Login with google</button>
            <div className='text-center my-4 border-t pt-4' >
                Existing Account ? <Link className='underline' href={'/login'}>Login here &raquo;</Link>
            </div>

        </form>
    </section>
)
}

export default LoginPage

'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { signIn } from 'next-auth/react';
const LoginPage = () => {
const [email,setEmail]=useState<string>('');
const [password,setPassword]=useState<string>('');
const [loginInProgress,setLoginInProgress]=useState(false)
  const handleFormSubmit = async (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setLoginInProgress(true)
    try {
       await signIn('credentials',{email,password})
    } catch (error) {
        
    }finally{
        setLoginInProgress(false)
    }
  }
  return (
    <section className='block max-w-xs  mx-auto' >
       <h1 className='text-center text-primary text-4xl mb-4'>Login</h1>
        <form action="" onSubmit={handleFormSubmit}>
        <input type="email" name='email' placeholder='email'value={email} onChange={e=>setEmail(e.target.value)} disabled={loginInProgress} />
        <input type="password" name='password' placeholder='password' value={password} onChange={e=>setPassword(e.target.value)} disabled={loginInProgress}  />
        <button type="submit" disabled={loginInProgress}>Login</button>
        <div className='my-4 text-center text-gray-500'>or login with provider</div>
            <button  className='flex gap-4 justify-center\' >
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

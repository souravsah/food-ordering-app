"use client"
import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
const RegisterPage = () => {
const [email,setEmail]=useState<string>('');
const [password,setPassword]=useState<string>('');
const [creatingUser,setCreatingtUser]=useState<boolean>(false)
const [userCreated,setUserCreated]=useState<boolean>(false);
const [error,setError] = useState(false)
async function  handleFormSubmit(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault()
        setCreatingtUser(true);
        setError(false)
        const response = await fetch('/api/register',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{'Content-Type':'application/json'}
        })
        if(!response.ok){
            setError(true);
        }else{
            setUserCreated(true);
        }
        setCreatingtUser(false)
}
  return (
    <section className='mt-8'>
        <h1 className='text-center text-primary text-4xl mb-4'>Register</h1>
        {userCreated && (
                <div className='my-4 text-center'>User Created. <br/> Now you can login {' '}
                    <Link className='underline' href="/login">Login &raquo;</Link>
                 </div>
            )}
            {error && (
                <div className='my-4 text-center'>User Created. <br/> Now you can login {' '}
                    An error has occurred . <br/>
                    Please try again later.
             </div>
            )}
        <form action="" className='block max-w-xs  mx-auto' onSubmit={handleFormSubmit}>
            <input type="email" placeholder='email'value={email} onChange={e=>setEmail(e.target.value)} disabled={creatingUser} />
            <input type="password" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)} disabled={creatingUser} />
            <button type="submit" disabled={creatingUser}>Register</button>
            <div className='my-4 text-center text-gray-500'>or login with provider</div>
            <button className='flex gap-4 justify-center\'>
                <Image src={'/google_logo.jpg'} alt='' width={24} height={24}></Image>
                Login with google</button>
        </form>
    </section>
  )
}

export default RegisterPage

import React from 'react'
import Image from 'next/image'
import Right from '../icons/Right'

const Hero = () => {
    return (
        <>
            <section className="grid py-12" style={{
                gridTemplateColumns: ".4fr .6fr"
            }}>
                <div >
                <h1 className='text-6xl font-semibold '>Everything<br/> is better <br/>with a &nbsp; <span className='text-primary'>
                Pizza</span> </h1>
                <p className='my-7 text-gray-700'>Pizza is the missing piece that makes everyday complete,<br/> a simple yet delicious joy in life</p>
                <div className='flex gap-4 text-sm'>
                <button className='bg-primary text-sm text-white px-8 py-2 rounded-full flex gap-2 uppercase items-center'>Order Now <Right/></button>
                
                <button className='flex gap-2 py-2 text-gray-600 font-semibold'>Learn More <Right/></button>

                </div>
                </div>
                <div className='relative'>
                <Image src={'/pizza.png'} layout={'fill'} objectFit='contain' alt='pizza'></Image>
                </div>
            </section>
        </>
    )
}

export default Hero
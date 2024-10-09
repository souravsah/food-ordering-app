import React from 'react'
import Image from "next/image"
import MenuItem from './MenuItem'
import SectionHeaders from './SectionHeaders'
const HomeMenu = () => {
  return (
    <div>
    <div className='relative'>
        <div className='h-48  w-48 absolute  -top-32 -left-36 -z-10'>
            <Image src={"/sallad1.png"} alt={'sallad'} layout='fill' objectFit='content'></Image>
        </div>
        <div className='h-48 w-48 absolute  -top-24 -z-10 -right-36'>
            <Image src={"/sallad2.png"} alt={'sallad'} layout='fill' objectFit='content'></Image>
        </div>
    <div className='text-center mb-6'>
     <SectionHeaders subHeader={'check out'} mainHeader={'Menu'} />
    </div>

    </div>
    <div className='grid grid-cols-3 gap-4'>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
        </div>    
    </div>
  )
}

export default HomeMenu

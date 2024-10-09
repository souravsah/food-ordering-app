import React from 'react'

const MenuItem = () => {
    return (
        <div className='bg-gray-200 p-4 rounded-lg hover:shadow-md hover:shadow-black/55 text-center hover:bg-white hover:cursor-pointer transition-all'>
           <div className='text-center'>
           <img src="/pizza.png" alt="pizza" className='max-h-auto max-h-40 block mx-auto' />
           </div>
            <h4 className='font-semibold my-3 text-2xl'>Pepperoni Pizza</h4>
            <p className='text-gray-500 text-lg '> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button className='bg-primary text-white rounded-full px-8 py-2 mt-4'>Add to cart $12</button>
        </div>
    )
}

export default MenuItem

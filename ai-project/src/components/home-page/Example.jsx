import React from 'react'
import Laptop from '../../assets/turtle.jpeg'

const Example = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={Laptop} alt="Laptop" className="w-full h-auto object-cover" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>How does it work?</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Extension add description here</h1>
                    <p>
                        ADD TEXT IN HERE
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Example
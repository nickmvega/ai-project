import React from 'react';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>
                    AI INTEGRATION WITH PPT, SLIDES, AND EXCEL
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Build, Grow, Advance
                </h1>
                <div className='md:text-4xl sm:text-2xl text-xl font-bold py-4'>
                    <p>Efficient, Fast, Easy to use</p>
                </div>
                <button className='bg-[#00df9a] text-black w-[300px] py-3 rounded-md font-medium my-6 mx-auto'>
                    Get Started Now 
                </button>
            </div>
        </div>
    );
}

export default Hero;
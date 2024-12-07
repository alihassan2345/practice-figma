import Image from 'next/image'
import React from 'react'
const Sales = () => {
  return (
    <div className='border-b-2'>
        
        {/* todaysale */}
      <div className='pt-[120px] pl-[127px] sm:grid grid-cols-5'>
        <h1 className='border-l-8 border-red-500 text-red-500 font-semibold'>Today’s</h1>
      </div>
      {/* timer and sale */}
      <div>
        <h1 className='text-[36px] font-semibold pt-[30px] pl-[120px]'>Flash Sales</h1>
        <Image src={"/Group 1000005937 (1).png"} alt='as' width={302} height={50} className='absolute top-[660px] ml-[400px]'></Image>
      </div>
      {/* card */}
      <div className='w-[90%] flex justify-center items-center ml-[120px] h-[250px] bg-black' >
         </div>
      {/* view all product */}
      <div className='w-[234px] h-[56px] bg-[#DB4444] ml-[603px] mt-[16px] mb-5' >
        <button className='text-white px-[48px] py-[16px]'>View All Products</button>
      </div>
    </div>
  )
}

export default Sales

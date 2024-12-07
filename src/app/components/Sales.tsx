import Image from 'next/image'
import React from 'react'
const Sales = () => {
  return (
    <div>
        
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
      <div> </div>
      {/* view all product */}
      <div>
        
      </div>
    </div>
  )
}

export default Sales

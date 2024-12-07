import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <div className='w-[1170px] h-[313px] mt-[80px] ml-[115px] gap-[60px] border-b-2'>
      {/* categorie line */}
      <div className='w-[90px] h-[20px] '>
        <h1 className=' font-semibold text-red-500 pl-[8px] border-l-[14px] rounded border-red-500'>Categories</h1>
      </div>
      {/* browser by categori */}
      <div className='w-[379px] h-[48px]'>
        <h1 className='text-[36px] font-semibold mt-4'>Browse By Category</h1>
      </div>
      {/* hover button */}
      <div className='w-[1170px] h-[145px] mt-[100px]'>
        <ul className='flex gap-[30px]'>
        <button className='w-[170px] h-[145px] border-[1px] border-black rounded-[4px] bg-white hover:bg-red-500 '><Image src={'/Category-CellPhone.png'} alt='h' width={56} height={56} className='mt-[25px] ml-[57px]'></Image> Phones</button>
            <button className='w-[170px] h-[145px] border-[1px] border-black rounded-[4px] bg-white hover:bg-red-500 '><Image src={'/Category-Computer.png'} alt='h' width={56} height={56} className='mt-[25px] ml-[57px]'></Image>Computer</button>
            <button className='w-[170px] h-[145px] border-[1px] border-black rounded-[4px] bg-white hover:bg-red-500 '><Image src={'/Category-SmartWatch.png'} alt='h' width={56} height={56} className='mt-[25px] ml-[57px]'></Image>Smartwatch</button>
            <button className='w-[170px] h-[145px] border-[1px] border-black rounded-[4px] bg-white hover:bg-red-500 '><Image src={'/Category-Camera.png'} alt='h' width={56} height={56} className='mt-[25px] ml-[57px]' ></Image>Camera</button>
            <button className='w-[170px] h-[145px] border-[1px] border-black rounded-[4px] bg-white hover:bg-red-500 '><Image src={'/Category-Headphone.png'} alt='h' width={56} height={56} className='mt-[25px] ml-[57px]'></Image>Headphones</button>
            <button className='w-[170px] h-[145px] border-[1px] border-black rounded-[4px] bg-white hover:bg-red-500 '><Image src={'/Category-Gamepad.png'} alt='h' width={56} height={56} className='mt-[25px] ml-[57px]'></Image>Gaming</button>
        </ul>
      </div>
    </div>
  )
}

export default Categories

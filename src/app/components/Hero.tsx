import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
  
    <div className=' '>
      {/* left */}
     <div className='w-[217px] h-[344px] pt-[50px] pl-[135px] flex flex-col gap-[16px]  '>
      <h1 className='cursor-pointer w-[217px] h-[24px]'>Woman’s Fashion</h1>
      <h1 className='cursor-pointer w-[217px] h-[24px]'>Men’s Fashion</h1>
      <h1 className='cursor-pointer w-[87px] h-[24px]'>Electronics</h1>
      <h1 className='cursor-pointer w-[132px] h-[24px]'>Home & Lifestyle</h1>
      <h1 className='cursor-pointer w-[72px] h-[24px]'>Medicine</h1>
      <h1 className='cursor-pointer w-[137px] h-[24px] '>Sports & Outdoor</h1>
      <h1 className='cursor-pointer w-[109px] h-[24px]'>Baby’s & Toys</h1>
      <h1 className='cursor-pointer w-[131px] h-[24px]'>Groceries & Pets</h1>
      <h1 className='cursor-pointer w-[128px] h-[24px]'>Health & Beauty</h1>
     </div>
     {/* right */}
     <div className=' w-[892px] h-[360px] pt-[100px] pl-[413px] absolute left-[400px] bottom-[-13px] top-[200px] bg-black text-white'>
{/* right lfet */}
<div className='w-[190px] h-[49px] pt-[58px] pl-[64px] gap-[24px] absolute top-5 left-8'>
<Image src={"/1200px-Apple_gray_logo 1 (1).png"} alt='shg' width={40} height={49} className='absolute'></Image>
<div className='pt-[20px]'>
<span className='w-[126px] h-[20px] text-[16px] text-center flex ml-[50px] '>iPhone 14 Series</span>
<h1 className='w-[294px] h-[120px] text-[48px] font-semibold pt-[30px]'>Up to 10% off Voucher</h1>
<h1 className='cursor-pointer underline w-[81px] h-[24px] pt-[50px] '>Shop Now</h1>
</div>
</div>
{/* right right */}
<div>
   <Image src={'/hero_endframe__cvklg0xk3w6e_large 2 (1).png'} alt='as' width={396} height={352} className='absolute top-14 right-2 '></Image> 
</div>

      </div> 
    </div>
   
  )
}

export default Hero

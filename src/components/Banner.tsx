import Link from 'next/link'
import banner from '@/img/banner.png'
import Image from 'next/image'
import React from "react";
function Banner() {
  return (
    <main className=''>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-xl mx-auto mx-4 my-20'>
        {/* banner left */}
        <div className='my-auto px-4'>
          <h1 className='text-2xl font-bold'>BPI MERN</h1>
          <h2 className='text-lg  mb-2'>MERN Stack Developer</h2>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ex nobis impedit quibusdam similique est beatae nostrum, totam esse libero ea, obcaecati inventore molestias repellat reiciendis tempora facilis unde veniam?</p>
          <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, hic tempora deserunt neque eveniet aperiam eos omnis nulla, nihil sint quod earum, facere cumque veritatis voluptatibus quasi consectetur! Repellat, esse!</p>
          <Link href={'/resume'} className='px-10 py-3 bg-gray-800 text-white rounded-lg'>Hire Me</Link>
        </div>
        {/* baner right */}
        <div className=''>
          <Image src={banner} alt='banner image' className='w-[50%] mx-auto' />
        </div>
      </div>
    </main>
  )
}

export default Banner
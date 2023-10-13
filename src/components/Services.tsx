import React from 'react'
import { BsCodeSlash } from "react-icons/bs";
import {services} from '@/constant/data'
function Services() {
  return (
    <main className='my-20'>
      <div className=''>
        <h1 className='text-2xl mb-10'>My Servicer</h1>
        <div className="grid grid-cols-3 gap-5">
          {
            services.map((i)=>(
              <div key={i.id} className="border-[1px] border-slate-900 rounded-lg px-5 py-10">
            <div className='flex gap-2'>
              <h2>{i.titel}</h2>
              <span className='text-sky-600 animate-bounce text-2xl'>{<i.icon/>}</span>
            </div>
            <p>{i.description}</p>
          </div>
            ))
          }
          
          
        </div>
      </div>
    </main>
  )
}

export default Services
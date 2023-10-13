import About from '@/components/About'
import Banner from '@/components/Banner'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Banner/>
      <div className='max-w-screen-xl px-4'>
        <About/>
      </div>
    </main>
  )
}

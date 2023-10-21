import Image from 'next/image'
import { Header } from './components/Header';


import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../app/components/Map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (

      <main className='w-full h-screen flex flex-col items-center'>
        <Header />
        <DynamicMap />
      </main>

  )
}

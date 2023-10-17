import Image from 'next/image'
import { Header } from './components/Header';
import { Map } from './components/Map';


export default function Home() {
  return (

    <main className='w-screen h-screen bg-red-700 flex flex-col items-center'>
      <Header />
      <Map />
    </main>
  )
}

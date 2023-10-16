import Image from 'next/image'
import { Header } from './components/Header';
import { Map } from './components/Map';
import { Infos } from './components/Infos';


export default function Home() {
  return (

    <main className='w-full h-screen bg-red-700 flex flex-col items-center'>
      <Header />
      <Infos />
      <Map />
    </main>
  )
}

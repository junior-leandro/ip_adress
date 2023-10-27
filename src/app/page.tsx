
import Header from './components/Header';
import dynamic from 'next/dynamic'


export default function Home() {


  const DynamicMap = dynamic(() => import('../app/components/Map'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  })


  return (

    <main className='w-full h-screen flex flex-col items-center'>

      <Header />
      <DynamicMap />
    </main>

  )
}

import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    // <main>
    //   <Hero />
    //   <Footer />
    // </main>
    <main className='relative flex min-h-svh flex-col'>
      <Hero />
      <Footer />
    </main>
  )
}

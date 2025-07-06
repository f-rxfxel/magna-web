import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import Header from '@/components/header'

export default function Home() {
  return (
    <main className='relative flex min-h-svh flex-col'>
      <Hero>
        <Header />
      </Hero>
      <Footer />
    </main>
  )
}

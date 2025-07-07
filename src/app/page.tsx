'use client'

import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import Header from '@/components/header'
import Image from 'next/image'
import logo from '../public/MAGNA-logo.png'
import { motion } from 'motion/react'

export default function Home() {
  return (
    <Hero>
      <Header />
      <div className='flex h-screen w-full items-center flex-col justify-center gap-6 px-4 text-center'>
        <div className='flex flex-col items-center justify-center gap-6 px-6 mx-auto -mt-48'>
          <Image width={400} src={logo} alt='MAGNA' />
          <motion.p
            className='text-md md:text-xl lg:text-2xl text-white/70 tracking-tighter'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Seu acesso exclusivo ao extraordinário.
          </motion.p>
        </div>
      </div>
      <Footer />
    </Hero>
  )
}

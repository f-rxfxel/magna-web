'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Circle } from 'lucide-react'

export default function Teste() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark ? 'dark' : ''
      }`}
    >
      {/* Background with gradient and blur effects */}
      <div className='fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl'></div>
      </div>

      {/* Content */}
      <div className='relative z-10'>
        {/* Hero Section */}
        <section className='container mx-auto px-4 py-20'>
          <div className='text-center mb-16'>
            {/* Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
              <Button
                variant='outline'
                className='bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-full text-lg font-semibold '
              >
                Let's Collaborate
              </Button>
              <button
                onClick={toggleTheme}
                className='cursor-pointer text-white p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300'
              >
                a
              </button>
            </div>

            {/* Central Glassmorphism Card */}
            <div className='max-w-4xl mx-auto'>
              <div className='bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-300'>
                <div className='grid md:grid-cols-3 gap-8 items-center'></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

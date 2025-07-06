'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchModal from './ui/search-modal'

const navLinks = [
  { name: 'Imóveis', path: '/imoveis' },
  { name: 'Agentes', path: '/agentes' },
]

interface HeaderProps {
  floating?: boolean
}

const Header = ({ floating = false }: HeaderProps) => {
  const pathname = usePathname()
  return (
    <header
      className={`flex gap-2 z-20 text-white ${
        floating
          ? 'absolute left-1/2 top-12 -translate-x-1/2'
          : 'relative w-full justify-center mt-4'
      }`}
      style={floating ? { pointerEvents: 'none' } : {}}
    >
      <nav className='flex gap-2 p-1 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 pointer-events-auto'>
        {navLinks.map((link) => {
          const isActive =
            pathname === link.path ||
            (pathname.startsWith(link.path) && link.path !== '/')
          return (
            <Link
              className={`$${
                isActive ? 'font-semibold' : ''
              } cursor-pointer hover:bg-white/30 rounded-full transition-colors duration-200 px-4 py-2`}
              href={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          )
        })}
      </nav>
      <nav className='p-1 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 pointer-events-auto'>
        <SearchModal />
      </nav>
    </header>
  )
}

export default Header

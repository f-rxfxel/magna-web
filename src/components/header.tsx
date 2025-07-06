'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Imóveis', path: '/imoveis' },
  { name: 'Agentes', path: '/agentes' },
]

const Header = () => {
  const pathname = usePathname()
  return (
    <nav>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.path ||
          (pathname.startsWith(link.path) && link.path !== '/')
        return (
          <Link
            className={isActive ? 'font-semibold mr-4' : 'mr-4'}
            href={link.path}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Header

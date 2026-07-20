'use client'

import { useState } from 'react'
import { Menu, X, Camera } from 'lucide-react'

const navLinks = [
  { name: 'Портфолио', href: '#portfolio' },
  { name: 'Обо мне', href: '#about' },
  { name: 'Услуги', href: '#services' },
  { name: 'Контакты', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <Camera className="w-6 h-6 text-accent" />
          <span>ТВОЁ ИМЯ</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-accent text-white text-sm font-medium rounded-full hover:bg-red-600 transition-colors"
          >
            Заказать съёмку
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark border-t border-white/5 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
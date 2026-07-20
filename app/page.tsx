import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Contact />

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© 2026 Видеограф. Все права защищены.</p>
      </footer>
    </main>
  )
}
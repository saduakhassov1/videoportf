'use client'

import { motion } from 'framer-motion'
import { Play, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/80 to-dark z-10" />

      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      />

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent text-sm font-medium tracking-widest uppercase mb-4"
        >
          Профессиональная видеосъёмка
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-gradient"
        >
          Создаю кино<br />из моментов
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Свадебные фильмы, рекламные ролики, музыкальные клипы и корпоративное видео. 
          Каждый кадр — история.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full hover:bg-red-600 transition-colors"
          >
            <Play className="w-5 h-5" />
            Смотреть работы
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            Связаться
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
      </motion.div>
    </section>
  )
}
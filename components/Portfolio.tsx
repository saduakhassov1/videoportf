'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const works = [
  {
    id: 1,
    title: 'Свадьба Ани и Максима',
    category: 'Свадебная съёмка',
    image: '/images/work1.jpg',
    link: 'https://youtube.com/watch?v=...',
  },
  {
    id: 2,
    title: 'Рекламный ролик Coffee House',
    category: 'Реклама',
    image: '/images/work2.jpg',
    link: 'https://youtube.com/watch?v=...',
  },
  {
    id: 3,
    title: 'Музыкальный клип "Небо"',
    category: 'Клип',
    image: '/images/work3.jpg',
    link: 'https://youtube.com/watch?v=...',
  },
  {
    id: 4,
    title: 'Корпоратив IT-Company',
    category: 'Корпоратив',
    image: '/images/work4.jpg',
    link: 'https://youtube.com/watch?v=...',
  },
  {
    id: 5,
    title: 'Love Story в Париже',
    category: 'Love Story',
    image: '/images/work5.jpg',
    link: 'https://youtube.com/watch?v=...',
  },
  {
    id: 6,
    title: 'Реклама недвижимости',
    category: 'Реклама',
    image: '/images/work6.jpg',
    link: 'https://youtube.com/watch?v=...',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Работы</p>
          <h2 className="text-4xl md:text-5xl font-bold">Портфолио</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.a
              key={work.id}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-muted"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center">
                  <Play className="w-7 h-7 text-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-accent text-xs font-medium uppercase tracking-wider mb-1">
                  {work.category}
                </p>
                <h3 className="text-white font-semibold text-lg">{work.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, Users, Film } from 'lucide-react'

const stats = [
  { icon: Calendar, value: '5+', label: 'Лет опыта' },
  { icon: Film, value: '200+', label: 'Видео' },
  { icon: Users, value: '150+', label: 'Клиентов' },
  { icon: Award, value: '15', label: 'Наград' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Обо мне</p>
            <h2 className="text-4xl font-bold mb-6">Рассказываю истории<br />через объектив</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Я профессиональный видеограф с 5-летним опытом. Специализируюсь на свадебной съёмке, 
              рекламных роликах, корпоративных отчетах и контента для социальных сетей. Моя цель — не просто снять видео, а передать 
              эмоции, атмосферу и уникальность каждого момента.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Работаю с профессиональным оборудованием (Sony FX30/Sony ZV-E10 II, DJI RS3 Pro, дрон Dji mini 4 Pro), 
              использую цветокоррекцию DaVinci Resolve и всегда стремлюсь к кинематографичности.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 bg-dark rounded-xl border border-white/5">
                  <stat.icon className="w-5 h-5 text-accent mb-2" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

         <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="relative"
>
  <div 
    className="aspect-[3/4] rounded-2xl bg-cover bg-center"
    style={{ backgroundImage: 'url(/images/about-photo.jpg)' }}
  />
  <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
</motion.div>
        </div>
      </div>
    </section>
  )
}

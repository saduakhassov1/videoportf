'use client'

import { motion } from 'framer-motion'
import { Heart, Briefcase, Music, Building2, Camera, Clapperboard } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Свадебная съёмка',
    description: 'Полный день, love story, клип в день свадьбы. От 300 000 теңге',
    features: ['До 12 часов съёмки', '2 камеры', 'Дрон', 'Фильм 10-15 мин/полный банкет'],
  },
  {
    icon: Briefcase,
    title: 'Рекламные ролики',
    description: 'Продакшн для брендов и бизнеса. От 200 000 теңге',
    features: ['Сценарий', 'Съёмка', 'Монтаж', 'Цветокоррекция'],
  },
  {
    icon: Music,
    title: 'Музыкальные клипы',
    description: 'Креативные концепции и реализация. От 100 000 теңге',
    features: ['Идея', 'Локации', 'Съёмка', 'Постпродакшн'],
  },
  {
    icon: Building2,
    title: 'Корпоративное видео',
    description: 'Отчётные ролики, презентации. От 50 000 теңге',
    features: ['Мероприятия', 'Интервью', 'Промо', 'Документалка'],
  },
  {
    icon: Camera,
    title: 'Reels',
    description: 'Романтические мини-фильмы. От 20 000 теңге',
    features: ['Титры', 'Кинематографика', 'Музыка', 'Цветокор'],
  },
  {
    icon: Clapperboard,
    title: 'Документальное',
    description: 'Истории, интервью, репортажи. От 70 000 теңге',
    features: ['Глубокий монтаж', 'Графика', 'Звук', 'Цвет'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Услуги</p>
          <h2 className="text-4xl md:text-5xl font-bold">Что я снимаю</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-muted/50 border border-white/5 hover:border-accent/30 transition-colors group"
            >
              <service.icon className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

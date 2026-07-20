'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Контакты</p>
          <h2 className="text-4xl md:text-5xl font-bold">Давайте снимать</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-8">
              Готов обсудить ваш проект. Напишите мне — отвечу в течение дня.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-dark border border-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">mirbeksadu@gmail.com</p>
                </div>
              </a>

              <a href="tel:+79991234567" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-dark border border-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Телефон</p>
                  <p className="font-medium">+7 (775) 609-57-53</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-dark border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Локация</p>
                  <p className="font-medium">Астана, Казахстан</p>
                </div>
              </div>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-dark border border-white/10 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Instagram</p>
                  <p className="font-medium">@_saduakhassov</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-500 mb-2">Имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-2">Телефон</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors"
                  placeholder="+7 (999) 000-00-00"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-2">Тип съёмки</label>
              <select className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors text-gray-300">
                <option>Свадьба</option>
                <option>Реклама</option>
                <option>Клип</option>
                <option>Корпоратив</option>
                <option>Reels</option>
                <option>Другое</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-2">Сообщение</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Расскажите о вашем проекте..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-accent text-white font-medium rounded-xl hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Отправить заявку
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

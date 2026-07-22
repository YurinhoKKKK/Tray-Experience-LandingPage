import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { MapPin, Users, Eye, Zap, type LucideIcon } from 'lucide-react'
import { Container } from '../ui/Container'
import { aboutHighlights } from '../../data/aboutHighlights'
import { fadeInUp, staggerContainer } from '../../lib/motion'

/** Mapa nome-do-ícone → componente lucide (os nomes vêm de data/aboutHighlights.ts). */
const icons: Record<string, LucideIcon> = { MapPin, Users, Eye, Zap }

export function About() {
  const reduced = useReducedMotion() ?? false
  const item: Variants = fadeInUp(reduced)

  return (
    <section
      aria-label="Sobre o evento"
      className="py-20 sm:py-24 lg:py-28"
    >
      <Container>
        {/* Bloco de texto centralizado */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-[680px] text-center"
        >
          <motion.p
            variants={item}
            className="text-xs font-medium uppercase tracking-[0.16em] text-[#8FA0FF]"
          >
            Sobre o evento
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-3 text-[24px] font-medium leading-tight tracking-tight text-paper sm:text-[29px]"
          >
            O que é o <span className="text-risd">Tray Experience</span>.
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 text-sm leading-[1.7] text-[#C6CAD2]"
          >
            O Tray Experience é um encontro presencial feito para quem vive o
            e-commerce e também para quem ainda vai começar. Um dia dedicado a
            estratégia, troca de experiências e visão de mercado, reunindo
            lojistas, gestores, futuros empreendedores e especialistas em um
            mesmo espaço, em Sombrio. Realizado pela Monvatti em conjunto com a
            Tray, o evento nasce para aproximar quem vende e quem quer vender
            online de quem entende, na prática, o que faz uma operação crescer.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 text-sm leading-[1.7] text-secondary"
          >
            Vender online ficou mais competitivo e informação solta não basta. O
            Tray Experience existe para conectar você às pessoas e às ideias
            certas: conversas reais, aprendizados aplicáveis e um ambiente onde
            as próximas oportunidades acontecem. É o tipo de dia que rende muito
            depois que acaba.
          </motion.p>
        </motion.div>

        {/* Faixa de destaques: 1 col (mobile) → 2 (md) → 4 (lg). Cards estáticos, sem hover. */}
        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {aboutHighlights.map((highlight) => {
            const Icon = icons[highlight.icon] ?? MapPin
            return (
              <motion.li
                key={highlight.titulo}
                variants={item}
                className="flex h-full flex-col items-center rounded-[12px] border-[0.5px] border-[#1c2029] bg-[#0C0E14] px-4 py-5 text-center"
              >
                <Icon
                  className="text-[#5B74FF]"
                  size={22}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-sm font-medium text-paper">
                  {highlight.titulo}
                </h3>
                <p className="mt-1 text-[11px] text-muted">{highlight.apoio}</p>
              </motion.li>
            )
          })}
        </motion.ul>
      </Container>
    </section>
  )
}

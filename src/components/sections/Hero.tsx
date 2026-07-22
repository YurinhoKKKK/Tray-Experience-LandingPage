import { motion, useReducedMotion } from 'framer-motion'
import { Gift, Flame, CalendarDays, MapPin, ArrowDown } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { event } from '../../data/event'
import { fadeInUp, staggerContainer } from '../../lib/motion'

/** Ícones lucide na mesma ordem dos indicadores em event.indicadores. */
const indicadorIcons = [Gift, Flame, CalendarDays, MapPin]

export function Hero() {
  const reduced = useReducedMotion() ?? false
  const item = fadeInUp(reduced)

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      {/* Glow radial azul no canto superior direito (risd → chrysler → transparente).
          Camada dupla para um brilho "premium/Linear" com mais presença, mantido à
          direita para não competir com o contraste do texto à esquerda. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-12%] -z-10 h-[620px] w-[620px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(49,69,255,0.42) 0%, rgba(0,26,216,0.22) 42%, rgba(5,6,8,0) 72%)',
        }}
      />
      {/* Núcleo mais concentrado para dar profundidade ao brilho */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[2%] -z-10 h-[320px] w-[320px] rounded-full blur-2xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(49,69,255,0.30) 0%, rgba(49,69,255,0) 70%)',
        }}
      />

      <Container>
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {/* 1. Linha de parceria: Monvatti (protagonista) + Tray (parceira) */}
          <motion.div
            variants={item}
            className="flex items-center gap-4 text-sm sm:gap-5"
          >
            {/* Monvatti — wordmark largo (ratio ~4.7), dominante */}
            <img
              src="/images/monvatti-logo.webp"
              alt="Monvatti"
              className="h-5 w-auto sm:h-6"
              width={114}
              height={24}
            />
            <span className="h-6 w-px bg-gunmetal" aria-hidden="true" />
            <span className="text-muted">em parceria com</span>
            {/* Tray — asset quase quadrado (ratio ~1.7): precisa de mais px para
                ficar oticamente equilibrado, sem superar a Monvatti */}
            <img
              src="/images/tray-logo-white.webp"
              alt="Tray"
              className="h-6 w-auto sm:h-7"
              width={48}
              height={28}
            />
          </motion.div>

          {/* 2. Badge pill */}
          <motion.div variants={item} className="mt-7">
            <span className="inline-flex items-center rounded-full border border-risd/30 bg-risd/[0.12] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-risd">
              {event.nome} · {event.linha}
            </span>
          </motion.div>

          {/* 3. Headline */}
          <motion.h1
            variants={item}
            className="mt-5 text-[32px] font-medium leading-[1.08] tracking-tight text-paper sm:text-4xl md:text-[38px]"
          >
            Estratégia, escala e networking em{' '}
            <span className="text-risd">um só dia</span>.
          </motion.h1>

          {/* 4. Subheadline */}
          <motion.p
            variants={item}
            className="mt-5 max-w-[470px] text-base leading-relaxed text-secondary"
          >
            Um encontro presencial para quem vende online e quer crescer com
            método. Conteúdo prático, especialistas e as novidades da Tray —
            reunidos em Sombrio.
          </motion.p>

          {/* 5. CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <WhatsAppButton>Entrar no grupo oficial</WhatsAppButton>
            <Button as="button" type="button" onClick={scrollToNext}>
              Saiba mais
              <ArrowDown className="size-4" aria-hidden="true" />
            </Button>
          </motion.div>

          {/* 6. Faixa de indicadores */}
          <motion.ul
            variants={item}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-3"
          >
            {event.indicadores.map((texto, i) => {
              const Icon = indicadorIcons[i] ?? Gift
              return (
                <li
                  key={texto}
                  className="flex items-center gap-2 text-sm text-secondary"
                >
                  <Icon className="size-4 text-risd" aria-hidden="true" />
                  {texto}
                </li>
              )
            })}
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  )
}

/** Scroll suave para a próxima seção (âncora reservada para a Fase 2). */
function scrollToNext() {
  const next = document.getElementById('saiba-mais')
  if (next) {
    next.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }
}

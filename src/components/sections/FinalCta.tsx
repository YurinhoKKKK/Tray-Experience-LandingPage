import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Container } from '../ui/Container'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { Countdown } from '../ui/Countdown'
import { finalCtaCopy } from '../../data/finalCta'
import { fadeInUp, staggerContainer } from '../../lib/motion'

/** Glow azul da marca por dentro do card, mais presente que nas outras seções.
    Fica numa camada dedicada (não no card inteiro) para "respirar" via CSS. */
const ctaGlow =
  'radial-gradient(120% 120% at 50% 0%, rgba(49,69,255,0.20) 0%, rgba(0,26,216,0.08) 38%, rgba(10,11,18,0) 72%)'

export function FinalCta() {
  const reduced = useReducedMotion() ?? false
  const item: Variants = fadeInUp(reduced)

  return (
    <section aria-label="Garanta sua vaga" className="py-14 sm:py-20">
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-10 sm:py-20"
          style={{ backgroundColor: '#0A0B12', border: '1px solid rgba(49,69,255,0.30)' }}
        >
          {/* Camada de glow dedicada, "respirando" lentamente (para sob
              prefers-reduced-motion). transform-origin no topo, onde o glow nasce. */}
          <div
            aria-hidden="true"
            className="animate-glow pointer-events-none absolute inset-0 -z-10 rounded-3xl"
            style={{ background: ctaGlow, transformOrigin: '50% 0%' }}
          />

          <motion.h2
            variants={item}
            className="mx-auto max-w-[15ch] text-[30px] font-medium leading-[1.1] tracking-tight text-paper sm:text-[40px]"
          >
            {finalCtaCopy.titleLead}{' '}
            <span className="text-risd">{finalCtaCopy.titleHighlight}</span>{' '}
            {finalCtaCopy.titleTail}
          </motion.h2>

          {/* Timer regressivo completo — lê event.dataISO */}
          <motion.div variants={item} className="mt-8">
            <Countdown variant="full" />
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-8 max-w-[460px] text-[15px] leading-relaxed text-secondary"
          >
            {finalCtaCopy.subheadline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex justify-center">
            <WhatsAppButton size="lg">Entrar no grupo oficial</WhatsAppButton>
          </motion.div>

          <motion.p variants={item} className="mt-5 text-xs text-muted">
            {finalCtaCopy.reinforcement}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

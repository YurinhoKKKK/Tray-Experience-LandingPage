import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Container } from '../ui/Container'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { fadeInUp, staggerContainer } from '../../lib/motion'

/** Glow azul da marca por dentro do card, mais presente que nas outras seções. */
const ctaGlow =
  'radial-gradient(120% 120% at 50% 0%, rgba(49,69,255,0.20) 0%, rgba(0,26,216,0.08) 38%, #0A0B12 72%)'

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
          style={{ background: ctaGlow, border: '1px solid rgba(49,69,255,0.30)' }}
        >
          <motion.h2
            variants={item}
            className="mx-auto max-w-[15ch] text-[30px] font-medium leading-[1.1] tracking-tight text-paper sm:text-[40px]"
          >
            Sua vaga no Tray Experience começa{' '}
            <span className="text-risd">aqui</span>.
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-[460px] text-[15px] leading-relaxed text-secondary"
          >
            Evento gratuito, presencial, em Sombrio. Entre no grupo oficial e
            garanta sua presença antes que as vagas se esgotem.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex justify-center">
            <WhatsAppButton size="lg">Entrar no grupo oficial</WhatsAppButton>
          </motion.div>

          <motion.p variants={item} className="mt-5 text-xs text-muted">
            Gratuito · Sem compromisso · Você pode sair quando quiser
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Container } from '../ui/Container'
import { organizers } from '../../data/organizers'
import { fadeInUp, staggerContainer } from '../../lib/motion'

/** Glow azul sutil do card da Monvatti (protagonista). */
const monvattiGlow =
  'linear-gradient(150% 130% at 85% 5%, rgba(49,69,255,0.14), rgba(0,26,216,0.04) 40%, #0C0E14 70%)'

export function Organizers() {
  const reduced = useReducedMotion() ?? false
  const item: Variants = fadeInUp(reduced)

  return (
    <section aria-label="Organizadores do evento" className="py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Cabeçalho centralizado */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8FA0FF]">
            Quem faz acontecer
          </p>
          <h2 className="mt-3 text-[24px] font-medium leading-tight tracking-tight text-paper sm:text-[29px]">
            Os <span className="text-risd">organizadores</span>.
          </h2>
        </div>

        {/* Dois cards simétricos: 1 col (mobile) → 2 col iguais (md+), mesma altura. */}
        <motion.ul
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 items-stretch gap-4 md:grid-cols-2"
        >
          {organizers.map((org) => (
            <motion.li
              key={org.alt}
              variants={item}
              className="h-full rounded-2xl p-[30px] sm:px-[30px] sm:py-8"
              style={
                org.destaque
                  ? { background: monvattiGlow, border: '0.5px solid rgba(49,69,255,0.30)' }
                  : { background: '#0A0B10', border: '0.5px solid #1c2029' }
              }
            >
              {/* Rótulo pill: azul claro (Monvatti) ou neutro (Tray) */}
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em]"
                style={
                  org.destaque
                    ? {
                        color: '#8FA0FF',
                        backgroundColor: 'rgba(49,69,255,0.12)',
                        border: '1px solid rgba(49,69,255,0.30)',
                      }
                    : {
                        color: '#8A8F98',
                        backgroundColor: '#14161d',
                        border: '1px solid #1c2029',
                      }
                }
              >
                {org.rotulo}
              </span>

              {/* Logo real do organizador, altura controlada por CSS.
                  A Tray é quase quadrada (ratio ~1.7) e a Monvatti é um wordmark
                  largo (ratio ~4.7): para ficarem oticamente simétricas, a Tray
                  recebe um pouco mais de altura. */}
              <img
                src={org.logo}
                alt={org.alt}
                className={org.destaque ? 'mt-6 h-7 w-auto sm:h-8' : 'mt-6 h-9 w-auto sm:h-10'}
                loading="lazy"
              />

              {/* Texto descritivo */}
              <p
                className="mt-5 text-sm leading-[1.7]"
                style={{ color: org.destaque ? '#C6CAD2' : '#A9AEB8' }}
              >
                {org.texto}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  )
}

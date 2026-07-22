import {
  motion,
  useReducedMotion,
  type Variants,
} from 'framer-motion'
import {
  Users,
  LockOpen,
  Award,
  ShoppingCart,
  Target,
  LineChart,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '../ui/Container'
import { benefits } from '../../data/benefits'
import { fadeInUp, staggerContainer } from '../../lib/motion'

/** Mapa nome-do-ícone → componente lucide (os nomes vêm de data/benefits.ts). */
const icons: Record<string, LucideIcon> = {
  Users,
  LockOpen,
  Award,
  ShoppingCart,
  Target,
  LineChart,
}

export function Benefits() {
  const reduced = useReducedMotion() ?? false
  const item: Variants = fadeInUp(reduced)

  return (
    <section
      id="saiba-mais"
      aria-label="Por que participar do evento"
      className="scroll-mt-20 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        {/* Cabeçalho centralizado */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8FA0FF]">
            Por que participar
          </p>
          <h2 className="mt-3 text-[26px] font-medium leading-tight tracking-tight text-paper sm:text-3xl">
            Um dia inteiro voltado ao seu{' '}
            <span className="text-risd">crescimento</span>.
          </h2>
        </div>

        {/* Grade: 1 col (mobile) → 2 (md) → 3 (lg). Anima em stagger ao entrar na viewport. */}
        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon] ?? Users
            return (
              <motion.li key={benefit.titulo} variants={item}>
                <article className="group h-full rounded-[14px] border-[0.5px] border-[#1c2029] bg-[#0C0E14] p-[22px] transition-all duration-200 hover:border-[rgba(49,69,255,0.45)] hover:shadow-[0_0_0_1px_rgba(49,69,255,0.15),0_8px_30px_-12px_rgba(49,69,255,0.4)] motion-safe:hover:-translate-y-1">
                  {/* Ícone em quadrado com fundo risd translúcido */}
                  <span className="flex size-[42px] items-center justify-center rounded-[10px] bg-risd/[0.12]">
                    <Icon
                      className="text-[#5B74FF]"
                      size={21}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="mt-4 text-base font-medium text-paper">
                    {benefit.titulo}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-[1.55] text-secondary">
                    {benefit.descricao}
                  </p>
                </article>
              </motion.li>
            )
          })}
        </motion.ul>
      </Container>
    </section>
  )
}

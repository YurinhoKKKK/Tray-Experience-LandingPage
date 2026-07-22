import { motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  Store,
  Rocket,
  Briefcase,
  ShoppingBag,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '../ui/Container'
import { audience } from '../../data/audience'
import { fadeInUp, staggerContainer } from '../../lib/motion'

/** Mapa nome-do-ícone → componente lucide (os nomes vêm de data/audience.ts). */
const icons: Record<string, LucideIcon> = {
  Store,
  Rocket,
  Briefcase,
  ShoppingBag,
  Sparkles,
  Users,
}

export function Audience() {
  const reduced = useReducedMotion() ?? false
  const item: Variants = fadeInUp(reduced)

  return (
    <section aria-label="Para quem é o evento" className="py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Cabeçalho centralizado */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8FA0FF]">
            Para quem é
          </p>
          <h2 className="mt-3 text-[24px] font-medium leading-tight tracking-tight text-paper sm:text-[29px]">
            Feito para quem quer <span className="text-risd">crescer</span>.
          </h2>
          <p className="mt-4 text-sm text-secondary">
            Se você se identifica com algum destes, o Tray Experience é pra você.
          </p>
        </div>

        {/* Pílulas leves que fluem e quebram naturalmente (flex-wrap), centralizadas. */}
        <motion.ul
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {audience.map((pub) => {
            const Icon = icons[pub.icon] ?? Users
            return (
              <motion.li key={pub.label} variants={item}>
                <span className="group inline-flex items-center gap-2 rounded-full border-[0.5px] border-[#1c2029] bg-[#0C0E14] px-[18px] py-2.5 transition-colors duration-200 hover:border-[rgba(49,69,255,0.45)] hover:shadow-[0_0_0_1px_rgba(49,69,255,0.12)]">
                  <Icon
                    className="text-[#5B74FF]"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-paper">{pub.label}</span>
                </span>
              </motion.li>
            )
          })}
        </motion.ul>
      </Container>
    </section>
  )
}

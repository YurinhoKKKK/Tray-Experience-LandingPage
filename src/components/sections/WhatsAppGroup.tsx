import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Check } from 'lucide-react'
import { Container } from '../ui/Container'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { groupPerks } from '../../data/groupPerks'
import { fadeInUp, staggerContainer } from '../../lib/motion'

export function WhatsAppGroup() {
  const reduced = useReducedMotion() ?? false
  const item: Variants = fadeInUp(reduced)

  return (
    <section
      aria-label="Grupo oficial do WhatsApp"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Glow radial VERDE bem sutil (diferencia do azul da marca) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(37,211,102,0.08) 0%, rgba(37,211,102,0) 70%)',
        }}
      />

      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-[720px] text-center"
        >
          <motion.p
            variants={item}
            className="text-xs font-medium uppercase tracking-[0.16em] text-[#4ade80]"
          >
            Grupo oficial
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-3 text-[24px] font-medium leading-tight tracking-tight text-paper sm:text-[29px]"
          >
            Tudo acontece primeiro no{' '}
            <span className="text-whatsapp">grupo</span>.
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-[620px] text-sm leading-[1.7] text-secondary"
          >
            É no grupo oficial que você recebe tudo em primeira mão: cronograma,
            avisos, novidades, mudanças, lembretes e materiais. Entrar agora é a
            forma de não perder nada e garantir sua presença.
          </motion.p>

          {/* Chips leves do que sai no grupo, com check verde */}
          <motion.ul
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-2.5"
          >
            {groupPerks.map((perk) => (
              <li
                key={perk}
                className="inline-flex items-center gap-1.5 rounded-full border-[0.5px] border-[rgba(37,211,102,0.25)] bg-[rgba(37,211,102,0.06)] px-3.5 py-1.5 text-[13px] text-paper"
              >
                <Check className="text-whatsapp" size={14} strokeWidth={2.5} aria-hidden="true" />
                {perk}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mt-9 flex justify-center">
            <WhatsAppButton>Entrar no grupo oficial</WhatsAppButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

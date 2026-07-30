import { Fragment } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

/**
 * Headline (h2) revelada palavra por palavra ao entrar na viewport.
 *
 * Cada palavra sobe suavemente (translateY + opacity) em stagger. O texto
 * permanece real e selecionável (spans com o conteúdo), então leitores de tela
 * leem a h2 normalmente. Sob `prefers-reduced-motion` as palavras entram sem
 * deslocamento (aparecem direto).
 *
 * O conteúdo é passado como `segments` — cada segmento é um trecho de texto com
 * uma `className` opcional (ex.: destaque em `text-risd`/`text-whatsapp`). Isso
 * cobre tanto títulos estáticos quanto os que vêm de src/data.
 */

const EASE = [0.22, 1, 0.36, 1] as const

export interface HeadingSegment {
  text: string
  className?: string
}

interface HeadingWord {
  text: string
  className?: string
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const wordVariants = (reduced: boolean): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
})

/** Achata segmentos em palavras, preservando a className de cada trecho. */
function toWords(segments: HeadingSegment[]): HeadingWord[] {
  const words: HeadingWord[] = []
  for (const seg of segments) {
    for (const part of seg.text.split(/\s+/).filter(Boolean)) {
      words.push({ text: part, className: seg.className })
    }
  }
  return words
}

/** Pontuação isolada (".", ",") não leva espaço antes, cola na palavra anterior. */
const isPunct = (s: string) => /^[.,;:!?]/.test(s)

interface RevealHeadingProps {
  segments: HeadingSegment[]
  className?: string
}

export function RevealHeading({ segments, className = '' }: RevealHeadingProps) {
  const reduced = useReducedMotion() ?? false
  const word = wordVariants(reduced)
  const words = toWords(segments)

  return (
    <motion.h2
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          {i > 0 && !isPunct(w.text) ? ' ' : null}
          <motion.span
            variants={word}
            className={`inline-block ${w.className ?? ''}`}
          >
            {w.text}
          </motion.span>
        </Fragment>
      ))}
    </motion.h2>
  )
}

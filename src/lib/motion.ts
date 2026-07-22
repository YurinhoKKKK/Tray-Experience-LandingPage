import type { Variants } from 'framer-motion'

/**
 * Variants reutilizáveis do framer-motion.
 *
 * O deslocamento (y / scale) é aplicado só quando o usuário NÃO pede menos
 * movimento. Para respeitar `prefers-reduced-motion`, o hook do framer-motion
 * `useReducedMotion` deve ser lido no componente e passado para as factories
 * abaixo — assim o estado inicial já entra sem deslocamento.
 */

const EASE = [0.22, 1, 0.36, 1] as const

/** Sobe suavemente enquanto surge. Sem deslocamento quando reduzido. */
export const fadeInUp = (reduced = false): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
})

/** Apenas fade — seguro em qualquer preferência de movimento. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
}

/** Cresce levemente enquanto surge. Sem escala quando reduzido. */
export const scaleIn = (reduced = false): Variants => ({
  hidden: { opacity: 0, scale: reduced ? 1 : 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
})

/** Container que orquestra os filhos em sequência (stagger). */
export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
})

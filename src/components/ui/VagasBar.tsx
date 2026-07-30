import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Users } from 'lucide-react'
import { event } from '../../data/event'

/** Curva ease-out (mesma sensação do EASE dos variants em lib/motion). */
const EASE = [0.22, 1, 0.36, 1] as const

/** Garante um inteiro dentro de 0..100 (clamp de segurança). */
function clampPct(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)))
}

interface VagasBarProps {
  className?: string
}

/**
 * Barra de progresso de vagas do Hero (reutilizável).
 *
 * Lê a porcentagem de `event.vagasOcupadasPct` (único lugar para editar) e faz
 * clamp para 0..100. Anima o preenchimento de 0% até o valor no load (~1s,
 * ease-out) e conta o número junto. Sob `prefers-reduced-motion`, mostra o
 * valor final estático. Acessível via role="progressbar".
 */
export function VagasBar({ className = '' }: VagasBarProps) {
  const reduced = useReducedMotion() ?? false
  const pct = clampPct(event.vagasOcupadasPct)

  // Contagem do número acompanhando a barra (final imediato se reduzido).
  const [display, setDisplay] = useState(reduced ? pct : 0)

  useEffect(() => {
    if (reduced) {
      setDisplay(pct)
      return
    }
    let raf = 0
    const duration = 1000
    const start = performance.now()
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      setDisplay(Math.round(easeOutCubic(t) * pct))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [pct, reduced])

  return (
    <div
      className={`w-full max-w-[420px] ${className}`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Vagas preenchidas: ${pct} por cento`}
    >
      {/* Linha superior: label à esquerda, porcentagem à direita */}
      <div className="flex items-center justify-between">
        <span
          className="flex items-center gap-1.5 text-[13px]"
          style={{ color: '#C6CAD2' }}
        >
          <Users
            size={15}
            strokeWidth={2}
            style={{ color: '#5B74FF' }}
            aria-hidden="true"
          />
          Vagas preenchidas
        </span>
        <span className="text-[14px] tabular-nums">
          <span className="font-semibold text-paper">{display}</span>
          <span className="text-muted">%</span>
        </span>
      </div>

      {/* Trilho */}
      <div
        className="mt-2.5 h-[9px] w-full overflow-hidden rounded-full"
        style={{ backgroundColor: '#14161d', border: '0.5px solid #1c2029' }}
      >
        {/* Preenchimento */}
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #001AD8 0%, #3145FF 100%)',
            boxShadow: '0 0 12px rgba(49,69,255,0.5)',
          }}
          initial={{ width: reduced ? `${pct}%` : '0%' }}
          animate={{ width: `${pct}%` }}
          transition={reduced ? { duration: 0 } : { duration: 1, ease: EASE }}
        />
      </div>
    </div>
  )
}

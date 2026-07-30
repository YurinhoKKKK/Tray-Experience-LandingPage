import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'
import { event } from '../../data/event'

/**
 * Contagem regressiva reutilizável até `event.dataISO` (única fonte da data).
 *
 * - `variant="compact"`: linha discreta (usada no Hero).
 * - `variant="full"`: 4 blocos Dias/Horas/Min/Seg (usado no CTA final).
 *
 * Atualiza a cada 1s via setInterval (limpo no unmount). Se a data já passou,
 * mostra um estado neutro sem quebrar. `aria-live="off"` evita spam de leitor
 * de tela a cada segundo; um `aria-label` geral descreve o elemento.
 */

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

/** Meia-noite local do dia do evento a partir de "YYYY-MM-DD" (sem viés de fuso). */
function getTargetTime(): number {
  const [y, m, d] = event.dataISO.split('-').map(Number)
  return new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1).getTime()
}

function computeTimeLeft(target: number): TimeLeft {
  const diff = target - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    done: false,
  }
}

/** Dois dígitos (05, 42). Dias podem passar de 99 e o padStart apenas garante 2+. */
const pad = (n: number) => String(n).padStart(2, '0')

interface CountdownProps {
  variant: 'compact' | 'full'
  className?: string
}

export function Countdown({ variant, className = '' }: CountdownProps) {
  const [target] = useState(getTargetTime)
  const [time, setTime] = useState(() => computeTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTime(computeTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-2 text-[13px] text-muted ${className}`}
        aria-live="off"
        aria-label="Contagem regressiva para o evento"
      >
        <Clock size={14} className="text-risd" aria-hidden="true" />
        {time.done ? (
          <span className="font-medium text-secondary">O evento começou!</span>
        ) : (
          <span className="tabular-nums">
            Faltam{' '}
            <span className="font-medium text-secondary">
              {time.days}d {pad(time.hours)}h {pad(time.minutes)}m{' '}
              {pad(time.seconds)}s
            </span>
          </span>
        )}
      </div>
    )
  }

  // variant === 'full'
  const blocks = [
    { value: time.days, label: 'Dias' },
    { value: time.hours, label: 'Horas' },
    { value: time.minutes, label: 'Min' },
    { value: time.seconds, label: 'Seg' },
  ]

  if (time.done) {
    return (
      <p
        className={`text-base font-medium text-paper ${className}`}
        aria-label="O evento começou"
      >
        O evento começou!
      </p>
    )
  }

  return (
    <div
      className={`flex justify-center gap-2 sm:gap-3 ${className}`}
      aria-live="off"
      aria-label="Contagem regressiva para o evento"
    >
      {blocks.map((block, i) => {
        const isLast = i === blocks.length - 1
        return (
          <div
            key={block.label}
            className="flex min-w-[62px] flex-col items-center rounded-[14px] px-2.5 py-3 sm:min-w-[80px] sm:px-4 sm:py-4"
            style={{
              backgroundColor: '#0C0E14',
              border: isLast
                ? '0.5px solid rgba(49,69,255,0.5)'
                : '0.5px solid #1c2029',
              boxShadow: isLast ? '0 0 20px rgba(49,69,255,0.22)' : undefined,
            }}
          >
            <span className="text-[28px] font-semibold leading-none tabular-nums text-paper sm:text-[34px]">
              {pad(block.value)}
            </span>
            <span className="mt-2 text-[10px] uppercase tracking-[0.12em] text-muted">
              {block.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

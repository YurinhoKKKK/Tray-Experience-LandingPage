import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  CalendarDays,
  MapPin,
  Navigation,
  Building2,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '../ui/Container'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { event } from '../../data/event'
import { fadeInUp, staggerContainer } from '../../lib/motion'

/** Itens de informação, com valores puxados de event.ts (nada hardcoded). */
const infoItems: { icon: LucideIcon; label: string; valor: string }[] = [
  { icon: CalendarDays, label: 'Data', valor: event.data },
  { icon: MapPin, label: 'Local', valor: event.local },
  { icon: Navigation, label: 'Endereço', valor: event.endereco },
  { icon: Building2, label: 'Cidade', valor: event.cidade },
]

export function EventInfo() {
  const reduced = useReducedMotion() ?? false
  const item: Variants = fadeInUp(reduced)

  // Mapa: só monta o iframe quando o wrapper entra na viewport (economiza First Load).
  const mapRef = useRef<HTMLDivElement>(null)
  const [showMap, setShowMap] = useState(false)

  useEffect(() => {
    const node = mapRef.current
    if (!node || showMap) return

    // Fallback: sem IntersectionObserver, carrega direto.
    if (typeof IntersectionObserver === 'undefined') {
      setShowMap(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShowMap(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [showMap])

  return (
    <section aria-label="Informações do evento" className="py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Cabeçalho centralizado */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8FA0FF]">
            Onde e quando
          </p>
          <h2 className="mt-3 text-[24px] font-medium leading-tight tracking-tight text-paper sm:text-[29px]">
            Informações do <span className="text-risd">evento</span>.
          </h2>
        </div>

        {/* Desktop: info à esquerda, mapa à direita. Mobile: empilhado. */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Coluna de informações */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ul className="space-y-5">
              {infoItems.map(({ icon: Icon, label, valor }) => (
                <motion.li key={label} variants={item} className="flex items-center gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-risd/[0.12]">
                    <Icon
                      className="text-[#5B74FF]"
                      size={19}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="text-xs text-muted">{label}</p>
                    <p className="mt-0.5 font-medium text-paper">{valor}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={item} className="mt-8">
              <WhatsAppButton>Entrar no grupo oficial</WhatsAppButton>
            </motion.div>
          </motion.div>

          {/* Coluna do mapa (lazy) */}
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              ref={mapRef}
              className="h-[280px] w-full overflow-hidden rounded-[12px] border-[0.5px] border-[#1c2029] bg-[#0C0E14] lg:h-[420px]"
            >
              {showMap ? (
                <iframe
                  src={event.mapEmbedUrl}
                  title="Mapa - Sombrio Tênis Clube"
                  className="h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                // Placeholder leve enquanto o mapa não entra na viewport.
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
                  <MapPin className="text-[#5B74FF]" size={26} aria-hidden="true" />
                  <p className="font-medium text-paper">{event.local}</p>
                  <p className="text-xs text-muted">{event.endereco}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

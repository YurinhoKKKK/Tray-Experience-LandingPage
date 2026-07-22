import { Container } from '../ui/Container'
import { event } from '../../data/event'

/**
 * Footer STUB — versão completa (parceria, links, contato, mapa) chega na Fase 2.
 * Por ora, uma faixa mínima com a logo Monvatti e a linha de parceria com a Tray.
 */
export function Footer() {
  return (
    <footer className="border-t border-gunmetal/60 py-10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img
            src="/images/monvatti-logo.webp"
            alt="Monvatti"
            className="h-6 w-auto"
            width={120}
            height={24}
            loading="lazy"
          />
          <span className="h-5 w-px bg-gunmetal" aria-hidden="true" />
          <span className="text-sm text-muted">em parceria com</span>
          <img
            src="/images/tray-logo-white.webp"
            alt="Tray"
            className="h-4 w-auto"
            width={64}
            height={16}
            loading="lazy"
          />
        </div>

        <p className="text-xs text-faint">
          © {new Date().getFullYear()} {event.nome} · {event.cidade}
        </p>
      </Container>
    </footer>
  )
}

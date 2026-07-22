import { Container } from '../ui/Container'
import { WhatsAppButton } from '../ui/WhatsAppButton'

/**
 * Navbar fixa e translúcida (glass) com a logo Monvatti à esquerda e o CTA
 * do WhatsApp à direita. A altura da logo é controlada por CSS (não há versão
 * "nav" separada do arquivo).
 */
export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gunmetal/60 bg-ink/70 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" aria-label="Monvatti — início" className="flex items-center">
          <img
            src="/images/monvatti-logo.webp"
            alt="Monvatti"
            className="h-6 w-auto sm:h-7"
            width={140}
            height={28}
          />
        </a>

        <WhatsAppButton className="hidden px-5 py-2.5 sm:inline-flex">
          Entrar no grupo
        </WhatsAppButton>
      </Container>
    </header>
  )
}

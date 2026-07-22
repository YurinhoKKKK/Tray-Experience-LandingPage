import { MessageCircle } from 'lucide-react'
import { event } from '../../data/event'

interface WhatsAppButtonProps {
  /** Texto do botão. */
  children?: string
  className?: string
}

/**
 * CTA principal da página — sempre leva ao grupo do WhatsApp (event.whatsappUrl).
 *
 * Verde WhatsApp com anel pulsante suave (CSS keyframe `pulse-ring`), abre em
 * nova aba com rel de segurança e traz aria-label descritivo.
 */
export function WhatsAppButton({
  children = 'Entrar no grupo oficial',
  className = '',
}: WhatsAppButtonProps) {
  return (
    <a
      href={event.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar no grupo oficial do evento Tray Experience no WhatsApp (abre em nova aba)"
      className={`animate-pulse-ring inline-flex items-center justify-center gap-2 rounded-[10px] bg-whatsapp px-6 py-3 text-sm font-medium text-whatsapp-ink transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${className}`}
    >
      <MessageCircle className="size-5" strokeWidth={2.25} aria-hidden="true" />
      {children}
    </a>
  )
}

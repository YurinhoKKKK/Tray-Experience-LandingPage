import { MessageCircle } from 'lucide-react'
import { event } from '../../data/event'

interface WhatsAppButtonProps {
  /** Texto do botão. */
  children?: string
  className?: string
  /** Tamanho: `md` (padrão) ou `lg` (CTA final, maior). */
  size?: 'md' | 'lg'
}

/** Dimensões por tamanho (padding, texto e ícone). */
const sizes = {
  md: { box: 'px-6 py-3 text-sm', icon: 'size-5' },
  lg: { box: 'px-8 py-4 text-base', icon: 'size-6' },
} as const

/**
 * CTA principal da página — sempre leva ao grupo do WhatsApp (event.whatsappUrl).
 *
 * Verde WhatsApp com anel pulsante suave (CSS keyframe `pulse-ring`), abre em
 * nova aba com rel de segurança e traz aria-label descritivo.
 */
export function WhatsAppButton({
  children = 'Entrar no grupo oficial',
  className = '',
  size = 'md',
}: WhatsAppButtonProps) {
  const s = sizes[size]
  return (
    <a
      href={event.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar no grupo oficial do evento Tray Experience no WhatsApp (abre em nova aba)"
      className={`animate-pulse-ring inline-flex items-center justify-center gap-2 rounded-[10px] bg-whatsapp font-medium text-whatsapp-ink transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${s.box} ${className}`}
    >
      <MessageCircle className={s.icon} strokeWidth={2.25} aria-hidden="true" />
      {children}
    </a>
  )
}

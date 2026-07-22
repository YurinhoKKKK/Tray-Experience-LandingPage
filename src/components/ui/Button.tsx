import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  className?: string
}

/** Estilos por variante, compartilhados entre <a> e <button>. */
const base =
  'inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-risd focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  // Azul da marca — usado para ações não-WhatsApp, se necessário.
  primary: 'bg-risd text-paper hover:bg-chrysler',
  // Outline discreto — borda gunmetal, texto platinum.
  secondary:
    'border border-gunmetal text-platinum hover:border-secondary hover:text-paper',
}

type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'a' }
type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as: 'button' }

/**
 * Botão polimórfico: renderiza <a> por padrão (links/CTAs) ou <button>
 * quando `as="button"` (ex.: scroll suave interno).
 */
export function Button(props: AnchorProps | NativeButtonProps) {
  const { children, variant = 'secondary', className = '' } = props
  const classes = `${base} ${variants[variant]} ${className}`

  if (props.as === 'button') {
    const { children: _c, variant: _v, className: _cn, as: _a, ...rest } = props
    return (
      <button className={classes} {...rest}>
        {children}
      </button>
    )
  }

  const { children: _c, variant: _v, className: _cn, as: _a, ...rest } = props
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  )
}

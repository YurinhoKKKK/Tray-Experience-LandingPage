import type { ElementType, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  /** Elemento HTML raiz (section, div, footer...). Default: div. */
  as?: ElementType
}

/**
 * Wrapper de largura máxima centralizado, com padding horizontal responsivo.
 * Mantém o conteúdo alinhado em todas as seções.
 */
export function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  )
}

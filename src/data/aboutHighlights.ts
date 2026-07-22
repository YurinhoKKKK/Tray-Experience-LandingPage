/**
 * Destaques da seção "Sobre o Evento" — faixa informativa de 4 cards.
 * `icon` é o nome de um ícone do lucide-react (resolvido no componente).
 */
export interface AboutHighlight {
  icon: string
  titulo: string
  apoio: string
}

export const aboutHighlights: AboutHighlight[] = [
  {
    icon: 'MapPin',
    titulo: 'Presencial e prático',
    apoio: 'Um dia, cara a cara',
  },
  {
    icon: 'Users',
    titulo: 'Networking real',
    apoio: 'Conexões que abrem portas',
  },
  {
    icon: 'Eye',
    titulo: 'Visão de mercado',
    apoio: 'O que move o ponteiro',
  },
  {
    icon: 'Zap',
    titulo: 'Conteúdo aplicável',
    apoio: 'Pra usar no dia seguinte',
  },
]

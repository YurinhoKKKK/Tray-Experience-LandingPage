/**
 * Benefícios de participar do evento — conteúdo da seção "Por que participar".
 * `icon` é o nome de um ícone do lucide-react (resolvido no componente).
 */
export interface Benefit {
  icon: string
  titulo: string
  descricao: string
}

export const benefits: Benefit[] = [
  {
    icon: 'Users',
    titulo: 'Networking',
    descricao:
      'Conecte-se com lojistas, gestores e especialistas do e-commerce da região.',
  },
  {
    icon: 'LockOpen',
    titulo: 'Conteúdo exclusivo',
    descricao:
      'Insights e estratégias que não circulam por aí, pensados para quem vende online.',
  },
  {
    icon: 'Award',
    titulo: 'Especialistas',
    descricao:
      'Aprenda com quem vive o mercado e já ajudou centenas de operações a escalar.',
  },
  {
    icon: 'ShoppingCart',
    titulo: 'Novidades da Tray',
    descricao:
      'Conheça em primeira mão os recursos e lançamentos da plataforma.',
  },
  {
    icon: 'Target',
    titulo: 'Estratégias práticas',
    descricao:
      'Saia com ações aplicáveis no dia seguinte, não com teoria solta.',
  },
  {
    icon: 'LineChart',
    titulo: 'Consultoria especializada',
    descricao:
      'O olhar da Monvatti sobre o que realmente move o ponteiro na sua loja.',
  },
]

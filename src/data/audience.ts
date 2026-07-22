/**
 * Públicos do evento — seção "Para quem é" (renderizado como pílulas leves).
 * `icon` é o nome de um ícone do lucide-react (resolvido no componente).
 */
export interface Audience {
  icon: string
  label: string
}

export const audience: Audience[] = [
  { icon: 'Store', label: 'Lojistas' },
  { icon: 'Rocket', label: 'Empreendedores' },
  { icon: 'Briefcase', label: 'Gestores' },
  { icon: 'ShoppingBag', label: 'Quem vende online' },
  { icon: 'Sparkles', label: 'Quem deseja abrir um e-commerce' },
  { icon: 'Users', label: 'Consultores' },
]

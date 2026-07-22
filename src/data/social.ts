/**
 * Redes sociais das marcas — usadas no footer.
 * `icon` é o nome de um ícone do lucide-react (resolvido no componente).
 */
export interface Social {
  icon: string
  label: string
  href: string
  ariaLabel: string
}

export const socials: Social[] = [
  {
    icon: 'Instagram',
    label: 'Instagram Monvatti',
    href: 'https://www.instagram.com/monvatti/',
    ariaLabel: 'Abrir o Instagram da Monvatti em nova aba',
  },
  {
    icon: 'Instagram',
    label: 'Instagram Tray',
    href: 'https://www.instagram.com/trayecommerce/',
    ariaLabel: 'Abrir o Instagram da Tray em nova aba',
  },
]

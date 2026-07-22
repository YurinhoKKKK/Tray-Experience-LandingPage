/**
 * Organizadores do evento — conteúdo da seção "Quem faz acontecer".
 * `destaque` marca a Monvatti (protagonista, card com glow azul); a Tray fica neutra.
 */
export interface Organizer {
  logo: string
  alt: string
  rotulo: string
  texto: string
  destaque: boolean
}

export const organizers: Organizer[] = [
  {
    logo: '/images/monvatti-logo.webp',
    alt: 'Monvatti',
    rotulo: 'Realização',
    texto:
      'Consultoria especializada em marketplaces. A Monvatti ajuda empresas a vender e crescer nos principais canais do país, como Mercado Livre, Amazon e Shopee, com estratégia, performance e método. À frente da realização do Tray Experience, traz pra Sombrio a visão de quem vive o mercado por dentro.',
    destaque: true,
  },
  {
    logo: '/images/tray-logo-white.webp',
    alt: 'Tray',
    rotulo: 'Ao lado da Monvatti',
    texto:
      'Uma das maiores plataformas de e-commerce do Brasil. A Tray oferece a estrutura tecnológica que sustenta lojas de todos os tamanhos, e se une ao Tray Experience para somar tecnologia e conhecimento em um só dia.',
    destaque: false,
  },
]

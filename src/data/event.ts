/**
 * Fonte ÚNICA de verdade dos dados do evento.
 *
 * Regra de ouro do projeto: TODO CTA da página aponta para `event.whatsappUrl`,
 * e nenhum componente deve hardcodar dados do evento — sempre importar daqui.
 */
export const event = {
  nome: 'Tray Experience',
  linha: 'Varejo',
  data: '15 de agosto',
  dataISO: '2026-08-15',
  cidade: 'Sombrio - SC',
  local: 'Sombrio Tênis Clube',
  endereco: 'Av. Nereu Ramos, 1375, Centro, Sombrio - SC',
  whatsappUrl: 'https://chat.whatsapp.com/GdKmoiKq8L1JqY0jEZ0Db1',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1157.153755014343!2d-49.634512301271805!3d-29.111598854948802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95223c401b408d35%3A0xcf1a5e4bd9148f17!2sSombrio%20T%C3%AAnis%20Clube!5e0!3m2!1spt-BR!2sbr!4v1784730819149!5m2!1spt-BR!2sbr',
  indicadores: [
    'Evento gratuito',
    'Vagas limitadas',
    '15 de agosto',
    'Sombrio - SC',
  ],
} as const

export type Event = typeof event

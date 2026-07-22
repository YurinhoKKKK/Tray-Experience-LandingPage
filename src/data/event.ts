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
  endereco: 'Av. Nereu Ramos, 1375 — Centro, Sombrio - SC',
  whatsappUrl: 'https://chat.whatsapp.com/GdKmoiKq8L1JqY0jEZ0Db1',
  // Placeholder — o iframe do mapa chega na Fase 2.
  mapEmbedUrl: '',
  indicadores: [
    'Evento gratuito',
    'Vagas limitadas',
    '15 de agosto',
    'Sombrio - SC',
  ],
} as const

export type Event = typeof event

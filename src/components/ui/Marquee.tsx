import { event } from '../../data/event'

/**
 * Faixa de texto em movimento (marquee) usada como divisor entre o Hero e a
 * próxima seção. Loop horizontal infinito via CSS puro (mais leve que JS).
 *
 * Loop SEM emenda: o trilho tem DUAS metades idênticas e desliza de 0 a -50%.
 * Como -50% equivale exatamente à largura de uma metade, o ponto de retorno é
 * visualmente idêntico ao início. Para isso funcionar em telas largas, cada
 * metade precisa ser MAIS larga que a viewport — por isso a base de itens é
 * repetida (REPEAT) até uma metade cobrir com folga qualquer monitor comum.
 * O espaçamento fica DENTRO de cada item (padding), nunca como gap no trilho,
 * para as duas metades terem largura idêntica.
 *
 * A faixa é decorativa (a mesma informação já aparece nos indicadores do Hero),
 * então o conjunto é `aria-hidden`. Sob `prefers-reduced-motion` a animação
 * para (regra em styles/index.css).
 */

// Data e cidade vêm de src/data/event.ts; o restante é fixo desta faixa.
const baseItems = [
  event.nome,
  event.data,
  event.cidade.replace(' - ', ' · '),
  'Vagas limitadas',
  'Evento gratuito',
]

// Termos destacados em azul (ritmo visual). Não exagerar: 1 item.
const highlighted = new Set(['Vagas limitadas'])

// Repete a base para que UMA metade do trilho seja mais larga que a tela,
// evitando qualquer vazio no ponto de retorno mesmo em desktops largos.
const REPEAT = 3
const groupItems = Array.from({ length: REPEAT }, () => baseItems).flat()

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex flex-shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {groupItems.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span
            className="px-6 text-[15px] font-bold uppercase sm:px-8 sm:text-[19px]"
            style={{
              color: highlighted.has(item) ? '#3145FF' : '#F5F5F4',
              letterSpacing: '1px',
            }}
          >
            {item}
          </span>
          <span
            aria-hidden="true"
            className="text-[15px] sm:text-[18px]"
            style={{ color: '#3145FF' }}
          >
            ◆
          </span>
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y"
      style={{
        borderColor: '#1a1d24',
        background:
          'linear-gradient(90deg, rgba(49,69,255,0.05) 0%, rgba(49,69,255,0.10) 50%, rgba(49,69,255,0.05) 100%)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        maskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max py-[18px] sm:py-5">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  )
}

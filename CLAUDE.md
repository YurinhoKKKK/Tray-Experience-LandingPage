# Tray Experience — Landing Page

Landing page de **evento presencial** (Monvatti × Tray). Objetivo **ÚNICO**:
converter visitantes para o **grupo do WhatsApp** (`event.whatsappUrl`).
A **Monvatti é a protagonista**; a **Tray é parceira/apoiadora**.
Visual **dark premium**, azul como destaque (inspiração Linear/Vercel/Stripe/Apple).

## Regra de ouro

- **TODO CTA aponta para o WhatsApp** (`event.whatsappUrl`).
- **Dados do evento SEMPRE vêm de `src/data/event.ts`** — nunca hardcode data, local,
  link ou textos de indicadores dentro dos componentes.

## Stack e comandos

- **Vite + React + TypeScript**
- **TailwindCSS v4** (config CSS-first via `@theme` em `src/styles/index.css`; plugin `@tailwindcss/vite`)
- **framer-motion** (animações) · **lucide-react** (ícones)
- **@fontsource-variable/inter** (fonte self-hosted — sem Google Fonts via rede)

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # type-check + build de produção
npm run preview  # servir o build localmente
```

## Tokens de cor da marca (paleta oficial Monvatti)

| Token          | Hex       | Uso                                          |
| -------------- | --------- | -------------------------------------------- |
| `chrysler`     | `#001AD8` | azul escuro — hovers, fundos profundos       |
| `risd`         | `#3145FF` | azul vibrante — **DESTAQUE**, glow, acentos  |
| `gunmetal`     | `#2B333B` | superfícies / cards / separadores            |
| `ink`          | `#050608` | fundo da página — quase preto azulado        |
| `platinum`     | `#DFDCDB` | bordas claras                                |
| `paper`        | `#F5F5F4` | texto principal claro sobre fundo escuro     |
| `secondary`    | `#A9AEB8` | texto auxiliar                               |
| `muted`        | `#8A8F98` | texto auxiliar mais apagado                  |
| `faint`        | `#6B7280` | texto muito discreto                         |
| `whatsapp`     | `#25D366` | **CTA principal**                            |
| `whatsapp-ink` | `#04331A` | texto sobre o verde                          |

**Dark por padrão**: `body` usa fundo `ink` e texto `paper`. **Azul `risd` = destaque.**
Cores são utilitários Tailwind nomeados: `bg-ink`, `text-paper`, `text-risd`, `border-gunmetal`, etc.

## Assets — `public/images/` (todos `.webp`)

| Arquivo                     | Uso                                                        |
| --------------------------- | ---------------------------------------------------------- |
| `monvatti-logo.webp`        | logo completa branca — navbar e footer (altura via CSS)    |
| `monvatti-icon.webp`        | ícone azul — favicon (base para `.ico`/`.png` se preciso)  |
| `monvatti-icon-white.webp`  | ícone branco — uso decorativo opcional                     |
| `tray-logo-white.webp`      | logo Tray branca — linha de parceria (hero) e footer       |
| `tray-experience-logo.webp` | logo oficial do evento (OG/social e usos do evento)        |

## Convenções

- Componentes por seção em `src/components/sections/`; layout em `layout/`; primitivos em `ui/`.
- Variants de animação compartilhados em `src/lib/motion.ts`.
- **Respeitar `prefers-reduced-motion`** (variants e keyframe `pulse-ring` desativam movimento).
- `alt` descritivo em **toda** imagem; `aria-label` em CTAs/ícones interativos.
- **Mobile-first**; impecável em mobile/tablet/desktop.

## Metas de performance

- **Lighthouse > 95** em Performance / SEO / Acessibilidade / Best Practices.
- Imagens em **WebP** + `loading="lazy"` fora do viewport inicial.
- Iframe do mapa (Fase 2) com `loading="lazy"`.

## Workflow

- **UMA mudança testada por vez**; commitar por etapa.

## Roadmap

- **Fase 1** (feito): fundação + Hero.
- **Fase 2**: Benefícios → Sobre o Evento → Organizadores → Para Quem É →
  Informações + Mapa → Grupo WhatsApp → CTA Final → Footer completo.
- **Fase 3**: otimização Lighthouse + deploy na Vercel.

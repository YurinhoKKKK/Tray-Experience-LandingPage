import { motion } from 'framer-motion'
import { Instagram, type LucideIcon } from 'lucide-react'
import { Container } from '../ui/Container'
import { WhatsAppButton } from '../ui/WhatsAppButton'
import { event } from '../../data/event'
import { socials } from '../../data/social'
import { fadeIn } from '../../lib/motion'

/** Mapa nome-do-ícone → componente lucide (os nomes vêm de data/social.ts). */
const icons: Record<string, LucideIcon> = { Instagram }

export function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="border-t border-gunmetal/60 py-14"
    >
      <Container>
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
          {/* Bloco da marca */}
          <div className="max-w-sm">
            <img
              src="/images/monvatti-logo.webp"
              alt="Monvatti"
              className="mx-auto h-7 w-auto md:mx-0"
              width={140}
              height={28}
              loading="lazy"
            />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Consultoria especializada em marketplaces. Realização do Tray
              Experience.
            </p>

            {/* Linha de parceria com a Tray */}
            <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
              <span className="text-xs text-muted">em parceria com</span>
              <img
                src="/images/tray-logo-white.webp"
                alt="Tray"
                className="h-5 w-auto"
                width={44}
                height={20}
                loading="lazy"
              />
            </div>
          </div>

          {/* Bloco de ações: redes + CTA + resumo do evento */}
          <div className="flex flex-col items-center gap-6 md:items-end">
            {/* Redes sociais */}
            <ul className="flex flex-col items-center gap-3 md:items-end">
              {socials.map((social) => {
                const Icon = icons[social.icon] ?? Instagram
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="inline-flex items-center gap-2 text-sm text-secondary transition-colors duration-200 hover:text-paper"
                    >
                      <Icon className="size-[18px]" strokeWidth={2} aria-hidden="true" />
                      {social.label}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* CTA secundário para o grupo */}
            <WhatsAppButton>Entrar no grupo oficial</WhatsAppButton>

            {/* Resumo discreto do evento */}
            <p className="text-xs text-faint">
              {event.data} · {event.cidade}
            </p>
          </div>
        </div>

        {/* Hairline + copyright */}
        <div className="mt-12 border-t border-gunmetal/40 pt-6">
          <p className="text-center text-xs text-faint">
            © {new Date().getFullYear()} {event.nome} · {event.cidade} ·
            Realização Monvatti
          </p>
        </div>
      </Container>
    </motion.footer>
  )
}

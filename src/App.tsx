import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Benefits } from './components/sections/Benefits'
import { About } from './components/sections/About'
import { Organizers } from './components/sections/Organizers'
import { Audience } from './components/sections/Audience'
import { EventInfo } from './components/sections/EventInfo'
import { WhatsAppGroup } from './components/sections/WhatsAppGroup'
import { FinalCta } from './components/sections/FinalCta'

/**
 * Fase 1: fundação + Hero.
 * As demais seções (Benefícios, Sobre, Organizadores, etc.) entram na Fase 2,
 * posicionadas entre <Hero /> e <Footer />.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Primeira seção da Fase 2 — alvo do scroll do "Saiba mais" do Hero. */}
        <Benefits />
        <About />
        <Organizers />
        <Audience />
        <EventInfo />
        <WhatsAppGroup />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

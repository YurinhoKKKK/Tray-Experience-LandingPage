import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'

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
        {/* Âncora reservada para a primeira seção da Fase 2 (scroll do "Saiba mais"). */}
        <div id="saiba-mais" />
      </main>
      <Footer />
    </>
  )
}

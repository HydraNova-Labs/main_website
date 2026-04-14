import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Solution } from './components/Solution'
import { Process } from './components/Process'
import { Technology } from './components/Technology'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CookieConsent } from './components/CookieConsent'

function App() {
  const { dark, toggle } = useTheme()

  return (
    <>
      <Navbar dark={dark} toggle={toggle} />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <Technology />
        <Team />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

export default App

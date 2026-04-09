import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Solution } from './components/Solution'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { Technology } from './components/Technology'
import { Traction } from './components/Traction'
import { Impact } from './components/Impact'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

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
        <Services />
        <Technology />
        <Traction />
        <Impact />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

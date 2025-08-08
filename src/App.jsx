import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Experience />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

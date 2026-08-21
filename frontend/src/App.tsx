// JohnnyPortfolio/frontend/src/App.tsx

import './App.css'
import { NavBar } from './components'
import { Intro, Projects, About, Contact } from './sections'

function App() {
  return (
    <main>
      <NavBar />
      <Intro />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}

export default App
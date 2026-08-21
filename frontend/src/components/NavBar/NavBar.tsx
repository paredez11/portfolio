// JohnnyPortfolio/frontend/src/components/NavBar/NavBar.tsx

function NavBar() {
  return (
    <nav>
      <a href="/">PAREDEZ</a>

      <div className="navbar__links">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="/assets/Paredez - Resume.pdf">Résumé</a>
      </div>
    </nav>
  )
}

export default NavBar
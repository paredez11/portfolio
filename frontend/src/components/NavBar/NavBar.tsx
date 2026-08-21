import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <a className="navbar__brand" href="#intro" aria-label="Paredez home">
        <img
          className="navbar__wordmark"
          src="images/Paredez2.png"
          alt="Paredez"
        />
      </a>

      <div className="navbar__links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          className="navbar__resume"
          href="assets/Paredez - Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Résumé
        </a>
      </div>
    </nav>
  )
}

export default NavBar
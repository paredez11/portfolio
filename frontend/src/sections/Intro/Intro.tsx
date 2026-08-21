// JohnnyPortfolio/frontend/src/sections/Intro/Intro.tsx

import "./Intro.css";

function Intro() {
  return (
    <section className="intro">
      <div className="intro__content">
        <h1>Johnny Paredez III</h1>
        <p>Software Developer</p>
        <p>I build software that turns uncertainty into confidence.</p>

        <a href="#projects">View My Work</a>
        <a href="/assets/Paredez - Resume.pdf">Résumé</a>
      </div>

      <div className="intro__visual">
        <img src="/images/P.png" alt="" />
      </div>
    </section>
  );
}

export default Intro;

// JohnnyPortfolio/frontend/src/sections/Intro/Intro.tsx

import "./Intro.css";

function Intro() {
  return (
    <section className="intro">
      <div className="intro__content">
        <img
          className="intro__profile"
          src="/images/prof.png"
          alt="Johnny Paredez"
        />
        <h1>Johnny P. III</h1>
        <p>Software Developer</p>
        <p>Software designed to turn uncertainty into confidence.</p>

        <div className="intro__actions">
          <a href="#projects">View My Work</a>
          <a href="/assets/Paredez - Resume.pdf">Résumé</a>
        </div>
      </div>

      <div className="intro__visual">
        <img src="/images/P.png" alt="" />
      </div>
    </section>
  );
}

export default Intro;

// JohnnyPortfolio/frontend/src/sections/About/About.tsx

import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__copy">
          <h2>About</h2>

          <p>
            I’m a software developer who builds practical software for real
            people. I’m drawn to problems where the path isn’t obvious, where
            thoughtful software can make work simpler, decisions clearer, and
            the next step easier to see.
          </p>

          <p>
            I value clarity over cleverness, maintainability over unnecessary
            complexity, and service over spectacle. I care about the person on
            the other side of the screen, and I want the software I build to
            earn their trust and simplify their lives.
          </p>
        </div>

        <div className="about__portrait">
          <img
            src="/images/prof.png"
            alt="Johnny Paredez"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
import { Link } from "react-router-dom";
import "./About.scss";
import logo from "../../assets/icons/lilt.svg";
import arrow from "../../assets/icons/arrow.svg";
import bartender from "../../assets/images/bartender.png";

function About() {
  return (
    <section className="about">
      <div className="about__back">
        <img src={arrow} alt="back-arrow" className="about__icon" />
        <Link to="/" className="about__btn">
          Back to Recipes
        </Link>
      </div>

      <div className="about__content">
        <div className="about__text-wrapper">
          <div className="about__header">
            <div className="about__title">
              <img src={logo} alt="Lilt Logo" className="about__logo" />
              <h2 className="about__name">Lilt</h2>
            </div>
            <div className="about__definition">
              <p className="about__pronunciation">[/lilt/]</p>
              <strong className="about__part-of-speech">noun.</strong>
            </div>
            <div className="about__description">
              <p className="about__copy">
                A pleasant, light, or rhythmic swing or tone in speech or music.
                To move or speak with cheerful energy or buoyant rhythm.
              </p>
              <p className="about__copy">
                Mirroring language like "lift" or "brighten", these words are
                used to describe the way citrus or bubbles elevate a cocktail.
                "Lilt" also evokes music and rhythm, much like a well-balanced
                drink: not heavy, not flat, just smooth and harmonious.
              </p>
            </div>
          </div>

          <div className="about__story">
            <h2 className="about__section-title">Our Story</h2>
            <p className="about__copy">
              Born from the frustration of forgetting that obscure classic
              recipe mid-shift, Lilt bridges the gap between professional
              knowledge and practical application. I created this resource to be
              what I needed when learning the craft: a reliable, instant
              reference that understands the pressure behind the bar.
            </p>
            <p className="about__copy">
              Lilt is a dynamic tool that evolves with the industry. Designed to
              serve both the seasoned professional facing a Friday night rush
              and the curious home enthusiast exploring new flavors. Consider
              this your personal mentor behind the bar, available whenever
              inspiration or necessity strikes.
            </p>
          </div>
        </div>

        <img
          src={bartender}
          alt="bartender creating drinks"
          className="about__image"
        />
      </div>
    </section>
  );
}

export default About;

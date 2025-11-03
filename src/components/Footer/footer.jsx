import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../assets/icons/lilt.svg";
function footer() {
  return (
    <section className="footer">
      <div className="footer__logo">
        <Link to="/" className="footer__link">
          <img src={logo} alt="lilt-logo" className="footer__icon" />
          Lilt
        </Link>
      </div>
      <div className="footer__about">
        <Link to="/about" className="footer__link">
          About
        </Link>
      </div>
      <p className="footer__text footer__about">©2025</p>
    </section>
  );
}

export default footer;

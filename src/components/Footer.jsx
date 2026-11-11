
import { Link } from "react-router-dom";
import {
  PawPrint,
  MapPin,
  Mail,
  Phone,
  Heart,
} from "lucide-react";
import facebookLogo from "../assets/facebook.png";
import instagramLogo from "../assets/instagram.png";
import xLogo from "../assets/x.png";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <PawPrint size={29} />
            <span>Pet Haven</span>
          </Link>

          <p>
            Giving abandoned cats and dogs a second
            chance at life through compassion, care
            and responsible adoption.
          </p>

            <div className="footer-socials">

                {/* Facebook */}
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                >
                    <img src={facebookLogo} alt="Facebook" />
                </a>

                {/* Instagram */}
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                >
                    <img src={instagramLogo} alt="Instagram" />
                </a>

                {/* X */}
                <a
                    href="https://www.x.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X"
                >
                    <img src={xLogo} alt="X" />
                </a>

            </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/pets">Our Pets</Link>
          <Link to="/membership">Membership</Link>
        </div>

        {/* Get Involved */}
        <div className="footer-column">
          <h3>Get Involved</h3>
          <Link to="/membership">Become a Member</Link>
          <Link to="/release">Release a Pet</Link>
          <Link to="/pets">Adopt a Pet</Link>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <p>
            <MapPin size={17} />
            <span>Pet Haven, Singapore</span>
          </p>

          <p>
            <Mail size={17} />
            <a href="mailto:hello@pethaven.example">
              hello@pethaven.example
            </a>
          </p>

          <p>
            <Phone size={17} />
            <a href="tel:+6560000000">
              +65 6000 0000
            </a>
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Pet Haven. All rights reserved.
        </p>

        <p className="footer-made-with">
          Made with <Heart size={14} fill="currentColor" /> for animals.
        </p>
      </div>

    </footer>
  );
}

export default Footer;

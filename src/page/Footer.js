import React from "react";
import { Link } from "react-router-dom";
import "../assete/css/footer.css";
import footerLogo from "../assete/logo/mindtek_white2.png"; // Your logo image
import { useNavigate } from "react-router-dom";

const Footer = () => {
     const navigate = useNavigate();

    const mindtek = () => {
    navigate("");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & Description */}
        <div className="footer-section footer-logo">
          <img src={footerLogo} alt="Company Logo" />
          <p>
            MindTek Research and IT Solutions (P) Ltd.,
            provides innovative solutions and IT services for businesses and development.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h3>Quick Menu</h3>
          <ul>
             <li><Link to="/Home" onClick={mindtek}>Home</Link></li>
          <li><Link to="/About" onClick={mindtek}>About</Link></li>
          <li><Link to="/Service" onClick={mindtek}>Services</Link></li>
          <li><Link to="/Privacypolicy" onClick={mindtek}>Privacy Policy</Link></li>
            <li><Link to="/Termscondition" onClick={mindtek}>Terms & Condition</Link></li>
              <li><Link to="/Cancellationpolicy" onClick={mindtek}>Cancellation Policy</Link></li>
          </ul>
        </div>
        
        {/* Contact Details */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>📍 MindTek Research and IT Solutions (P) Ltd.,</p>
          <p>3rd Floor,Almighty Towers,</p>
          <p>Near Vadasery Bus Stand,Nagercoil-629001,</p>
          <p>kanyakumari District,Tamil Nadu, India.</p>
          <p>📞 +91-8075006187 </p>
          <p>📧 admin@mindtek.org</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025  MindTek Research and IT Solutions (P) Ltd, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

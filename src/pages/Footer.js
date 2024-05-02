import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-links">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
        <div className="footer-info">
          <p>copyright &copy; 2024 JobFinder. All rights reserved.</p>
          <p>Contact us: contact@jobfinder.com</p>
          <p>Address:Kathamandu, Nepal</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import logoKasaWhite from "../assets/icon/logoKasaWhite.png";

const Footer = () => {
    return (
    <footer className="footer">
        <div className="logo">
            <img src={logoKasaWhite} alt="logoKasaWhite" />
        </div>
      <div className="copyright">© 2023 Kasa. All rights reserved</div>
    </footer>
  );
};

export default Footer;
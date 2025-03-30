import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Copyright */}
      <div>
        <span className="copy">
          &copy; 2025 ONG Grafodel Mali. Tous droits réservés.
        </span>
      </div>

      {/* Lien de téléchargement du rapport annuel */}
      <div>
        <a href="/Rapport annuel 2022.pdf" download className="download-link">
          Rapport annuel 2022
        </a>
        <a href="/Rapport annuel 2023.pdf" download className="download-link">
          Rapport annuel 2023
        </a>
        <a href="/Rapport annuel 2024.pdf" download className="download-link">
          Rapport annuel 2024
        </a>
      </div>
    </footer>
  );
}

export default Footer;

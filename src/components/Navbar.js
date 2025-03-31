import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  // Fonction pour fermer la navbar et remonter en haut après un clic
  const handleNavLinkClick = () => {
    setExpanded(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Ligne d'informations supplémentaires */}
      <div className="navbar-top">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span>Email : grafodelmali11@gmail.com | </span>
              <span>Téléphone : +223 77 96 01 41 </span>
              <span>/ +223 63 33 22 95</span>
            </div>
            <div className="social">
              <span>Suivez-nous : </span>
              <a
                href="https://www.facebook.com/profile.php?id=100068681105962&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook
                  size={20}
                  style={{ color: "#fff", marginRight: "16px" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/ong-grafodel-mali/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  size={20}
                  style={{ color: "#fff", marginRight: "16px" }}
                />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaTimes
                  size={20}
                  style={{ color: "#fff", marginRight: "16px" }}
                />
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Navbar principale */}
      <Navbar
        expand="lg"
        className="navbar shadow-sm"
        sticky="top"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Grafodel MALI Logo"
              className="navbar-brand-img"
            />
          </Navbar.Brand>

          {/* Bouton toggle pour mobile */}
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />

          {/* Liens de navigation */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Accueil
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                A propos
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/actions"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Nos actions
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/join"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Carrière
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/donate"
                className="nav-link btn-donate"
                onClick={handleNavLinkClick}
              >
                Rejoignez-nous
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;

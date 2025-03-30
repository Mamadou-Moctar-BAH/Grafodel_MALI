import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import "./Home.css";
import bannerImage from "../assets/banner.jpg";
import aboutImage from "../assets/about.jpg";
import missionImage from "../assets/mission.jpg";
import projectsImage from "../assets/projects.jpg";

function Home() {
  return (
    <div className="home-container">
      {/* Bannière d'accueil */}
      <div
        className="banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <h1>BIENVENUE SUR LE SITE DE GRAFODEL MALI</h1>
      </div>

      {/* Section À propos */}
      <div className="about-section">
        <img
          src={aboutImage}
          alt="À propos de nous"
          className="section-image"
        />
        <div className="text-content text-center my-5">
          <h2>Qui sommes-nous ?</h2>
          <p>
            GRAFODEL-Mali est une ONG nationale créée en 2020 qui intervient sur
            tout le territoire malien pour améliorer les conditions de vie des
            populations vulnérables.
          </p>
          <div className="d-flex justify-content-center">
            <Button as={Link} to="/about" variant="success" className="mt-3">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>

      {/* Section Missions */}
      <div className="missions-section">
        <div className="text-content text-center">
          <h2>Nos missions et objectifs</h2>
          <ul className="text-start d-inline-block">
            <li>Amélioration des conditions de vie des populations.</li>
            <li>Soutien aux réfugiés et déplacés internes.</li>
            <li>
              Protection de l’environnement et lutte contre le changement
              climatique...
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <Button as={Link} to="/about" variant="success" className="mt-3">
              En savoir plus
            </Button>
          </div>
        </div>
        <img src={missionImage} alt="Nos missions" className="section-image" />
      </div>

      {/* Section Projets */}
      <div className="projects-section">
        <img src={projectsImage} alt="Nos projets" className="section-image" />
        <div className="text-content text-center">
          <h2>Nos actions sur le terrain</h2>
          <p>
            Nous mettons en place des programmes d’aide humanitaire, de sécurité
            alimentaire et d’éducation pour soutenir les populations en
            difficulté.
          </p>
          <div className="d-flex justify-content-center">
            <Button as={Link} to="/actions" variant="success" className="mt-3">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>

      {/* Section Nos partenaires */}
      <Row className="section">
        <Col>
          <h2>NOS PARTENAIRES</h2>
          <Row>
            <Col md={6} className="d-flex justify-content-center">
              <img
                src="https://aguiainternacional.com/assets/imagens/parceiros/enda.WebP"
                alt="Bailleur 1"
                className="img-fluid rounded sponsor-logo"
              />
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hxpzEBNK-U5u2K8KOA5HQM3iK__ekG3rh9zSB31Yqbi4NguV7KPIH3nG9TV50L-RWnw&usqp=CAU"
                alt="Bailleur 2"
                className="img-fluid rounded sponsor-logo"
              />
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <img
                src="https://ml.usembassy.gov/wp-content/uploads/sites/28/seal-1-e1630662487388-750x450.png"
                alt="Bailleur 3"
                className="img-fluid rounded sponsor-logo"
              />
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfEJzx6uYx71iricQh0TrQRlwOs48d550DA&s"
                alt="Bailleur 4"
                className="img-fluid rounded sponsor-logo"
              />
            </Col>
            <div className="d-flex justify-content-center">
              <Button as={Link} to="/donate" variant="success" className="mt-3">
                En savoir plus
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Home;

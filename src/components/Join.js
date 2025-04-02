import React from "react";
import { Card, Button } from "react-bootstrap";

const JobOffer = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 primary">NOS OFFRES D'EMPLOI</h2>
      <Card className="job-card">
        <Card.Body>
          <h2>Administrateur Principal / Responsable de Partenariat</h2>
          <p>
            <strong>À propos de l’offre :</strong> L’ONG GRAFODEL-Mali, dans le
            cadre de la mise en œuvre de son plan d’action stratégique et
            opérationnel 2025 recherche pour son bureau national, un cadre
            bénévole pour occuper le poste d’Administrateur (trice) principal
            (e) à la fois responsable de partenariat. Placé sous la
            responsabilité directe du directeur exécutif et le Coordinateur
            National de GRAFODEL-Mali à Bamako
          </p>
          <h4>Missions :</h4>
          <ul>
            <li>
              Conseiller l’organisation GRAFODEL - Mali dans sa politique
              d’implantation dans toutes les régions
            </li>
            <li>
              Appuyer l’identification et la coordination des nouvelles
              initiatives par thématiques
            </li>
            <li>
              Appuyer le processus de positionnement stratégique de GRAFODEL
              auprès des bailleurs/partenaires nationaux et internationaux
            </li>
            <li>
              Appuyer la direction exécutive dans les actions de plaidoyer
              auprès des décideurs
            </li>
            <li>
              Développer des synergies et des partenariats avec les autres
              acteurs internationaux et nationaux présents en fonction des
              priorités opérationnelles et stratégiques de GRAFODEL
            </li>
            <li>
              Renforcer le processus de mobilisation des fonds et la négociation
              avec les bailleurs
            </li>
            <li>
              Rechercher et développer le partenariat entre l’organisation
              GRAFODEL et d’autres acteurs étatiques et non étatiques
            </li>
            <li>
              Appuyer la formation continue du personnel pour le développement
              de ses compétences
            </li>
            <li>
              Appuyer toute initiative tendant à améliorer les stratégies
              d’interventions de GRAFODEL-Mali
            </li>
            <li>
              Défendre les idées et les positions de l’organisation partout où
              le besoin se pose
            </li>
            <li>
              Appuyer GRAFODEL-Mali dans l’élaboration des nouvelles politiques
              et la consolidation des acquis
            </li>
          </ul>
          <h4>Profil Recherché :</h4>
          <ul>
            <li>
              Doctorat/Phd en gestion de projet, sciences sociales,
              développement international, économie, relations internationales
            </li>
            <li>
              Avoir 15 ans d’expériences ou plus dans la gestion des projets et
              programmes
            </li>
            <li>
              Expérience dans le processus de mobilisation des fonds et la
              négociation avec les bailleurs
            </li>
            <li>
              Maitrise des normes et mesures internationales dans la gestion de
              projet.
            </li>
          </ul>
          <p>
            <strong>NB :</strong> La candidature des anciens travailleurs
            humanitaire en pause professionnelle est vivement sollicitée
          </p>
          <h4>Compétences et Qualités :</h4>
          <ul>
            <li>
              Excellentes compétences en mobilisation des fonds et la
              négociation avec les bailleurs
            </li>
            <li>Capacité d’analyse et de prise de décision</li>
            <li>Compétences en formation des adultes</li>
            <li>Bonne moralité</li>
            <li>Bonne capacité d’écoute et d’esprit d’équipe</li>
          </ul>
          <h4>Documents à fournir :</h4>
          <p>
            Un CV bien détaillé, une Lettre de Motivation adressée au Directeur
            Exécutif, photocopie des diplômes et attestations et 3 personnes de
            référence.
          </p>
          <p>
            <strong>Envoyez vos candidatures :</strong>
            <a href="mailto:grafodelmali11@gmail.com">
              {" "}
              grafodelmali11@gmail.com
            </a>
            et en cc
            <a href="mailto:ladjibah7777@gmail.com"> ladjibah7777@gmail.com</a>
          </p>
          <div className="text-center mt-4">
            <Button
              variant="success"
              href="https://forms.gle/62Wu35cZR8uRNNLs9"
              target="_blank"
            >
              Postuler
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobOffer;

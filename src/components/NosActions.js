import React from "react";
import "./NosActions.css";

const projects = [
  {
    category: "Éducation et Droits des enfants/Santé",
    title: "Projet d’éducation aux risques des restes explosifs de guerre",
    beneficiaries: "Populations",
    location: "Région de Ségou",
    partner: "ENDA-Mali",
  },
  {
    category: "Éducation et Droits des enfants/Santé",
    title:
      "Projet d’éducation et les droits à la santé sexuelle et reproductive (DSSR) des adolescent(e) et jeunes dans la commune rurale de Touna/Ségou. (SON CHOIX).",
    beneficiaries: "Enfants (filles et garçons)",
    location: "Région de Ségou",
    partner: "ENDA-Mali",
  },
  {
    category: "Aide d’urgence",
    title:
      "Projet d’aide humanitaire d’urgence aux populations vulnérables de trois communes rurales des cercles de Macina et Niono en 2020 (réalisations périmètres maraichers, réalisations des pistes rurales, réalisations des pistes pastorales à travers les CFW et les THIMO …)",
    beneficiaries: "Populations vulnérables",
    location: "Communes rurales des cercles de Macina et Niono",
    partner: "ENDA-Mali",
  },
  {
    category: "Aide d’urgence",
    title: "Projet d’appui alimentaire aux enfants des communautés déplacés",
    beneficiaries: "Enfants des PDIs",
    location: "Région de Ségou",
    partner: "ENDA-Mali",
  },
  {
    category: "Résilience / Sécurité alimentaire / Gouvernance locale",
    title:
      "Renforcement de la résilience des populations victimes d’insécurité alimentaire dans 23 communes des régions de Ségou, Mopti, Gao, Tombouctou et Kidal, République du Mali",
    beneficiaries: "Populations victimes d’insécurité alimentaire",
    location: "Régions de Ségou, et Mopti, Gao, Tombouctou et Kidal",
    partner: "ENDA-Mali",
  },
  {
    category: "Résilience / Sécurité alimentaire / Gouvernance locale",
    title:
      "Projet d’appui à la gestion de l’eau pour renforcer la sécurité alimentaire et résilience",
    beneficiaries: "Populations vulnérables",
    location: "3 communes de cercle de Niono",
    partner: "ENDA-Mali",
  },
  {
    category: "Résilience / Sécurité alimentaire / Gouvernance locale",
    title: "Projet de renforcement des capacités des observateurs électoraux",
    beneficiaries: "Jeunesse locale",
    location: "Commune Rurale de Ségou",
    partner: "Fond propre GRAFODEL-Mali",
  },
  {
    category: "Résilience / Sécurité alimentaire / Gouvernance locale",
    title:
      "Projet d’accompagnement des femmes et jeunes leaders dans leur participation politique et la promotion de l’égalité des sexes",
    beneficiaries: "Femmes et jeunes leaders",
    location: "Cercle de Macina",
    partner: "Enda et GRAFODEL-Mali",
  },
  {
    category: "Résilience / Sécurité alimentaire / Gouvernance locale",
    title:
      "Projet de renforcement de la capacité de résilience des réfugiés à travers des appuis en kits d’embouches et des rencontres communautaires pour le vivre ensemble",
    beneficiaries:
      "Populations réfugiées pastoraux vulnérables et leurs hôtes.",
    location: "Commune de Macina, Cercle de Macina, Région de Ségou",
    partner: "Ambassade des Etats Unis à Bamako",
  },
  {
    category:
      "Formation professionnelle et réduction des violences communautaires, Wash",
    title: "Projet de réduction des violences communautaires",
    beneficiaries: "540 Jeunes à risque par les groupe armés et extrémistes",
    location:
      "Cercles de Tenenkou, Djenne région de Mopti et Niono et Macina Région de Ségou",
    partner: "MINUSMA Mopti",
  },
];

const NosActions = () => {
  return (
    <div className="container">
      <h2 className="title">NOS ACTIONS</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{project.title}</h3>
            <p>
              <strong>Catégorie :</strong> {project.category}
            </p>
            <p>
              <strong>Bénéficiaires :</strong> {project.beneficiaries}
            </p>
            <p>
              <strong>Zone :</strong> {project.location}
            </p>
            <p>
              <strong>Partenaire :</strong> {project.partner}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NosActions;

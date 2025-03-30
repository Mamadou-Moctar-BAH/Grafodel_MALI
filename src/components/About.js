import React from "react";
import "./About.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="about-page">
      {/* Section: Qui sommes-nous */}
      <Row className="section">
        <Col>
          <h2>QUI SOMMES NOUS ?</h2>
          <p>
            Dénommé Groupe de Recherche Action Formation pour le Développement
            Local du Mali (GRAFODEL-Mali), est une organisation non
            gouvernementale nationale créée en 2020 et a signé l’accord-cadre
            N°002045 avec le gouvernement du Mali. L’ONG GRAFODEL-Mali
            intervient sur toute l’étendue du territoire malien dans un contexte
            politique, économique et social et dans les domaines de
            l’humanitaire et du développement. L’ONG à son siège social à Ségou
            Angoulême, Rue : 116, Porte : 121, qui couvre la Région de Sikasso,
            Koutiala, San et un bureau régional à Mopti qui couvre toutes
            Régions du Nord, ce qui justifie son existence et ses interventions.
            L’objectif global de l’ONG est l’amélioration des conditions
            socio-économiques des populations vulnérables, notamment, les
            personnes déplacées internes (PDIs), les rapatriés, les réfugiés,
            les migrants, ainsi que les populations autochtones des zones
            affectées ainsi qu’à la promotion d’un monde juste et solidaire.
            GRAFODEL-Mali est dirigé par un conseil d’administration de cinq
            membres fondateurs appuyé par la coordination nationale. Les
            principes suivants sont adoptés par l’ONG pour orienter les actions
            et le fonctionnement : - Équité et transparence ; - Respect et
            valorisation des personnes déplacées internes (PDIs), les rapatriés,
            les réfugiés, les migrants, ainsi que les populations autochtones, -
            Démocratie participative, - Responsabilité/coresponsabilité, -
            Solidarité, - Efficience et efficacité, - Subsidiarité, -
            Innovation, - Respect des règles du jeu, - Redevabilité. Ses actions
            sont soutenues par des partenaires au développement (organisations
            non gouvernementales nationales et internationales). Elles se
            concrétisent par des appuis directs aux populations sous la forme de
            projets et de programmes.
          </p>
        </Col>
        <Row>
          <Col md={6}>
            <Card className="program-card">
              <Card.Body>
                <Card.Title>NOTRE MISSION</Card.Title>
                <Card.Text>
                  L’organisation GRAFODEL-Mali a pour mission de contribuer à
                  l’atteinte des Objectifs de Développement Durable (ODDs) à
                  travers des Etudes et Recherche/Action, Formation
                  Professionnelle insertion des couches vulnérables
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="program-card">
              <Card.Body>
                <Card.Title>NOTRE VISION</Card.Title>
                <Card.Text>
                  Le GRAFODEL Mali vise l’amélioration des conditions sociales,
                  économique des couches vulnérables ou à risque des populations
                  du mali ainsi qu’à la promotion d’un monde juste et solidaire
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="program-card">
              <Card.Body>
                <Card.Title>NOS OBJECTIFS</Card.Title>
                <li>
                  Mener des études/ recherches actions pour le bien être des
                  communautés et la protection des populations notamment les
                  femmes et les enfants affectées par des crises ;
                </li>
                <li>
                  Contribuer à l’amélioration des conditions de vie des
                  populations réfugiés, PDIs et hôtes affectés par les crises à
                  travers de sessions de sensibilisation, d’information, de
                  formation et d’appui en kit d’AGR ;
                </li>{" "}
                <li>
                  Contribuer à l’amélioration de la gouvernance au sein des
                  organisations locales de base et des collectivités locales ;
                </li>{" "}
                <li>
                  Contribuer à l’effort de lutte contre les effets du changement
                  climatique ;
                </li>{" "}
                <li>
                  Contribuer aux actions d’intermédiation sociale et appui à la
                  gestion des conflits aux seins et entre les communautés ;
                </li>{" "}
                <li>
                  Appuyer les initiatives d’amélioration des performances des
                  activités socio-économiques des communautés locales et des
                  réfugiés, PDIs à travers des actions humanitaires et de
                  souveraineté alimentaire ;
                </li>{" "}
                <li>
                  Contribuer à renforcer l'accès à l'eau potable, à
                  l'assainissement et à l'hygiène pour les populations affectées
                  par des crises ;
                </li>{" "}
                <li>
                  Promouvoir les droits humains en particulier, ceux des femmes
                  et des enfants.
                </li>{" "}
                <li>
                  Développer des partenariats opérationnels avec les services
                  techniques déconcentrés et les collectivités territoriales
                </li>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>

      <Row className="section">
        <Col>
          <h2>NOTRE HISTOIRE</h2>
          <p>
            Depuis plusieurs décennies, la sous-région sahélienne a été portée à
            l’attention de la communauté internationale par les grandes
            sécheresses qu’elle a connue au début des années 1970 et 1980. Ces
            perturbations climatiques ont grandement affecté les économies,
            ainsi que les écosystèmes de ce grand espace géographique en Afrique
            de l’Ouest en général et au Mali en particulier. En outre, ces
            crises ont été toujours accompagnées par des mauvaises campagnes
            agricoles. Cette situation préoccupante a été exacerbée par des
            séries de rébellions et terrorismes dans certains pays et des coups
            d’Etat dans d’autres sans occulter le mécontentement généralisé des
            populations dues à la vie chère et aux manques d’emploi pour les
            jeunes et les femmes. Les systèmes de production et les modes de vie
            des populations de la sous-région, essentiellement agropastorales,
            demeurent toujours vulnérables face aux changements climatiques.
            Ainsi, la recrudescence, ces dernières années, de phénomènes
            extrêmes comme les sécheresses et les inondations, certes parfois
            localisés, mais très dévastateurs, est de nature à compromettre les
            efforts déployés par les pays pour l’atteinte des Objectifs de
            Développement Durable (ODDs). Depuis 2012, les pays du Sahel font
            face à une série de crises, en particulier sur le plan sécuritaire.
            Cette situation persiste au Mali, avec une propagation croissante à
            travers toute la sous-région. Dans ce contexte de crises qui se
            superposent et s'étendent géographiquement, les groupes de
            population prioritaires en fonction de l'analyse et de la gravité
            des besoins, comprennent les personnes déplacées internes (PDIs),
            les rapatriés, les réfugiés, les migrants, ainsi que les populations
            autochtones des zones affectées C’est pour contribuer à travers
            études, recherche-action, des projets/programmes de développement et
            d’urgence, devant conduire à améliorer les condition de vie des
            populations vulnérables, notamment, les personnes déplacées internes
            (PDIs), les rapatriés, les réfugiés, les migrants, ainsi que les
            populations autochtones des zones affectées conformément aux
            Objectifs de Développement Durable (ODDs), qu’il a été décidé de
            créer un groupe d’experts et de praticiens pour la Recherche Action,
            la Formation et le développement Local (GRAFODEL-Mali).
          </p>
        </Col>
      </Row>

      {/* Section: Nos Programmes */}
      <Row className="section">
        <Col>
          <h2>NOS PROGRAMMES</h2>
          <Row>
            <Col xs={12} md={6} className="mb-4">
              <Card className="program-card">
                <Card.Img
                  variant="top"
                  src="https://www.unenfantparlamain.org/files/2019/03/header-page-droit-education-600x360.jpg"
                />
                <Card.Body>
                  <Card.Title>Éducation et Droits des Enfants</Card.Title>
                  <Card.Text>
                    Nous offrons des formations et un accès à l'éducation pour
                    les enfants et les jeunes défavorisés, afin de leur garantir
                    un avenir meilleur.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Card className="program-card">
                <Card.Img
                  variant="top"
                  src="https://orsag.fr/wp-content/uploads/2018/02/enfant_sant%C3%A9.png"
                />
                <Card.Body>
                  <Card.Title>Santé et Bien-être</Card.Title>
                  <Card.Text>
                    Nos actions de prévention et d'accès aux soins améliorent la
                    santé des populations vulnérables, avec un focus particulier
                    sur la santé maternelle et infantile.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Card className="program-card">
                <Card.Img
                  variant="top"
                  src="https://revue-passages.fr/wp-content/uploads/2024/03/developpement-durable.jpg"
                />
                <Card.Body>
                  <Card.Title>Développement durable</Card.Title>
                  <Card.Text>
                    Nous mettons en place des projets pour protéger
                    l'environnement, encourager l’agriculture durable et
                    promouvoir une gestion responsable des ressources
                    naturelles.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className="mb-4">
              <Card className="program-card">
                <Card.Img
                  variant="top"
                  src="https://www.handicap-international.fr/sn_uploads/fr/news/RDC-JOW26_John-Wessels-HI.jpg"
                />
                <Card.Body>
                  <Card.Title>Aide d’urgence</Card.Title>
                  <Card.Text>
                    Nous intervenons rapidement pour fournir un soutien vital
                    aux populations en situation de crise, incluant l’aide
                    alimentaire, l’assistance médicale et la protection des
                    déplacés.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} className="mb-4">
              <Card className="program-card">
                <Card.Img
                  variant="top"
                  src="https://unctad.org/sites/default/files/2023-08/20230823_NewsPic_shutterstock_1843289062_1200X675.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Résilience / Sécurité alimentaire / Gouvernance locale
                  </Card.Title>
                  <Card.Text>
                    Nos initiatives visent à renforcer la sécurité alimentaire,
                    améliorer la gouvernance locale et aider les communautés à
                    mieux résister aux crises et aux changements climatiques.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Card className="program-card">
                <Card.Img
                  variant="top"
                  src="https://minusma.unmissions.org/sites/default/files/styles/full_width_image/public/field/image/cvr_-_community_violence_reduction_-_carpenter_training_in_timbuktu_mali-19.jpeg?itok=7V29ABw4"
                />
                <Card.Body>
                  <Card.Title>
                    Formation professionnelle et réduction des violences
                    communautaires, Wash
                  </Card.Title>
                  <Card.Text>
                    Nous proposons des formations professionnelles aux jeunes et
                    adultes afin de favoriser leur insertion socio-économique et
                    prévenir la violence en milieu communautaire.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Section: Nos Bureaux */}
      <Row className="section">
        <Col>
          <h2>NOS BUREAUX</h2>
          <Row>
            <Col md={6}>
              <Card className="office-card">
                <Card.Body>
                  <Card.Title>Bureau à Ségou</Card.Title>
                  <Card.Text>
                    Adresse : Angoulême, Ségou, MALI <br />
                    Téléphone : +223 77 96 01 41 | +223 63 33 22 95 <br /> Email
                    : grafodelmali11@gmail.com
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="office-card">
                <Card.Body>
                  <Card.Title>Bureau à Mopti</Card.Title>
                  <Card.Text>
                    Adresse : Mopti, MALI <br />
                    Téléphone : +223 77 96 01 41 | +223 63 33 22 95 <br />
                    Email : grafodelmali11@gmail.com
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

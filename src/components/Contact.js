import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi des données par Email
    sendEmail(formData);
    alert("Votre message a été envoyé.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const sendEmail = async (data) => {
    try {
      // Utiliser EmailJS pour envoyer un email sans backend
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "your_service_id", // Remplacez par votre ID de service
            template_id: "your_template_id", // Remplacez par votre ID de template
            user_id: "your_user_id", // Remplacez par votre ID utilisateur EmailJS
            template_params: {
              name: data.name,
              email: data.email,
              message: data.message,
            },
          }),
        }
      );

      if (!response.ok) throw new Error("Erreur lors de l'envoi de l'email");
      console.log("Email envoyé avec succès");
    } catch (error) {
      console.error("Erreur d'envoi d'email: ", error);
    }
  };

  return (
    <Container className="contact-form-container">
      <h2 className="title">CONTACTEZ-NOUS</h2>
      <Row>
        <Col md={6}>
          <Card className="contact-info-card">
            <Card.Body>
              <p>
                <strong>Adresse :</strong> Angoulême, Ségou, MALI
              </p>
              <p>
                <strong>Téléphone :</strong> +223 77 96 01 41
              </p>
              <p>
                <strong>Email :</strong> grafodelmali11@gmail.com
              </p>

              <h3>Localisation</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3880.693685217282!2d-6.2612693249155225!3d13.431277786928051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDI1JzUyLjYiTiA2wrAxNSczMS4zIlc!5e0!3m2!1sfr!2sml!4v1742994416765!5m2!1sfr!2sml"
                x
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de localisation de notre ONG"
              ></iframe>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

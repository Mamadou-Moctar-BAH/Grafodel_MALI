import React, { useState } from "react";
import "./Donate.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu peux gérer l'envoi des données, par exemple avec une API
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
  };

  return (
    <div className="donation-container">
      <div className="donation-header text-center">
        <h1>Vous voulez nous aider dans notre mission ?</h1>
        <h1>
          Vous pouvez participer à nos projets en tant que Partenaire/ Donateur{" "}
        </h1>
        <span>
          Envoyez-nous vos informations et nous vous contacterons pour vous
          fournir plus de détails
        </span>
      </div>

      <div className="donation-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Nom Complet</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Votre adresse email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Votre Numéro de Téléphone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Votre Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;

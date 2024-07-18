import PropTypes from "prop-types";
import { useState } from "react";
import "./ReviewForm.scss";
import "../style/input.scss";
import "../style/button.scss";

function ReviewForm({ onSubmit }) {
  const [newReview, setNewReview] = useState({
    title: "",
    username: "",
    content: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newReview);
    setNewReview({ title: "", username: "", content: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Laisser un avis</h2>
      <input
        className="input-md-everglade-outlined"
        type="text"
        name="title"
        value={newReview.title}
        onChange={handleInputChange}
        placeholder="Titre"
        required
      />
      <input
        className="input-md-everglade-outlined"
        type="text"
        name="username"
        value={newReview.username}
        onChange={handleInputChange}
        placeholder="Votre pseudo"
        required
      />
      <input
        className="input-md-everglade-outlined"
        type="email"
        name="email"
        value={newReview.email}
        onChange={handleInputChange}
        placeholder="Votre adresse mail (qui ne sera pas affichée sur le site)"
        required
      />
      <textarea
        className="input-md-everglade-outlined"
        name="content"
        value={newReview.content}
        onChange={handleInputChange}
        placeholder="Votre avis"
        required
      />
      <button className="button-md-everglade-outlined" type="submit">
        Valider
      </button>
    </form>
  );
}

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;

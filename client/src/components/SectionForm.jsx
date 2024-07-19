import { useState } from "react";
import PropTypes from "prop-types";
import "../style/input.scss";
import { useLocation } from "react-router-dom";

function SectionForm({ onSubmit }) {
  const location = useLocation();
  const isReview = location.pathname.endsWith("/reviews");
  const isConsultation = location.pathname.endsWith("/consultation");
  const isAbout = location.pathname.endsWith("/about");
  const isBlog = location.pathname.endsWith("/blog");
  const [categories] = useState([
    "Naturopathie",
    "Alimentation",
    "Aromathérapie",
    "Phytothérapie",
    "Bien-être psychologique",
  ]);
  const [category, setCategory] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [altText, setAltText] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, imageUrl, altText, category, username });
    setTitle("");
    setCategory("");
    setContent("");
    setImageUrl("");
    setAltText("");
    setUsername("");
  };

  return (
    <form className="section-form" onSubmit={handleSubmit}>
      {isBlog && (
        <select
          className="input-md-everglade-outlined category-input"
          value={category}
          onChange={handleCategoryChange}
          required
        >
          <option value="">Sélectionnez une catégorie</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      )}
      <input
        className="input-md-everglade-outlined"
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      {!isAbout && !isConsultation && (
        <input
          className="input-md-everglade-outlined"
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      )}
      {!isReview && (
        <>
          <input
            className="input-md-everglade-outlined"
            type="url"
            placeholder="URL de l'image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <input
            className="input-md-everglade-outlined"
            type="text"
            placeholder="Alt text pour l'image"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
          />
        </>
      )}

      <textarea
        className="input-md-everglade-outlined"
        placeholder="Contenu"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit" className="button-md-everglade">
        Ajouter
      </button>
    </form>
  );
}

SectionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SectionForm;

import { useState } from "react";
import PropTypes from "prop-types";
import "../style/input.scss";

function SectionForm({ onSubmit }) {
    const [categories, setCategories] = useState([
        "Naturopathie",
        "Alimentation",
        "Aromathérapie",
        "Phytothérapie",
        "Bien-être psychologique",
    ]);
    const [category, setCategory] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [showAddNew, setShowAddNew] = useState(false);

    const handleCategoryChange = (e) => {
        if (e.target.value === "add_new") {
            setShowAddNew(true);
        } else {
            setCategory(e.target.value);
        }
    };

    const handleAddNewCategory = () => {
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]);
            setCategory(newCategory);
            setNewCategory("");
            setShowAddNew(false);
            // Here you would also send a request to your backend to persist the new category
        }
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
            <input
                className="input-md-everglade-outlined"
                type="text"
                placeholder="Titre de l'article"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                className="input-md-everglade-outlined"
                type="text"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <select
                className="input-md-everglade-outlined"
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
                <option value="add_new">Ajouter une nouvelle catégorie</option>
            </select>

            {showAddNew && (
                <div>
                    <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="Nom de la nouvelle catégorie"
                    />
                    <button type="button" onClick={handleAddNewCategory}>Add</button>
                </div>
            )}
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

            <textarea
                className="input-md-everglade-outlined"
                placeholder="Contenu de la section"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit" className="button-md-everglade">
                Ajouter la section
            </button>
        </form>
    );
}

SectionForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SectionForm;

import PropTypes from "prop-types";
import { useState } from "react";

const hostUrl = import.meta.env.VITE_API_URL;

function ArticleCard({ article, onArticleUpdated, onArticleDeleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedArticle, setEditedArticle] = useState(article);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`${hostUrl}/api/article/${article.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedArticle),
      });

      if (response.ok) {
        const updatedArticle = await response.json();
        onArticleUpdated(updatedArticle);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`${hostUrl}/api/article/${article.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onArticleDeleted(article.id);
      }
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleInputChange = (e) => {
    setEditedArticle({
      ...editedArticle,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="article-card">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="title"
            value={editedArticle.title}
            onChange={handleInputChange}
          />
          <textarea
            name="content"
            value={editedArticle.content}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
          <p>
            Published: {new Date(article.publication_date).toLocaleDateString()}
          </p>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}
ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    publication_date: PropTypes.string.isRequired,
  }).isRequired,
  onArticleUpdated: PropTypes.func.isRequired,
  onArticleDeleted: PropTypes.func.isRequired,
};

export default ArticleCard;

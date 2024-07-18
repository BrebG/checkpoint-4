import PropTypes from "prop-types";
import { useState } from "react";

const hostUrl = import.meta.env.VITE_API_URL;

function CreateArticle({ onArticleCreated }) {
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    username: "",
  });

  const handleInputChange = (e) => {
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${hostUrl}/api/article`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newArticle),
      });

      if (response.ok) {
        const createdArticle = await response.json();
        onArticleCreated(createdArticle);
        setNewArticle({
          title: "",
          content: "",
          category: "",
          username: "",
        });
      }
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

  return (
    <div className="create-article">
      <h3>Create New Article</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newArticle.title}
          onChange={handleInputChange}
          placeholder="Article Title"
          required
        />
        <textarea
          name="content"
          value={newArticle.content}
          onChange={handleInputChange}
          placeholder="Article Content"
          required
        />
        <button type="submit">Create Article</button>
      </form>
    </div>
  );
}

CreateArticle.propTypes = {
  onArticleCreated: PropTypes.func.isRequired,
};

export default CreateArticle;

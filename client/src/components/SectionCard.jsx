import PropTypes from "prop-types";
import "./SectionCard.scss";
import { useLocation } from "react-router-dom";

function SectionCard({
  id,
  title,
  category,
  content,
  username,
  imageUrl,
  altText,
  editMode,
  onEdit,
  onDelete,
  index,
}) {
  const isEven = index % 2 === 0;
  const hasImage = !!imageUrl;
  const hasCategory = !!category;
  const location = useLocation();
  const isBlog = location.pathname.endsWith("/blog");

  return (
    <div className={`section-card-container ${isEven ? "even" : "odd"}`}>
      {hasImage && (
        <div className="img-container">
          <img src={imageUrl} alt={altText} />
        </div>
      )}
      <div className="text-container">
        <h2>{title}</h2>
        {isBlog && hasCategory && <h3>{category}</h3>}
        <p>{content}</p>
        {isBlog && <p>Auteur : {username}</p>}
        {editMode && (
          <div>
            <button
              type="button"
              className="button-sm-everglade-outlined"
              onClick={() => onEdit(id)}
            >
              Edit
            </button>
            <button
              type="button"
              className="button-sm-everglade-outlined"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
SectionCard.defaultProps = {
  category: "",
  username: "",
  imageUrl: "",
  altText: "",
};

SectionCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
  editMode: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default SectionCard;

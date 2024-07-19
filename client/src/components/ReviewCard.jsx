import PropTypes from "prop-types";
import "./ReviewCard.scss";

function ReviewCard({
  id,
  username,
  title,
  content,
  publicationDate,
  editDate,
  editMode,
  onEdit,
  onDelete,
}) {
  return (
    <div className="review-card-container" key={`${id}-${title}`}>
      <h3>{title}</h3>
      <p>"{content}"</p>
      <p>Auteur : {username}</p>
      <p>Publié le : {publicationDate}</p>
      {editDate && editDate !== "1970-01-01 00:00:00" && (
        <p>Edité le : {editDate}</p>
      )}
      {editMode && (
        <div className="edit-options">
          <button
            type="button"
            className="button-sm-everglade-outlined"
            onClick={() => onEdit(id)}
          >
            Modifier les sections
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
  );
}
ReviewCard.defaultProps = {
  editDate: null,
};

ReviewCard.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  editDate: PropTypes.string, // Add this line
  editMode: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ReviewCard;

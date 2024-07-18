import PropTypes from "prop-types";
import "./SectionCard.scss";

function SectionCard({
    id,
    title,
    category,
    content,
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

    return (
        <div className={`section-card-container ${isEven ? "even" : "odd"}`}>
            {hasImage && (
                <div className="img-container">
                    <img src={imageUrl} alt={altText} />
                </div>
            )}
            <div className="text-container">
                <h2>{title}</h2>
                {hasCategory && <h3>{category}</h3>}
                <p>{content}</p>
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
    imageUrl: "",
    altText: "",
};

SectionCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    altText: PropTypes.string,
    editMode: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default SectionCard;

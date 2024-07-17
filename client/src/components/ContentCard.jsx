import PropTypes from "prop-types";
import "./ContentCard.scss";

function ContentCard({ imageSrc, title, description }) {
  return (
    <div className="content-card-container">
      <div className="img-container">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

ContentCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ContentCard;

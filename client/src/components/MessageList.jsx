import "./ReviewCard.scss";
import PropTypes from 'prop-types';


function MessageList({ messages, onDelete }) {
  return (
    <div className="review-card-container">
      {messages.map((message) => (
        <div key={message.id} className="review-card-container">
          <h3>{message.title}</h3>
          <p>{message.message}</p>
          <p>Expéditeur: {message.username}</p>
          <p>Email: {message.email}</p>
          <div>
            <a
              href={`mailto:${message.email}`}
              className="button-sm-everglade-outlined"
            >
              Répondre
            </a>
            <button
              type="button"
              onClick={() => onDelete(message.id)}
              className="button-sm-everglade-outlined"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MessageList;

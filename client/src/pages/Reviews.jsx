import { useState, useEffect } from "react";
import { formatDate } from "../utils/dateUtils";
import {
  fetchReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../services/reviewServices";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";
import "./Review.scss";
import "../style/button.scss";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchReviews();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    getReviews();
  }, []);

  const handleReviewSubmit = async (newReview) => {
    try {
      await createReview(newReview);
      const data = await fetchReviews();
      setReviews(data);
      setShowForm(false);
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  const handleEdit = async (id) => {
    const reviewToEdit = reviews.find((review) => review.id === id);
    if (!reviewToEdit) return;

    const updatedTitle = prompt("Modifier le titre :", reviewToEdit.title);
    const updatedContent = prompt(
      "Modifier le contenu :",
      reviewToEdit.content
    );

    if (updatedTitle === null || updatedContent === null) return;

    const updatedReview = {
      ...reviewToEdit,
      title: updatedTitle,
      content: updatedContent,
    };

    try {
      const updatedReviewFromServer = await updateReview(id, updatedReview);
      setReviews(
        reviews.map((review) =>
          review.id === id ? updatedReviewFromServer : review
        )
      );
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteReview(id);
      setReviews(reviews.filter((review) => review.id !== id));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <>
      <div className="edit-button-container">
        {reviews.length > 0 && (
          <button
            type="button"
            className="button-sm-everglade-outlined edit-mode-button"
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? "Modifications terminées" : "Modifier les avis"}
          </button>
        )}
        {reviews.length === 0 && editMode && setEditMode(false)}
      </div>
      <div className="review-page-container">
        <h2>Vos avis</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewCard
              key={review.id}
              id={review.id}
              title={review.title}
              content={review.content}
              username={review.username}
              publicationDate={formatDate(review.publication_date)}
              editDate={formatDate(review.edit_date)}
              editMode={editMode}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>Il semblerait qu'il n'y ait encore aucun avis sur cette page</p>
        )}
        {showForm && <ReviewForm onSubmit={handleReviewSubmit} />}
        <button
          type="button"
          className="button-md-everglade-outlined"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Annuler" : "Laisser un avis"}
        </button>
      </div>
    </>
  );
}

export default Reviews;

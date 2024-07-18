const hostUrl = import.meta.env.VITE_API_URL;

const validateReview = (review) => {
  // Checks if the review object exists and is an object.
  if (!review || typeof review !== "object") {
    throw new Error("Invalid review object");
  }
  // Validates the title as non-empty strings.
  if (
    !review.title ||
    typeof review.title !== "string" ||
    review.title.trim().length === 0
  ) {
    throw new Error("Invalid review title");
  }
  // Validates the content as non-empty strings.
  if (
    !review.content ||
    typeof review.content !== "string" ||
    review.content.trim().length === 0
  ) {
    throw new Error("Invalid review content");
  }
  // Checks for a valid username type.
  if (
    !review.username ||
    typeof review.username !== "string" ||
    review.username.trim().length === 0
  ) {
    throw new Error("Invalid username");
  }
  // If a date is provided, it ensures it's in a valid date format.
  if (
    review.date &&
    !(review.date instanceof Date) &&
    Number.isNaN(Date.parse(review.date))
  ) {
    throw new Error("Invalid date format");
  }
};

// Keep the validateReview function as is

export const fetchReviews = async () => {
  try {
    const response = await fetch(`${hostUrl}/api/review`);
    if (!response.ok) {
      throw new Error(`Failed to fetch reviews: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

export const createReview = async (newReview) => {
  validateReview(newReview);
  try {
    const response = await fetch(`${hostUrl}/api/review`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });
    if (!response.ok) {
      throw new Error(`Failed to create review: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
};

export const updateReview = async (id, updatedReview) => {
  validateReview(updatedReview);
  try {
    const response = await fetch(`${hostUrl}/api/review/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReview),
    });
    if (!response.ok) {
      throw new Error(`Failed to update review: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error updating review:", error);
    throw error;
  }
};

export const deleteReview = async (id) => {
  try {
    const response = await fetch(`${hostUrl}/api/review/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete review: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting review:", error);
    throw error;
  }
};

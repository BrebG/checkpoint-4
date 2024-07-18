const hostUrl = import.meta.env.VITE_API_URL;

const validateSection = (section) => {
  if (!section || typeof section !== "object") {
    throw new Error("Invalid section object");
  }
  if (
    !section.title ||
    typeof section.title !== "string" ||
    section.title.trim().length === 0
  ) {
    throw new Error("Invalid section title");
  }
  if (
    !section.content ||
    typeof section.content !== "string" ||
    section.content.trim().length === 0
  ) {
    throw new Error("Invalid section content");
  }
  if (section.imageUrl && typeof section.imageUrl !== "string") {
    throw new Error("Invalid image URL");
  }
  if (section.altText && typeof section.altText !== "string") {
    throw new Error("Invalid alt text");
  }
};
export const fetchSections = async () => {
  try {
    const response = await fetch(`${hostUrl}/api/about`);
    if (!response.ok) {
      throw new Error(`Failed to fetch sections: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching sections:", error);
    throw error;
  }
};

export const createSection = async (newSection) => {
  validateSection(newSection);
  try {
    const response = await fetch(`${hostUrl}/api/about`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSection),
    });
    if (!response.ok) {
      throw new Error(`Failed to create section: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error creating section:", error);
    throw error;
  }
};

export const updateSection = async (id, updatedSection) => {
  validateSection(updatedSection);
  try {
    const response = await fetch(`${hostUrl}/api/about/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedSection),
    });
    if (!response.ok) {
      throw new Error(`Failed to update section: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error updating section:", error);
    throw error;
  }
};

export const deleteSection = async (id) => {
  try {
    const response = await fetch(`${hostUrl}/api/about/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete section: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting section:", error);
    throw error;
  }
};

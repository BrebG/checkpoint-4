import { useState, useEffect } from "react";
import {
  fetchSections,
  createSection,
  updateSection,
  deleteSection,
} from "../services/aboutServices";
import SectionForm from "../components/SectionForm";
import SectionCard from "../components/SectionCard";
import "./About.scss";
import "../style/button.scss";

function About() {
  const [sections, setSections] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const getSections = async () => {
      try {
        const data = await fetchSections();
        setSections(data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    getSections();
  }, []);

  const handleSectionSubmit = async (newSection) => {
    try {
      await createSection(newSection);
      const data = await fetchSections();
      setSections(data);
      setShowForm(false);
    } catch (error) {
      console.error("Error posting section:", error);
    }
  };

  const handleEdit = async (id) => {
    const sectionToEdit = sections.find((section) => section.id === id);
    if (!sectionToEdit) return;

    const updatedTitle = prompt("Modifier le titre :", sectionToEdit.title);
    const updatedContent = prompt(
      "Modifier le contenu :",
      sectionToEdit.content
    );
    const updatedImageUrl = prompt(
      "Modifier l'URL de l'image :",
      sectionToEdit.imageUrl
    );
    const updatedAltText = prompt(
      "Modifier le texte alt de l'image :",
      sectionToEdit.altText
    );

    if (updatedTitle === null || updatedContent === null) return;

    const updatedSection = {
      ...sectionToEdit,
      title: updatedTitle,
      content: updatedContent,
      imageUrl: updatedImageUrl,
      altText: updatedAltText,
    };

    try {
      const updatedSectionFromServer = await updateSection(id, updatedSection);
      setSections(
        sections.map((section) =>
          section.id === id ? updatedSectionFromServer : section
        )
      );
    } catch (error) {
      console.error("Error updating section:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSection(id);
      setSections(sections.filter((section) => section.id !== id));
    } catch (error) {
      console.error("Error deleting section:", error);
    }
  };

  return (
    <>
      <div className="edit-button-container">
        {sections.length > 0 && (
          <button
            type="button"
            className="button-sm-everglade-outlined edit-mode-button"
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? "Modifications terminées" : "Modifier les sections"}
          </button>
        )}
        {sections.length === 0 && editMode && setEditMode(false)}
      </div>
      <div className="about-page-container">
        <h2>À propos du thérapeute</h2>
        {sections.length > 0 ? (
          sections.map((section, index) => (
            <SectionCard
              key={section.id}
              id={section.id}
              title={section.title}
              content={section.content}
              imageUrl={section.image_url}
              altText={section.alt_text}
              editMode={editMode}
              onEdit={handleEdit}
              onDelete={handleDelete}
              index={index}
            />
          ))
        ) : (
          <p>Aucune information n'est disponible pour le moment.</p>
        )}
        {showForm && <SectionForm onSubmit={handleSectionSubmit} />}
        <button
          type="button"
          className="button-md-everglade-outlined"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Annuler" : "Ajouter une section"}
        </button>
      </div>
    </>
  );
}

export default About;

import "./Form.scss";
import "../style/button.scss";
import "../style/input.scss";
import { Form } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const hostUrl = import.meta.env.VITE_API_URL;

function ContactForm() {
  return (
    <>
      <div className="contact-form-div">
        <Form method="post">
          <h2>Me contacter</h2>
          <section className="name">
            <label htmlFor="username">Nom d"utilisateur</label>
            <input
              id="username"
              name="username"
              placeholder="Entrer votre nom d'utilisateur"
              className="input-sm-gray-outlined"
              required
            />
            <p>Requis</p>
          </section>
          <section className="email">
            <label htmlFor="email">Email </label>
            <input
              id="email"
              name="email"
              placeholder="Entrer votre adresse mail"
              className="input-sm-gray-outlined"
              required
            />
            <p>Requis</p>
          </section>
          <section>
            <h3>Type de requête</h3>
            <div className="topic-buttons">
              <input
                id="booking"
                type="radio"
                name="topic"
                value="Demande de rendez-vous"
              />
              <label htmlFor="booking" className="button-md-olive-outlined">
                Demande de rendez-vous
              </label>
              <input
                id="follow-up"
                type="radio"
                name="topic"
                value="suivi post-consultation"
              />
              <label htmlFor="follow-up" className="button-md-olive-outlined">
                Suivi post-consultation
              </label>
              <input id="review" type="radio" name="topic" value="avis" />
              <label htmlFor="review" className="button-md-olive-outlined">
                Laisser un avis
              </label>
            </div>
          </section>
          <section>
            <label htmlFor="titre">Titre</label>
            <input
              id="titre"
              name="title"
              placeholder="Entrez un titre pour votre message"
              className="input-sm-gray-outlined"
              required
            />
            <h3>Message </h3>
            <textarea
              className="input-sm-gray-outlined"
              placeholder="Votre message"
              required
              id="message"
              name="message"
            />
            <p>500 caractères maximum</p>
          </section>
          <input
            id="submit"
            type="submit"
            name="submit"
            value="Valider"
            className="button-lg-olive-fullfilled"
          />
        </Form>
      </div>
      <Toaster />
    </>
  );
}

export async function postMessageToAdmin({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const email = formData.get("email");
  const title = formData.get("title");
  const message = formData.get("message");
  const topic = formData.get("topic");
  const sendingTime = new Date().toISOString().slice(0, 19).replace("T", " ");

  const requestBody = {
    username,
    email,
    title,
    message,
    topic,
    sendingTime,
  };
  try {
    const response = await fetch(`${hostUrl}/api/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const responseBody = await response.json();
    if (!response.ok) {
      toast.error("Oops. Une erreur s'est produite", {
        duration: 4000,
        position: "top-right",
      });

      return null;
    }

    if (response.ok) {
      toast.success("Message envoyé !", {
        duration: 4000,
        position: "top-right",
      });
      return responseBody;
    }
  } catch (e) {
    console.error(e.message);
    return { error: true };
  }
  return null;
}

export default ContactForm;

import ContentCard from "../components/ContentCard";
import portrait from "../assets/images/portrait.webp";
import herbalism from "../assets/images/herbalism-landing-page.webp";
import "./LandingPage.scss";

function LandingPage() {
  return (
    <>
      <header>
        <blockquote>
          "Que ton aliment soit ton premier remède." - Hippocrate
        </blockquote>
        <blockquote>
          "Chaque coup de colère est un coup de vieux, chaque sourire est un
          coup de jeune." - Proverbe Chinois
        </blockquote>
        <blockquote>
          "Traiter la personne, non le mal. Traiter la cause, non les effets" -
          Dr Edward Bach
        </blockquote>
      </header>
      <main>
        <section>
          <ContentCard
            imageSrc={portrait}
            title="Votre naturopathe"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </section>
        <section>
          <ContentCard
            imageSrc={herbalism}
            title="La naturopathie"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </section>
      </main>
    </>
  );
}

export default LandingPage;

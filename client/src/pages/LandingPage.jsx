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
            description="Bienvenue sur mon site. Je suis Marie Dupont, naturopathe diplômée, passionnée par la santé naturelle et le bien-être global. Depuis plus de 10 ans, j'accompagne mes clients vers un équilibre harmonieux de leur corps et de leur esprit grâce à des méthodes naturelles et holistiques.

Mon parcours est riche et varié. J'ai commencé par des études en biologie, ce qui m'a permis de comprendre les mécanismes du corps humain. Par la suite, j'ai complété ma formation par un diplôme de naturopathie, me spécialisant en nutrition, phytothérapie et aromathérapie."
          />
        </section>
        <section>
          <ContentCard
            imageSrc={herbalism}
            title="La naturopathie"
            description="Mon approche est personnalisée, chaque personne étant unique. Je propose des consultations individuelles, des ateliers et des conférences pour partager mes connaissances et aider chacun à retrouver une santé optimale de manière naturelle.

Je vous invite à explorer mon site pour en savoir plus sur mes services et à me contacter pour toute question ou prise de rendez-vous. Au plaisir de vous rencontrer et de vous accompagner sur le chemin du bien-être."
          />
        </section>
      </main>
    </>
  );
}

export default LandingPage;

import "./Legal.scss";

function MentionsLegales() {
  return (
    <div className="legal-container">
      <h2>Mentions Légales</h2>
      <div className="text-container">
        <section>
          <h3>1. Informations légales</h3>
          <p>
            Le site [Nom du site] est édité par WebDruid.
            <br />
            Adresse : [Adresse complète]
            <br />
            Téléphone : [Numéro de téléphone]
            <br />
            Email : [Adresse email]
            <br />
            SIRET : [Numéro SIRET]
          </p>
        </section>
        <section>
          <h3>3. Hébergement</h3>
          <p>[Informations sur l'hébergeur du site]</p>
        </section>

        <section>
          <h3>3. Propriété intellectuelle</h3>
          <p>
            Tout le contenu du site est protégé par le droit d'auteur. Toute
            reproduction est interdite sans autorisation préalable.
          </p>
        </section>

        <section>
          <h3>4. Confidentialité et protection des données</h3>
          <p>
            Les informations collectées sont strictement confidentielles. Elles
            sont traitées conformément au RGPD.
          </p>
        </section>

        <section>
          <h3>5. Cookies</h3>
          <p>[Informations sur l'utilisation des cookies sur le site]</p>
        </section>
      </div>
    </div>
  );
}

export default MentionsLegales;

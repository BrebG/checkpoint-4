import "./Legal.scss";

function CGV() {
    return (
        <div className="legal-container">
            <h2>Conditions Générales de Vente</h2>
            <div className="text-container">
                <section>
                    <h3>1. Services proposés</h3>
                    <p>
                        Marie Dupont propose des consultations de naturopathie, des conseils
                        en bien-être et des programmes personnalisés de santé naturelle.
                    </p>
                </section>

                <section>
                    <h3>3. Tarifs et paiement</h3>
                    <p>
                        Les tarifs des consultations et services sont indiqués sur le site.
                        Le paiement s'effectue en chèque ou espèces, ou bien si consultation
                        en visio conférence, par système de paiement en ligne.
                    </p>
                </section>

                <section>
                    <h3>3. Annulation et remboursement</h3>
                    <p>
                        Toute annulation doit être effectuée au moins 48 heures avant le
                        rendez-vous. Passé ce délai, la consultation sera due.
                    </p>
                </section>

                <section>
                    <h3>4. Responsabilité</h3>
                    <p>
                        Les conseils prodigués ne se substituent en aucun cas à un avis
                        médical. Il est recommandé de consulter un médecin pour tout
                        problème de santé.
                    </p>
                </section>

                <section>
                    <h3>5. Litiges</h3>
                    <p>
                        En cas de litige, une solution amiable sera recherchée avant toute
                        action judiciaire. Le droit français s'applique.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default CGV;

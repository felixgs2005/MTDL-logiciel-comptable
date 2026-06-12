import styles from './PolitiqueConfidentialite.module.css'

export default function PolitiqueConfidentialite() {
    return (
        <div className={styles.page}>
            <div className="pageHero">
                <div className="container">
                    <span className="pageEyebrow">Transparence & confiance</span>
                    <h1 className="pageTitle">Politique de confidentialité</h1>
                </div>
            </div>

            <div className="container">
                <div className={styles.content}>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Informations collectées</h2>
                        <p>Dans le cadre de nos services, MTDL Services comptables peut collecter les renseignements personnels suivants :</p>
                        <ul className={styles.list}>
                            <li>Prénom et nom</li>
                            <li>Adresse courriel</li>
                            <li>Nom de l'entreprise ou de la compagnie</li>
                        </ul>
                        <p>Ces informations sont collectées uniquement lorsque vous nous les transmettez volontairement, notamment lors d'une prise de contact, d'une demande de soumission ou de l'utilisation de nos services.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Utilisation des informations</h2>
                        <p>Les renseignements collectés sont utilisés exclusivement aux fins suivantes :</p>
                        <ul className={styles.list}>
                            <li>Vous contacter en réponse à vos demandes</li>
                            <li>Vous fournir les services comptables convenus</li>
                            <li>Assurer le suivi de votre dossier client</li>
                            <li>Respecter nos obligations légales et réglementaires</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Conservation des données</h2>
                        <p>
                            MTDL Services comptables conserve vos renseignements personnels aussi longtemps que nécessaire
                            pour vous fournir nos services ou pour respecter les obligations légales applicables.
                            Vos données ne sont jamais vendues, louées ni partagées à des tiers à des fins commerciales.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Vos droits</h2>
                        <p>
                            Vous avez le droit d'accéder aux renseignements personnels que nous détenons à votre sujet,
                            de les faire corriger ou de demander leur suppression. Pour exercer ces droits, veuillez
                            nous contacter directement.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Sécurité</h2>
                        <p>
                            Nous prenons toutes les mesures raisonnables pour protéger vos renseignements personnels
                            contre tout accès non autorisé, divulgation, altération ou destruction, conformément aux
                            lois applicables en matière de protection des renseignements personnels au Québec.
                        </p>
                    </section>

                    <section className={styles.deletionSection}>
                        <div className={styles.deletionIcon}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                <path d="M10 11v6M14 11v6" />
                                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                            </svg>
                        </div>
                        <div>
                            <h2 className={styles.deletionTitle}>Demande de suppression de vos données</h2>
                            <p className={styles.deletionText}>
                                Si vous souhaitez que MTDL Services comptables supprime l'ensemble des renseignements
                                personnels vous concernant, veuillez en faire la demande par courriel en précisant
                                votre nom complet et le nom de votre entreprise.
                            </p>
                            <a href="mailto:infos@mtdl.ca?subject=Demande de suppression de données personnelles" className={styles.deletionBtn}>
                                infos@mtdl.ca
                            </a>
                            <p className={styles.deletionNote}>
                                Nous traiterons votre demande dans un délai raisonnable, sous réserve des obligations
                                légales de conservation qui pourraient s'appliquer.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Contact</h2>
                        <p>Pour toute question relative à la présente politique ou à vos renseignements personnels :</p>
                        <div className={styles.contactBlock}>
                            <p><strong>MTDL Services comptables</strong></p>
                            <p>1300 Boul. du Mi-Vallon, Suite 111A, Sherbrooke (Québec)</p>
                            <a href="mailto:infos@mtdl.ca">infos@mtdl.ca</a>
                            <a href="tel:8195607001">819-560-7001</a>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
import styles from './Services.module.css'

const services = [
  'Tenue de livres complète (bilingue FR/EN)',
  'Conciliation bancaire et cartes de crédit',
  'Préparation des états financiers mensuels et annuels',
  'Production de rapports TPS/TVQ et DAS',
  'Production des feuillets fiscaux (T4, T4A, Relevés 1, etc.)',
  'Simulation d\'impôt et planification fiscale de base',
  'Analyse financière personnalisée (rentabilité, flux de trésorerie, projections)',
  'Préparation des documents pour la déclaration de revenus',
  'Suivi des comptes clients et fournisseurs',
  'Classement numérique et organisation comptable',
  'Soutien administratif général (tableaux, formulaires, modèles)',
  'Accompagnement dans la mise en place de systèmes comptables (QuickBooks, Excel, etc.)',
]

export default function Services() {
  return (
    <div className={styles.page}>
      <div className="pageHero">
        <div className="container">
          <span className="pageEyebrow">Ce que nous faisons</span>
          <h1 className="pageTitle">Nos services</h1>
          <p className="pageSub">
            Une offre complète pour vous libérer des contraintes administratives
            et financières de votre entreprise.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.serviceList}>
          {services.map(s => (
            <div key={s} className={styles.serviceItem}>
              <span className={styles.check}>✓</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <p>Vous avez des besoins particuliers ?</p>
          <a href="mailto:infos@mtdl.ca" className={styles.ctaBtn}>Contactez-nous</a>
        </div>
      </div>
    </div>
  )
}

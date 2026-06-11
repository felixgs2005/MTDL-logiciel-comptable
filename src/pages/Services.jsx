import styles from './Services.module.css'

const services = [
  {
    title: 'Tenue de livres',
    desc: 'Tenue de livres complète et bilingue, adaptée à votre réalité.',
    items: ['Tenue de livres complète (bilingue FR/EN)', 'Conciliation bancaire et cartes de crédit', 'Suivi des comptes clients et fournisseurs', 'Classement numérique et organisation comptable'],
  },
  {
    title: 'États financiers',
    desc: 'Des rapports clairs pour prendre les bonnes décisions.',
    items: ['Préparation des états financiers mensuels et annuels', 'Analyse financière personnalisée (rentabilité, flux de trésorerie, projections)'],
  },
  {
    title: 'Taxes & Conformité',
    desc: 'Production et remise dans les délais, sans stress.',
    items: ['Production de rapports TPS/TVQ et DAS', 'Production des feuillets fiscaux (T4, T4A, Relevés 1, etc.)', 'Préparation des documents pour la déclaration de revenus'],
  },
  {
    title: 'Planification fiscale',
    desc: 'Anticipez et optimisez votre situation fiscale.',
    items: ['Simulation d\'impôt et planification fiscale de base'],
  },
  {
    title: 'Soutien administratif',
    desc: 'Organisation et structure pour vous simplifier la vie.',
    items: ['Soutien administratif général (tableaux, formulaires, modèles)', 'Accompagnement dans la mise en place de systèmes comptables (QuickBooks, Excel, etc.)'],
  },
  {
    title: 'Consultation',
    desc: 'Un regard expert sur votre gestion financière.',
    items: ['Analyse financière personnalisée', 'Budgets prévisionnels', 'Réorganisation comptable'],
  },
]

export default function Services() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Ce que nous faisons</span>
          <h1 className={styles.title}>Nos services</h1>
          <p className={styles.sub}>
            Une offre complète pour vous libérer des contraintes administratives
            et financières de votre entreprise.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {services.map(s => (
            <div key={s.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <ul className={styles.list}>
                {s.items.map(i => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Vous ne trouvez pas ce que vous cherchez ?</p>
          <a href="mailto:infos@mtdl.ca" className={styles.ctaBtn}>Contactez-nous</a>
        </div>
      </div>
    </div>
  )
}
import styles from './Services.module.css'

const services = [
  {
    icon: '',
    title: 'Tenue de livres',
    desc: 'Saisie des transactions, rapprochements bancaires, suivi des comptes fournisseurs et clients. Vos livres toujours à jour.',
    items: ['Saisie quotidienne', 'Rapprochements bancaires', 'Comptes payables/recevables'],
  },
  {
    icon: '',
    title: 'États financiers',
    desc: "Préparation d'états financiers clairs pour vous aider à prendre les bonnes décisions.",
    items: ['Bilan', 'État des résultats', 'Flux de trésorerie'],
  },
  {
    icon: '',
    title: 'Taxes & Conformité',
    desc: 'Production et remise des déclarations de taxes TPS/TVQ dans les délais prévus.',
    items: ['Déclarations TPS/TVQ', 'Remises gouvernementales', 'Gestion des échéances'],
  },
  {
    icon: '',
    title: 'Paie',
    desc: 'Traitement de la paie, relevés de lemployeur, et conformité aux lois du travail.',
    items: ['Calcul des salaires', 'Relevés 1 / T4', 'DAS employeur'],
  },
  {
    icon: '',
    title: 'Soutien administratif',
    desc: 'Organisation de vos dossiers, numérisation et classement de documents financiers.',
    items: ['Gestion documentaire', 'Numérisation', 'Classement électronique'],
  },
  {
    icon: '',
    title: 'Consultation',
    desc: 'Conseils sur la structure financière et budgétaire de votre entreprise.',
    items: ['Budgets prévisionnels', 'Analyse de coûts', 'Réorganisation comptable'],
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

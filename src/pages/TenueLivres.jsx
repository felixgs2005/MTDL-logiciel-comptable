import styles from './TenueLivres.module.css'

const steps = [
  { num: '01', title: 'Collecte des documents', desc: 'Vous nous transmettez vos factures, relevés bancaires et reçus via notre système sécurisé ou en main propre.' },
  { num: '02', title: 'Saisie & classification', desc: 'Chaque transaction est enregistrée et classée selon le plan comptable de votre entreprise.' },
  { num: '03', title: 'Rapprochements', desc: 'Nous vérifions que vos livres correspondent parfaitement à vos relevés bancaires.' },
  { num: '04', title: 'Rapports mensuels', desc: 'Vous recevez un résumé clair de votre situation financière chaque mois.' },
]

const includes = [
  'Saisie des transactions (revenus et dépenses)',
  'Rapprochements bancaires mensuels',
  'Gestion des comptes fournisseurs et clients',
  'Suivi des dépenses par catégorie',
  'Préparation des remises TPS/TVQ',
  'Rapports financiers périodiques',
  'Accès en temps réel à vos données',
  'Support illimité par courriel',
]

export default function TenueLivres() {
  return (
    <div className={styles.page}>
      <div className={styles.heroTeal}>
        <div className="container">
          <span className={styles.heroTealEyebrow}>Service phare</span>
          <h1 className={styles.heroTealTitle}>Tenue de livres</h1>
          <p className={styles.heroTealSub}>Confiez-nous votre comptabilité quotidienne et concentrez-vous sur ce que vous faites de mieux : développer votre entreprise.</p>
          <a href="https://calendar.app.google/HDQ9tgi7x5n7YTrg8" target="_blank" rel="noopener noreferrer" className={styles.heroTealBtn}>
            Demander une soumission gratuite
          </a>
        </div>
      </div>
      <div className="container">
        <div className={styles.sectionLabel}>Le processus</div>
        <h2 className={styles.sectionTitle}>Comment ça fonctionne</h2>
        <div className={styles.steps}>
          {steps.map(s => (
            <div key={s.num} className={styles.step}>
              <div className={styles.stepNum}>{s.num}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.includes}>
          <div className={styles.includesLeft}>
            <h2 className={styles.includesTitle}>Ce qui est inclus</h2>
            <p className={styles.includesDesc}>Notre service de tenue de livres couvre tous vos besoins comptables de base pour que vos finances soient toujours propres et à jour.</p>
            <a href="mailto:infos@mtdl.ca" className={styles.btnWhite}>Discuter de vos besoins</a>
          </div>
          <div className={styles.includesRight}>
            <ul className={styles.list}>
              {includes.map(item => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.check}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

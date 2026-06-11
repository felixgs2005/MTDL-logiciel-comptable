import styles from './SaviezVousQue.module.css'

const facts = [
  {
    cat: 'Fiscalité',
    q: 'Saviez-vous que les frais de bureau à domicile sont déductibles ?',
    a: 'Si vous utilisez une partie de votre domicile pour votre entreprise, vous pouvez déduire une portion des frais délectricité, chauffage, internet et loyer (ou intérêts hypothécaires).',
  },
  {
    cat: 'Petites entreprises',
    q: 'Saviez-vous que le seuil dinscription aux taxes est de 30 000 $ ?',
    a: 'Dès que vos revenus dépassent 30 000 $ sur quatre trimestres consécutifs, vous devez vous inscrire aux fichiers TPS/TVQ. Mieux vaut le faire en amont pour éviter les pénalités.',
  },
  {
    cat: 'Paie',
    q: 'Saviez-vous que les cotisations RRQ et AE peuvent varier chaque année ?',
    a: "Les taux de cotisation à la Régie des rentes du Québec (RRQ) et à l'assurance-emploi (AE) sont révisés annuellement. Il est essentiel de mettre à jour votre logiciel de paie au 1er janvier.",
  },
  {
    cat: 'Technologie',
    q: 'Saviez-vous que la comptabilité en nuage facilite les audits ?',
    a: 'Avec une comptabilité numérique bien organisée, les révisions et audits deviennent beaucoup plus rapides. Tout est accessible, tracé et classé automatiquement.',
  },
  {
    cat: 'Déductions',
    q: "Saviez-vous que les repas d'affaires sont déductibles à 50 % ?",
    a: 'Les repas pris dans un contexte professionnel (rencontres clients, partenaires) peuvent être déduits à hauteur de 50 % du montant. Conservez bien vos reçus et notez le but du repas.',
  },
  {
    cat: 'Obligations',
    q: 'Saviez-vous que vous devez conserver vos documents 6 ans ?',
    a: "Au Québec, les entreprises ont l'obligation légale de conserver leurs documents comptables et fiscaux pendant au moins 6 ans à compter de la fin de l'année fiscale concernée.",
  },
]

export default function SaviezVousQue() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Conseils & astuces</span>
          <h1 className={styles.title}>Saviez-vous que…</h1>
          <p className={styles.sub}>
            Des faits pratiques sur la comptabilité, la fiscalité et la gestion d'entreprise
            pour mieux gérer vos finances.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {facts.map(f => (
            <div key={f.q} className={styles.card}>
              <span className={styles.cat}>{f.cat}</span>
              <h3 className={styles.question}>{f.q}</h3>
              <p className={styles.answer}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

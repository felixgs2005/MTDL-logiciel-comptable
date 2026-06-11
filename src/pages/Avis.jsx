import styles from './Avis.module.css'

const reviews = [
  { name: 'Marie-Claude B.', stars: 5, text: 'Service exceptionnel, réactif et professionnel. Mon dossier est toujours impeccable. Je recommande MTDL sans hésitation à tous les entrepreneurs.' },
  { name: 'Jean-François T.', stars: 5, text: 'Équipe compétente et très à l\'écoute. Ils ont simplifié ma comptabilité du jour au lendemain. Un investissement qui en vaut vraiment la peine.' },
  { name: 'Amélie R.', stars: 5, text: 'J\'apprécie énormément la transparence et la rigueur. Les rapports sont clairs, les délais respectés. Exactement ce qu\'on cherche dans un service comptable.' },
  { name: 'Patrick L.', stars: 5, text: 'Très professionnel, disponible et toujours prêt à expliquer. Ma gestion financière est devenue beaucoup plus sereine depuis que je fais appel à MTDL.' },
  { name: 'Isabelle M.', stars: 5, text: 'Un accompagnement humain et de qualité. On sent que l\'équipe comprend vraiment les besoins des petites entreprises. Service irréprochable.' },
  { name: 'Sébastien D.', stars: 5, text: 'Rapide, précis, fiable. Ils ont pris en main mes livres en quelques jours et depuis je ne me soucie plus de rien. Vraiment au top.' },
]

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
          <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.41.59 3.41L7 8.77l-3.09 1.685.59-3.41L2 4.635l3.455-.545L7 1z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Avis() {
  return (
    <div className={styles.page}>
      <div className="pageHero">
        <div className="container">
          <span className="pageEyebrow">Ce que disent nos clients</span>
          <h1 className="pageTitle">Nos avis</h1>
          <p className="pageSub">La satisfaction de nos clients est notre meilleure carte de visite.</p>
          <div className={styles.badge}>
            <span className={styles.badgeNum}>4.9</span>
            <Stars count={5} />
            <span className={styles.badgeLabel}>Note moyenne Google</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.grid}>
          {reviews.map(r => (
            <div key={r.name} className={styles.card}>
              <Stars count={r.stars} />
              <p className={styles.text}>"{r.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{r.name[0]}</div>
                <span className={styles.name}>{r.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.googleCta}>
          <p>Vous êtes client MTDL ? Partagez votre expérience.</p>
          <a href="https://g.page/r/review" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Laisser un avis Google
          </a>
        </div>
      </div>
    </div>
  )
}

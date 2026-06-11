import styles from './Logiciel.module.css'
import cellphone from '../assets/cellphone.webp'

const features = [
  { title: 'Tableaux de bord', desc: 'Visualisez vos finances en temps réel avec des indicateurs clairs et pertinents.' },
  { title: 'Gestion de documents', desc: 'Téléversez et organisez vos reçus, factures et relevés directement depuis votre téléphone.' },
  { title: 'Collaboration comptable', desc: 'Communiquez directement avec votre comptable MTDL via l\'application.' },
  { title: 'Rappels fiscaux', desc: 'Ne manquez plus aucune échéance grâce à nos alertes automatiques personnalisées.' },
]

export default function Logiciel() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <span className={styles.badge}>Bientôt disponible</span>
              <h1 className={styles.title}>MTDL+ App</h1>
              <p className={styles.sub}>
                Une application mobile pensée pour les entrepreneurs québécois.
                Gérez vos finances, suivez vos dépenses et collaborez avec votre comptable
                — directement depuis votre téléphone.
              </p>
              <a href="https://mtdl-app.web.app/" target="_blank" rel="noopener noreferrer" className={styles.btn}>
                Voir la page de l'application
              </a>
            </div>
            <div className={styles.heroImg}>
              <img src={cellphone} alt="MTDL+ App" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className={styles.sectionTitle}>Fonctionnalités prévues</h2>
        <div className={styles.grid}>
          {features.map(f => (
            <div key={f.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <div>
            <h2 className={styles.ctaTitle}>Soyez parmi les premiers informés</h2>
            <p className={styles.ctaSub}>
              L'application MTDL+ est en développement. Visitez notre page dédiée pour
              suivre l'avancement du projet et vous inscrire à la liste d'attente.
            </p>
          </div>
          <a href="https://mtdl-app.web.app/" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Visiter mtdl-app.web.app
          </a>
        </div>
      </div>
    </div>
  )
}

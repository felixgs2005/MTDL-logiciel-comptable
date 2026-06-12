import { Link } from 'react-router-dom'
import cellphone from '../assets/cellphone.webp'
import styles from './Home.module.css'

const pillars = [
  { title: 'Professionnalisme', desc: 'Un service précis, ponctuel et conforme aux normes en vigueur.' },
  { title: 'Proximité', desc: 'Une écoute attentive et un accompagnement véritablement personnalisé.' },
  { title: 'Excellence', desc: 'La recherche constante de la qualité et de l\'amélioration continue.' },
  { title: 'Intégrité', desc: 'Des relations fondées sur la confiance et la transparence totale.' },
]

const highlights = [
  { num: '10+', label: 'Années d\'expérience' },
  { num: '200+', label: 'Clients accompagnés' },
  { num: '4.9/5', label: 'Note moyenne' },
]

const quickServices = [
  'Tenue de livres',
  'États financiers',
  'TPS / TVQ / DAS',
  'Feuillets fiscaux',
  'Planification fiscale',
  'Soutien administratif',
]

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>Sherbrooke · Estrie</span>
            <h1 className={styles.heroTitle}>
              Services comptables <em>humains</em> et sur mesure
            </h1>
            <p className={styles.heroSub}>
              MTDL accompagne les entrepreneurs et entreprises dans leur quotidien financier —
              tenue de livres, fiscalité, et bien plus.
            </p>
            <div className={styles.heroActions}>
              <a href="https://calendar.app.google/HDQ9tgi7x5n7YTrg8" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                Prendre rendez-vous
              </a>
              <Link to="/services" className={styles.btnOutline}>Nos services</Link>
            </div>
            <div className={styles.stats}>
              {highlights.map(h => (
                <div key={h.num} className={styles.stat}>
                  <span className={styles.statNum}>{h.num}</span>
                  <span className={styles.statLabel}>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageWrap}>
              <img src={cellphone} alt="Application MTDL+" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.quickServices}>
        <div className={`container ${styles.quickServicesInner}`}>
          {quickServices.map(s => (
            <div key={s} className={styles.quickService}>
              <span className={styles.quickServiceLabel}>{s}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.mission}>
        <div className={`container ${styles.missionInner}`}>
          <div className={styles.missionLeft}>
            <div className={styles.missionLabel}>Notre mission</div>
            <h2 className={styles.missionTitle}>
              Vous simplifier la vie,<br />
              pour que vous vous<br />
              <em>concentriez sur l'essentiel.</em>
            </h2>
            <p className={styles.missionText}>
              Que ce soit pour des besoins administratifs, comptables ou créatifs,
              nous mettons notre expertise à votre service avec fiabilité et bienveillance.
            </p>
          </div>
          <div className={styles.missionRight}>
            {pillars.map(p => (
              <div key={p.title} className={styles.missionPillar}>
                <div className={styles.pillarTitle}>{p.title}</div>
                <div className={styles.pillarDesc}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaTitle}>Prêt à déléguer votre comptabilité ?</h2>
            <p className={styles.ctaSub}>Chaque client mérite une attention unique.</p>
          </div>
          <div className={styles.ctaButtons}>
            <a href="https://calendar.app.google/HDQ9tgi7x5n7YTrg8" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              Prendre rendez-vous
            </a>
            <a href="tel:+18195607001" className={styles.ctaBtnOutline}>819-560-7001</a>
          </div>
        </div>
      </section>
    </div>
  )
}

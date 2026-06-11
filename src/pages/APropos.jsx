import styles from './APropos.module.css'

const PHOTO_URL = 'https://static.wixstatic.com/media/ed63de_594b6f38642f404bae9552f2846c2557~mv2.jpg/v1/fill/w_258,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/403843488_122138610746015698_3907623328066767174_n.jpg'

const accreditations = [
  'Accréditée auprès de Revenu Québec pour la production et la transmission électronique des déclarations de revenus et des taxes',
  'Représentante autorisée auprès de l\'Agence du revenu du Canada (ARC) pour entreprises incorporées et travailleurs autonomes',
]

export default function APropos() {
  return (
    <div className={styles.page}>
      <div className="pageHero">
        <div className="container">
          <span className="pageEyebrow">Notre histoire</span>
          <h1 className="pageTitle">À propos de MTDL</h1>
        </div>
      </div>
      <div className="container">
        <div className={styles.intro}>
          <div className={styles.introText}>
            <h2 className={styles.introTitle}>
              Un cabinet de proximité,<br />
              <em>au service des entrepreneurs.</em>
            </h2>
            <p>
              MTDL Services comptables est née d'une conviction simple : chaque entrepreneur mérite
              un service comptable qui le comprend vraiment. Fondé à Sherbrooke, notre cabinet allie
              rigueur professionnelle et approche humaine pour accompagner les PME et travailleurs
              autonomes au quotidien.
            </p>
            <p>
              Nos services vont de la tenue de livres à la consultation financière, en passant par la
              paie et les déclarations fiscales. Ce qui nous distingue, c'est notre disponibilité,
              notre transparence et notre engagement à long terme envers chaque client.
            </p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Adresse</span>
              <span>1300 Boul. du Mi-Vallon, Suite 111A<br />Sherbrooke (Québec)</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Téléphone</span>
              <a href="tel:+18195607001">819-560-7001</a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Courriel</span>
              <a href="mailto:infos@mtdl.ca">infos@mtdl.ca</a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Rendez-vous</span>
              <a href="https://calendar.app.google/HDQ9tgi7x5n7YTrg8" target="_blank" rel="noopener noreferrer" className={styles.rdvLink}>
                Réserver en ligne →
              </a>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <h2 className={styles.missionTitle}>Notre mission</h2>
        <p className={styles.missionText}>
          Accompagner nos clients dans leurs projets en leur offrant un service fiable, humain et
          sur mesure. Que ce soit pour des besoins administratifs, comptables ou créatifs, nous
          mettons notre expertise à votre service pour vous simplifier la vie et vous permettre de
          vous concentrer sur l'essentiel.
        </p>

        <hr className={styles.divider} />

        <h2 className={styles.sectionTitle}>L'équipe</h2>
        <div className={styles.team}>

          {/* Monika — carte détaillée avec photo */}
          <div className={styles.memberFeatured}>
            <div className={styles.memberPhotoWrap}>
              <img src={PHOTO_URL} alt="Monika Charlebois" className={styles.memberPhoto} />
            </div>
            <div className={styles.memberFeaturedInfo}>
              <div className={styles.memberFeaturedName}>Monika Charlebois</div>
              <div className={styles.memberFeaturedRole}>Présidente · Technicienne comptable</div>
              <p className={styles.memberFeaturedDesc}>
                Spécialisée en comptabilité pour travailleurs autonomes et entreprises incorporées.
              </p>
              <ul className={styles.accreditations}>
                {accreditations.map(a => (
                  <li key={a} className={styles.accreditationItem}>
                    <span className={styles.accreditationDot} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

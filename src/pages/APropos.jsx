import styles from './APropos.module.css'

const team = [
  { initials: 'ML', name: 'Marie-Lou', role: 'Fondatrice & Comptable principale' },
  { initials: 'AC', name: 'Annick', role: 'Tenue de livres & Paie' },
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
              <a href="tel:8195607001">819-560-7001</a>
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

        <h2 className={styles.sectionTitle}>L'équipe</h2>
        <div className={styles.team}>
          {team.map(m => (
            <div key={m.name} className={styles.member}>
              <div className={styles.avatar}>{m.initials}</div>
              <div>
                <div className={styles.memberName}>{m.name}</div>
                <div className={styles.memberRole}>{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

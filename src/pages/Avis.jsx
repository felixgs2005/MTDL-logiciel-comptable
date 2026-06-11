import styles from './Avis.module.css'

const reviews = [
  { name: 'Marélie', stars: 5, text: 'Je suis extrêmement satisfaite avec les services de tenue de livres et de comptabilité pour mon entreprise. Monika est très professionnelle, très disponible et toujours à l’avance. Merci beaucoup pour ton service et ta patience !' },
  { name: 'Ahmad', stars: 5, text: 'Je tiens à souligner l’excellence des services offerts par Mme Monika Charlebois, comptable. Son professionnalisme, sa rigueur et sa disponibilité constante sont grandement appréciés. Elle m’accompagne de façon exemplaire dans la gestion de la tenue de livres, de la paie, des cotisations, des relevés d’emploi ainsi que dans les démarches liées au départ d’une entreprise. Son expertise me permet d’avoir l’esprit en paix quant à la conformité et la saine gestion de mes obligations comptables. Je la recommande sans hésitation.' },
  { name: 'Guillaume', stars: 5, text: 'Une jeune femme professionnelle et à l’écoute de vos exigences n’hésitez pas à contacter MTDL' },
  { name: 'Jérémy', stars: 5, text: 'Service incroyable, apporte un grand soutien et donne de très bon conseil, avec toujours la vision d’aider à accroître ma compagnie et la rendre plus prospère d’années en année' },
  { name: 'Jonathan​', stars: 5, text: 'Service impeccable et professionnel !! Je recommande' },
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
          <a href="https://www.google.com/maps/place/MTDL+Services+comptables+et+tenue+de+livres/@45.3770713,-71.9817538,17z/data=!4m14!1m5!8m4!1e1!2s108628244987532312815!3m1!1e1!3m7!1s0x4cb64bc40c2c18e7:0x9a613d73a8a85000!8m2!3d45.3770676!4d-71.9791789!9m1!1b1!16s%2Fg%2F11l6xl5sym?hl=fr-CA&entry=ttu&g_ep=EgoyMDI2MDYwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Laisser un avis Google
          </a>
        </div>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import logoGradient from '../assets/logo-gradient.webp'
import ScrollToTop from './ScrollToTop'
import styles from './Layout.module.css'

const navLinks = [
  { to: '/', label: 'Accueil', exact: true },
  { to: '/services', label: 'Services' },
  { to: '/tenue-de-livres', label: 'Tenue de livres' },
  { to: '/avis', label: 'Nos avis' },
  { to: '/saviez-vous-que', label: 'Saviez-vous que…' },
  { to: '/a-propos', label: 'À propos' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.root}>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.nav}`}>
          <Link to="/" className={styles.logo}>
            <img src={logoGradient} alt="MTDL+" height="42" />
          </Link>

          <nav className={`${styles.desktopNav}`}>
            {navLinks.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.exact}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
            <a href="https://mtdl-app.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Logiciel à venir
            </a>
          </nav>

          <a href="tel:8195607001" className={styles.cta}>
            819-560-7001
          </a>

          <button
            className={styles.burger}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`${styles.bar} ${open ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen3 : ''}`} />
          </button>
        </div>

        {open && (
          <div className={styles.mobileMenu}>
            {navLinks.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.exact}
                className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
            <a href="https://mtdl-app.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Logiciel à venir
            </a>
            <a href="tel:8195607001" className={styles.mobileCta}>819-560-7001</a>
          </div>
        )}
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <ScrollToTop />

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <div className={styles.footerBrand}>
            <img src={logoGradient} alt="MTDL+" height="36" />
            <p>Services comptables et tenue de livres à Sherbrooke.</p>
          </div>
          <div className={styles.footerLinks}>
            <p className={styles.footerHead}>Navigation</p>
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className={styles.footerLink}>{l.label}</Link>
            ))}
            <a href="https://mtdl-app.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Logiciel à venir
            </a>
          </div>
          <div className={styles.footerContact}>
            <p className={styles.footerHead}>Contact</p>
            <a href="tel:8195607001">819-560-7001</a>
            <a href="mailto:infos@mtdl.ca">infos@mtdl.ca</a>
            <p>1300 Boul. du Mi-Vallon<br />Suite 111A, Sherbrooke</p>
            <a
              href="https://calendar.app.google/HDQ9tgi7x5n7YTrg8"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerBtn}
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} MTDL Services comptables. Tous droits réservés.</span>
        </div>
      </footer>
    </div>
  )
}

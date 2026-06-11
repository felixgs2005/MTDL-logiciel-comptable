import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Avis from './pages/Avis'
import SaviezVousQue from './pages/SaviezVousQue'
import APropos from './pages/APropos'
import TenueLivres from './pages/TenueLivres'
import Logiciel from './pages/Logiciel'

function ScrollToTopOnNav() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<><ScrollToTopOnNav /><Home /></>} />
        <Route path="services" element={<><ScrollToTopOnNav /><Services /></>} />
        <Route path="avis" element={<><ScrollToTopOnNav />Avis  /></>} />
        <Route path="saviez-vous-que" element={<><ScrollToTopOnNav /><SaviezVousQue /></>} />
        <Route path="a-propos" element={<><ScrollToTopOnNav /><APropos /></>} />
        <Route path="tenue-de-livres" element={<><ScrollToTopOnNav /><TenueLivres /></>} />
      </Route>
    </Routes>
  )
}

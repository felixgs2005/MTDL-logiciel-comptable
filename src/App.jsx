import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Avis from './pages/Avis'
import SaviezVousQue from './pages/SaviezVousQue'
import APropos from './pages/APropos'
import TenueLivres from './pages/TenueLivres'
import Logiciel from './pages/Logiciel'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="avis" element={<Avis />} />
        <Route path="saviez-vous-que" element={<SaviezVousQue />} />
        <Route path="a-propos" element={<APropos />} />
        <Route path="tenue-de-livres" element={<TenueLivres />} />
        <Route path="logiciel" element={<Logiciel />} />
      </Route>
    </Routes>
  )
}

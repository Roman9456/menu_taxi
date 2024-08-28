import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzePage';


const menuItems = [
  { title: 'Главная', link: '/' },
  { title: 'Дрифт-такси', link: '/drift' },
  { title: 'Time Attack', link: '/timeattack' },
  { title: 'Forze Karting', link: '/forza' },
];

function App() {

  return (
    <BrowserRouter>
      <Menu menuItems={menuItems} />
      <Routes className="page">
        <Route path="/" element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

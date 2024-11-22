import './Styles/App.css';
import Welcome from './Components/Welcome';
import SaisieAbscence from './Components/SaisieAbscence';
import HistoriqueAbscence from './Components/HistoriqueAbscence';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModificationCard from './Components/ModificationCard';
import AuthProf from './Components/AuthProf';


function App() {
  return (
    <Router> 
      <div className="App">
        <Routes>
          {/* Définition des routes pour faire la navigation au sein de notre SPA */}
          <Route path='/' element={<AuthProf />}/>
          <Route path="/gestion-absence" element={<Welcome />} /> 
          <Route path="/saisie-absence" element={<SaisieAbscence />} />
          <Route path="/historique-absence" element={<HistoriqueAbscence />}/>
          <Route path="/modfication" element={<ModificationCard />}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TentangkamiPage from './pages/TentangkamiPage';
import ProduksPage from './pages/ProduksPage';
import KontakPage from './pages/KontakPage';
import FranchisePage from './pages/FranchisePage';
import LegalPage from './pages/LegalPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentangkami" element={<TentangkamiPage />} /> 
          <Route path="/produk" element={<ProduksPage />} /> 
          <Route path="/kontak" element={<KontakPage />} />
          <Route path="/franchise" element={< FranchisePage/>} />
          <Route path="/legal" element={< LegalPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

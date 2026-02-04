import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Aportes from './pages/Aportes';
import Creditos from './pages/Creditos';
import PagosCreditos from './pages/PagosCreditos';
import Aprobaciones from './pages/Aprobaciones';
import CajaTesoreria from './pages/CajaTesoreria';
import EstadosCuenta from './pages/EstadosCuenta';
import KardexPrestamos from './pages/KardexPrestamos';
import Reportes from './pages/Reportes';
import Documentos from './pages/Documentos';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/cacfe">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="aportes" element={<Aportes />} />
          <Route path="creditos" element={<Creditos />} />
          <Route path="pagos-creditos" element={<PagosCreditos />} />
          <Route path="aprobaciones" element={<Aprobaciones />} />
          <Route path="caja-tesoreria" element={<CajaTesoreria />} />
          <Route path="estados-cuenta" element={<EstadosCuenta />} />
          <Route path="kardex-prestamos" element={<KardexPrestamos />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="documentos" element={<Documentos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

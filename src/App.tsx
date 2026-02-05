import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Layout components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

// Pages
import { Home } from './pages/Home';
import { Servizi } from './pages/Servizi';
import { ServiceDetail } from './pages/ServiceDetail';
import { PrimaVisita } from './pages/PrimaVisita';
import { ChiSono } from './pages/ChiSono';
import { FAQ } from './pages/FAQ';
import { Contatti } from './pages/Contatti';
import { Prenota } from './pages/Prenota';
import { Privacy } from './pages/Privacy';
import { Cookie } from './pages/Cookie';

import './App.css';

// Scroll to top on route change (instant, not smooth)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scroll to avoid seeing the scroll animation on page change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/servizi/:slug" element={<ServiceDetail />} />
        <Route path="/prima-visita" element={<PrimaVisita />} />
        <Route path="/chi-sono" element={<ChiSono />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/prenota" element={<Prenota />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie" element={<Cookie />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import modernTheme from './theme/themes/modern';
import darkTheme from './theme/themes/dark';
import gamingTheme from './theme/themes/gaming';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServicePage from './pages/ServicePage';
import Contact from './pages/Contact';
import Emergency from './pages/Emergency';
import Appointment from './pages/Appointment';
import FAQ from './pages/FAQ';
import LegalNotice from './pages/LegalNotice';
import PCBureauMultimedia from './pages/PCBureauMultimedia';
import Configurateur from './pages/Configurateur';
import ConfigurationDetail from './pages/ConfigurationDetail';

const themes = {
  modern: modernTheme,
  dark: darkTheme,
  gaming: gamingTheme,
};

// Suppression des avertissements ResizeObserver
const suppressResizeObserverErrors = () => {
  const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (args.length > 0 && typeof args[0] === 'string' && resizeObserverLoopErrRe.test(args[0])) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
};

function App() {
  const [currentTheme, setCurrentTheme] = useState('modern');

  useEffect(() => {
    const savedTheme = localStorage.getItem('preferred-theme');
    console.log('Current themes:', themes);
    console.log('Saved theme:', savedTheme);
    console.log('Available themes:', Object.keys(themes));
    if (savedTheme && themes[savedTheme]) {
      console.log('Setting theme to:', savedTheme);
      setCurrentTheme(savedTheme);
    }

    // Suppression des avertissements ResizeObserver au montage du composant
    suppressResizeObserverErrors();

    // Configuration ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // Utilisation de requestAnimationFrame pour limiter les mises à jour
      window.requestAnimationFrame(() => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
      });
    });

    // Observer le corps du document
    resizeObserver.observe(document.body);

    // Gestionnaire d'erreur global pour ResizeObserver
    const handleError = (event) => {
      if (event.message === 'ResizeObserver loop completed with undelivered notifications.') {
        event.stopImmediatePropagation();
      }
    };

    window.addEventListener('error', handleError);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServicePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/urgence" element={<Emergency />} />
              <Route path="/rendez-vous" element={<Appointment />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/mentions-legales" element={<LegalNotice />} />
              <Route path="/pc-bureau-multimedia" element={<PCBureauMultimedia />} />
              <Route path="/configurateur" element={<Configurateur />} />
              <Route path="/configuration/:id" element={<ConfigurationDetail />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

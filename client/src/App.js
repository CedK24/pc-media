import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import modernTheme from './theme/themes/modern';
import darkTheme from './theme/themes/dark';
import gamingTheme from './theme/themes/gaming';
import gradientTheme from './theme/themes/gradient';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServicePage from './pages/ServicePage';
import Contact from './pages/Contact';
import Emergency from './pages/Emergency';
import Appointment from './pages/Appointment';
import FAQ from './pages/FAQ';
import LegalNotice from './pages/LegalNotice';
import Configurateur from './pages/Configurateur';
import ConfigurationDetail from './pages/ConfigurationDetail';
import LegalMentions from './pages/LegalMentions';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import SalesConditions from './pages/SalesConditions';
import PCBureauMultimedia from './pages/PCBureauMultimedia';

const themes = {
  modern: modernTheme,
  dark: darkTheme,
  gaming: gamingTheme,
  gradient: gradientTheme,
};

// Gestionnaire ResizeObserver
const useResizeObserverErrorHandler = () => {
  useEffect(() => {
    const handler = (event) => {
      if (event.message && event.message.includes('ResizeObserver')) {
        event.stopPropagation();
        event.preventDefault();
      }
    };

    window.addEventListener('error', handler);
    window.addEventListener('unhandledrejection', handler);

    return () => {
      window.removeEventListener('error', handler);
      window.removeEventListener('unhandledrejection', handler);
    };
  }, []);
};

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('preferred-theme');
    return savedTheme && themes[savedTheme] ? savedTheme : 'modern';
  });

  useEffect(() => {
    localStorage.setItem('preferred-theme', currentTheme);
  }, [currentTheme]);

  // Utilisation du gestionnaire ResizeObserver
  useResizeObserverErrorHandler();

  const handleThemeChange = (newTheme) => {
    if (themes[newTheme]) {
      setCurrentTheme(newTheme);
    }
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Layout onThemeChange={handleThemeChange} currentTheme={currentTheme}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServicePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/urgence" element={<Emergency />} />
              <Route path="/rendez-vous" element={<Appointment />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/legal" element={<LegalNotice />} />
              <Route path="/configurateur" element={<Configurateur />} />
              <Route path="/configuration/:id" element={<ConfigurationDetail />} />
              <Route path="/mentions-legales" element={<LegalMentions />} />
              <Route path="/conditions-utilisation" element={<TermsOfService />} />
              <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
              <Route path="/politique-cookies" element={<CookiePolicy />} />
              <Route path="/conditions-vente" element={<SalesConditions />} />
              <Route path="/pc-bureau-multimedia" element={<PCBureauMultimedia />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

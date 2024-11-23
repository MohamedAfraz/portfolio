import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';
import BackToTop from './components/BackToTop';
import { ThemeProvider } from './components/ThemeContext';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AnimatePresence>
          <Routes>
            <Route
              path="/"
              element={
                <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
                  <Header />
                  <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Hero />
                    <Projects />
                    <Contact />
                    <About />
                  </motion.main>
                  <Footer />
                  <BackToTop />
                </div>
              }
            />
            <Route 
              path="/projects" 
              element={
                <>
                  <ProjectsPage />
                  <BackToTop />
                </>
              } 
            />
          </Routes>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}
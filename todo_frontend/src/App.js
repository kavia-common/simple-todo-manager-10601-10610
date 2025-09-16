import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';

/**
 * PUBLIC_INTERFACE
 * App
 * Root application component that renders the Home screen.
 * Injects Google Fonts required by the design system for fidelity.
 */
function App() {
  useEffect(() => {
    // Inject Google Fonts link once for design fonts
    const linkId = 'design-google-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Lobster&family=Poppins:wght@500&family=Roboto:wght@500&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends Component {
  handleSocialClick = (e, platform) => {
    e.preventDefault();
    alert(`Our ${platform} page is currently under development! Check back soon for our latest travel updates.`);
  };

  render() {
    const navbarStyle = {
      backgroundColor: '#ffffff',
      padding: '1.25rem 4rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #e5e7eb'
    };

    const logoStyle = {
      fontSize: '1.8rem',
      fontWeight: '900',
      color: '#111827',
      textDecoration: 'none',
      letterSpacing: '-1.5px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    };

    const navLinksStyle = {
      display: 'flex',
      gap: '2.5rem'
    };

    const linkStyle = {
      textDecoration: 'none',
      color: '#4b5563',
      fontWeight: '600',
      fontSize: '0.95rem',
      transition: 'color 0.3s ease'
    };

    const footerStyle = {
      background: 'linear-gradient(to bottom, #0f172a, #020617)',
      color: '#94a3b8',
      textAlign: 'center',
      padding: '6rem 2rem',
      marginTop: '6rem'
    };

    const socialIconStyle = {
      textDecoration: 'none',
      color: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      fontSize: '0.9rem',
      fontWeight: '600'
    };

    return (
      <div style={{ fontFamily: "'Outfit', 'Inter', sans-serif", backgroundColor: '#fcfcfc', minHeight: '100vh' }}>
        {/* Navigation Bar */}
        <nav style={navbarStyle}>
          <Link to="/" style={logoStyle}>
            <div style={{ width: '32px', height: '32px', backgroundColor: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            Global Travels
          </Link>
          <div style={navLinksStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/destinations" style={linkStyle}>Destinations</Link>
            <Link to="/about" style={linkStyle}>About Us</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
          </div>
        </nav>

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Enhanced Footer section */}
        <footer style={footerStyle}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-1.5px', marginBottom: '1rem' }}>GLOBAL TRAVELS</h2>
              <p style={{ maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>We define modern exploration. Connecting people with the most beautiful experiences on Earth since 2026.</p>
            </div>
            
            <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center' }}>
              <a href="#" style={socialIconStyle} onClick={(e) => this.handleSocialClick(e, 'Facebook')}>
                <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" style={{ width: '32px', height: '32px' }} />
                </div>
                <span>Facebook</span>
              </a>
              <a href="#" style={socialIconStyle} onClick={(e) => this.handleSocialClick(e, 'Instagram')}>
                <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={{ width: '32px', height: '32px' }} />
                </div>
                <span>Instagram</span>
              </a>
            </div>
            
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
              <p>© 2026 Global Agency. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

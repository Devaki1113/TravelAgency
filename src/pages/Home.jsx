import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    const heroStyle = {
      background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(\'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80\')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffffff',
      textAlign: 'center',
      padding: '0 2rem',
      clipPath: 'ellipse(150% 100% at 50% 0%)'
    };

    const sectionStyle = {
      padding: '8rem 2rem',
      maxWidth: '1280px',
      margin: '0 auto'
    };

    const cardStyle = {
      backgroundColor: '#ffffff',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
      flex: '1 1 350px',
      padding: '3rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: '1px solid #f1f5f9'
    };

    const btnStyle = {
      background: 'linear-gradient(to right, #3b82f6, #2563eb)',
      color: '#ffffff',
      padding: '1.25rem 3rem',
      textDecoration: 'none',
      borderRadius: '50px',
      fontWeight: '700',
      fontSize: '1.1rem',
      marginTop: '2.5rem',
      display: 'inline-block',
      boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)',
      transition: 'transform 0.3s ease'
    };

    return (
      <div style={{ backgroundColor: '#fdfdfd' }}>
        <header style={heroStyle}>
          <h1 style={{ fontSize: '5rem', marginBottom: '1.5rem', fontWeight: '900', letterSpacing: '-2px', lineHeight: '1.1' }}>
            Escape the <br/><span style={{ color: '#60a5fa' }}>Ordinary.</span>
          </h1>
          <p style={{ fontSize: '1.4rem', marginBottom: '1.5rem', maxWidth: '700px', opacity: '0.9', fontWeight: '400' }}>
            Tailored travel experiences for those who dare to explore the unseen corners of our beautiful planet.
          </p>
          <Link to="/destinations" style={btnStyle}>Start Your Adventure</Link>
        </header>

        <section style={sectionStyle}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#111827', marginBottom: '1rem' }}>The Global Edge</h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Why thousands of travelers choose us for their dream vacations.</p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center' }}>
            <div style={cardStyle}>
              <div style={{ width: '70px', height: '70px', backgroundColor: '#eff6ff', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#111827', fontSize: '1.5rem', fontWeight: '800' }}>Total Security</h3>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7' }}>Comprehensive insurance and 24/7 on-ground support for complete peace of mind.</p>
            </div>
            
            <div style={cardStyle}>
              <div style={{ width: '70px', height: '70px', backgroundColor: '#f0fdf4', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#111827', fontSize: '1.5rem', fontWeight: '800' }}>Expert Curation</h3>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7' }}>Each itinerary is handcrafted by local experts to ensure an authentic experience.</p>
            </div>
            
            <div style={cardStyle}>
              <div style={{ width: '70px', height: '70px', backgroundColor: '#fff7ed', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h3 style={{ marginBottom: '1rem', color: '#111827', fontSize: '1.5rem', fontWeight: '800' }}>Five-Star Value</h3>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7' }}>We leverage global partnerships to bring you luxury standards at competitive prices.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

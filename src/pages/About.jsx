import React, { Component } from 'react';

class About extends Component {
  render() {
    const sectionStyle = {
      padding: '6rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      animation: 'fadeIn 0.8s ease-out'
    };

    const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4rem',
      alignItems: 'center',
      marginTop: '4rem'
    };

    const textStyle = {
      flex: '1 1 500px',
      fontSize: '1.2rem',
      color: '#4b5563',
      lineHeight: '1.9'
    };

    const imageWrapperStyle = {
      flex: '1 1 500px',
      position: 'relative',
      borderRadius: '30px',
      overflow: 'hidden',
      boxShadow: '20px 20px 60px #d1d5db, -20px -20px 60px #ffffff'
    };

    const imageStyle = {
      width: '100%',
      height: 'auto',
      display: 'block',
      transition: 'transform 0.5s ease'
    };

    const badgeStyle = {
      backgroundColor: '#3b82f6',
      color: '#fff',
      padding: '0.5rem 1rem',
      borderRadius: '50px',
      fontSize: '0.9rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      display: 'inline-block',
      marginBottom: '1rem'
    };

    return (
      <div style={sectionStyle}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={badgeStyle}>Since 2026</span>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#111827', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            Crafting Unforgettable <span style={{ color: '#3b82f6' }}>Journeys</span>
          </h2>
          <div style={{ width: '80px', height: '6px', backgroundColor: '#3b82f6', margin: '0 auto', borderRadius: '3px' }}></div>
        </div>

        <div style={containerStyle}>
          <div style={textStyle}>
            <p style={{ marginBottom: '2rem' }}>
              At Global Travels, we believe travel is more than just visiting a place—it's about the stories you tell and the person you become. Our mission is to bridge the gap between expensive luxury and affordable discovery.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              We curate experiences that take you off the beaten path, connecting you with local cultures while ensuring comfort and safety at every turn. From the azure coasts of the Mediterranean to the misty peaks of the Himalayas.
            </p>
            <div style={{ padding: '2rem', borderLeft: '4px solid #3b82f6', backgroundColor: '#fff', borderRadius: '0 15px 15px 0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <p style={{ fontWeight: '800', fontStyle: 'italic', color: '#1f2937', fontSize: '1.3rem' }}>
                "Travel is the only thing you buy that makes you richer."
              </p>
            </div>
          </div>
          <div style={imageWrapperStyle}>
            <img 
               src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
               alt="Adventure" 
               style={imageStyle} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;

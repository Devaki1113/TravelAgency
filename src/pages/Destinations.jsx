import React, { Component } from 'react';

class Destinations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: [
        { id: 1, name: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', description: 'Experience the stunning white-domed buildings and turquoise waters.' },
        { id: 2, name: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', description: 'Immerse yourself in a paradise of lush jungles and vibrant culture.' },
        { id: 3, name: 'Swiss Alps, Switzerland', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', description: 'Witness the majesty of snow-capped peaks and crystal-clear lakes.' },
        { id: 4, name: 'Kyoto, Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', description: 'Explore ancient temples, beautiful gardens, and traditional tea houses.' },
        { id: 5, name: 'Venice, Italy', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', description: 'Glide through romantic canals and admire historical Italian architecture.' },
        { id: 6, name: 'Maui, Hawaii', image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80', description: 'Relax on golden beaches and enjoy breathtaking sunset views.' }
      ]
    };
  }

  render() {
    const sectionStyle = {
      padding: '6rem 2rem',
      maxWidth: '1280px',
      margin: '0 auto',
      textAlign: 'center'
    };

    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '3rem',
      marginTop: '4rem'
    };

    const cardStyle = {
      backgroundColor: '#ffffff',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
      textAlign: 'left',
      transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    };

    return (
      <section style={sectionStyle}>
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#111827', letterSpacing: '-1.5px' }}>Top <span style={{ color: '#3b82f6' }}>Destination</span> Picks</h2>
          <p style={{ color: '#64748b', fontSize: '1.2rem', marginTop: '1rem' }}>Handpicked locations for your next big adventure.</p>
        </div>

        <div style={gridStyle}>
          {this.state.destinations.map(dest => (
            <div key={dest.id} style={cardStyle}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: 'rgba(255,255,255,0.9)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '800', color: '#3b82f6' }}>
                  FEATURED
                </div>
              </div>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ marginBottom: '1rem', color: '#111827', fontSize: '1.6rem', fontWeight: '800' }}>{dest.name}</h3>
                <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7' }}>{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Destinations;

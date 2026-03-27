import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    setTimeout(() => {
      this.setState({ name: '', email: '', message: '', submitted: false });
    }, 3000);
  };

  render() {
    const { name, email, message, submitted } = this.state;

    const sectionStyle = {
      padding: '8rem 2rem',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    };

    const formGroupStyle = {
      marginBottom: '2rem',
      textAlign: 'left'
    };

    const inputStyle = {
      width: '100%',
      padding: '1.25rem',
      marginTop: '0.75rem',
      border: '2px solid #e2e8f0',
      borderRadius: '16px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      outline: 'none',
      backgroundColor: '#f8fafc'
    };

    const flexStyle = {
      backgroundColor: '#ffffff',
      padding: '4rem',
      borderRadius: '32px',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)',
      border: '1px solid #f1f5f9'
    };

    const buttonStyle = {
      width: '100%',
      padding: '1.25rem',
      background: 'linear-gradient(to right, #3b82f6, #2563eb)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '16px',
      fontSize: '1.1rem',
      fontWeight: '800',
      cursor: 'pointer',
      boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)',
      transition: 'transform 0.3s ease'
    };

    return (
      <section style={sectionStyle}>
        <div style={{ marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#111827', letterSpacing: '-1.5px' }}>Get in <span style={{ color: '#3b82f6' }}>Touch</span></h1>
          <p style={{ color: '#64748b', fontSize: '1.2rem', marginTop: '1rem' }}>Have questions? We'd love to hear from you.</p>
        </div>
        
        <div style={flexStyle}>
          {submitted ? (
            <div style={{ padding: '2rem', animation: 'scaleIn 0.5s ease' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h2 style={{ color: '#111827', fontSize: '2rem', fontWeight: '900', marginBottom: '1rem' }}>Message Received!</h2>
              <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <div style={formGroupStyle}>
                <label style={{ fontWeight: '700', color: '#1f2937', marginLeft: '0.5rem' }}>Full Name</label>
                <input style={inputStyle} type="text" name="name" value={name} placeholder="John Doe" onChange={this.handleChange} required />
              </div>
              <div style={formGroupStyle}>
                <label style={{ fontWeight: '700', color: '#1f2937', marginLeft: '0.5rem' }}>Email Address</label>
                <input style={inputStyle} type="email" name="email" value={email} placeholder="john@example.com" onChange={this.handleChange} required />
              </div>
              <div style={formGroupStyle}>
                <label style={{ fontWeight: '700', color: '#1f2937', marginLeft: '0.5rem' }}>Your Message</label>
                <textarea style={{ ...inputStyle, height: '160px', resize: 'none' }} name="message" value={message} placeholder="Tell us about your dream trip..." onChange={this.handleChange} required />
              </div>
              <button style={buttonStyle} type="submit">Send Message</button>
            </form>
          )}
        </div>
      </section>
    );
  }
}

export default Contact;

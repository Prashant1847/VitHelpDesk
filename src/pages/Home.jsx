import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Help Desk Support</h1>
          <p>
            Get instant support for all your academic queries. Our dedicated team is here to help you succeed in your educational journey.
          </p>
          <Link to="/login" className="btn btn-primary">
            Learn More
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="/homepage1.jpeg" 
            alt="Help Desk Support Illustration"
          />
        </div>
      </section>

      <section className="features-section">
        <h2>More than just a Help Desk</h2>
        <p className="features-subtitle">Explore what else we can do for you</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon" style={{ backgroundColor: '#e8f0fe' }}>
              <i className="fas fa-tasks" style={{ color: '#4285f4' }}></i>
            </div>
            <h3>Quick Response</h3>
            <p>Get answers to your queries within 24 hours from our dedicated support team.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{ backgroundColor: '#fce4ec' }}>
              <i className="fas fa-clock" style={{ color: '#e91e63' }}></i>
            </div>
            <h3>Expert Support</h3>
            <p>Access guidance from experienced faculty and administrative staff.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{ backgroundColor: '#fff3e0' }}>
              <i className="fas fa-calendar" style={{ color: '#ff9800' }}></i>
            </div>
            <h3>Easy Tracking</h3>
            <p>Monitor the status of your queries in real-time through our dashboard.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" style={{ backgroundColor: '#e8f5e9' }}>
              <i className="fas fa-shield-alt" style={{ color: '#4caf50' }}></i>
            </div>
            <h3>Secure Platform</h3>
            <p>Your information is safe with our encrypted and secure query management system.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
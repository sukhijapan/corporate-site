import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Oz Construction and Consulting</h1>
          <p className="lead">Australian-owned, industry-led, and quality-driven.</p>
        </div>
      </section>

      <section className="section our-story">
        <div className="container">
          <div className="content-grid">
            <div className="text-content">
              <h2>The "Oz" Story</h2>
              <p>
                Founded with a mission to bring world-class quality governance to the Australian construction landscape, 
                OZCC combines decades of site experience with modern digital innovation.
              </p>
              <p>
                We understand the unique challenges of Australian Tier 1 and Tier 2 projects. 
                Our approach isn't just about checking boxes; it's about building a culture of excellence 
                that reduces risk, ensures compliance, and delivers superior results for clients and contractors alike.
              </p>
            </div>
            <div className="image-content">
              {/* Placeholder for team/office image */}
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section leadership bg-alt">
        <div className="container">
          <h2 className="text-center mb-2">Our Leadership Team</h2>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-photo-placeholder"></div>
              <h3>Eddy K</h3>
              <p className="role">Chief Executive Officer (CEO)</p>
              <p className="bio">
                With extensive experience in construction management and corporate strategy, 
                Eddy leads OZCC's mission to redefine quality standards across the industry.
              </p>
              <a href="https://www.linkedin.com/in/eddy-k-7507b6ab/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                LinkedIn Profile &rarr;
              </a>
            </div>
            <div className="leader-card">
              <div className="leader-photo-placeholder"></div>
              <h3>Sukhwinder Singh</h3>
              <p className="role">Chief Technology Officer (CTO)</p>
              <p className="bio">
                A technology visionary specializing in scalable architecture and field-ready digital tools. 
                Sukhwinder spearheads the development of ITPapp and our digital consulting suite.
              </p>
              <a href="https://www.linkedin.com/in/sukhwinder-singh-05195b1a0/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                LinkedIn Profile &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission">
        <div className="container text-center">
          <div className="mission-box">
            <h2>Our Mission</h2>
            <p className="mission-text">
              "To empower every construction project in Australia with the tools and expertise 
              needed to achieve zero-defect delivery and perfect compliance."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import { Avatar } from '../components/illustrations';
import { site } from '../config/site';
import './About.css';

const leaders = [
  {
    initials: 'EK',
    name: 'Eddy K',
    role: 'Chief Executive Officer (CEO)',
    bio: "With extensive experience in construction management and corporate strategy, Eddy leads OZCC's mission to redefine quality standards across the industry.",
    linkedIn: site.social.ceoLinkedIn,
  },
  {
    initials: 'SS',
    name: 'Sukhwinder Singh',
    role: 'Chief Technology Officer (CTO)',
    bio: 'A technology visionary specializing in scalable architecture and field-ready digital tools. Sukhwinder spearheads the development of ITPapp and our digital consulting suite.',
    linkedIn: site.social.ctoLinkedIn,
  },
];

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Seo
        title="About Us"
        description="Australian-owned, industry-led and quality-driven. Meet the team behind OZCC and ITPapp."
      />

      <section className="page-header">
        <div className="container">
          <h1>About Oz Construction and Consulting</h1>
          <p className="lead">Australian-owned, industry-led, and quality-driven.</p>
        </div>
      </section>

      <section className="section our-story">
        <div className="container">
          <div className="content-grid">
            <Reveal className="text-content">
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
            </Reveal>
            <Reveal delay={120} className="image-content">
              <svg viewBox="0 0 400 300" role="img" aria-label="Construction quality oversight" className="story-art">
                <rect width="400" height="300" rx="12" fill="#EAF1FB" />
                <rect x="40" y="150" width="70" height="110" fill="#003366" />
                <rect x="130" y="100" width="80" height="160" fill="#002147" />
                <rect x="230" y="60" width="90" height="200" fill="#003366" />
                <g fill="#D2B48C">
                  <rect x="52" y="166" width="18" height="18" rx="2" />
                  <rect x="80" y="166" width="18" height="18" rx="2" />
                  <rect x="52" y="196" width="18" height="18" rx="2" />
                  <rect x="80" y="196" width="18" height="18" rx="2" />
                  <rect x="146" y="120" width="20" height="20" rx="2" />
                  <rect x="176" y="120" width="20" height="20" rx="2" />
                  <rect x="146" y="156" width="20" height="20" rx="2" />
                  <rect x="176" y="156" width="20" height="20" rx="2" />
                  <rect x="248" y="84" width="22" height="22" rx="2" />
                  <rect x="282" y="84" width="22" height="22" rx="2" />
                  <rect x="248" y="120" width="22" height="22" rx="2" />
                  <rect x="282" y="120" width="22" height="22" rx="2" />
                </g>
                <circle cx="320" cy="70" r="34" fill="#FF8C00" />
                <path d="M306 70 l9 9 l18 -20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="0" y="260" width="400" height="40" fill="#4F7942" opacity="0.25" />
              </svg>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section leadership bg-alt">
        <div className="container">
          <Reveal><h2 className="text-center mb-2">Our Leadership Team</h2></Reveal>
          <div className="leadership-grid">
            {leaders.map((leader, i) => (
              <Reveal key={leader.name} delay={i * 120} className="leader-card">
                <div className="leader-photo">
                  <Avatar initials={leader.initials} />
                </div>
                <h3>{leader.name}</h3>
                <p className="role">{leader.role}</p>
                <p className="bio">{leader.bio}</p>
                <a href={leader.linkedIn} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  LinkedIn Profile &rarr;
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission">
        <div className="container text-center">
          <Reveal className="mission-box">
            <h2>Our Mission</h2>
            <p className="mission-text">
              "To empower every construction project in Australia with the tools and expertise
              needed to achieve zero-defect delivery and perfect compliance."
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;

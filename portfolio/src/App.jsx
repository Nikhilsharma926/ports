import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  // Smooth scroll + navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) navbar?.classList.add('scrolled');
      else navbar?.classList.remove('scrolled');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // EmailJS configuration (replace with your own keys)
  const EMAILJS_PUBLIC_KEY = 'cU9SauS-eM99rctpS'; // Your actual public key
  const SERVICE_ID = 'service_5i245vb';
  const TEMPLATE_ID = 'template_0cjefnb';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent!', response.status);
        alert(`Thanks ${form.name}! Your message has been sent. I'll get back to you soon.`);
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Email error:', error);
        alert('Oops! Something went wrong. Please try again later.');
      })
      .finally(() => setIsSending(false));
  };

  // Personal data
  const personal = {
    name: 'Nikhil Sharma',
    title: 'Full Stack Software Engineer',
    bio: 'Building scalable web applications with modern tech. Passionate about clean code, UX, and solving real-world problems.',
    email: 'nikhilsharma787683@gmail.com',
    phone: '+91 78768 35326',
    location: 'Mohali, Chandigarh, India',
    github: 'https://github.com/nk-srma',
    linkedin: 'https://linkedin.com/in/nikhil-srma',
    twitter: 'https://twitter.com/nikhil_srma',
    profilePic: 'https://randomuser.me/api/portraits/men/45.jpg',
  };

  const experiences = [
    { company: 'CYBEROUS', role: 'Web Development Trainee', duration: 'June 2023 – Aug 2023', location: 'Jaipur, Rajasthan', description: 'Completed intensive training in frontend development: HTML, CSS, JavaScript, and modern frameworks.' },
    { company: 'HOPING MIND', role: 'Full Stack Development Trainee', duration: 'June 2024 – Aug 2024', location: 'Mohali, Chandigarh', description: 'Gained deep understanding of full stack development, working on real-world projects.' },
    { company: 'MEANDER SOFTWARE', role: 'Full Stack Intern', duration: 'June 2025 – Present', location: 'Mohali, Chandigarh', description: 'Currently working on live frontend projects using React, Tailwind, and modern web techniques.' },
    { company: 'Freelancer / Zipwork', role: 'Founder & Developer', duration: '2024 – Present', location: 'Remote', description: 'Created my own startup "Zipwork" – delivered first frontend project at local level.' },
  ];

  const projects = [
    { title: 'E‑Commerce Application', desc: 'Full-stack e-commerce platform with product catalog, cart, authentication, and payment gateway.', tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'], image: 'https://picsum.photos/id/20/400/250', link: '#' },
    { title: 'Personal Portfolio', desc: 'Modern, responsive portfolio website with smooth animations and optimized performance.', tech: ['React', 'CSS3', 'JavaScript'], image: 'https://picsum.photos/id/26/400/250', link: '#' },
    { title: 'AI Image Generator', desc: 'Generate stunning images from text prompts using OpenAI API.', tech: ['React', 'Tailwind', 'OpenAI'], image: 'https://picsum.photos/id/0/400/250', link: '#' },
  ];

  const skills = [
    { name: 'HTML5 / CSS3 / Tailwind', level: 92 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'React.js', level: 88 },
    { name: 'Node.js / Express', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'REST APIs / Postman', level: 87 },
  ];

  const certifications = [
    { title: 'Web Development Certification', issuer: 'CYBEROUS', duration: '2023', description: 'Comprehensive training in frontend technologies.' },
    { title: 'Postman API Fundamentals Student Expert', issuer: 'Postman', duration: '2024', description: 'Mastered REST APIs, testing, and documentation.' },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo">Nikhil<span>.</span></a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="badge">✨ Available for work</div>
            <h1>Hi, I'm <span className="highlight">Nikhil Sharma</span><br />Full Stack Engineer</h1>
            <p>{personal.bio}</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Hire Me →</a>
              <a href="#projects" className="btn-secondary">View Work ↓</a>
            </div>
            <div className="social-icons">
              <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={personal.twitter} target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={personal.profilePic} alt="Nikhil" />
              <div className="glow-effect"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section alt-bg">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="underline"></div>
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="exp-header">
                    <h3>{exp.role}</h3>
                    <span className="exp-duration">{exp.duration}</span>
                  </div>
                  <p className="exp-company">{exp.company} • {exp.location}</p>
                  <p className="exp-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="underline"></div>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
                <div className="skill-percent">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section alt-bg">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="underline"></div>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <div className="project-img">
                  <img src={proj.image} alt={proj.title} />
                  <div className="project-overlay">
                    <a href={proj.link} className="project-link">Live Demo →</a>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <div className="tech-tags">
                    {proj.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="underline"></div>
          <div className="cert-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className="cert-icon">📜</div>
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer} • {cert.duration}</p>
                <p className="cert-desc">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section alt-bg">
        <div className="container contact-container">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <div className="underline left"></div>
            <p>I'm currently available for freelance or full-time opportunities. Let's build something great together.</p>
            <div className="contact-details">
              <div>📧 {personal.email}</div>
              <div>📞 {personal.phone}</div>
              <div>📍 {personal.location}</div>
            </div>
            <div className="social-icons" style={{ marginTop: '24px' }}>
              <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={personal.twitter} target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <input 
              type="text" 
              placeholder="Your name" 
              value={form.name} 
              onChange={(e) => setForm({...form, name: e.target.value})} 
              required 
              disabled={isSending}
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={form.email} 
              onChange={(e) => setForm({...form, email: e.target.value})} 
              required 
              disabled={isSending}
            />
            <textarea 
              rows="4" 
              placeholder="Message" 
              value={form.message} 
              onChange={(e) => setForm({...form, message: e.target.value})} 
              required 
              disabled={isSending}
            ></textarea>
            <button type="submit" className="btn-primary" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Nikhil Sharma — Crafted with React & modern CSS</p>
      </footer>
    </div>
  );
}

export default App;
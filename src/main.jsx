import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './personal.css';
import profile from '../Pictures/WhatsApp Image 2026-04-06 at 5.16.12 AM.jpeg';

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>;
const Spark = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.8 7.2L21 12l-7.2 1.8L12 21l-1.8-7.2L3 12l7.2-1.8L12 2Z"/></svg>;

function App() {
  const [menu, setMenu] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - .5) * 2;
      const y = (e.clientY / window.innerHeight - .5) * 2;
      document.documentElement.style.setProperty('--mx', x);
      document.documentElement.style.setProperty('--my', y);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  const scrollTo = (id) => { document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };
  return <main>
    <div className="noise" />
    <nav className="nav shell">
      <button className="brand" onClick={() => scrollTo('#top')} aria-label="Back to top">MIP<span>•</span></button>
      <div className={menu ? 'navlinks open' : 'navlinks'}>
        <button onClick={() => scrollTo('#work')}>Work</button><button onClick={() => scrollTo('#about')}>About</button><button onClick={() => scrollTo('#contact')}>Contact</button>
      </div>
      <button className="nav-cta" onClick={() => scrollTo('#contact')}>Let’s talk <Arrow /></button>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu"><i /><i /></button>
    </nav>

    <section id="top" className="hero shell" ref={heroRef}>
      <div className="hero-copy reveal">
        <p className="eyebrow"><span className="status-dot" /> Available for collaborations</p>
        <h1>Experiences<br/>for the <em>web.</em></h1>
        <p className="intro">Muhammad Ibrahim Pervez is a Computer Systems Engineering student and frontend developer who enjoys turning ideas into responsive, user-focused web experiences.</p>
        <div className="hero-actions"><button className="primary" onClick={() => scrollTo('#work')}>Explore selected work <Arrow /></button><button className="text-btn" onClick={() => scrollTo('#about')}>More about me <span>↓</span></button></div>
      </div>
      <div className="portrait-stage" aria-label="Portrait of Muhammad Ibrahim Pervez">
        <div className="sun" /><div className="ring ring-one" /><div className="ring ring-two" />
        <div className="portrait-card"><img src={profile} alt="Muhammad Ibrahim Pervez, Frontend Developer" /><div className="portrait-shine" /></div>
        <div className="orbit-tag tag-one"><Spark /> UET Peshawar</div><div className="orbit-tag tag-two"><span className="code-mark">&lt;/&gt;</span> React</div>
        <div className="vertical-text">SCROLL TO DISCOVER</div>
      </div>
      <div className="hero-foot"><p>BASED IN<br/><strong>PESHAWAR, PK</strong></p><p>FOCUSING ON<br/><strong>FRONTEND & WEB</strong></p><div className="scroll-cue"><span>01</span><i /></div></div>
    </section>

    <section className="marquee"><div><span>Frontend developer</span><b>✦</b><span>Creative coding</span><b>✦</b><span>Digital experiences</span><b>✦</b><span>Frontend developer</span><b>✦</b></div></section>

    <section id="work" className="work shell">
      <div className="section-head"><p className="eyebrow">01 / Selected work</p><h2>Built to feel<br/><em>memorable.</em></h2><p>Small details create the big picture. Here are a few projects where I put that belief into practice.</p></div>
      <div className="projects">
        <Project className="amazon" number="01" title="Amazon Clone" type="E-commerce interface" caption="A frontend e-commerce practice project focused on familiar navigation, product discovery, and responsive layouts." tags={['React', 'CSS', 'Responsive']} art={<ProjectMark number="01" title="Amazon Clone" subtitle="E-commerce UI" />} />
        <Project className="spotify" number="02" title="Spotify Clone" type="Music streaming interface" caption="A frontend music interface practice project built around a dark visual language and content-led layout." tags={['HTML', 'CSS', 'JavaScript']} art={<ProjectMark number="02" title="Spotify Clone" subtitle="Music interface" />} />
        <Project className="portfolio" number="03" title="Personal Portfolio" type="Personal website" caption="This personal portfolio: a responsive home for my work, skills, and ways to get in touch." tags={['React', 'Tailwind CSS', 'JavaScript']} art={<ProjectMark number="03" title="Portfolio" subtitle="Personal website" />} />
      </div>
    </section>

    <section id="about" className="about shell"><div className="about-index">02 <span> / ABOUT</span></div><div className="about-copy"><p className="big-copy">I’m Muhammad Ibrahim Pervez, a Computer Systems Engineering student building my path in <em>frontend development.</em></p><div className="about-bottom"><p>I study at UET Peshawar and enjoy creating clean, responsive interfaces with HTML, CSS, JavaScript, React, and Tailwind CSS. I’m continuously learning by building practical web projects.</p><a href="#contact">Let’s build something <Arrow /></a></div></div></section>

    <section className="toolkit shell"><div className="section-head"><p className="eyebrow">03 / Toolkit</p><h2>What I’m<br/><em>working with.</em></h2></div><div className="skills"><Skill n="01" name="HTML / CSS" detail="Semantic markup and responsive styling"/><Skill n="02" name="JavaScript" detail="Interactive behavior and web logic"/><Skill n="03" name="React JS" detail="Component-based frontend development"/><Skill n="04" name="Tailwind CSS" detail="Utility-first interface development"/><Skill n="05" name="Git / GitHub" detail="Version control and collaboration"/></div></section>

    <footer id="contact" className="footer"><div className="footer-glow" /><div className="shell"><p className="eyebrow">04 / Contact</p><h2>Have an idea?<br/><em>Let’s talk.</em></h2><a className="email" href="mailto:muhammadibrahimpervez@gmail.com">muhammadibrahimpervez@gmail.com <Arrow /></a><a className="phone" href="https://wa.me/923195344569" target="_blank" rel="noreferrer">WhatsApp: +92 319 5344569</a><div className="footer-bottom"><span>© 2026 MUHAMMAD IBRAHIM PERVEZ</span><span>UET PESHAWAR / PK</span><div><a href="https://www.linkedin.com/in/muhammad-ibrahim-pervez-cse" target="_blank" rel="noreferrer">LINKEDIN</a><a href="https://github.com/muhammadibrahimpervez" target="_blank" rel="noreferrer">GITHUB</a></div></div></div></footer>
  </main>;
}

function Project({ className, number, title, type, caption, tags, art }) { return <article className={`project ${className}`}><div className="project-art">{art}<div className="art-no">{number}</div></div><div className="project-info"><div><p className="project-type">{type}</p><h3>{title}</h3></div><p className="project-caption">{caption}</p><div className="tags">{tags.map(t => <span key={t}>{t}</span>)}<button aria-label={`View ${title}`}><Arrow /></button></div></div></article> }
function ProjectMark({ number, title, subtitle }) { return <div className="project-mark"><span>PROJECT / {number}</span><div><h4>{title}</h4><p>{subtitle}</p></div><b>↗</b></div> }
function Skill({ n, name, detail }) { return <div className="skill"><span>{n}</span><h3>{name}</h3><p>{detail}</p><b>↗</b></div> }

createRoot(document.getElementById('root')).render(<App />);

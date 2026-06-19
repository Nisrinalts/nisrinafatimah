'use client';

import { useEffect, useRef, useState } from 'react';

const asset = path => `/assets/${path}`;

const aboutPhotos = [
  asset('about/jakun.jpg'),
  asset('about/fotoakulagi.jpg'),
  asset('about/biasa.jpg'),
];

const momPhotos = [
  asset('inspiration/mom1.jpeg'),
  asset('inspiration/mom2.JPG'),
];

const experienceItems = [
  {
    image: asset('experience/ristek.JPG'),
    alt: 'RISTEK Fasilkom UI',
    period: '2025 - Now',
    title: 'Vice Director of Public Relations - RISTEK Fasilkom UI',
    body: 'Co-led public relations initiatives under Marketing and Communication, focusing on brand visibility, communication strategy, and cross-functional coordination.',
    impact: 'Helped keep public-facing communication clearer and more consistent across programs, while coordinating with teams so information could move faster from planning to execution.',
    details: [
      'Supported campaign planning, external communication, and content direction for organizational visibility.',
      'Worked across Marketing and Communication functions to align messaging, timing, and stakeholder needs.',
      'Built practical experience in brand communication, team coordination, and audience-facing storytelling.',
    ],
    skills: ['Public Relations', 'Brand Communication', 'Stakeholder Coordination', 'Content Strategy'],
  },
  {
    image: asset('experience/ristek2.JPG'),
    alt: 'RISTEK Fasilkom UI',
    period: '2024 - 2025',
    title: 'People Operations - RISTEK Fasilkom UI',
    body: 'Supported member engagement and team culture within Marketing and Communication SIG, helping maintain a collaborative environment for growth.',
    impact: 'Contributed to a healthier team rhythm by supporting internal engagement, member coordination, and communication habits inside a student tech organization.',
    details: [
      'Helped organize people-related processes and team engagement activities.',
      'Supported internal communication so members could collaborate more comfortably and consistently.',
      'Learned how community operations affect retention, motivation, and team delivery.',
    ],
    skills: ['People Operations', 'Internal Communication', 'Team Culture', 'Community Building'],
  },
  {
    image: asset('experience/openhouse.JPG'),
    alt: 'Open House Fasilkom UI',
    period: '2025',
    title: 'Vice PIC of Liaison Officer - Open House Fasilkom UI',
    body: 'Coordinated mentors, participants, and committees while ensuring clear communication and smooth on-ground execution.',
    impact: 'Helped make the participant experience smoother by keeping mentors, committees, and attendees aligned before and during the event.',
    details: [
      'Coordinated liaison officers and supported communication between participants and committee teams.',
      'Managed operational details so event information stayed clear and easy to follow.',
      'Strengthened event operations, escalation handling, and real-time coordination skills.',
    ],
    skills: ['Event Operations', 'Liaison Coordination', 'Mentor Management', 'Execution Planning'],
  },
  {
    image: asset('experience/osis1.JPG'),
    alt: 'OSIS and school committee',
    period: 'High School',
    title: 'OSIS & School Event Committees - SMA Labschool Jakarta',
    body: 'Started my leadership journey through student organizations and school events, learning how to communicate, organize, and collaborate in fast-paced environments.',
    impact: 'Built an early foundation in leadership, responsibility, and working with different people under event deadlines.',
    details: [
      'Contributed to student organization programs and school event committees.',
      'Practiced planning, communication, and task ownership in a fast-paced school environment.',
      'Developed confidence in leading small responsibilities and collaborating with peers.',
    ],
    skills: ['Student Leadership', 'Event Planning', 'Teamwork', 'Communication'],
  },
  {
    image: asset('experience/osis2.JPG'),
    alt: 'Labs Project',
    period: '2022 - 2023',
    title: 'Person in Charge of Fashion Show - Labs Project 2023',
    body: 'Led model training, coordinated creative teams, and helped deliver a fashion show experience in collaboration with designers and event staff.',
    impact: 'Helped turn a creative event concept into a structured show by coordinating people, practice flow, and backstage execution.',
    details: [
      'Managed model preparation and training schedules.',
      'Coordinated with creative, event, and designer-side teams to align the show flow.',
      'Balanced creative direction with operational discipline during preparation and execution.',
    ],
    skills: ['Creative Operations', 'Show Direction', 'Training Coordination', 'Event Delivery'],
  },
  {
    blank: 'HMUN',
    period: '2022 - 2023',
    title: 'Delegate of San Marino - Harvard MUN',
    body: 'Represented San Marino in the SOCHUM committee and joined discussions around humanitarian issues, communication, and negotiation.',
    impact: 'Strengthened research, diplomatic communication, and structured argumentation through international committee simulation.',
    details: [
      'Researched country positioning and humanitarian policy issues for committee discussion.',
      'Practiced negotiation, public speaking, and written communication in a formal debate setting.',
      'Learned to represent a stakeholder perspective while collaborating toward shared resolutions.',
    ],
    skills: ['Research', 'Negotiation', 'Public Speaking', 'Policy Discussion'],
  },
];

const projectSlides = [
  [
    {
      title: 'TikTakTuk',
      body: 'Database-driven web application focused on relational schema design, data management, and collaborative development using SQL and Neon.',
      href: 'https://tk03-jeans-raqil.vercel.app/',
      stack: ['SQL', 'Neon', 'Relational Database Design', 'Web Development'],
      impact: 'Turned database design concepts into a usable web app with structured data flows and collaborative implementation.',
      details: [
        'Designed and worked with relational data structures to support core application workflows.',
        'Used Neon as the database layer for storing and managing application data.',
        'Practiced translating academic database requirements into a working user-facing product.',
      ],
    },
    {
      title: 'Football News',
      body: 'A full-stack football news platform built with Django and Flutter, allowing users to browse and manage football-related news across web and mobile.',
      stack: ['Django', 'Flutter', 'Full-stack Development', 'Mobile/Web UI'],
      impact: 'Created a cross-platform news experience that connects backend content management with frontend browsing flows.',
      details: [
        'Built features for browsing and managing football-related news content.',
        'Connected backend logic with web/mobile user interfaces.',
        'Practiced full-stack coordination between data, routes, screens, and user interaction.',
      ],
    },
    {
      title: 'KitKeeper',
      body: 'A football jersey collection platform designed to help users organize, track, and showcase their jersey collections through a structured system.',
      stack: ['Information System Design', 'Data Modeling', 'Product Thinking'],
      impact: 'Helped frame a niche collection problem into a structured system for organizing and presenting personal inventory.',
      details: [
        'Mapped user needs around tracking jersey ownership and collection details.',
        'Structured collection data so users could browse and manage items more clearly.',
        'Practiced designing a feature set around organization, discovery, and showcase use cases.',
      ],
    },
    {
      title: 'Lume',
      body: 'A cross-platform productivity app with task, schedule, and note management features to support daily organization.',
      stack: ['Cross-platform App Design', 'Productivity Workflows', 'UI Planning'],
      impact: 'Explored how task, schedule, and note features can work together to reduce daily planning friction.',
      details: [
        'Designed workflows for organizing tasks, schedules, and notes in one place.',
        'Focused on everyday usability and information structure.',
        'Practiced product thinking for personal productivity and habit-supporting tools.',
      ],
    },
  ],
  [
    {
      title: 'TransitSecure',
      body: 'A secure transportation ticketing system implementing validation, CSRF protection, role-based access control, and verified transaction records.',
      stack: ['Web Security', 'CSRF Protection', 'Role-based Access Control', 'Validation'],
      impact: 'Applied secure development concepts to a ticketing workflow where trust, validation, and access boundaries matter.',
      details: [
        'Implemented security-focused flows including request validation and CSRF protection.',
        'Designed role-based access boundaries for different user capabilities.',
        'Focused on verified transaction records to improve reliability and accountability.',
      ],
    },
    {
      title: 'Burhanpedia',
      body: 'A native Java e-commerce application simulating marketplace workflows while applying OOP and structured data management.',
      stack: ['Java', 'Object-oriented Programming', 'Data Structures', 'Marketplace Logic'],
      impact: 'Built a stronger programming foundation by modeling marketplace behavior with OOP principles.',
      details: [
        'Implemented e-commerce-like flows using native Java.',
        'Modeled entities and interactions with object-oriented design.',
        'Practiced structured data management and application logic without relying on a heavy framework.',
      ],
    },
    {
      title: 'JalaninAja',
      body: 'A Sistem Interaksi course project designing a travel-planning app flow and interactive Figma prototype for itinerary, budget, and collaborative trip planning.',
      stack: ['Figma', 'Interaction Design', 'User Flow', 'Wireframing', 'Prototyping'],
      impact: 'Translated a travel-planning problem into a clearer app flow, helping users imagine how itinerary planning, budgeting, and group coordination could work in one product experience.',
      details: [
        'Mapped the main user flow for planning trips, arranging itineraries, and coordinating travel details.',
        'Created Figma screens and prototype interactions to show how users would move through the app.',
        'Practiced interaction design decisions around navigation, information hierarchy, and making planning tasks feel easier to complete.',
      ],
    },
    {
      title: 'Next chapter',
      body: 'Additional projects and case studies will be added as they become ready to share.',
      stack: ['Case Studies', 'Documentation', 'Iteration'],
      impact: 'A placeholder for upcoming work as more projects become polished enough to present publicly.',
      details: [
        'Future project cards can include clearer outcomes, tools, and links.',
        'This keeps the portfolio expandable as academic and personal work grows.',
      ],
    },
  ],
];

const travelPhotos = [
  asset('travel/nyc.jpeg'),
  asset('travel/jepang.jpeg'),
  asset('travel/jepang2.jpg'),
  asset('travel/malaysia.JPG'),
  asset('travel/thailand.JPG'),
  asset('travel/madinah.jpg'),
  asset('travel/mekkah.jpg'),
];

const personalPhotos = [
  asset('gallery/fototemenkuliah.JPEG'),
  asset('gallery/fotosamatemenkuliah.JPEG'),
  asset('gallery/kegiatancsl.JPG'),
  asset('gallery/kerjakelompok.JPG'),
  asset('gallery/temensma1.JPG'),
  asset('gallery/temensma2.JPG'),
  asset('gallery/temensma3.JPEG'),
  asset('gallery/osissma.jpg'),
];

function MiniCarousel({ photos, frameClass }) {
  const [active, setActive] = useState(0);

  const show = next => {
    setActive((next + photos.length) % photos.length);
  };

  return (
    <>
      <button className="circle-btn prev" aria-label="Previous photo" onClick={() => show(active - 1)}>
        &lsaquo;
      </button>
      <div className={frameClass}>
        {photos.map((photo, index) => (
          <img key={photo} src={photo} alt="Carousel photo" className={index === active ? 'active' : ''} />
        ))}
      </div>
      <button className="circle-btn next" aria-label="Next photo" onClick={() => show(active + 1)}>
        &rsaquo;
      </button>
    </>
  );
}

function LoopCarousel({ photos, small = false, onOpen }) {
  const [index, setIndex] = useState(photos.length);
  const [animate, setAnimate] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const loopPhotos = [...photos, ...photos, ...photos];
  const basis = isMobile ? 278 : small ? 308 : 378;

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 900);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const move = direction => {
    setAnimate(true);
    setIndex(current => current + direction);
  };

  const normalize = () => {
    if (index >= photos.length * 2) {
      setAnimate(false);
      setIndex(photos.length);
    }

    if (index < photos.length) {
      setAnimate(false);
      setIndex(photos.length * 2 - 1);
    }
  };

  useEffect(() => {
    if (!animate) {
      const frame = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(frame);
    }
    return undefined;
  }, [animate]);

  return (
    <div className="manual-carousel">
      <button className="edge-btn left" onClick={() => move(-1)} aria-label="Previous archive photo">
        &lsaquo;
      </button>
      <div className="loop-carousel-window">
        <div
          className={`loop-photo-track${small ? ' small-loop-track' : ''}`}
          onTransitionEnd={normalize}
          style={{
            transform: `translateX(-${index * basis}px)`,
            transition: animate ? 'transform .55s cubic-bezier(.22,.61,.36,1)' : 'none',
          }}
        >
          {loopPhotos.map((photo, itemIndex) => {
            const realIndex = itemIndex % photos.length;
            return (
              <img
                key={`${photo}-${itemIndex}`}
                src={photo}
                alt="Archive photo"
                onClick={() => onOpen(photos, realIndex)}
              />
            );
          })}
        </div>
      </div>
      <button className="edge-btn right" onClick={() => move(1)} aria-label="Next archive photo">
        &rsaquo;
      </button>
    </div>
  );
}

export default function Page() {
  const [storyOpen, setStoryOpen] = useState(false);
  const [lightbox, setLightbox] = useState({ open: false, items: [], index: 0 });
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [experienceIndex, setExperienceIndex] = useState(experienceItems.length);
  const [experienceAnimate, setExperienceAnimate] = useState(true);
  const [projectIndex, setProjectIndex] = useState(0);
  const [glow, setGlow] = useState({ x: -300, y: -300 });
  const loopExperienceItems = [...experienceItems, ...experienceItems, ...experienceItems];

  useEffect(() => {
    const onMove = event => setGlow({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    document.body.style.overflow = storyOpen || lightbox.open || selectedExperience || selectedProject ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [storyOpen, lightbox.open, selectedExperience, selectedProject]);

  useEffect(() => {
    const onKey = event => {
      if (event.key === 'Escape') {
        setStoryOpen(false);
        setSelectedExperience(null);
        setSelectedProject(null);
        setLightbox(current => ({ ...current, open: false }));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openLightbox = (items, index) => setLightbox({ open: true, items, index });
  const showLight = index => {
    setLightbox(current => ({
      ...current,
      index: (index + current.items.length) % current.items.length,
    }));
  };

  const setProject = index => {
    setProjectIndex((index + projectSlides.length) % projectSlides.length);
  };

  const moveExperience = direction => {
    setExperienceAnimate(true);
    setExperienceIndex(current => current + direction);
  };

  const normalizeExperience = () => {
    if (experienceIndex >= experienceItems.length * 2) {
      setExperienceAnimate(false);
      setExperienceIndex(experienceItems.length);
    }

    if (experienceIndex < experienceItems.length) {
      setExperienceAnimate(false);
      setExperienceIndex(experienceItems.length * 2 - 1);
    }
  };

  useEffect(() => {
    const timer = window.setInterval(() => moveExperience(1), 15000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!experienceAnimate) {
      const frame = requestAnimationFrame(() => setExperienceAnimate(true));
      return () => cancelAnimationFrame(frame);
    }
    return undefined;
  }, [experienceAnimate]);

  return (
    <>
      <div
        className="cursor-glow"
        aria-hidden="true"
        style={{ left: `${glow.x}px`, top: `${glow.y}px` }}
      />

      <nav className="top-nav">
        <a href="#top" className="brand">NF</a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#archive">Archive</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-left fade-up">
            <p className="eyebrow">Personal Portfolio</p>
            <h1>Nisrina<br />Fatimah</h1>
            <p className="hero-role">Information Systems Student<br />Universitas Indonesia</p>
            <button className="pill dark" onClick={() => setStoryOpen(true)}>Read my story</button>
          </div>

          <button className="hero-photo-wrap fade-up delay-1" onClick={() => setStoryOpen(true)} aria-label="Open Nisrina's story">
            <span className="tap-hint">click photo</span>
            <img src={asset('hero/FOTO LINKEDIN FORMAL.png')} alt="Nisrina Fatimah" className="hero-photo" />
          </button>

          <div className="hero-right fade-up delay-2">
            <p className="tiny-label">currently</p>
            <h2>Bachelor of Computer Science</h2>
            <p>Information Systems, Faculty of Computer Science · GPA 3.61/4.00</p>
            <div className="hero-links">
              <a href={asset('docs/CV_NisrinaFatimah.pdf')} target="_blank">Download CV</a>
              <a href="mailto:nisrina.fatimah@ui.ac.id">Email</a>
              <a href="https://www.linkedin.com/in/nisrinafatimahalts/" target="_blank">LinkedIn</a>
              <a href="https://github.com/Nisrinalts" target="_blank">GitHub</a>
            </div>
          </div>
        </section>

        <section className="profile-slice section-pad">
          <div className="section-kicker">Profile</div>
          <div className="split intro-split">
            <div>
              <h2 className="serif-title smallish">A little about me</h2>
              <p className="body-copy">I’m an Information Systems undergraduate at Universitas Indonesia with a growing interest in technology, software development, project management, and user-centered solutions.</p>
              <p className="body-copy">I enjoy working at the intersection of logic and people - turning ideas into structured plans, collaborating with teams, and building solutions that feel useful, thoughtful, and meaningful.</p>
            </div>
            <div className="mini-carousel">
              <MiniCarousel photos={aboutPhotos} frameClass="mini-frame" />
            </div>
          </div>
        </section>

        <section className="inspiration section-pad" id="inspiration">
          <div className="section-kicker">Inspiration</div>
          <div className="inspire-card">
            <div className="inspire-copy">
              <h2 className="script-title">The woman who inspires me most</h2>
              <p>My biggest inspiration in life is my mother. As an accountant who once worked at Deloitte and now serves as the CFO of our family business, she has shown me what it means to be capable, graceful, and resilient in a professional world.</p>
              <p>Watching her grow as a woman in her career shaped the way I see ambition - not as something loud, but as something consistent, disciplined, and deeply meaningful.</p>
            </div>
            <div className="inspire-photo-box">
              <MiniCarousel photos={momPhotos} frameClass="mom-frame" />
            </div>
          </div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="section-kicker">Experience</div>
          <h2 className="serif-title experience-title">Where I learned to lead, organize, and communicate.</h2>
          <div className="experience-shell">
            <div className="experience-list">
              <div
                className="experience-track"
                onTransitionEnd={normalizeExperience}
                style={{
                  transform: `translateY(-${experienceIndex * 176}px)`,
                  transition: experienceAnimate ? 'transform .55s cubic-bezier(.22,.61,.36,1)' : 'none',
                }}
              >
                {loopExperienceItems.map((item, index) => (
                  <button
                    className="experience-card"
                    key={`${item.title}-${index}`}
                    onClick={() => setSelectedExperience(item)}
                    type="button"
                  >
                    {item.image ? <img src={item.image} alt={item.alt} /> : <div className="blank-photo">{item.blank}</div>}
                    <div>
                      <span>{item.period}</span>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="experience-controls">
              <button onClick={() => moveExperience(-1)} aria-label="Previous experience">↑</button>
              <button onClick={() => moveExperience(1)} aria-label="Next experience">↓</button>
            </div>
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="section-kicker">Projects</div>
          <div className="section-head-row">
            <h2 className="serif-title">Selected projects</h2>
            <div className="inline-controls">
              <button onClick={() => setProject(projectIndex - 1)}>&lsaquo;</button>
              <button onClick={() => setProject(projectIndex + 1)}>&rsaquo;</button>
            </div>
          </div>
          <div className="project-window">
            <div className="project-track" style={{ transform: `translateX(-${projectIndex * 100}%)` }}>
              {projectSlides.map((slide, slideIndex) => (
                <div className="project-slide" key={slideIndex}>
                  {slide.map(project => (
                    <article
                      className={`project-card${project.title === 'TikTakTuk' ? ' live' : ''}${project.title === 'Next chapter' ? ' ghost' : ''}`}
                      key={project.title}
                      onClick={() => setSelectedProject(project)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={event => {
                        if (event.key === 'Enter' || event.key === ' ') setSelectedProject(project);
                      }}
                    >
                      <span>Academic Project</span>
                      <h3>{project.title}</h3>
                      <p>{project.body}</p>
                      {project.href ? <a href={project.href} target="_blank" onClick={event => event.stopPropagation()}>View live project →</a> : null}
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="travel section-pad" id="archive">
          <div className="section-kicker">Archive</div>
          <div className="section-head-row">
            <h2 className="serif-title">Travel archive</h2>
            <p className="small-note">Beyond systems and study, I collect perspectives through travel.</p>
          </div>
          <LoopCarousel photos={travelPhotos} onOpen={openLightbox} />
        </section>

        <section className="personal section-pad">
          <div className="section-head-row">
            <h2 className="serif-title">Personal archive</h2>
            <p className="small-note">Campus, friends, organizations, and everything in between.</p>
          </div>
          <LoopCarousel photos={personalPhotos} small onOpen={openLightbox} />
        </section>
      </main>

      <footer className="footer section-pad" id="contact">
        <p>Nisrina Fatimah</p>
        <div>
          <a href="mailto:nisrina.fatimah@ui.ac.id">nisrina.fatimah@ui.ac.id</a>
          <a href="https://www.linkedin.com/in/nisrinafatimahalts/" target="_blank">LinkedIn</a>
          <a href="https://github.com/Nisrinalts" target="_blank">GitHub</a>
        </div>
      </footer>

      <div className={`modal story-modal${storyOpen ? ' open' : ''}`} aria-hidden={!storyOpen}>
        <div className="modal-backdrop" onClick={() => setStoryOpen(false)} />
        <div className="story-panel">
          <button className="close" onClick={() => setStoryOpen(false)}>×</button>
          <p className="eyebrow">Story</p>
          <h2>Nisrina Fatimah</h2>
          <p>For as long as I can remember, I’ve always been drawn to spaces where ideas, people, and execution meet. From joining student organizations in high school, contributing to school events, participating in MUN, and now growing through university communities and projects, I’ve learned that I genuinely enjoy building things with people.</p>
          <p>Whether it’s organizing an event, coordinating a team, designing a system, or developing an application, I’m always excited by the process of turning something abstract into something real.</p>
        </div>
      </div>

      <div className={`modal detail-modal${selectedExperience ? ' open' : ''}`} aria-hidden={!selectedExperience}>
        <div className="modal-backdrop" onClick={() => setSelectedExperience(null)} />
        {selectedExperience ? (
          <div className="detail-panel">
            <button className="close" onClick={() => setSelectedExperience(null)}>×</button>
            <p className="eyebrow">{selectedExperience.period}</p>
            <h2>{selectedExperience.title}</h2>
            <p className="detail-lead">{selectedExperience.body}</p>
            <div className="detail-grid">
              <div>
                <h3>What I did</h3>
                <ul>
                  {selectedExperience.details.map(detail => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
              <div>
                <h3>Impact</h3>
                <p>{selectedExperience.impact}</p>
                <div className="tag-row">
                  {selectedExperience.skills.map(skill => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className={`modal detail-modal${selectedProject ? ' open' : ''}`} aria-hidden={!selectedProject}>
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)} />
        {selectedProject ? (
          <div className="detail-panel">
            <button className="close" onClick={() => setSelectedProject(null)}>×</button>
            <p className="eyebrow">Academic Project</p>
            <h2>{selectedProject.title}</h2>
            <p className="detail-lead">{selectedProject.body}</p>
            <div className="detail-grid">
              <div>
                <h3>What it does</h3>
                <ul>
                  {selectedProject.details.map(detail => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
              <div>
                <h3>Tools & impact</h3>
                <p>{selectedProject.impact}</p>
                <div className="tag-row">
                  {selectedProject.stack.map(item => <span key={item}>{item}</span>)}
                </div>
                {selectedProject.href ? <a className="detail-link" href={selectedProject.href} target="_blank">Open live project</a> : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className={`modal lightbox${lightbox.open ? ' open' : ''}`} aria-hidden={!lightbox.open}>
        <div className="modal-backdrop" onClick={() => setLightbox(current => ({ ...current, open: false }))} />
        <button className="close light-close" onClick={() => setLightbox(current => ({ ...current, open: false }))}>×</button>
        <button className="light-nav prev" onClick={() => showLight(lightbox.index - 1)}>&lsaquo;</button>
        {lightbox.items.length ? <img src={lightbox.items[lightbox.index]} alt="Expanded archive photo" /> : null}
        <button className="light-nav next" onClick={() => showLight(lightbox.index + 1)}>&rsaquo;</button>
      </div>
    </>
  );
}

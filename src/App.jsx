import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Calendar,
  ClipboardList,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Microscope,
  School,
  Stethoscope,
  Users,
} from "lucide-react";
import { Button } from "./components/ui/button.jsx";
import { Card, CardContent } from "./components/ui/card.jsx";

const linkedInUrl = "https://www.linkedin.com/in/victor-bravo-a05b79291/";
const githubUrl = "https://github.com/Commonmind7";

export default function PhysicianScientistPortfolio() {
  const cvHighlights = [
    {
      label: "Education",
      value: "UTSA Biology major",
      date: "Fall 2023-Present",
      detail:
        "B.S. Biology, Chemistry minor; expected graduation Fall 2026",
    },
    {
      label: "Honors College",
      value: "UTSA Honors College",
      date: "Fall 2024-Present",
      detail: "Honors coursework, student community, and academic development",
    },
    {
      label: "Research Home",
      value: "Mays Cancer Center",
      date: "Summer 2025-Present",
      detail: "Dr. Brenner Lab at UT Health San Antonio",
    },
    {
      label: "Research Focus",
      value: "Translational oncology",
      date: "Current",
      detail:
        "Leptomeningeal disease, ER+ breast cancer, and endocrine resistance",
    },
    {
      label: "Clinical Exposure",
      value: "MA and ED scribe",
      date: "2024-Present",
      detail: "Hopscotch Health and Methodist hospital emergency departments",
    },
    {
      label: "Service",
      value: "Community-centered care",
      date: "2023-Present",
      detail: "Corazón Medical Clinic and medically focused service",
    },
    {
      label: "Leadership",
      value: "Preparation and mentorship",
      date: "2025-Present",
      detail: "VAW Site Leader, HCSAB, Pathways, and first-generation support",
    },
    {
      label: "Presentation",
      value: "NCUR 2026 poster",
      date: "April 15, 2026",
      detail: "Poster #1119, Richmond, Virginia",
    },
  ];

  const researchInterests = [
    "Translational oncology",
    "Endocrine-resistant breast cancer",
    "ER+ breast cancer",
    "Leptomeningeal disease",
    "Cancer metastasis",
    "IVIS imaging and preclinical models",
    "Patient-centered cancer research",
    "Technical tools for research organization and communication",
  ];

  const researchSummary = [
    {
      title: "Project Background",
      text:
        "The main project I have contributed to focuses on establishing an in vivo model of leptomeningeal disease using tamoxifen-resistant MCF7 breast cancer cells, within a translational oncology setting at Mays Cancer Center.",
    },
    {
      title: "My Role",
      text:
        "As an undergraduate trainee, I contributed to project workflows involving animal-model preparation, disease monitoring, IVIS imaging, optimization discussions, research communication, and interpretation of preclinical oncology data under mentorship from the Brenner Lab.",
    },
    {
      title: "Techniques and Models",
      text:
        "The work has involved tamoxifen-resistant MCF7 cells, luciferase-labeled cells, IVIS bioluminescence imaging, cisterna magna injection, lateral ventricle injection, Evans Blue dye optimization, and imlunestrant as a therapeutic angle.",
    },
    {
      title: "Output and Communication",
      text:
        "This research is connected to my accepted NCUR 2026 poster presentation and has helped me practice translating technical research details into a clearer scientific narrative.",
    },
  ];

  const researchResponsibilities = [
    "Contributed to a project focused on leptomeningeal disease modeling in endocrine-resistant breast cancer.",
    "Built experience with animal-model workflows, disease monitoring, and IVIS bioluminescence imaging.",
    "Supported optimization work involving injection approaches and Evans Blue dye visualization.",
    "Helped prepare research communication connected to NCUR 2026.",
    "Developed practical familiarity with data interpretation, experimental planning, and translational oncology questions.",
  ];

  const researchExperiences = [
    {
      icon: <Microscope aria-hidden="true" />,
      title: "Mays Cancer Center / Dr. Brenner Lab",
      date: "Summer 2025-Present",
      subtitle: "UT Health San Antonio",
      text:
        "Undergraduate translational oncology research experience focused on endocrine-resistant breast cancer and leptomeningeal disease modeling.",
    },
    {
      icon: <Award aria-hidden="true" />,
      title: "MCC ACS Cancer Research Summer Program",
      date: "Summer 2025",
      subtitle: "Mays Cancer Center",
      text:
        "Cancer research summer program experience connected to my development in oncology research and scientific communication.",
    },
    {
      icon: <Users aria-hidden="true" />,
      title: "Mays Cancer Center Affiliate Member",
      date: "August 2025-Present",
      subtitle: "Mays Cancer Center",
      text:
        "Ongoing connection to the Mays Cancer Center research community following summer research participation and continued development in oncology research.",
    },
  ];

  const presentations = [
    {
      title: "NCUR 2026 Poster Presentation",
      venue:
        "National Conference on Undergraduate Research | Richmond, Virginia",
      date: "April 15, 2026",
      description:
        "Poster #1119, Student Poster Presentation Session 009, Exhibit Hall A, 1:00-1:50 PM. Topic: leptomeningeal disease research connected to endocrine-resistant breast cancer and Mays Cancer Center research.",
      status: "Accepted Presentation",
      link: "/NCUR_2026_LMD_Poster_Victor_Bravo.pdf",
      linkLabel: "View NCUR Poster",
    },
    {
      title: "Manuscripts, Abstracts, and Publications",
      venue: "Future scholarly output",
      date: "As available",
      description:
        "No peer-reviewed publications are listed at this time. Future manuscripts, abstracts, and publications will be added as they become available.",
    },
  ];

  const clinicalExperience = [
    {
      icon: <Stethoscope aria-hidden="true" />,
      title: "Medical Assistant",
      date: "September 2025-Present",
      subtitle: "Hopscotch Health | Pediatric urgent care and primary care",
      text:
        "Supported patient intake, vitals, documentation, front desk workflow, patient flow, injections and vaccines when appropriate, and bilingual communication with families.",
    },
    {
      icon: <FileText aria-hidden="true" />,
      title: "Emergency Department Scribe",
      date: "02/01/2024-12/12/2024",
      subtitle: "ProScribe / Methodist Hospitals",
      text:
        "Documented visits in real time, including HPI, ROS, and physical exam documentation, while observing diagnostic reasoning, emergency department flow, interprofessional communication, and physicians working under pressure.",
    },
  ];

  const service = [
    {
      icon: <HeartPulse aria-hidden="true" />,
      title: "Corazón Medical Clinic",
      date: "08/01/2023-Present",
      subtitle: "Free clinic serving underserved and uninsured patients in San Antonio",
      text:
        "Served in patient-support roles involving intake, vitals, triage and pharmacy exposure, and patient support, connecting clinical interests to access and community-centered care.",
    },
    {
      icon: <Users aria-hidden="true" />,
      title: "Cibolo Gardens Volunteer",
      date: "09/01/2023-12/12/2023",
      subtitle: "Community service",
      text:
        "Brief community volunteer experience that contributed to early service development before more sustained clinical and medically focused service roles.",
    },
  ];

  const leadership = [
    {
      icon: <Users aria-hidden="true" />,
      title: "UTSA Volunteers Around the World Medical Chapter",
      date: "2025-2026",
      subtitle: "Site Leader | Peru medical trip preparation",
      text:
        "Helped prepare interns for supervised international clinical service through training on intake, vitals, patient interaction, country context, clinic expectations, logistics, communication, humility, and team responsibility.",
    },
    {
      icon: <School aria-hidden="true" />,
      title: "Honors College Student Advisory Board",
      date: "05/2025-Present",
      subtitle: "Board member, recruitment, mentorship, and programming",
      text:
        "Supported student programming, mentor and mentee recruitment, peer mentorship infrastructure, and efforts to help younger Honors students understand opportunities and feel connected.",
    },
    {
      icon: <GraduationCap aria-hidden="true" />,
      title: "First Gen Scholars / Scholarship Association",
      date: "Fall 2025-Present",
      subtitle: "First-generation student support",
      text:
        "Engaged in mentorship, guidance, and first-generation student support, consistent with my interest in helping students translate ambition into concrete academic and professional steps.",
    },
    {
      icon: <BookOpen aria-hidden="true" />,
      title: "Pathways to Medicine Program",
      date: "12/02/2024-12/10/2025",
      subtitle: "UT Health San Antonio",
      text:
        "Professional development experience involving mentorship, workshops, clinical exposure, and physician and medical student guidance.",
    },
  ];

  const academicExperiences = [
    {
      title: "Migration & Human Development",
      date: "Spring 2025",
      text:
        "Honors coursework that connected migration, human development, and social context to how I think about communities and healthcare.",
    },
    {
      title: "Study Abroad in Oaxaca and Mexico City",
      date: "Spring 2025",
      text:
        "Academic experience that deepened my understanding of culture, migration, and human development.",
    },
    {
      title: "Civic Ethos Honors Course",
      date: "Fall 2025",
      text:
        "Honors coursework focused on civic engagement, responsibility, and community-oriented thinking.",
    },
    {
      title: "CURES / FlyCURE / GEP Research Experience",
      date: "Fall 2025-Spring 2026",
      text:
        "BIO 2073 Genomics Education Partnership in Fall 2025 and BIO 3053 SRI: GEP/FlyCURE in Spring 2026.",
    },
  ];

  const currentProjects = [
    {
      title: "Physician-Scientist Portfolio Website",
      description:
        "A professional portfolio built to organize research, clinical experience, service, leadership, scholarly work, and technical projects.",
      tag: "Live Portfolio",
    },
  ];

  const plannedProjects = [
    {
      title: "Research Dashboard",
      description:
        "A planned tool for organizing experimental timelines, research notes, cohort information, literature summaries, and data visualization.",
      tag: "Planned Project",
    },
    {
      title: "VAW Operations Toolkit",
      description:
        "A planned tool to organize intern training, packing lists, clinic rotations, attendance, and preparation resources for medical service trips.",
      tag: "Planned Project",
    },
    {
      title: "Learning Analytics Dashboard",
      description:
        "A possible future project to connect study behavior, practice questions, weak-topic identification, sleep, and performance trends.",
      tag: "Planned Project",
    },
  ];

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Victor Bravo home">
            <span>Victor Bravo</span>
            <small>Aspiring Physician-Scientist</small>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#cv">CV</a>
            <a href="#interests">Interests</a>
            <a href="#research">Research</a>
            <a href="#scholarly-work">Scholarly Work</a>
            <a href="#clinical">Clinical</a>
            <a href="#service">Service</a>
            <a href="#projects">Projects</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">
              Premedical student building a physician-scientist path through translational oncology research, patient-facing clinical work, and service leadership.
            </p>
            <h1>Victor Bravo</h1>
            <p className="hero-text">
              I am a first-generation premedical student at The University of Texas
              at San Antonio, majoring in Biology with a Chemistry minor and studying
              in the UTSA Honors College. I am building toward physician-scientist
              training with a developing focus in translational oncology, cancer
              biology, and patient-centered cancer research.
            </p>
            <p className="hero-text">
              My current research experience centers on endocrine-resistant breast
              cancer and leptomeningeal disease modeling through the Mays Cancer
              Center at UT Health San Antonio.
            </p>
            <div className="hero-actions">
              <Button as="a" href="#research">
                View Research
              </Button>
              <Button
                as="a"
                href="/Victor_Bravo_CV.pdf"
                rel="noopener noreferrer"
                target="_blank"
                variant="outline"
              >
                CV PDF
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="headshot-card" aria-label="Victor Bravo portrait">
              <img src="/headshot.jpg" alt="Victor Bravo headshot" />
              <div>
                <span>Victor Bravo</span>
                <p>Aspiring Physician-Scientist</p>
              </div>
            </div>
            <Card className="focus-card">
              <CardContent>
                <div className="icon-tile icon-tile-dark">
                  <HeartPulse aria-hidden="true" />
                </div>
                <h2>Current Focus</h2>
                <p>
                  Building research, clinical, service, and mentorship experience
                  that supports a future physician-scientist path in oncology.
                </p>
                <div className="focus-list">
                  <span>
                    <GraduationCap aria-hidden="true" /> UTSA Biology major, Chemistry minor
                  </span>
                  <span>
                    <Calendar aria-hidden="true" /> Expected graduation: Fall 2026
                  </span>
                  <span>
                    <MapPin aria-hidden="true" /> South Texas and San Antonio
                  </span>
                  <span>
                    <Award aria-hidden="true" /> NCUR 2026 poster #1119
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="about" className="section section-white">
          <div className="content-width">
            <h2>Physician-Scientist Portfolio</h2>
            <p className="section-lede">
              This site organizes the evidence behind my current path:
              translational oncology research, patient-facing clinical work,
              community service in San Antonio, leadership through preparation and
              mentorship, and technical projects that support research communication
              and organization.
            </p>
          </div>
        </section>

        <section id="cv" className="section">
          <div className="content-width">
            <div className="section-heading">
              <h2>CV Snapshot</h2>
              <p>
                Dated overview for research mentors, scholarship committees, MD/PhD
                programs, competitive internships, and professional networking.
              </p>
            </div>

            <div className="cv-grid">
              {cvHighlights.map((item) => (
                <Card key={item.label}>
                  <CardContent>
                    <span className="meta-label">{item.label}</span>
                    <h3>{item.value}</h3>
                    <p className="date-pill">{item.date}</p>
                    <p>{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="interests" className="section section-white">
          <div className="content-width">
            <div className="section-heading">
              <h2>Research Interests</h2>
              <p>
                Areas I am using coursework, research training, clinical exposure,
                and technical projects to understand more deeply.
              </p>
            </div>
            <div className="interest-grid">
              {researchInterests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="section">
          <div className="content-width">
            <div className="section-heading">
              <h2>Research</h2>
              <p>
                My main research experience is through the Mays Cancer Center at UT
                Health San Antonio in Dr. Brenner's lab, beginning in Summer 2025.
              </p>
            </div>

            <Card className="research-card">
              <CardContent>
                <div className="research-panel">
                  <Microscope aria-hidden="true" />
                  <h3>Mays Cancer Center</h3>
                  <p>Summer 2025-Present | UT Health San Antonio</p>
                </div>
                <div className="research-copy">
                  <h3>Leptomeningeal Disease Model in Endocrine-Resistant Breast Cancer</h3>
                  <p>
                    I contributed to a project focused on establishing an in vivo model
                    of leptomeningeal disease using tamoxifen-resistant MCF7 breast
                    cancer cells. The work sits within translational oncology and ER+
                    breast cancer research and includes luciferase-labeled cells, IVIS
                    bioluminescence imaging, cisterna magna injection, lateral ventricle
                    injection, Evans Blue dye optimization, and imlunestrant as a
                    therapeutic angle.
                  </p>
                  <div className="tag-list">
                    {[
                      "Translational Oncology",
                      "ER+ Breast Cancer",
                      "Endocrine Resistance",
                      "Leptomeningeal Disease",
                      "IVIS Imaging",
                      "Preclinical Models",
                    ].map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="research-detail-grid">
              {researchSummary.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <Card className="responsibility-card">
              <CardContent>
                <div>
                  <span className="meta-label">Research Responsibilities</span>
                  <h3>Undergraduate Research Responsibilities</h3>
                </div>
                <ul>
                  {researchResponsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="card-grid">
              {researchExperiences.map((item) => (
                <Card key={item.title}>
                  <CardContent>
                    <div className="icon-tile">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p className="date-pill">{item.date}</p>
                    <p className="card-subtitle">{item.subtitle}</p>
                    <p>{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="scholarly-work" className="section section-white">
          <div className="content-width">
            <div className="section-heading">
              <h2>Presentations & Scholarly Work</h2>
              <p>
                Research communication connected to undergraduate cancer research.
                No peer-reviewed publications are claimed here.
              </p>
            </div>
            <div className="publication-list">
              {presentations.map((item) => (
                <article className="publication-item" key={item.title}>
                  <div>
                    {item.status && <span className="project-tag">{item.status}</span>}
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.link && (
                      <Button
                        as="a"
                        className="inline-button"
                        href={item.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FileText aria-hidden="true" /> {item.linkLabel}
                      </Button>
                    )}
                  </div>
                  <div className="publication-meta">
                    <span>{item.venue}</span>
                    <strong>{item.date}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="clinical" className="section">
          <div className="content-width">
            <div className="section-heading">
              <h2>Clinical Experience</h2>
              <p>
                Patient-facing and documentation experiences that keep my research
                interests grounded in communication, clinical reasoning, and care
                delivery.
              </p>
            </div>
            <div className="card-grid two-column">
              {clinicalExperience.map((item) => (
                <Card key={item.title}>
                  <CardContent>
                    <div className="icon-tile">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p className="date-pill">{item.date}</p>
                    <p className="card-subtitle">{item.subtitle}</p>
                    <p>{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="service" className="section section-white">
          <div className="content-width">
            <div className="section-heading">
              <h2>Service</h2>
              <p>
                Service experiences connected to healthcare access, patient support,
                and community-centered care in San Antonio.
              </p>
            </div>
            <div className="card-grid two-column">
              {service.map((item) => (
                <Card key={item.title}>
                  <CardContent>
                    <div className="icon-tile">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p className="date-pill">{item.date}</p>
                    <p className="card-subtitle">{item.subtitle}</p>
                    <p>{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="leadership" className="section">
          <div className="content-width">
            <div className="section-heading">
              <h2>Leadership, Mentorship & Preparation</h2>
              <p>
                Leadership roles centered on preparation, communication, supervised
                service, peer mentorship, first-generation support, and professional
                development.
              </p>
            </div>
            <div className="card-grid">
              {leadership.map((item) => (
                <Card key={item.title}>
                  <CardContent>
                    <div className="icon-tile">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p className="date-pill">{item.date}</p>
                    <p className="card-subtitle">{item.subtitle}</p>
                    <p>{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="academic-development" className="section section-white">
          <div className="content-width">
            <div className="section-heading">
              <h2>Academic Development</h2>
              <p>
                Concise academic experiences that add context without outweighing
                research, clinical work, and service.
              </p>
            </div>
            <div className="detail-list">
              {academicExperiences.map((item) => (
                <article key={item.title}>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="date-pill">{item.date}</p>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="content-width">
            <div className="section-heading">
              <h2>Technical Projects</h2>
              <p>
                Early coding projects connected to research organization, service
                leadership, and structured learning.
              </p>
            </div>

            <div className="project-group featured-project">
              <span className="meta-label">Current Project</span>
              <div className="card-grid two-column">
                {currentProjects.map((project) => (
                  <Card key={project.title}>
                    <CardContent>
                      <span className="project-tag">{project.tag}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="project-group planned-projects">
              <span className="meta-label">Planned Projects</span>
              <div className="card-grid">
                {plannedProjects.map((project) => (
                  <Card key={project.title}>
                    <CardContent>
                      <span className="project-tag">{project.tag}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="contact-section">
          <div className="content-width">
            <h2>Contact</h2>
            <p>
              I welcome opportunities connected to translational oncology research,
              clinical mentorship, scholarship programs, competitive research
              internships, physician-scientist preparation, and technical projects
              that support research communication.
            </p>
            <div className="contact-actions">
              <Button as="a" href="mailto:vicbravojr@gmail.com" variant="secondary">
                <Mail aria-hidden="true" /> Email
              </Button>
              <Button
                as="a"
                href="/Victor_Bravo_CV.pdf"
                rel="noopener noreferrer"
                target="_blank"
                variant="inverse"
              >
                <FileText aria-hidden="true" /> CV PDF
              </Button>
              <Button
                as="a"
                href={linkedInUrl}
                rel="noopener noreferrer"
                target="_blank"
                variant="inverse"
              >
                <ExternalLink aria-hidden="true" /> LinkedIn
              </Button>
              <Button
                as="a"
                href={githubUrl}
                rel="noopener noreferrer"
                target="_blank"
                variant="inverse"
              >
                <Github aria-hidden="true" /> GitHub
              </Button>
              <Button as="a" href="#projects" variant="inverse">
                <BookOpen aria-hidden="true" /> Projects
              </Button>
            </div>
            <p className="last-updated">Last updated: May 2026</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

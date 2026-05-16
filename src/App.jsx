import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Calendar,
  ClipboardList,
  ExternalLink,
  FileText,
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

export default function PhysicianScientistPortfolio() {
  const cvHighlights = [
    {
      label: "Education",
      value: "UTSA Biology major",
      detail: "Chemistry minor and member of the UTSA Honors College",
    },
    {
      label: "Research Home",
      value: "Mays Cancer Center",
      detail: "Dr. Brenner Lab at UT Health San Antonio",
    },
    {
      label: "Research Focus",
      value: "Translational oncology",
      detail: "Leptomeningeal disease and endocrine-resistant breast cancer",
    },
    {
      label: "Clinical Exposure",
      value: "MA and ED scribe",
      detail: "Hopscotch Health and Methodist emergency departments",
    },
    {
      label: "Service",
      value: "Community-centered care",
      detail: "Corazón Medical Clinic and VAW Medical Chapter",
    },
    {
      label: "Leadership",
      value: "Preparation and mentorship",
      detail: "VAW Medical Site Leader and HCSAB board member",
    },
    {
      label: "Presentation",
      value: "NCUR 2026 poster",
      detail: "Poster #1119 in Richmond, Virginia",
    },
    {
      label: "Direction",
      value: "MD/PhD preparation",
      detail: "Oncology, cancer biology, and translational medicine",
    },
  ];

  const researchAreas = [
    {
      icon: <Microscope aria-hidden="true" />,
      title: "Mays Cancer Center Research",
      subtitle: "Mays Cancer Center at UT Health San Antonio | Dr. Brenner Lab",
      text: "Worked on a project focused on establishing an in vivo leptomeningeal disease model using tamoxifen-resistant MCF7 breast cancer cells.",
    },
    {
      icon: <ClipboardList aria-hidden="true" />,
      title: "Experimental and Imaging Exposure",
      subtitle: "Luciferase-labeled cells and IVIS bioluminescence imaging",
      text: "Gained experience with animal-model workflows, luciferase-labeled cells, IVIS imaging, disease monitoring, data interpretation, and research communication.",
    },
    {
      icon: <BookOpen aria-hidden="true" />,
      title: "Therapeutic Angle",
      subtitle: "Imlunestrant and endocrine-resistant breast cancer",
      text: "Developed exposure to translational questions involving endocrine resistance and imlunestrant as a therapeutic angle, while learning how preclinical models can connect to clinical problems.",
    },
  ];

  const presentations = [
    {
      title: "NCUR 2026 Poster Presentation",
      venue: "National Conference on Undergraduate Research | Richmond, Virginia",
      date: "2026",
      description:
        "Poster #1119 on leptomeningeal disease research connected to undergraduate cancer research through Mays Cancer Center and UTSA.",
      status: "Accepted Presentation",
    },
    {
      title: "Mays Cancer Center Research Development",
      venue: "Dr. Brenner Lab | UT Health San Antonio",
      date: "Ongoing",
      description:
        "Ongoing development through lab discussions, experimental design exposure, animal-model workflows, data interpretation, and preparation for research communication.",
      status: "Scholarly Development",
    },
    {
      title: "Manuscripts and Publications",
      venue: "Future scholarly output",
      date: "As available",
      description:
        "Manuscripts and publications will be added as they become available.",
      status: "Placeholder",
    },
  ];

  const clinicalExperience = [
    {
      icon: <Stethoscope aria-hidden="true" />,
      title: "Medical Assistant",
      subtitle: "Hopscotch Health | Pediatric urgent care and primary care",
      text: "Supported patient intake, vitals, documentation, injections and vaccines when appropriate, front desk coordination, patient flow, and bilingual communication with families.",
    },
    {
      icon: <FileText aria-hidden="true" />,
      title: "Emergency Department Scribe",
      subtitle: "ProScribe | Methodist hospital emergency departments",
      text: "Documented visits in real time, including HPI, ROS, physical exam, and clinical reasoning exposure while observing physician communication, diagnostic reasoning, interprofessional teamwork, and emergency department flow.",
    },
  ];

  const service = [
    {
      icon: <HeartPulse aria-hidden="true" />,
      title: "Corazón Medical Clinic",
      subtitle: "Free clinic serving underserved and uninsured patients in San Antonio",
      text: "Served in patient-support roles involving intake, vitals, triage and pharmacy exposure, and clinic flow support, connecting my clinical interests to healthcare access and community-centered care.",
    },
    {
      icon: <Users aria-hidden="true" />,
      title: "VAW Medical Chapter",
      subtitle: "UTSA Volunteers Around the World Medical Chapter",
      text: "Helped prepare students for medical service by emphasizing patient interaction, intake, vitals, cultural context, clinic expectations, and responsible preparation.",
    },
  ];

  const leadership = [
    {
      icon: <Users aria-hidden="true" />,
      title: "VAW Medical Site Leader",
      subtitle: "Peru medical trip preparation and team leadership",
      text: "Led intern preparation and organized trainings on intake, vitals, patient interaction, country context, clinic expectations, logistics, and team readiness for international clinical service.",
    },
    {
      icon: <School aria-hidden="true" />,
      title: "Honors College Student Advisory Board",
      subtitle: "Board member, recruitment, mentorship, and community-building",
      text: "Supported student programming and helped develop peer mentorship infrastructure so Honors students, especially younger students, could better understand opportunities and feel connected.",
    },
    {
      icon: <GraduationCap aria-hidden="true" />,
      title: "First-Generation Mentorship",
      subtitle: "South Texas background and first-generation student perspective",
      text: "My first-generation background shapes my interest in helping students translate ambition into concrete academic, research, and professional steps. Mentorship is a recurring theme in how I approach leadership.",
    },
  ];

  const academicExperiences = [
    {
      title: "UTSA Honors College",
      text: "Honors coursework and academic community have helped me connect scientific preparation with broader questions about migration, human development, service, and social context.",
    },
    {
      title: "Study Abroad in Oaxaca and Mexico City",
      text: "Study abroad experience deepened my understanding of culture, migration, community, and human development in ways that inform how I think about medicine and service.",
    },
    {
      title: "Pathways to Medicine Program",
      text: "Participation in the Pathways to Medicine Program at UT Health San Antonio has supported my professional development and preparation for a career in medicine.",
    },
    {
      title: "CURES/FlyCURE Research Experience",
      text: "Early research training through CURES/FlyCURE contributed to my academic development and helped build a foundation for later cancer research experience.",
    },
  ];

  const projects = [
    {
      title: "Physician-Scientist Portfolio Website",
      description:
        "A professional portfolio built to organize research, clinical experience, leadership, service, scholarly work, and technical projects.",
      tag: "Current Project",
    },
    {
      title: "Future Research Dashboard",
      description:
        "A planned tool for organizing experimental timelines, research notes, cohort information, literature summaries, and data visualization.",
      tag: "Research Tools",
    },
    {
      title: "VAW Operations Toolkit",
      description:
        "A planned tool to organize intern training, packing lists, clinic rotations, attendance, and preparation resources for medical service trips.",
      tag: "Leadership Operations",
    },
    {
      title: "MCAT / Study Analytics Dashboard",
      description:
        "A possible future project to connect study hours, practice questions, weak topics, sleep, and performance trends.",
      tag: "Learning Analytics",
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
            <a href="#research">Research</a>
            <a href="#scholarly-work">Scholarly Work</a>
            <a href="#clinical">Clinical</a>
            <a href="#service">Service</a>
            <a href="#leadership">Leadership</a>
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
              Premedical student developing a physician-scientist path through translational oncology research, clinical care, and service leadership.
            </p>
            <h1>Victor Bravo</h1>
            <p className="hero-text">
              I am a first-generation premedical student at The University of Texas
              at San Antonio, majoring in Biology with a Chemistry minor and studying
              in the UTSA Honors College. I am preparing to apply to medical school
              with a growing MD/PhD focus in translational oncology, cancer biology,
              and the connection between patient care and research.
            </p>
            <p className="hero-text">
              My path is being built through Mays Cancer Center research, patient-facing
              clinical roles, service with underserved communities, leadership in medical
              volunteer preparation, and mentorship rooted in my South Texas and
              first-generation student background.
            </p>
            <div className="hero-actions">
              <Button as="a" href="#research">
                View Research
              </Button>
              <Button as="a" href="#cv" variant="outline">
                CV Snapshot
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
                  Building depth, not just collecting experiences: translational
                  oncology research, clinical maturity, community-centered service,
                  leadership, mentorship, and technical tools that support medicine
                  and research.
                </p>
                <div className="focus-list">
                  <span>
                    <GraduationCap aria-hidden="true" /> UTSA Biology major, Chemistry minor
                  </span>
                  <span>
                    <School aria-hidden="true" /> UTSA Honors College
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
            <h2>About</h2>
            <p className="section-lede">
              My long-term goal is to become a physician-scientist who connects
              patient care with cancer research. I am especially interested in
              translational oncology, endocrine-resistant breast cancer, and research
              questions that emerge from real clinical needs. As a first-generation
              student from South Texas, I also care deeply about mentorship,
              preparation, and helping students navigate paths that can feel opaque
              from the outside.
            </p>
          </div>
        </section>

        <section id="cv" className="section">
          <div className="content-width">
            <div className="section-heading">
              <h2>CV Snapshot</h2>
              <p>
                A concise overview for research mentors, scholarship committees,
                MD/PhD programs, and professional networking. Metrics and a formal
                CV PDF can be added later.
              </p>
            </div>

            <div className="cv-grid">
              {cvHighlights.map((item) => (
                <Card key={item.label}>
                  <CardContent>
                    <span className="meta-label">{item.label}</span>
                    <h3>{item.value}</h3>
                    <p>{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="section section-white">
          <div className="content-width">
            <div className="section-heading">
              <h2>Research</h2>
              <p>
                My main research experience is through the Mays Cancer Center at UT
                Health San Antonio in Dr. Brenner's lab, where I have worked on a
                translational oncology project focused on leptomeningeal disease and
                endocrine-resistant breast cancer.
              </p>
            </div>

            <Card className="research-card">
              <CardContent>
                <div className="research-panel">
                  <Microscope aria-hidden="true" />
                  <h3>Mays Cancer Center</h3>
                  <p>UT Health San Antonio | Dr. Brenner Lab</p>
                </div>
                <div className="research-copy">
                  <h3>Leptomeningeal Disease Model in Endocrine-Resistant Breast Cancer</h3>
                  <p>
                    I contributed to a project focused on establishing an in vivo model
                    of leptomeningeal disease using tamoxifen-resistant MCF7 breast
                    cancer cells. The project involved luciferase-labeled cells, IVIS
                    bioluminescence imaging, and a therapeutic angle involving
                    imlunestrant. Through this work, I gained exposure to experimental
                    design, animal-model workflows, research communication, and data
                    interpretation.
                  </p>
                  <div className="tag-list">
                    {[
                      "Translational Oncology",
                      "Cancer Biology",
                      "Endocrine Resistance",
                      "Leptomeningeal Disease",
                      "IVIS Imaging",
                      "MD/PhD Preparation",
                    ].map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="card-grid">
              {researchAreas.map((item) => (
                <Card key={item.title}>
                  <CardContent>
                    <div className="icon-tile">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p className="card-subtitle">{item.subtitle}</p>
                    <p>{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="scholarly-work" className="section">
          <div className="content-width">
            <div className="section-heading">
              <h2>Presentations & Scholarly Work</h2>
              <p>
                Current research communication and a structured place for future
                abstracts, manuscripts, and publications.
              </p>
            </div>
            <div className="publication-list">
              {presentations.map((item) => (
                <article className="publication-item" key={item.title}>
                  <div>
                    <span className="project-tag">{item.status}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
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

        <section id="clinical" className="section section-white">
          <div className="content-width">
            <div className="section-heading">
              <h2>Clinical Experience</h2>
              <p>
                Patient-facing and documentation experiences that keep my research
                interests grounded in communication, trust, clinical reasoning, and
                the realities of care delivery.
              </p>
            </div>
            <div className="card-grid two-column">
              {clinicalExperience.map((item) => (
                <Card key={item.title}>
                  <CardContent>
                    <div className="icon-tile">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p className="card-subtitle">{item.subtitle}</p>
                    <p>{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="section-note">
              These roles taught me that trust is often built through clear, calm
              communication, especially when parents are anxious, patients are
              navigating uncertainty, or language barriers are present.
            </p>
          </div>
        </section>

        <section id="service" className="section">
          <div className="content-width">
            <div className="section-heading">
              <h2>Service</h2>
              <p>
                Service experiences have helped me connect medicine to access,
                preparation, and community-centered care rather than viewing clinical
                exposure only as observation.
              </p>
            </div>
            <div className="card-grid two-column">
              {service.map((item) => (
                <Card key={item.title}>
                  <CardContent>
                    <div className="icon-tile">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p className="card-subtitle">{item.subtitle}</p>
                    <p>{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="leadership" className="section section-white">
          <div className="content-width">
            <div className="section-heading">
              <h2>Leadership & Mentorship</h2>
              <p>
                My leadership has centered on preparation, communication, student
                support, and building structures that help others understand what is
                expected before they enter clinical, academic, or service settings.
              </p>
            </div>
            <div className="card-grid">
              {leadership.map((item) => (
                <Card key={item.title}>
                  <CardContent>
                    <div className="icon-tile">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p className="card-subtitle">{item.subtitle}</p>
                    <p>{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="academic-development" className="section">
          <div className="content-width">
            <div className="section-heading">
              <h2>Academic Development</h2>
              <p>
                Additional academic experiences that have shaped how I think about
                medicine, research, human development, migration, and preparation.
              </p>
            </div>
            <div className="detail-list">
              {academicExperiences.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-white">
          <div className="content-width">
            <div className="section-heading">
              <h2>Technical Projects</h2>
              <p>
                Early coding and AI-assisted projects connected to medicine, research,
                leadership, and study systems.
              </p>
            </div>
            <div className="card-grid project-grid">
              {projects.map((project) => (
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
        </section>

        <section id="contact" className="contact-section">
          <div className="content-width">
            <h2>Contact</h2>
            <p>
              I welcome opportunities connected to translational oncology research,
              clinical mentorship, medical education, scholarship programs,
              physician-scientist preparation, and technical projects that support
              research or service.
            </p>
            <div className="contact-actions">
              <Button as="a" href="mailto:vicbravojr@gmail.com" variant="secondary">
                <Mail aria-hidden="true" /> Email
              </Button>
              <Button as="a" href="/Victor_Bravo_CV.pdf" variant="inverse">
                <FileText aria-hidden="true" /> CV PDF
              </Button>
              <Button
                as="a"
                href="https://www.linkedin.com/in/victor-bravo-a05b79291/"
                rel="noopener noreferrer"
                target="_blank"
                variant="inverse"
              >
                <ExternalLink aria-hidden="true" /> LinkedIn
              </Button>
              <Button as="a" href="#projects" variant="inverse">
                <BookOpen aria-hidden="true" /> Projects
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

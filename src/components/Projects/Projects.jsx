import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

const projectsData = [
  {
    title: 'Smart Task Manager',
    description: 'A Kanban-style task management system with RESTful APIs for task creation, updates, and deletion. Integrated Angular services with backend APIs and persisted data using Spring Data JPA.',
    tech: ['Angular', 'Spring Boot', 'MySQL', 'REST API'],
    github: 'https://github.com/Vidyasri17/Smart-Task-Manager',
    live: '#',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'AI Resume Analyzer',
    description: 'A full-stack web application to analyze resume-job compatibility. Features skill extraction and matching logic, generating ATS-style match scores and skill gap insights.',
    tech: ['React', 'Node.js', 'MongoDB', 'Axios'],
    github: 'https://github.com/Vidyasri17/AI-Resume-Analyzer',
    live: '#',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'What2Wear',
    description: 'A weather-based outfit recommendation system that integrates external weather APIs to fetch live climate data. Reduced manual outfit selection effort by automated recommendations.',
    tech: ['HTML/CSS', 'Python', 'Flask', 'Weather API'],
    github: 'https://github.com/Vidyasri17/What2Wear',
    live: '#',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80'
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.subtitle}>Some of my recent work that I'm proud of.</p>
      </motion.div>

      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} className={styles.projectImage} loading="lazy" />
              <div className={styles.overlay}>
                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkIcon}>
                    <FaGithub size={24} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className={styles.linkIcon}>
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

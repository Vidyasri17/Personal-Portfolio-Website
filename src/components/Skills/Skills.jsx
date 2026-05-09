import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillsData = [
  { category: 'Languages & DBs', items: ['Java', 'C++', 'Python', 'C', 'SQL', 'MongoDB'] },
  { category: 'Web Development', items: ['Angular', 'React', 'Spring Boot', 'Node.js', 'Flask', 'HTML/CSS'] },
  { category: 'Tools & Ecosystem', items: ['Git/GitHub', 'Docker', 'VS Code', 'Jupyter Notebook', 'Vite', 'Bootstrap'] }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Technical Expertise</h2>
        <p className={styles.subtitle}>Technologies I work with to bring ideas to life.</p>
      </motion.div>

      <div className={styles.skillsGrid}>
        {skillsData.map((skillGroup, index) => (
          <motion.div 
            key={index} 
            className={styles.skillCategory}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <h3 className={styles.categoryTitle}>{skillGroup.category}</h3>
            <div className={styles.skillItems}>
              {skillGroup.items.map((skill, i) => (
                <motion.div key={i} className={styles.skillBadge} variants={itemVariants}>
                  <div className={styles.skillDot}></div>
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

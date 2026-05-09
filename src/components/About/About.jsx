import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">About Me</h2>
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80" 
              alt="John Doe" 
              className={styles.avatar} 
              loading="lazy"
            />
            <div className={styles.imageBackdrop}></div>
          </div>
        </motion.div>

        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className={styles.bio}>
            Hello! I'm Vidyasri Tummalapalli, a B.Tech student specializing in AI & Machine Learning 
            at Aditya Engineering College (CGPA: 8.67). I am currently working as a Software Engineer 
            Intern at CodingMaxima, where I focus on frontend development using Angular to build responsive web components.
          </p>
          <p className={styles.bio}>
            I have a strong foundation in Data Structures, Java, C++, Python, and full-stack development. 
            I actively participate in coding platforms with over 300+ problems solved on LeetCode and 80+ on GeeksforGeeks. 
            I'm passionate about building scalable software systems and eager to tackle real-world engineering challenges.
          </p>
          
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>300+</h3>
              <p className={styles.statLabel}>LeetCode</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>80+</h3>
              <p className={styles.statLabel}>GFG</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>1st</h3>
              <p className={styles.statLabel}>Hackathon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

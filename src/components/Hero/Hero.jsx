import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <Parallax speed={-10} className={styles.backgroundParallax}>
        <div className={styles.glowCircle1}></div>
        <div className={styles.glowCircle2}></div>
      </Parallax>
      
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className={styles.greeting}>Hi, I'm <span className={styles.highlight}>Vidyasri Tummalapalli</span></h2>
        </motion.div>
        
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          AI & ML Enthusiast <br /> & Full Stack Developer
        </motion.h1>
        
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          B.Tech student specializing in Artificial Intelligence & Machine Learning, 
          passionate about building scalable software systems and real-world engineering solutions.
        </motion.p>
        
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#projects" className={styles.primaryBtn}>
            View My Work <ArrowRight size={20} />
          </a>
          <div className={styles.socials}>
            <a href="https://github.com/Vidyasri17" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/vidyasri-tummalapalli-188179291" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
            <a href="mailto:vidyasritummalapalli@gmail.com"><Mail /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

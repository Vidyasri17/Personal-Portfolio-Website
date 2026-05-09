import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.subtitle}>
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><Mail /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:vidyasritummalapalli@gmail.com">vidyasritummalapalli@gmail.com</a>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><Phone /></div>
              <div>
                <h4>Phone</h4>
                <p>9398574545</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><MapPin /></div>
              <div>
                <h4>Location</h4>
                <p>Kakinada, AP</p>
              </div>
            </div>

            <div className={styles.socials}>
              <a href="https://github.com/Vidyasri17" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vidyasri-tummalapalli-188179291" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className={styles.inputGroup}>
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
      
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Vidyasri Tummalapalli. Designed & Built with ❤️.</p>
      </footer>
    </section>
  );
};

export default Contact;

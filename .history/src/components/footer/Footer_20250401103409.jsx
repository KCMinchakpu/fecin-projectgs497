import React from 'react';
import styles from './footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {/* You can add a logo image here if needed */}
        <h2>FECIN</h2>
      </div>
      <div>
        <p className={styles.text}>FECIN © 2025 All rights reserved.</p>
        <p className={styles.author}>
          <a href="https://www.linkedin.com/in/kevin-cross-minchakpu-7897379a" target="_blank">Designed and Develop By: Kevin Cross Minchakpu</a>
          </p>
        <p className={styles.company}>
          <a href="https://octatesystems.github.io/OSNigeria/">Powered By: Octate Systems</a>
          </p>
      </div>
      <div className={styles.links}>
        <a href="/terms" className={styles.link}>Terms of Use</a>
        <a href="/privacy" className={styles.link}>Privacy Policy</a>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
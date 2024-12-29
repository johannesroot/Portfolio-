import React from "react";
import styles from './About.module.css';  // Importing the CSS module
import john from "../../assets/image/joo.jpg";  // Same image

const About = () => {
  return (
    <section className={styles.aboutContainer} id="about">
      <div className={styles.imageContainer}>
        <img src={john} alt="Profile" className={styles.profileImage} />
      </div>
      <div className={styles.aboutTextContainer}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutDescription}>
        I am a passionate and dedicated software engineer with 1.5 years of experience in building innovative solutions. I've gained hands-on experience in both front-end and back-end technologies, and I thrive on solving complex problems with clean, efficient code.

I specialize in web development, particularly with technologies such as JavaScript, React, Node.js, and Express. My experience extends to working with database like MySQL, as well as deploying applications.

I am continuously learning and growing, always seeking opportunities to refine my skills and contribute to impactful projects. With a strong foundation in full-stack development, I am excited about the future of technology and the endless possibilities that come with it.
        </p>
        <div className={styles.contactButtons}>
          <button className={styles.contactBtn}>Contact Me</button>
          <button className={styles.portfolioBtn}>Portfolio</button>
        </div>
      </div>
    </section>
  );
};

export default About;

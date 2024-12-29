import React, { useEffect, useRef, useState } from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  const [inView, setInView] = useState(false);
  const resumeRef = useRef(null);

  // Intersection Observer callback
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Set inView to true when the section is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    return () => {
      if (resumeRef.current) {
        observer.unobserve(resumeRef.current);
      }
    };
  }, []);

  return (
    <section className={`${styles.resumeContainer} ${inView ? styles.visible : ''}`} id="resume" ref={resumeRef}>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Dedicated Developer</h2>
        <p className={styles.cardContent}>
          For every full stack web project I will work on to make sure that all your project requirements are taken care of.
        </p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Suitable Project Timelines</h2>
        <p className={styles.cardContent}>
          I keep a track of your project development cycle regularly to ensure that your project is completed and delivered on time.
        </p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Technology Expertise</h2>
        <p className={styles.cardContent}>
          I have gained technical knowledge in full stack development solutions with years of experience in providing quality web applications using various technologies.
        </p>
      </div>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Single Stop Solution</h2>
        <p className={styles.cardContent}>
          I have experience of working on frameworks and advanced technologies so that you get all your required services under one roof.
        </p>
      </div>
    </section>
  );
};

export default Resume;

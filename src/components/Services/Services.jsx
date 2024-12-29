import React from 'react';
import { FaLaptopCode, FaCodeBranch, FaServer, FaCog, FaDatabase, FaDev } from 'react-icons/fa'; // Importing icons
import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <h2 className={styles.sectionTitle}>Services</h2> {/* Title above all boxes */}
      <div className={styles.servicesContainer}>
        <div className={styles.serviceBox}>
          <FaLaptopCode className={styles.icon} />
          <h3 className={styles.serviceTitle}>Web Development</h3>
        </div>
        <div className={styles.serviceBox}>
          <FaCodeBranch className={styles.icon} />
          <h3 className={styles.serviceTitle}>Front-end Development</h3>
        </div>
        <div className={styles.serviceBox}>
          <FaServer className={styles.icon} />
          <h3 className={styles.serviceTitle}>Back-end Development</h3>
        </div>
        <div className={styles.serviceBox}>
          <FaCog className={styles.icon} />
          <h3 className={styles.serviceTitle}>API Integration</h3>
        </div>
        <div className={styles.serviceBox}>
          <FaDatabase className={styles.icon} />
          <h3 className={styles.serviceTitle}>Database Configuration</h3>
        </div>
        <div className={styles.serviceBox}>
          <FaDev className={styles.icon} />
          <h3 className={styles.serviceTitle}>DevOps</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;

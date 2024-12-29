import React from "react";
import styles from "./Footer.module.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.iconContainer}>
        <div className={styles.iconWrapper}>
          <div className={styles.circle}>
            <FaEnvelope className={styles.icon} />
          </div>
          <p className={styles.iconText}>Email: yohannesgigar21@gmail.com</p>
        </div>
        <div className={styles.iconWrapper}>
          <div className={styles.circle}>
            <FaPhoneAlt className={styles.icon} />
          </div>
          <p className={styles.iconText}>Phone: +251993766780</p>
        </div>
        <div className={styles.iconWrapper}>
          <div className={styles.circle}>
            <FaMapMarkerAlt className={styles.icon} />
          </div>
          <p className={styles.iconText}>Address: Addis Ababa, Ethiopia</p>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p className={styles.copyRightText}>
          &copy; 2024 | Developed by <span className={styles.highlight}>Yohannes Gigar</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import styles from "./Contact.module.css";
import contactImage from "../../assets/image/joo.jpg";

const Contact = () => {
  return (
    <div className={styles.contactContainer} id="contact">
      <div className={styles.imageSection}>
        <img src={contactImage} alt="Contact" className={styles.contactImage} />
      </div>
      <div className={styles.formSection}>
        <h1 className={styles.contactTitle}>Get In Touch</h1>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.formInput}
              placeholder="Your Name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.formInput}
              placeholder="Your Email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.formInput}
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

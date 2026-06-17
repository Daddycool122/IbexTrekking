import { Helmet } from "react-helmet-async";
import React from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <div className={styles.contactWrapper}>

      <Helmet>
        <title>Contact Us | Ibex Ice Axe</title>
        <meta name="description" content="Get in touch with Ibex Ice Axe for bookings, trek inquiries, and custom adventure packages. We are here to help you plan your next Himalayan journey." />
      </Helmet>

      <header className={styles.contactHeader}>
        <h1>IBEX ICE AXE - Contact Us</h1>
        <p>
          We’d love to hear from you! Get in touch through any of the ways
          below.
        </p>
      </header>

      <div className={styles.contactContainer}>
        {/* Call Us */}
        <div className={`${styles.contactCard} ${styles.call}`}>
          <div className={styles.icon}>📞</div>
          <h2>Call Us</h2>
          <p>
            <a href="tel://+916396518778">+91-6396518778</a>
          </p>
          <p>Anytime</p>
        </div>

        {/* Email Us */}
        <div className={`${styles.contactCard} ${styles.email}`}>
          <div className={styles.icon}>📧</div>
          <h2>Email Us</h2>
          <p>
            <a href="mailto:contact@ibexiceaxe.com">contact@ibexiceaxe.com</a>
          </p>
          <p>We reply within 24 hours</p>
        </div>

        {/* Visit Us */}
        <div className={`${styles.contactCard} ${styles.visit}`}>
          <div className={styles.icon}>📍</div>
          <h2>Visit Us</h2>
          <p>Rishikesh,</p>
          <p>Uttarakhand, India 249193</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  const cards = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      number: "500+",
      title: "Happy Trekkers",
      desc: "Across 60+ destinations",
      isActive: true,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
      ),
      number: "50+",
      title: "Treks",
      desc: "Multiple regions",
      isActive: false,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      number: "3+",
      title: "Years",
      desc: "Of safe adventures",
      isActive: false,
    },

  ];

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Why Choose Ibex Trekking?</h2>
        <p className={styles.subtitle}>
          Trusted by thousands of trekkers and recognized by leading adventure
          bodies.
        </p>
        <span className={styles.divider}></span>
      </div>

      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${card.isActive ? styles.active : ""}`}
          >
            <div className={styles.icon}>{card.icon}</div>
            <h3 className={styles.number}>{card.number}</h3>
            <h4 className={styles.cardTitle}>{card.title}</h4>
            <p className={styles.cardDesc}>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

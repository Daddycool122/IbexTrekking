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
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
      number: "5+",
      title: "Awards",
      desc: "Industry recognition",
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
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
      number: "800+",
      title: "Heal Himala",
      desc: "Cleanup drives conducted successfully",
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

import React from "react";
import styles from "./About.module.css"; // keep CSS separate for clarity
import team1 from "./team1.PNG";
import team2 from "./team2.PNG";
import team3 from "./team3.JPG";

const AboutUs = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <h1 className={styles.h1}>About IbexIceAxe</h1>
        <p className={styles.p}>Conquering Trails, Creating Memories</p>
      </header>

      {/* Who We Are */}
      <section className={styles.content}>
        <h2 className={styles.sectionHeading}>Who We Are</h2>
        <p>
          At <strong>Ibex Ice Axe</strong>, we believe that every journey into
          the mountains is more than just a trek—it’s an experience that shapes
          you. From the snowy peaks of the Himalayas to hidden trails waiting to
          be discovered, we guide you through unforgettable journeys that
          connect you with nature and with yourself.
        </p>
      </section>

      {/* Mission */}
      <section className={styles.content}>
        <h2 className={styles.sectionHeading}>Our Mission</h2>
        <p>Our mission is simple:</p>
        <ul>
          <li>
            To make trekking and adventure sports accessible, safe, and fun for
            everyone.
          </li>
          <li>
            To provide reliable guidance, expert knowledge, and a supportive
            community.
          </li>
          <li>
            To promote eco-friendly travel and respect for the natural world.
          </li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className={styles.why_choose}>
        <h2 className={styles.sectionHeading}>Why Choose Us?</h2>
        <ul>
          <li>✅ Experienced guides who know the trails inside out</li>
          <li>✅ Treks tailored for beginners and seasoned adventurers</li>
          <li>✅ Focus on safety, comfort, and authentic experiences</li>
          <li>✅ A community that inspires and grows together</li>
        </ul>
      </section>

      {/* The Name */}
      <section className={styles.content}>
        <h2 className={styles.sectionHeading}>The Name "Ibex Ice Axe"</h2>
        <p>
          The <strong>ibex</strong>, a fearless mountain goat, symbolizes
          strength, balance, and the spirit of climbing higher against all odds.
          The <strong>ice axe</strong> is a tool of resilience and survival in
          the harshest terrains. Together, they represent our vision—to help
          adventurers reach new heights with courage and preparation.
        </p>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2 className={styles.sectionHeading}>Meet Our Team</h2>
        <div className={styles.team_members}>
          <div className={styles.member}>
            <img src={team2} alt="Rohit Sharma" />
            <h3>Paras Rawat</h3>
            <p>Trek Leader</p>
          </div>
          <div className={styles.member}>
            <img src={team1} alt="Anjali Mehta" />
            <h3>Akshay panday</h3>
            <p>Trek Leader</p>
          </div>
          <div className={styles.member}>
            <img src={team3} alt="Karan Verma" />
            <h3>Rahul Negi</h3>
            <p>Trek Leader</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.pageFooter}>
        <p>© 2025 Ibex Ice Axe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;

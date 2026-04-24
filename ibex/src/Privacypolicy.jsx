import React from "react";
import styles from "./PolicyPages.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Privacy Policy</h1>
        <p>
          At IbexIceAxe, we respect your privacy and are committed to protecting
          your personal information.
        </p>
      </header>

      <main className={styles.content}>
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal details such as your name, phone number,
            email address, and payment information when you book a trekking,
            or rafting service.
          </p>
        </section>

        <section>
          <h2>2. How We Use Information</h2>
          <p>
            Your information is used to process bookings, provide customer
            support, send important updates, and improve our services. We never
            sell your data to third parties.
          </p>
        </section>

        <section>
          <h2>3. Data Security</h2>
          <p>
            We implement strict security measures to protect your data. However,
            no online transmission is 100% secure, and you accept this risk when
            using our services.
          </p>
        </section>

        <section>
          <h2>4. Third-Party Services</h2>
          <p>
            Payments are processed securely through trusted gateways like
            Razorpay. We are not responsible for their policies and encourage
            you to read them separately.
          </p>
        </section>

        <section>
          <h2>5. Your Consent</h2>
          <p>
            By using our website and services, you consent to the collection and
            use of your personal data as outlined in this Privacy Policy.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} IbexIceAxe. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

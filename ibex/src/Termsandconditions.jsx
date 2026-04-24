import React from "react";
import styles from "./TermsAndConditions.module.css";

export default function TermsAndConditions() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Terms & Conditions</h1>
        <p>
          Welcome to IbexIceAxe! Please read our terms carefully before booking
          any trekking or rafting services with us.
        </p>
      </header>

      <main className={styles.content}>
        <section>
          <h2>1. General</h2>
          <p>
            By booking with <strong>IbexIceAxe</strong>, you agree to abide by
            all terms and conditions stated here. Our services include adventure
            activities such as trekking and rafting.
            Participation in these activities requires acceptance of associated
            risks.
          </p>
        </section>

        <section>
          <h2>2. Eligibility</h2>
          <p>
            Participants must be at least 18 years old, or accompanied by a
            parent/guardian. You should be physically fit for the activity you
            choose. We may request a fitness declaration if required.
          </p>
        </section>

        <section>
          <h2>3. Payments & Booking</h2>
          <p>
            Full or partial payment must be made at the time of booking. Your
            booking will be confirmed only after we receive the payment. We
            reserve the right to cancel bookings in case of incomplete payments.
          </p>
        </section>

        <section>
          <h2>4. Cancellations & Refunds</h2>
          <p>
            Cancellation requests must be made at least{" "}
            <strong>7 days prior</strong> to the scheduled activity for a
            partial refund. No refunds will be issued for cancellations made
            less than 7 days before the trip or for no-shows.
          </p>
        </section>

        <section>
          <h2>5. Safety & Liability</h2>
          <p>
            Adventure sports carry inherent risks. By participating, you
            acknowledge these risks and agree that IbexIceAxe will not be held
            liable for injuries, accidents, or loss of personal property. Our
            guides and staff will ensure safety measures, but responsibility
            also lies with participants to follow instructions.
          </p>
        </section>

        <section>
          <h2>6. Participant Responsibility</h2>
          <p>
            Participants are expected to follow guide instructions and use all
            provided safety gear properly throughout the activity.
          </p>
        </section>

        <section>
          <h2>7. Changes & Rescheduling</h2>
          <p>
            IbexIceAxe reserves the right to reschedule or cancel activities due
            to weather conditions, safety concerns, or unforeseen events. In
            such cases, we will offer an alternative date or partial refund.
          </p>
        </section>

        <section>
          <h2>8. Governing Law</h2>
          <p>
            These terms are governed by Indian law. Any disputes will fall under
            the jurisdiction of courts in New Delhi, India.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} IbexIceAxe. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

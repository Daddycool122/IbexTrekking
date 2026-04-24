import React from "react";
import styles from "./PolicyPages.module.css";

export default function RefundCancellationPolicy() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Refund & Cancellation Policy</h1>
        <p>
          Please read our refund and cancellation terms carefully before booking
          with IbexIceAxe.
        </p>
      </header>

      <main className={styles.content}>
        <section>
          <h2>1. No Refund Policy</h2>
          <p>
            At <strong>IbexIceAxe</strong>, we do not provide monetary refunds
            for any trekking or rafting bookings under any
            circumstances.
          </p>
        </section>

        <section>
          <h2>2. Rescheduling Option</h2>
          <p>
            If you are unable to attend your booked tour or activity, we allow
            you to reschedule and join the <strong>same tour</strong> or an
            alternative activity of equal value within{" "}
            <strong>12 months</strong> from your original booking date.
          </p>
        </section>

        <section>
          <h2>3. No-Shows</h2>
          <p>
            Failure to show up at the scheduled activity time without prior
            notice will result in forfeiture of the booking, and no rescheduling
            will be offered.
          </p>
        </section>

        <section>
          <h2>4. Cancellations by IbexIceAxe</h2>
          <p>
            In rare cases where activities are canceled due to weather, safety
            concerns, or unforeseen events, we will offer you an alternative
            date or the option to transfer your booking within a year. No
            refunds will be issued.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} IbexIceAxe. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

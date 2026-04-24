import React from "react";

function BookingConfirmation() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>✅ Booking Confirmed!</h1>
        <p style={styles.message}>
          Your invoice has been downloaded. For any further queries, please
          call:{" "}
          <a href="tel:+916396518778" style={styles.phone}>
            +91 6396518778
          </a>
        </p>
        <p style={styles.thankYou}>Thank you for choosing IBEXICEAXE!</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f0f4f8",
    boxSizing: "border-box",
  },
  card: {
    maxWidth: "500px",
    width: "100%",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#2E7D32",
  },
  message: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
  },
  phone: {
    color: "#1E88E5",
    textDecoration: "none",
    fontWeight: "bold",
  },
  thankYou: {
    fontSize: "14px",
    color: "#777",
    marginTop: "10px",
  },
};

export default BookingConfirmation;

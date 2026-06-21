import React, { useState, useEffect } from "react";
import styles from "./EnquiryWidget.module.css";
import { apiUrl } from "../apiConfig";

const EnquiryWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    date: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    // Open the widget when the component mounts (when website opens)
    // Using a small timeout to let the user see the website first
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStatus({ type: "", message: "" }); // Clear status on reopen
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(apiUrl("/api/enquiry"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Enquiry submitted successfully! We will contact you soon.",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          destination: "",
          date: "",
          message: "",
        });
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        let errorMessage = "Failed to submit enquiry. Please try again.";
        try {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const errorData = await response.json();
            errorMessage = errorData.error || errorMessage;
          }
        } catch (parseError) {
          console.error("Error parsing response:", parseError);
        }
        
        setStatus({
          type: "error",
          message: errorMessage,
        });
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button className={styles.floatingBtn} onClick={toggleModal} aria-label="Enquire Now">
        Enquire Now
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={toggleModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={toggleModal}>
              &times;
            </button>
            <h2 className={styles.formTitle}>Enquire Now</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="destination">Destination / Trek</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="date">Travel Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
              {status.message && (
                <p className={`${styles.statusMessage} ${styles[status.type]}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryWidget;

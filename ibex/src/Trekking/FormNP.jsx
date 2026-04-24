import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

export default function FormNP({ open_form, setOpen_form, name, price }) {
  const [p_name, setPName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (open_form) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open_form]);

  const validate = () => {
    let tempErrors = {};
    if (!p_name.trim()) tempErrors.p_name = "Name is required";
    if (!email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!contact.trim()) {
      tempErrors.contact = "Contact is required";
    } else if (!/^\d{10}$/.test(contact)) {
      tempErrors.contact = "Contact must be 10 digits";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      setIsSubmitting(true);
      // Simulate submission or handle as needed
      console.log("Enquiry submitted:", { p_name, email, contact, name });
      setTimeout(() => {
        alert("Enquiry sent successfully! We will contact you soon.");
        setIsSubmitting(false);
        setOpen_form(false);
      }, 1000);
    }
  };

  if (!open_form) return null;

  return createPortal(
    <div className={styles.modal_container} onClick={() => setOpen_form(false)}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
        <div
          className={styles.cross_section}
          onClick={() => {
            setOpen_form(false);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height={"18px"}
            width={"18px"}
          >
            <path
              d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <div className={styles.title}>Enquire for {name}</div>
        <div className={styles.tag_line}>
          Or call at <a className="orange" href="tel://+916396518778">+916396518778</a> to book instantly
        </div>

        <div className={styles.input_section}>
          <input
            type="text"
            className={`${styles.input} ${errors.p_name ? styles.input_error : ""}`}
            placeholder="Your Name"
            value={p_name}
            onChange={(e) => setPName(e.target.value)}
          />
          {errors.p_name && <span className={styles.error_text}>{errors.p_name}</span>}
        </div>

        <div className={styles.input_section}>
          <input
            type="email"
            className={`${styles.input} ${errors.email ? styles.input_error : ""}`}
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className={styles.error_text}>{errors.email}</span>}
        </div>

        <div className={styles.input_section}>
          <input
            type="tel"
            className={`${styles.input} ${errors.contact ? styles.input_error : ""}`}
            placeholder="10-Digit Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {errors.contact && <span className={styles.error_text}>{errors.contact}</span>}
        </div>

        <div
          className={`${styles.btn} ${isSubmitting ? "shimmer_loading" : ""}`}
          onClick={handleSubmit}
        >
          {isSubmitting ? "Sending..." : "Enquire now!"}
        </div>
      </div>
    </div>,
    document.body
  );
}

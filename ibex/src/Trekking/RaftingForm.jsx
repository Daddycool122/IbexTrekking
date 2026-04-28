import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { launchRazorpayPayment } from "../services/paymentService";
import { downloadBase64Pdf } from "../utils/downloadPdf";
import { createPortal } from "react-dom";

const RAZORPAY_LIVE_KEY_ID = import.meta.env.VITE_RAZORPAY_LIVE_KEY_ID;

export default function RaftingForm({ open_form, setOpen_form, name, price }) {
  const [p_name, setPName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [no_of_people, setNo_of_people] = useState(1);
  const [date, setDate] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
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
      tempErrors.email = "Invalid email format";
    }
    if (!contact.trim()) {
      tempErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(contact)) {
      tempErrors.contact = "Must be a 10-digit number";
    }
    if (!date) tempErrors.date = "Departure date is required";
    if (no_of_people < 1) tempErrors.no_of_people = "Minimum 1 person required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const startPayment = async () => {
    if (!validate()) return;
    if (isProcessing) return;

    setIsProcessing(true);
    try {
      await launchRazorpayPayment({
        amount: Math.round(price * no_of_people * 1.18) * 100,
        key: RAZORPAY_LIVE_KEY_ID,
        description: "Rafting Booking",
        themeColor: "#059669",
        prefill: {
          name: p_name,
          email: email,
          contact: contact,
        },
        buildBookingData: (response) => ({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          name: p_name, email, contact,
          name_of_trek: name,
          date_of_departure: date,
          number_of_people: no_of_people,
          base_price: price * no_of_people,
          gst_amount: Math.round(price * no_of_people * 0.18),
          total_amount: Math.round(price * no_of_people * 1.18),
          amount_paid: Math.round(price * no_of_people * 1.18),
          invoice: "invoice_" + Date.now(),
        }),
        onVerified: (result, bookingData) => {
          downloadBase64Pdf(result.pdf, `${bookingData.invoice}.pdf`);
          alert("✅ Booking Successful!");
          setOpen_form(false);
          navigate("/booking-confirmed");
        },
        onError: (error) => {
          console.error(error);
          alert("❌ Payment Failed: " + error.message);
          setIsProcessing(false);
        },
      });
      setIsProcessing(false);
    } catch (e) {
      console.error(e);
      setIsProcessing(false);
    }
  };

  if (!open_form) return null;

  return createPortal(
    <div className={styles.modal_container} onClick={() => setOpen_form(false)}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.cross_section} onClick={() => setOpen_form(false)}>
          <svg viewBox="0 0 24 24" fill="none" height={"18px"} width={"18px"}>
            <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#fff" />
          </svg>
        </div>
        <div className={styles.title}>Book {name}</div>
        <div className={styles.tag_line}>
          Secure your spot for the ultimate adventure
        </div>

        <div className={styles.input_section}>
          <input
            type="text"
            className={`${styles.input} ${errors.p_name ? styles.input_error : ""}`}
            placeholder="Full Name"
            value={p_name}
            onChange={(e) => setPName(e.target.value)}
          />
          {errors.p_name && <span className={styles.error_text}>{errors.p_name}</span>}
        </div>

        <div className={styles.input_section}>
          <input
            type="email"
            className={`${styles.input} ${errors.email ? styles.input_error : ""}`}
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className={styles.error_text}>{errors.email}</span>}
        </div>

        <div className={styles.input_section}>
          <input
            type="tel"
            className={`${styles.input} ${errors.contact ? styles.input_error : ""}`}
            placeholder="10-Digit Mobile"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {errors.contact && <span className={styles.error_text}>{errors.contact}</span>}
        </div>

        <div className={styles.input_section}>
          <input
            type="number"
            className={`${styles.input} ${errors.no_of_people ? styles.input_error : ""}`}
            placeholder="Number of People"
            value={no_of_people}
            onChange={(e) => setNo_of_people(e.target.value)}
          />
          {errors.no_of_people && <span className={styles.error_text}>{errors.no_of_people}</span>}
        </div>

        <div className={styles.input_section}>
          <input
            type="date"
            className={`${styles.input} ${errors.date ? styles.input_error : ""}`}
            value={date}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.date && <span className={styles.error_text}>{errors.date}</span>}
        </div>

        {no_of_people >= 1 && (
          <div className={styles.mobile_pay_summary}>
            <div style={{ fontWeight: 700 }}>Total Amount</div>
            <div style={{ fontWeight: 700, color: "#059669" }}>
              ₹{price.toLocaleString()} x {no_of_people} = ₹{(price * no_of_people).toLocaleString()}
              <span style={{ fontSize: "12px", color: "#666", display: "block" }}>
                (Including 18% GST: ₹{Math.round(price * no_of_people * 1.18).toLocaleString()})
              </span>
            </div>
          </div>
        )}

        <div
          className={`${styles.btn} ${isProcessing ? "shimmer_loading" : ""}`}
          onClick={startPayment}
        >
          {isProcessing ? "Redirecting to Payment..." : `Book & Pay ₹${Math.round(price * no_of_people * 1.18).toLocaleString()}`}
        </div>
      </div>
    </div>,
    document.body
  );
}

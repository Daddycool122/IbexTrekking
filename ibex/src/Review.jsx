import React, { useState } from "react";
import "./Review.css"; // We'll write custom CSS
import axios from "axios";
import { apiUrl } from "./apiConfig";
import { clearReviewsCache } from "./services/reviewService";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    adventure: "",
    review: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hey");
    axios
      .post(apiUrl("/submit-review"), {
        name: formData.name,
        contact: formData.contact,
        adventureType: formData.adventure,
        review: formData.review,
      })
      .then((response) => {
        clearReviewsCache();
        console.log("Review Submitted:", formData);
        alert("Thank you for your review!");
        setFormData({ name: "", contact: "", adventure: "", review: "" });
      })
      .catch((error) => {
        console.error("Error posting review:", error);
      });
  };

  return (
    <div className="review-wrapper">
      <div className="review-card">
        <h2>Share Your Adventure!</h2>
        <p>We’d love to hear about your experience with us.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your phone or email"
            required
          />

          <label htmlFor="adventure">Adventure You Did</label>
          <select
            id="adventure"
            name="adventure"
            value={formData.adventure}
            onChange={handleChange}
            required
          >
            <option value="">Select an adventure</option>
            <option value="16 KM River Rafting">16 KM River Rafting</option>
            <option value="25 KM River Rafting">25 KM River Rafting</option>
            <option value="35 KM River Rafting">35 KM River Rafting</option>
            <option value="Valley of flower trek">Valley of flower trek</option>
            <option value="Chopta chandrashilla trek">
              Chopta chandrashilla trek
            </option>
            <option value="Panch kedar trek">Panch kedar trek</option>
            <option value="Kuari pass trek">Kuari pass trek</option>
            <option value="Gaumukh tapovan trek">Gaumukh tapovan trek</option>
            <option value="Brahmatal trek">Brahmatal trek</option>
          </select>

          <label htmlFor="review">Your Review</label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="Write your review..."
            required
          />

          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;

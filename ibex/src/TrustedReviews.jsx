import React, { useState } from 'react';
import styles from './TrustedReviews.module.css';
import trust_1 from "./assets/home/img2.png";
import trust_2 from "./assets/home/img3.jpg";

const TrustedReviews = () => {
  const [activeTab, setActiveTab] = useState("google_reviews");

  const googleReviews = [
    {
      name: "Satyam singh Rajawat",
      review: "I recently came across this trekking website and I’m truly impressed. The information is well-organized, easy to navigate, and very helpful for planning treks. I especially liked the detailed itineraries, clear descriptions, and useful tips for beginners as well as experienced trekkers. It’s a reliable resource for anyone who loves adventure and nature.",
      adventureType: "Trekking"
    },
    {
      name: "Amit Rawat",
      review: "I have done kunjapuri one day hike with Ibex Iceaxe company so good experience with trek leader Paras❤️💯",
      adventureType: "Kunjapuri Trek"
    },
    {
      name: "govind singh",
      review: "Very good job company",
      adventureType: "Adventure"
    },
    {
      name: "Sanjay Singh baghel",
      review: "Good 👍",
      adventureType: "Adventure"
    },
    {
      name: "Anitti",
      review: "They have a great taxi cab service in Rishikesh they provide shearing taxi tapovan to Nepali farm everyday. Highly recommended service",
      adventureType: "Travel"
    }
  ];

  return (
    <div className={styles.section}>
      <div className={styles.tabsContainer}>
        <button
          className={`${styles.tab} ${activeTab === 'google_reviews' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('google_reviews')}
        >
          <svg className={styles.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          Google Reviews
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'trusted_by' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('trusted_by')}
        >
          <svg className={styles.tabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          Trusted By
        </button>
      </div>

      <div className={styles.contentContainer}>
        {activeTab === 'google_reviews' && (
          <div className={styles.reviewsWrapper}>
            <div className={styles.summaryCard}>
              <div className={styles.ratingValue}>4.9</div>
              <div className={styles.stars}>
                ⭐⭐⭐⭐⭐
              </div>
              <div className={styles.googleLogo}>
                <span style={{ color: '#4285F4' }}>G</span>
                <span style={{ color: '#EA4335' }}>o</span>
                <span style={{ color: '#FBBC05' }}>o</span>
                <span style={{ color: '#4285F4' }}>g</span>
                <span style={{ color: '#34A853' }}>l</span>
                <span style={{ color: '#EA4335' }}>e</span>
              </div>
              <div className={styles.reviewsCount}>50+ Reviews</div>
              <a href="https://maps.app.goo.gl/MVANZi9FHW4nRoDH9?g_st=iwb" target="_blank" rel="noreferrer" className={styles.reviewLink}>Write a review</a>
            </div>

            <div className={styles.reviewsList}>
              {googleReviews.map((item, index) => (
                <div key={`${item.name || "review"}-${index}`} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewerInfo}>
                      <div className={styles.reviewerName}>{item.name || "Happy Trekker"}</div>
                      <div className={styles.reviewDate}>Google Review</div>
                    </div>
                    <div className={styles.reviewerAvatar}>
                      {item.name ? item.name.charAt(0) : "T"}
                    </div>
                  </div>
                  <div className={styles.reviewStars}>
                    <div>⭐⭐⭐⭐⭐</div>
                    <div className={styles.gIcon}>G</div>
                  </div>
                  <div className={styles.reviewText}>
                    {item.review}
                  </div>
                  <div className={styles.reviewDes}>{item.adventureType}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'trusted_by' && (
          <div className={styles.trustedByWrapper}>
            <img src={trust_1} alt="Trusted By" className={styles.trustImg} />
            <img src={trust_2} alt="Trusted By" className={styles.trustImg} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TrustedReviews;

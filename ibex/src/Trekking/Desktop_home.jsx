import styles from "./Desktop_home.module.css";

import { motion } from "framer-motion";
import Header from "../Header";

export default function Desktop_home({
  title,
  des,
  scrollToTrekking,
  scrollToReviw,
}) {
  // Majestic online nature image
  const bgImg = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=50&w=800&auto=format&fit=crop";

  return (
    <>
      <Header />


      <div className={styles.main_intro_section_home}>
        <motion.div
          className={styles.main_img_container}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <img src={bgImg} alt={bgImg ? bgImg.split("/").pop().split("-").slice(0, -1).join(" ") : "Ibex Trekking"} className={styles.main_img} fetchpriority="high" />
        </motion.div>

        <div className={styles.dark_section}></div>

        <div className={styles.content_section_home}>
          <div className={styles.text_content_home}>
            <motion.h1
              className={styles.main_name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {title || "Discover The Untamed"}
            </motion.h1>

            <motion.div
              className={styles.tag_line}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              {des || "Ride Waves, Climb Peaks,\nExplore"}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.book_now_btn} onClick={scrollToTrekking} aria-label="Start Your Adventure">
                <span className={styles.book_now_text}>Start Your Adventure</span>
                <div className={styles.book_now_arrow}>
                  <svg viewBox="0 0 24 24" fill="none" width="20px" height="20px">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>


        </div>
      </div>
    </>
  );
}

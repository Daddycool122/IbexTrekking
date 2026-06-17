import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import styles from './NotFound.module.css';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Helmet>
        <title>404 - Page Not Found | Ibex Iceaxe</title>
      </Helmet>

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1 
          className={styles.errorCode}
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          404
        </motion.h1>
        
        <h2 className={styles.title}>You've Wandered Off the Trail!</h2>
        <p className={styles.description}>
          The page you are looking for seems to have gone missing in the mountains. 
          Don't worry, even the best explorers take a wrong turn sometimes.
        </p>

        <motion.button 
          className={styles.homeBtn}
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return to Basecamp
        </motion.button>
      </motion.div>

      {/* Decorative mountain silhouettes */}
      <div className={styles.mountains}>
        <div className={`${styles.mountain} ${styles.m1}`}></div>
        <div className={`${styles.mountain} ${styles.m2}`}></div>
        <div className={`${styles.mountain} ${styles.m3}`}></div>
      </div>
    </div>
  );
}

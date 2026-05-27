import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LoadingScreen.module.css";

const slogans = [
  "Exploring the wilderness...",
  "Riding the rapids...",
  "Scaling the heights...",
  "The mountains are calling...",
  "Paddle hard, stay wild...",
  "Finding the trail..."
];

export default function LoadingScreen() {
  const [sloganIdx, setSloganIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  // Cycle slogans
  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIdx(prev => (prev + 1) % slogans.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Progress simulation (starts fast, slows down at 95%)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          clearInterval(timer);
          return 95;
        }
        const diff = Math.max(1.5, (98 - prev) * 0.15);
        return Math.min(95, prev + diff);
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.loaderOverlay}>
      {/* Background Aura */}
      <div className={styles.glowAmbient} />

      <div className={styles.contentWrap}>
        {/* Brand Header */}
        <div className={styles.brandHeader}>
          <span className={styles.logoName}>IBEX ICEAXE</span>
        </div>

        {/* Minimalist Single-Stroke Vector Art */}
        <svg viewBox="0 0 100 65" className={styles.svgArt}>
          {/* Glowing Minimal Sun */}
          <motion.circle
            cx="72"
            cy="24"
            r="3"
            fill="#f59e0b"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }}
          />

          {/* Mountain Ridge 1 (Emerald) */}
          <motion.path
            d="M 15 45 L 45 15 L 75 45"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.2"
            className={styles.linePath}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Mountain Ridge 2 (Mint) */}
          <motion.path
            d="M 40 45 L 65 20 L 90 45"
            fill="none"
            stroke="#34d399"
            strokeWidth="1.2"
            className={styles.linePath}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />

          {/* River Wave (Teal/Cyan) */}
          <motion.path
            d="M 10 52 Q 30 46, 50 52 T 90 52"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="1.2"
            className={styles.linePath}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.6 }}
          />

          {/* Micro-Hiker Dot climbing Mountain 1 */}
          <motion.circle
            r="1.2"
            fill="#ffffff"
            animate={{
              cx: [20, 42, 20],
              cy: [40, 18, 40]
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut"
            }}
          />

          {/* Micro-Raft Dot floating on Wave */}
          <motion.circle
            r="1.4"
            fill="#f97316"
            animate={{
              cx: [25, 75, 25],
              cy: [50.5, 52.5, 50.5]
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
          />
        </svg>

        {/* Slogan Fader & Progress Line */}
        <div className={styles.statusContainer}>
          <AnimatePresence mode="wait">
            <motion.p
              key={sloganIdx}
              className={styles.statusText}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.4 }}
            >
              {slogans[sloganIdx]}
            </motion.p>
          </AnimatePresence>

          {/* 1px Micro Progress Loader */}
          <div className={styles.microBarTrack}>
            <motion.div
              className={styles.microBarProgress}
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

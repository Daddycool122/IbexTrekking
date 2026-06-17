import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BLOGS } from '../constants/blogsData';
import styles from './Blogs.module.css';

export default function BlogList() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Helmet>
        <link rel="canonical" href="https://ibexiceaxe.com/blog" />
        <title>Ibex Iceaxe - Trekking & Travel Blogs</title>
        <meta name="description" content="Discover the best Himalayan treks, expert guides, and travel tips with Ibex Iceaxe's official blog." />
      </Helmet>
      
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Our Blog</h1>
        <p className={styles.heroSubtitle}>Expert guides, trekking tips, and Himalayan stories to inspire your next adventure.</p>
      </div>

      <div className={styles.grid}>
        {BLOGS.map((blog, index) => (
          <motion.div
            key={blog.slug}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => navigate(`/blog/${blog.slug}`)}
          >
            <div className={styles.cardContent}>
              <div className={styles.meta}>
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
              <h2 className={styles.cardTitle}>{blog.title}</h2>
              <p className={styles.cardExcerpt}>{blog.excerpt}</p>
              <span className={styles.readMore}>Read Article →</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

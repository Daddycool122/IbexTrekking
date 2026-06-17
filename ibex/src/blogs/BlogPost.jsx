import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { BLOGS } from '../constants/blogsData';
import styles from './Blogs.module.css';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = BLOGS.find(b => b.slug === slug);
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate('/blog');
    }
  }, [slug, navigate]);

  if (!post) return null;

  return (
    <div className={styles.postContainer}>
      <Helmet>
        <link rel="canonical" href={`https://ibexiceaxe.com/blog/${post.slug}`} />
        <title>{post.title} - Ibex Iceaxe</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className={styles.postHeader}>
        <div className={styles.postMeta}>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className={styles.postTitle}>{post.title}</h1>
      </div>

      <div className={styles.postContent}>
        <ReactMarkdown
          components={{
            h1: 'h2'
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <div className={styles.postFooter}>
        <button onClick={() => navigate('/blog')} className={styles.backButton}>
          ← Back to Blogs
        </button>
      </div>
    </div>
  );
}

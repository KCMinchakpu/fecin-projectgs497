import React from 'react';
import styles from './blog.module.css';

const blogPosts = [
  {
    title: 'The Power of Prayer in Times of Trial',
    excerpt: 'Discover how prayer strengthens us and brings comfort during life’s toughest moments...',
    date: 'April 1, 2025',
    author: 'Pastor Emmanuel',
  },
  {
    title: 'Spreading the Gospel in Local Communities',
    excerpt: 'See how FECIN members are reaching out with the love of Christ in rural areas...',
    date: 'March 18, 2025',
    author: 'Sister Grace',
  },
  {
    title: 'Youth Ministry Retreat Highlights',
    excerpt: 'A recap of our vibrant youth retreat, filled with worship, teaching, and fellowship...',
    date: 'February 10, 2025',
    author: 'Brother John',
  },
];

const BlogPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Our Blog</h1>
        <p className={styles.subheading}>
          Stories, teachings, and testimonies from the FECIN community.
        </p>
        <div className={styles.grid}>
          {blogPosts.map((post, index) => (
            <div key={index} className={styles.card}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.meta}>
                By {post.author} | {post.date}
              </p>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <button className={styles.readMore}>Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
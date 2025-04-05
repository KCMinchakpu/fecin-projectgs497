import React from 'react';
import styles from './blog.module.css';
import Link from 'next/link';


const blogPosts = [
  {
    title: 'The Power of Prayer in Times of Trial',
    slug: 'the-power-of-prayer-in-times-of-trial',  
    excerpt: 'Discover how prayer strengthens us and brings comfort during life’s toughest moments...',
    date: 'April 1, 2025',
    author: 'Pastor Emmanuel',
  },
  {
    title: 'Spreading the Gospel in Local Communities',
    slug: 'spreading-the-gospel-in-local-communities',  
    excerpt: 'See how FECIN members are reaching out with the love of Christ in rural areas...',
    date: 'March 18, 2025',
    author: 'Sister Grace',
  },
  {
    title: 'Youth Ministry Retreat Highlights',
    slug: 'youth-ministry-retreat-highlights',  
    excerpt: 'A recap of our vibrant youth retreat, filled with worship, teaching, and fellowship...',
    date: 'February 10, 2025',
    author: 'Brother John',
  },
  {
    title: 'Charity Mission in Nasarawa',
    slug: 'charity-mission-in-nasarawa',  
    excerpt: 'Our team brought hope, health kits, and food to families in need across rural Eggon land...',
    date: 'January 29, 2025',
    author: 'Pastor Esther',
  },
  {
    title: 'Raising the Next Generation of Leaders',
    slug: 'raising-the-next-generation-of-leaders',  
    excerpt: 'FECIN’s leadership seminar equips believers for purposeful kingdom impact...',
    date: 'January 10, 2025',
    author: 'Deacon Paul',
  },
  {
    title: 'Praise Night 2024 Recap',
    slug: 'praise-night-2024-recap',  
    excerpt: 'A night of pure worship, testimonies, and Holy Spirit encounters...',
    date: 'December 15, 2024',
    author: 'Choir Leader Mercy',
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
              <Link href={`/blog/${post.slug}`}>
                <button className={styles.readMore}>Read More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
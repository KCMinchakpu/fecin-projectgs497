import React from 'react';
import { useRouter } from 'next/router';
import styles from './singlePost.module.css'

const blogPosts = [
  {
    title: 'The Power of Prayer in Times of Trial',
    slug: 'the-power-of-prayer',  
    content: 'Discover how prayer strengthens us and brings comfort during life’s toughest moments...',
    date: 'April 1, 2025',
    author: 'Pastor Emmanuel',
  },
  {
    title: 'Spreading the Gospel in Local Communities',
    slug: 'spreading-the-gospel',  
    content: 'See how FECIN members are reaching out with the love of Christ in rural areas...',
    date: 'March 18, 2025',
    author: 'Sister Grace',
  },
  {
    title: 'Youth Ministry Retreat Highlights',
    slug: 'youth-ministry',  
    content: 'A recap of our vibrant youth retreat, filled with worship, teaching, and fellowship...',
    date: 'February 10, 2025',
    author: 'Brother John',
  },
  {
    title: 'Charity Mission in Nasarawa',
    slug: 'charity-mission',  
    content: 'Our team brought hope, health kits, and food to families in need across rural Eggon land...',
    date: 'January 29, 2025',
    author: 'Pastor Esther',
  },
  {
    title: 'Raising the Next Generation of Leaders',
    slug: 'raising-the-next-generation',  
    content: 'FECIN’s leadership seminar equips believers for purposeful kingdom impact...',
    date: 'January 10, 2025',
    author: 'Deacon Paul',
  },
  {
    title: 'Praise Night 2024 Recap',
    slug: 'praise-night',  
    content: 'A night of pure worship, testimonies, and Holy Spirit encounters...',
    date: 'December 15, 2024',
    author: 'Choir Leader Mercy',
  },
];

const SinglePostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the post that matches the slug
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>{post.title}</h1>
        <p className={styles.meta}>
          By {post.author} | {post.date}
        </p>
        <div className={styles.content}>
          <p>{post.content}</p>
        </div>
      </div>
    </section>
  );
};

export default SinglePostPage;

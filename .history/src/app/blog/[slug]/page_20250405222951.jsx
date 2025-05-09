'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styles from './singlePost.module.css';

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

export default function BlogPostPage() {
  const params = useParams();
  const { slug } = params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className={styles.notFound}>Post not found.</div>;
  }

  return (
    <section className={styles.section}>
      <article className={styles.post}>
      <div className={styles.container}>
        <h1 className={styles.title}>The Power of Prayer in Times of Trial</h1>
        <p className={styles.meta}>By Pastor Emmanuel | April 1, 2025</p>

        <img
          src="/images/prayer.jpg"
          alt="Praying hands"
          className={styles.image}
        />

        <div className={styles.content}>
          <p>
            In times of struggle, pain, or uncertainty, one of the greatest
            resources God has given us is prayer. It is more than just words—
            it’s a direct line to the heart of our Heavenly Father.
          </p>

          <p>
            Throughout Scripture, we see examples of men and women who turned
            to God in their darkest moments. From David’s psalms to Jesus in
            Gethsemane, prayer was their lifeline.
          </p>

          <p>
            At FECIN, we believe in the power of communal and personal prayer.
            We’ve witnessed healing, transformation, and renewed hope through
            consistent communication with God. Whether it’s during our weekly
            fellowship, special prayer nights, or quiet moments alone—
            prayer remains a vital part of our spiritual journey.
          </p>

          <blockquote className={styles.quote}>
            “Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.” — Philippians 4:6
          </blockquote>

          <p>
            May we always remember that God hears us. Let us continue to lift
            our voices, trusting in His timing, love, and faithfulness.
          </p>
        </div>
      </div>
    </article>
    </section>
  );
}

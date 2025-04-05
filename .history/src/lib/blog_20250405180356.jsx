import React from 'react';
import styles from './singlePost.module.css'

const PostPage = () => {
  return (
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
  );
};

export default PostPage;
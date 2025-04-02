// src/components/postCard/postCard.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './postCard.module.css';

const PostCard = ({ imageSrc, title, description, date }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={imageSrc} alt={title} fill className={styles.img} />
        </div>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.date}>{date}</span>
        <p className={styles.desc}>{description}</p>
        <Link className={styles.link} href="/blog/post">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
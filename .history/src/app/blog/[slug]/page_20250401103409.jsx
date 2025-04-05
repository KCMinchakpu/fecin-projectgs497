import React from 'react';
import Image from 'next/image';
import styles from './singlePost.module.css'

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
    <Image src="/post-1.jpg" alt="" fill className={styles.img} />
    </div>
    <div className={styles.textContainer}>
      <h1 className={styles.title}></h1>
      <div className={styles.detail}>
      <Image src="/post-1.jpg" alt="" width={50} height={50} className={styles.avatar} />
      <div className={styles.detailText}>
      <span className={styles.detailTitle}>Author: </span>
      <span className={styles.value}>Kevin Cross Minchakpu</span>
      </div>

      <div className={styles.detailText}>
      <span className={styles.detailTitle}>Published: </span>
      <span className={styles.value}>26.03.2025</span>
    </div>
    </div>
    <div className={styles.content}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea provident expedita fugiat praesentium. A, hic. Eos voluptatibus esse modi rerum assumenda nulla, numquam quos vitae explicabo, incidunt earum provident.
    </div>
    </div>
    </div>
  );
};

export default SinglePostPage
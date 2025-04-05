'use client'; 

import styles from './singlePost.module.css';

export default function PostPageContent({ post }) {
  return (
    <article className={styles.post}>
      <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>
          By {post.author} | {post.date}
        </p>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
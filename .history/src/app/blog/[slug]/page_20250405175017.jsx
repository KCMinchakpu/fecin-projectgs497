import { useParams } from 'next/navigation';
import { getPost, getAllSlugs } from '@/lib/blog';
import styles from './singlePost.module.css'

export async function generateStaticParams() {
  const slugs = getAllSlugs(); 
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);

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
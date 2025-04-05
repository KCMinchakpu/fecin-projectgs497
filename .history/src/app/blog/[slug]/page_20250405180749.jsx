import { getPost, getAllSlugs } from '@/app/blog/[slug]/SinglePost';
import PostPageContent from './PostPageContent'; 
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
    <PostPageContent post={post} /> 
  );
}
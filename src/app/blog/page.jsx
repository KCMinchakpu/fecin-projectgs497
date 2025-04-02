import React from 'react';
import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';

const BlogPage = () => {
  const posts = [
    {
      imageSrc: '/post-1.jpg',
      title: 'The Power of Faith in Daily Life',
      description: 'Discover how faith can transform your everyday experiences and bring peace to your heart.',
      date: '01.01.2024',
    },
    {
      imageSrc: '/post-2.jpg',
      title: 'Overcoming Challenges with Spiritual Strength',
      description: 'Learn how spiritual strength can help you overcome the toughest challenges in life.',
      date: '02.01.2024',
    },
    {
      imageSrc: '/post-3.jpg',
      title: 'The Joy of Giving Back to the Community',
      description: 'Explore the profound joy and fulfillment that comes from serving others.',
      date: '03.01.2024',
    },
    {
      imageSrc: '/post-4.jpg',
      title: 'Finding Hope in Times of Uncertainty',
      description: 'Understand how hope can be a guiding light during uncertain and difficult times.',
      date: '04.01.2024',
    },
    {
      imageSrc: '/post-5.jpg',
      title: 'Building Strong Relationships Through Medical Outreach',
      description: 'Discover the role of love in creating and maintaining strong, healthy relationships.',
      date: '05.01.2024',
    },
    {
      imageSrc: '/post-6.jpg',
      title: 'Gratitude: A Path to Happiness',
      description: 'Learn how practicing gratitude can lead to a more joyful and content life.',
      date: '06.01.2024',
    },
  ];

  return (
    <div className={styles.container}>
      {posts.map((post, index) => (
        <div className={styles.post} key={index}>
          <PostCard 
            imageSrc={post.imageSrc} 
            title={post.title} 
            description={post.description} 
            date={post.date} 
          />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
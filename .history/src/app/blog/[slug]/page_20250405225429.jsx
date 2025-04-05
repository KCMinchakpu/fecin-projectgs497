import React from 'react';
import styles from './singlePost.module.css';

const postContent = {
  'the-power-of-prayer': {
    title: 'The Power of Prayer in Times of Trial',
    author: 'Pastor Emmanuel',
    date: 'April 1, 2025',
    image: '/images/prayer.jpg',
    alt: 'Praying hands',
    content: [
      "In times of struggle, pain, or uncertainty, one of the greatest resources God has given us is prayer. It is more than just words—it's a direct line to the heart of our Heavenly Father.",
      "Throughout Scripture, we see examples of men and women who turned to God in their darkest moments. From David’s psalms to Jesus in Gethsemane, prayer was their lifeline.",
      "At FECIN, we believe in the power of communal and personal prayer. We’ve witnessed healing, transformation, and renewed hope through consistent communication with God.",
    ],
    quote:
      "“Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.” — Philippians 4:6",
    closing:
      "May we always remember that God hears us. Let us continue to lift our voices, trusting in His timing, love, and faithfulness.",
  },

  'spreading-the-gospel-in-local-communities': {
    title: 'Spreading the Gospel in Local Communities',
    author: 'Sister Grace Iroha',
    date: 'March 18, 2025',
    image: '/images/gospel-outreach.jpg',
    alt: 'People sharing gospel tracts in a neighborhood',
    content: [
      "FECIN continues to reach out to neighborhoods and towns across Nasarawa with the life-changing message of the Gospel.",
      "Through door-to-door evangelism, open-air crusades, and local partnerships, our mission is to ensure everyone hears the Good News.",
      "We are encouraged by testimonies of salvation, healing, and transformation taking place in these communities through consistent outreach efforts.",
    ],
    closing:
      "We invite all believers to join in this mission of spreading the love and truth of Christ, right where we are planted.",
  },

  'youth-ministry-retreat-highlights': {
    title: 'Youth Ministry Retreat Highlights',
    author: 'Brother Samuel Adamu',
    date: 'February 10, 2025',
    image: '/images/youth-retreat.jpg',
    alt: 'Youth group worshipping during retreat',
    content: [
      "This year’s youth retreat was filled with worship, teaching, and deep moments of spiritual growth.",
      "Our young people engaged in workshops on leadership, discipleship, and staying rooted in faith amidst modern challenges.",
      "Many shared personal testimonies of rededication and new vision for their walk with Christ.",
    ],
    closing:
      "We praise God for the seeds planted and look forward to the fruits that will blossom from this powerful time together.",
  },

  'charity-mission-in-nasarawa': {
    title: 'Charity Mission in Nasarawa',
    author: 'Deaconess Mary Yakubu',
    date: 'January 25, 2025',
    image: '/images/charity-mission.jpg',
    alt: 'Volunteers distributing food and clothing',
    content: [
      "Our latest charity mission reached over 300 families in underserved communities across Nasarawa.",
      "We provided food items, clothing, school supplies, and medical support, all in the name of Jesus.",
      "It was a joyful time of giving, praying with families, and showing the tangible love of Christ.",
    ],
    closing:
      "Thank you to all who donated and volunteered. Let’s continue being the hands and feet of Jesus to those in need.",
  },

  'raising-the-next-generation-of-leaders': {
    title: 'Raising the Next Generation of Leaders',
    author: 'Rev. Daniel Eze',
    date: 'March 5, 2025',
    image: '/images/leadership-training.jpg',
    alt: 'Young leaders in a workshop setting',
    content: [
      "Leadership is a vital part of the growth of any church. At FECIN, we are investing heavily in training and equipping the next generation.",
      "Through mentorship programs, biblical leadership classes, and real ministry experiences, young leaders are emerging with passion and wisdom.",
      "We are committed to raising leaders who serve with humility and carry God’s vision forward.",
    ],
    closing:
      "Pray with us as we continue to build a legacy of strong, Spirit-led leadership for generations to come.",
  },

  'praise-night-2024-recap': {
    title: 'Praise Night 2024 Recap',
    author: 'Choir Director Faith Omale',
    date: 'December 15, 2024',
    image: '/images/praise-night.jpg',
    alt: 'Congregation worshipping during praise night',
    content: [
      "What a night it was! Praise Night 2024 was a powerful time of worship, dance, and testimony.",
      "Various choirs and gospel artists led the congregation in heartfelt praise that lifted the atmosphere with joy and reverence.",
      "We witnessed the Holy Spirit move as hearts were healed, burdens were lifted, and God’s presence filled the auditorium.",
    ],
    closing:
      "We’re already looking forward to next year’s edition! Thank you to everyone who participated and worshipped with us.",
  },
};

export default function PostPage({ params }) {
  const post = postContent[params.slug];

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <article className={styles.post}>
      <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>
          By {post.author} | {post.date}
        </p>

        <img src={post.image} alt={post.alt} className={styles.image} />

        <div className={styles.content}>
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {post.quote && (
            <blockquote className={styles.quote}>{post.quote}</blockquote>
          )}

          <p>{post.closing}</p>
        </div>
      </div>
    </article>
  );
}
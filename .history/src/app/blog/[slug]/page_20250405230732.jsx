import React from 'react';
import styles from './singlePost.module.css';

const PostPage = ({ params }) => {
  const { slug } = params;

  const posts = {
    'the-power-of-prayer': {
      title: 'The Power of Prayer in Times of Trial',
      author: 'Pastor Emmanuel',
      date: 'April 1, 2025',
      image: '/images/prayer.jpg',
      content: [
        "In times of struggle, pain, or uncertainty, one of the greatest resources God has given us is prayer. It is more than just words—it’s a direct line to the heart of our Heavenly Father.",
        "Throughout Scripture, we see examples of men and women who turned to God in their darkest moments. From David’s psalms to Jesus in Gethsemane, prayer was their lifeline.",
        "At FECIN, we believe in the power of communal and personal prayer. We’ve witnessed healing, transformation, and renewed hope through consistent communication with God. Whether it’s during our weekly fellowship, special prayer nights, or quiet moments alone—prayer remains a vital part of our spiritual journey.",
        "May we always remember that God hears us. Let us continue to lift our voices, trusting in His timing, love, and faithfulness."
      ],
      quote: '“Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.” — Philippians 4:6'
    },
    'spreading-the-gospel-in-local-communities': {
      title: 'Spreading the Gospel in Local Communities',
      author: 'Sister Grace Iroha',
      date: 'March 18, 2025',
      image: '/images/evangelism.jpg',
      content: [
        "FECIN is committed to fulfilling the Great Commission by spreading the Gospel in underserved and rural areas.",
        "Teams are regularly sent to villages where they offer not only spiritual support but also practical help such as food, prayer, and encouragement.",
        "We have seen many come to Christ through these outreach efforts, experiencing His love through our witness and service."
      ],
      quote: '“How beautiful are the feet of those who bring good news!” — Romans 10:15'
    },
    'youth-ministry-retreat-highlights': {
      title: 'Youth Ministry Retreat Highlights',
      author: 'Brother Samuel Adamu',
      date: 'February 10, 2025',
      image: '/images/youth-retreat.jpg',
      content: [
        "This year’s youth retreat was filled with powerful worship, heartfelt teachings, and deep fellowship.",
        "The youth engaged in Bible studies, workshops, and recreational activities that strengthened their faith and unity.",
        "Testimonies poured in as many shared how God moved in their hearts during the retreat."
      ],
      quote: '“Don’t let anyone look down on you because you are young, but set an example for the believers...” — 1 Timothy 4:12'
    },
    'charity-mission-in-nasarawa': {
      title: 'Charity Mission in Nasarawa',
      author: 'Deaconess Mary Yakubu',
      date: 'January 25, 2025',
      image: '/images/charity.jpg',
      content: [
        "FECIN launched a charity mission to bring essential supplies and hope to remote areas in Nasarawa.",
        "Our volunteers distributed health kits, food, clothing, and shared the message of Christ with hundreds of families.",
        "We are grateful to be used as vessels of compassion and light."
      ],
      quote: '“Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.” — Matthew 25:40'
    },
    'raising-the-next-generation-of-leaders': {
      title: 'Raising the Next Generation of Leaders',
      author: 'Rev. Daniel Eze',
      date: 'March 5, 2025',
      image: '/images/leadership.jpg',
      content: [
        "Leadership training is essential in preparing our members for impactful service in the Kingdom.",
        "Through our leadership development seminars, we empower believers with Biblical principles and practical skills.",
        "God is raising a generation of leaders ready to carry His light into every sphere of life."
      ],
      quote: '“Commit to the Lord whatever you do, and He will establish your plans.” — Proverbs 16:3'
    },
    'praise-night-2024-recap': {
      title: 'Praise Night 2024 Recap',
      author: 'Choir Director Faith Omale',
      date: 'December 15, 2024',
      image: '/images/praise-night.jpg',
      content: [
        "Praise Night 2024 was an unforgettable night of worship, testimonies, and divine encounters.",
        "The atmosphere was charged with the presence of God as songs of praise rose like incense.",
        "Many experienced breakthroughs, healing, and spiritual renewal. We give all the glory to God."
      ],
      quote: '“Let everything that has breath praise the Lord. Praise the Lord.” — Psalm 150:6'
    }
  };

  const post = posts[slug];

  if (!post) return <p>Post not found</p>;

  return (
    <article className={styles.post}>
      <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>By {post.author} | {post.date}</p>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className={styles.image}
          />
        )}

        <div className={styles.content}>
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <blockquote className={styles.quote}>{post.quote}</blockquote>
        </div>
      </div>
    </article>
  );
};

export default PostPage;

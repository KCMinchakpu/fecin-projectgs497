import React from 'react';
import styles from './WhatWeDoPage.module.css';

const services = [
  {
    title: 'Evangelism & Outreach',
    description:
      'Spreading the gospel of Jesus Christ through community outreach, missions, and evangelistic programs.',
    icon: '📖',
  },
  {
    title: 'Prayer & Fellowship',
    description:
      'Uniting believers in prayer, worship, and fellowship to strengthen spiritual growth and connection.',
    icon: '🙏',
  },
  {
    title: 'Community Engagement',
    description:
      'Providing spiritual, educational, and material support to members and communities in need.',
    icon: '🤝',
  },
  {
    title: 'Youth & Children Ministry',
    description:
      'Mentoring young believers through Bible study, discipleship, and fun faith-filled activities.',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    title: 'Leadership Development',
    description:
      'Equipping church leaders and members with training to serve faithfully and effectively.',
    icon: '🎓',
  },
  {
    title: 'Charity & Relief Services',
    description:
      'Organizing relief efforts to provide food, clothing, and healthcare to those in need.',
    icon: '🧺',
  },
];

const WhatWeDoPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What We Do</h2>
        <p className={styles.description}>
        At the Fellowship of Eggon Christians in Nigeria (FECIN), we are dedicated to empowering the Eggon Christian community by fostering spiritual growth, promoting education, and providing support to those in need. Our mission is to unite Eggon Christians across Nigeria, offering a platform for shared worship, fellowship, and community-driven initiatives.
      </p>
        <div className={styles.cardGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <button className={styles.button}>Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoPage;
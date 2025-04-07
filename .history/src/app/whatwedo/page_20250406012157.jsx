'use client';

import React from 'react';
import Link from 'next/link';
import styles from './WhatWeDoPage.module.css';

const services = [
  {
    title: 'Evangelism & Outreach',
    description:
      'Spreading the gospel of Jesus Christ through community outreach, missions, and evangelistic programs.',
    icon: '📖',
    link: '/evangelism',
  },
  {
    title: 'Bible Translation & Distribution',
    description:
      'Translating the Bible into local languages and distributing copies to communities in need.',
    icon: '📚',
    link: '/bible-translation',
  },
  {
    title: 'Community Engagement',
    description:
      'Providing spiritual, and material support to members and communities in need.',
    icon: '🤝',
    link: '/community-engagement',
  },
  {
    title: 'Youth & Children Ministry',
    description:
      'Mentoring young believers through Bible study, discipleship, and fun faith-filled activities.',
    icon: '👨‍👩‍👧‍👦',
    link: '/youth-children-ministry',
  },
  {
    title: 'Leadership Development',
    description:
      'Equipping church leaders and members with training to serve faithfully and effectively.',
    icon: '🎓',
    link: '/leadership-development',
  },
  {
    title: 'Medical & Humanitarian Aid',
    description:
      'Organizing relief efforts to provide food, clothing, and healthcare to those in need.',
    icon: '🧺',
    link: '/humanitarian-aid',
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
              <Link href={service.link} className={styles.button}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoPage;

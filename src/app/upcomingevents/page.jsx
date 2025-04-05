import React from 'react';
import styles from './upcomingEvents.module.css';

const UpcomingEvents = () => {
  return (
    <div className={styles.eventsSection}>
      <h2 className={styles.eventsTitle}>Upcoming Events</h2>
      <div className={styles.eventsContainer}>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Community Bible Study</h3>
          <p className={styles.eventDate}>January 15, 2024</p>
          <p className={styles.eventDesc}>
            Join us for an enriching Bible study session to deepen our understanding of Scripture.
          </p>
        </div>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Mission Outreach Program</h3>
          <p className={styles.eventDate}>February 10, 2024</p>
          <p className={styles.eventDesc}>
            Participate in our outreach program to bring the Word to remote communities.
          </p>
        </div>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Annual Prayer Retreat</h3>
          <p className={styles.eventDate}>March 5, 2024</p>
          <p className={styles.eventDesc}>
            A time of reflection, prayer, and fellowship. Open to everyone.
          </p>
        </div>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Youth Fellowship Gathering</h3>
          <p className={styles.eventDate}>March 20, 2024</p>
          <p className={styles.eventDesc}>
            A special event for youth to connect, share, and grow in their faith.
          </p>
        </div>
      </div>
    </div>
  );
 };

export default UpcomingEvents;

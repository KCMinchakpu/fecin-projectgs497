import React from 'react';
import styles from './upcomingEvents.module.css';

const UpcomingEvents = () => {
  return (
    <div className={styles.eventsSection}>
      <h2 className={styles.eventsTitle}>Upcoming Events</h2>
      <div className={styles.eventsContainer}>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Community Bible Study</h3>
          <p className={styles.eventDate}>May 15, 2024</p>
          <p className={styles.eventDesc}>
            Join us for an enriching Bible study session to deepen our understanding of Scripture.
          </p>
        </div>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Mission Outreach Program</h3>
          <p className={styles.eventDate}>May 20, 2024</p>
          <p className={styles.eventDesc}>
            Participate in our outreach program to bring the Word to remote communities.
          </p>
        </div>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Annual Prayer Retreat</h3>
          <p className={styles.eventDate}>May 25, 2024</p>
          <p className={styles.eventDesc}>
            A time of reflection, prayer, and fellowship. Open to everyone.
          </p>
        </div>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Youth Fellowship Gathering</h3>
          <p className={styles.eventDate}>June 5, 2024</p>
          <p className={styles.eventDesc}>
            A special event for youth to connect, share, and grow in their faith.
          </p>
        </div>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Women's Ministry Retreat</h3>
          <p className={styles.eventDate}>June 15, 2024</p>
          <p className={styles.eventDesc}>
            A retreat for women to grow spiritually and build community.
          </p>
        </div>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Children's Bible Camp</h3>
          <p className={styles.eventDate}>June 25, 2024</p>
          <p className={styles.eventDesc}>
            A fun and educational camp for children to learn Bible stories and build friendships.
          </p>
        </div>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Pastors & Leadership Training</h3>
          <p className={styles.eventDate}>July 3, 2024</p>
          <p className={styles.eventDesc}>
            Equip pastors and church leaders with practical tools for ministry and growth.
          </p>
        </div>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Medical Outreach</h3>
          <p className={styles.eventDate}>July 10, 2024</p>
          <p className={styles.eventDesc}>
            Offering free medical checkups and health education in rural Eggon communities.
          </p>
        </div>
        <div className={styles.eventCard}>
          <h3 className={styles.eventName}>Bible Distribution</h3>
          <p className={styles.eventDate}>July 20, 2024</p>
          <p className={styles.eventDesc}>
            Distributing translated Eggon Bibles to households and churches in need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;

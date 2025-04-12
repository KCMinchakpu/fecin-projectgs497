import React from 'react';
import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Empowering Lives Through the Word: FECIN - Bridging Hearts with Scripture in Eggon 
          Language.
        </h1>
        <p className={styles.desc}>
          Fellowship of Eggon Christians in Nigeria (FECIN) is dedicated to translating the 
          Bible into the native Eggon language, making God’s Word accessible to all Eggon-speaking natives. Through our mission, 
          we empower individuals and communities to grow in faith, foster unity, and deepen their 
          relationship with Christ by understanding Scripture in their heart language.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Donate</button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.png" alt="Hero Image" fill className={styles.heroImg} />
      </div>

      {/* Upcoming Events Section */}
      <section className={styles.eventsSection}>
        <h2 className={styles.eventsTitle}>Upcoming Events</h2>
        <div className={styles.eventsContainer}>
          <div className={styles.eventCard}>
            <h3 className={styles.eventTitle}>Bible Translation Workshop</h3>
            <p className={styles.eventDate}>May 10, 2025</p>
            <p className={styles.eventDescription}>
              Join us for a workshop on the progress of the Eggon Bible translation and how you can get involved.
            </p>
          </div>
          <div className={styles.eventCard}>
            <h3 className={styles.eventTitle}>Community Prayer Gathering</h3>
            <p className={styles.eventDate}>June 5, 2025</p>
            <p className={styles.eventDescription}>
              A time of prayer and fellowship for all Eggon believers. Come together to seek God's guidance.
            </p>
          </div>
          <div className={styles.eventCard}>
            <h3 className={styles.eventTitle}>Church Planting Seminar</h3>
            <p className={styles.eventDate}>July 12, 2025</p>
            <p className={styles.eventDescription}>
              Learn about church planting strategies and how you can support new churches in Eggon-speaking areas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

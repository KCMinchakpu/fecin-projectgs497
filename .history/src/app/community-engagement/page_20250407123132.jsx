import React from 'react';
import styles from './CommunityEngagement.module.css';

const CommunityPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Community Engagement</h1>
      <p className={styles.intro}>
        At FECIN, we believe in the power of Christian fellowship and community support. Get involved, share your story, and grow in faith with us.
      </p>

      <section className={styles.section}>
        <h2>📅 Upcoming Events</h2>
        <ul className={styles.eventList}>
          <li>
            <strong>April 14:</strong> Youth Bible Study at Gospel Hall
          </li>
          <li>
            <strong>April 21:</strong> Community Clean-Up & Prayer Walk
          </li>
          <li>
            <strong>April 28:</strong> Praise Night Concert
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>🙏 Join a Prayer Group</h2>
        <p>
          Connect with others in prayer. Fill the form below to join a group based on your location and interests.
        </p>
        <form className={styles.form}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <select required>
            <option value="">Select Region</option>
            <option value="lafia">Lafia</option>
            <option value="abar">Abar</option>
            <option value="wakama">Wakama</option>
          </select>
          <button type="submit">Join Prayer Group</button>
        </form>
      </section>

      <section className={styles.section}>
        <h2>💬 Share Your Testimony</h2>
        <p>
          We love to hear how God is working in your life. Submit your testimony or read stories from other members.
        </p>
        <button className={styles.testimonyButton}>Submit Testimony</button>
        <div className={styles.testimonyCard}>
          <h4>“God delivered my family...”</h4>
          <p>– Grace A., Wakama</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>🤝 Volunteer Opportunities</h2>
        <ul>
          <li>Ushering and event planning</li>
          <li>Technical support for online services</li>
          <li>Children's ministry support</li>
        </ul>
        <p>
          Want to serve? Reach out through the contact form or speak with your local leader.
        </p>
      </section>

      <section className={styles.section}>
        <h2>📬 Stay Connected</h2>
        <p>Have questions or ideas? Let us know!</p>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows={4} placeholder="Message or Suggestion" required />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default CommunityPage;

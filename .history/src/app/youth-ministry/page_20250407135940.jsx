import React from 'react';
import styles from './YouthMinistry.module.css';

const ChildrenMinistryPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Children’s Ministry</h1>
      <p className={styles.intro}>
        Helping children grow in the knowledge and love of Jesus through fun and faith-filled activities.
      </p>

      <section className={styles.section}>
        <h2>📚 Sunday School</h2>
        <p>
          Interactive Bible lessons designed for children ages 3–12, taught in a safe, loving environment.
        </p>
      </section>

      <section className={styles.section}>
        <h2>🎨 Creative Time</h2>
        <p>
          Weekly activities like Bible crafts, Christian songs, puppet shows, and storytelling to bring faith to life.
        </p>
      </section>

      <section className={styles.section}>
        <h2>🎉 Kids Events</h2>
        <ul>
          <li>April 21: Easter Fun Day</li>
          <li>May 5: Children's Choir Presentation</li>
          <li>June 1: FECIN Kids Camp</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>📷 Photo Gallery</h2>
        <p>
          Coming soon! See highlights from our events and classes.
        </p>
      </section>

      <section className={styles.section}>
        <h2>👩‍🏫 Parent & Teacher Signup</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <select>
            <option value="">I want to...</option>
            <option value="volunteer">Volunteer as a Teacher</option>
            <option value="register">Register my Child</option>
            <option value="donate">Donate Resources</option>
          </select>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default ChildrenMinistryPage;

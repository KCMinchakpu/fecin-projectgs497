import styles from './Evangelism.module.css';

export default function EvangelismPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Evangelism & Outreach</h1>
        <p>Sharing the Gospel and spreading the message of Christ to all nations.</p>
      </section>

      <section className={styles.content}>
        <h2>Our Mission</h2>
        <p>
          At FECIN, we believe in the Great Commission — to go into all the world and preach the Good News.
          Our evangelism team is dedicated to reaching communities with the love of Christ through outreach programs,
          missions, and personal testimonies.
        </p>

        <h2>Bible Quote</h2>
        <blockquote className={styles.quote}>
          “Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son
          and of the Holy Spirit.” — Matthew 28:19
        </blockquote>

        <h2>Get Involved</h2>
        <p>
          Whether you have a heart for street evangelism, digital outreach, or supporting missions with prayer and
          resources, there's a place for you in our ministry.
        </p>
      </section>
    </main>
  );
}

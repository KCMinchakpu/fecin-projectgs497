import styles from './resources.module.css';

export default function ResourcesPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Resources</h1>
      <p className={styles.intro}>
        Explore our collection of resources to support your spiritual growth and ministry efforts.
      </p>

      <section className={styles.section}>
        <h2>Bible Study Materials</h2>
        <ul className={styles.list}>
          <li>
            <a href="/files/eggonscriptureguide.pdf" download>
              Eggon Scripture Study Guide (PDF)
            </a>
          </li>
          <li>
            <a href="/files/devotionaljournal.pdf" download>
              Devotional Journal (PDF)
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Leadership Training</h2>
        <ul className={styles.list}>
          <li>
            <a href="/files/leadershipmanual.pdf" download>
              Church Leadership Manual
            </a>
          </li>
          <li>
            <a href="/files/discipleship101.pdf" download>
              Discipleship 101
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Helpful Links</h2>
        <ul className={styles.list}>
          <li>
            <a href="https://www.bible.com/" target="_blank" rel="noopener noreferrer">
              YouVersion Bible App
            </a>
          </li>
          <li>
            <a href="https://www.biblegateway.com/" target="_blank" rel="noopener noreferrer">
              Bible Gateway
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

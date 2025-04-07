// app/bible-translation/page.tsx

import styles from './BibleTranslation.module.css';
import Link from 'next/link';

const BibleTranslationPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Bible Translation Mission</h1>
        <p>Bringing the Word of God to every heart in the Eggon language and beyond.</p>
      </section>

      <section className={styles.content}>
        <h2>Why Bible Translation?</h2>
        <p>
          Millions around the world do not yet have the Bible in their native language. At FECIN, we are
          committed to translating God’s Word into the Eggon language so that our people can experience His truth
          fully and personally.
        </p>
      </section>

      <section className={styles.content}>
        <h2>Our Process</h2>
        <ul>
          <li>Identifying unreached language communities</li>
          <li>Collaborating with linguists and local churches</li>
          <li>Translating the Scriptures with accuracy and clarity</li>
          <li>Reviewing and testing with native speakers</li>
          <li>Distributing the Bible in digital and printed formats</li>
        </ul>
      </section>

      <section className={styles.cta}>
        <h2>Get Involved</h2>
        <p>You can support this mission through prayer, volunteering, or donations.</p>
        <div className={styles.buttons}>
          <Link href="/donate"><button>Donate</button></Link>
          <Link href="/volunteer"><button>Volunteer</button></Link>
          <Link href="/prayer-requests"><button>Pray with Us</button></Link>
        </div>
      </section>
    </div>
  );
};

export default BibleTranslationPage;

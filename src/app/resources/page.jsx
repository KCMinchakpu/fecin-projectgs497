import styles from './resources.module.css';

export default function ResourcesPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Resources</h1>
      <p className={styles.intro}>
        Explore our collection of resources to support your spiritual growth and ministry efforts.
      </p>

      <div className={styles.grid}>
        {/* Bible Study Materials */}
        <section className={styles.card}>
          <h2>Bible Study Materials</h2>
          <ul className={styles.list}>
            <li><a href="/files/eggonscriptureguide.pdf" download>Eggon Scripture Study Guide</a></li>
            <li><a href="/files/devotionaljournal.pdf" download>Devotional Journal</a></li>
            <li><a href="/files/weeklybiblereadingplan.pdf" download>Weekly Bible Reading Plan</a></li>
            <li><a href="/files/topicalbiblestudy.pdf" download>Topical Bible Study (Youth)</a></li>
          </ul>
        </section>

        {/* Leadership Training */}
        <section className={styles.card}>
          <h2>Leadership Training</h2>
          <ul className={styles.list}>
            <li><a href="/files/leadershipmanual.pdf" download>Church Leadership Manual</a></li>
            <li><a href="/files/discipleship101.pdf" download>Discipleship 101</a></li>
            <li><a href="/files/pastortrainingcourse.pdf" download>Pastoral Training Course</a></li>
            <li><a href="/files/servantleadership.pdf" download>Servant Leadership Workbook</a></li>
          </ul>
        </section>

        {/* Helpful Links */}
        <section className={styles.card}>
          <h2>Helpful Links</h2>
          <ul className={styles.list}>
            <li><a href="https://www.bible.com/" target="_blank" rel="noopener noreferrer">YouVersion Bible App</a></li>
            <li><a href="https://www.biblegateway.com/" target="_blank" rel="noopener noreferrer">Bible Gateway</a></li>
            <li><a href="https://www.openbible.info/" target="_blank" rel="noopener noreferrer">OpenBible.info</a></li>
            <li><a href="https://www.blueletterbible.org/" target="_blank" rel="noopener noreferrer">Blue Letter Bible</a></li>
          </ul>
        </section>

        {/* Digital Discipleship */}
        <section className={styles.card}>
          <h2>Digital Discipleship</h2>
          <ul className={styles.list}>
            <li><a href="/files/digitaldiscipleshipguide.pdf" download>Digital Discipleship Guide</a></li>
            <li><a href="/files/socialmediaforfaith.pdf" download>Faith on Social Media</a></li>
            <li><a href="/files/evangelismchecklist.pdf" download>Evangelism Checklist</a></li>
            <li><a href="/files/faithsharingcards.pdf" download>Printable Faith Sharing Cards</a></li>
          </ul>
        </section>

        {/* Children & Youth */}
        <section className={styles.card}>
          <h2>Children & Youth</h2>
          <ul className={styles.list}>
            <li><a href="/files/bibleactivitiesforkids.pdf" download>Bible Activities for Kids</a></li>
            <li><a href="/files/youthbiblestudyplan.pdf" download>Youth Bible Study Plan</a></li>
            <li><a href="/files/scripturememorization.pdf" download>Scripture Memory Games</a></li>
            <li><a href="/files/faithcoloringpages.pdf" download>Faith-Based Coloring Pages</a></li>
          </ul>
        </section>

        {/* Prayer Tools */}
        <section className={styles.card}>
          <h2>Prayer Tools</h2>
          <ul className={styles.list}>
            <li><a href="/files/prayerjournaltemplate.pdf" download>Prayer Journal Template</a></li>
            <li><a href="/files/30dayprayerguide.pdf" download>30-Day Prayer Guide</a></li>
            <li><a href="/files/prayerforleaders.pdf" download>Prayer Guide for Leaders</a></li>
            <li><a href="/files/intercessoryprayermanual.pdf" download>Intercessory Prayer Manual</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}

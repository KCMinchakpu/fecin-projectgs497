// app/leadership/page.tsx
import styles from './Leadership.module.css';

export default function LeadershipTrainingPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Christian Leadership Training</h1>
      <p className={styles.intro}>
        Equipping passionate believers with the knowledge and tools to plant and grow thriving churches.
      </p>

      <section className={styles.section}>
        <h2>📚 Training Modules</h2>
        <ul className={styles.list}>
          <li>Foundations of Church Planting</li>
          <li>Biblical Leadership & Discipleship</li>
          <li>Community Engagement & Evangelism</li>
          <li>Developing Ministry Teams</li>
          <li>Church Governance & Administration</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>👨‍🏫 Our Mentors</h2>
        <p>
          Our trainers are seasoned pastors and missionaries with real-world experience in church planting across Nigeria and beyond.
        </p>
      </section>

      <section className={styles.section}>
        <h2>📆 Get Involved</h2>
        <p>
          Interested in joining the next training cohort? <a href="/contact">Contact us</a> or register through the form below.
        </p>
      </section>

      <blockquote className={styles.quote}>
        “Go therefore and make disciples of all nations...” — Matthew 28:19
      </blockquote>
    </div>
  );
}

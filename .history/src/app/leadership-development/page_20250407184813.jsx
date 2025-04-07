// app/leadership/page.tsx
'use client';

import { useState } from 'react';
import styles from './Leadership.module.css';

export default function LeadershipTrainingPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    church: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Thank you for registering! We will get in touch soon.');
    setForm({ name: '', email: '', phone: '', church: '', message: '' });
  };

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
        <h2>📨 Register for Training</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="church"
            placeholder="Church Affiliation"
            value={form.church}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Why do you want to join?"
            value={form.message}
            onChange={handleChange}
            rows={4}
          />
          <button type="submit">Submit</button>
        </form>
      </section>

      <blockquote className={styles.quote}>
        “Go therefore and make disciples of all nations...” — Matthew 28:19
      </blockquote>
    </div>
  );
}

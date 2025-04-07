'use client';

import { useState } from 'react';
import styles from './MedicalOutreach.module.css';

export default function MedicalAidPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'volunteer', 
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Thank you! We have received your message.');
    setForm({ name: '', email: '', phone: '', type: 'volunteer', message: '' });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Medical & Humanitarian Aid</h1>
      <p className={styles.intro}>
        FECIN is committed to showing Christ’s love through practical help—medical outreach, food distribution, and support for vulnerable communities.
      </p>

      <section className={styles.section}>
        <h2>❤️ Our Services</h2>
        <ul className={styles.list}>
          <li>Medical outreaches in rural communities</li>
          <li>Free health checkups & counseling</li>
          <li>Distribution of food, clothing & clean water</li>
          <li>Emergency relief during disasters</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>📩 Get Involved / Request Aid</h2>
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
          <select name="type" value={form.type} onChange={handleChange} required>
            <option value="volunteer">I want to volunteer</option>
            <option value="donor">I want to donate</option>
            <option value="request">I need medical/humanitarian aid</option>
          </select>
          <textarea
            name="message"
            placeholder="Tell us more..."
            value={form.message}
            onChange={handleChange}
            rows={4}
          />
          <button type="submit">Submit</button>
        </form>
      </section>

      <blockquote className={styles.quote}>
        “Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.” — Matthew 25:40
      </blockquote>
    </div>
  );
}

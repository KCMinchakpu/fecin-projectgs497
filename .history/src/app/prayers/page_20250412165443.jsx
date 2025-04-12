'use client';
import { useState } from 'react';
import styles from './prayers.module.css';

export default function PrayerPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    request: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Prayer Request Submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', request: '' });
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Submit a Prayer Request</h1>
      <p className={styles.intro}>
        We are honored to pray with you. Fill out the form below to share your request with the FECIN prayer team.
      </p>

      {submitted ? (
        <div className={styles.thankyou}>
          <p>Thank you for sharing your prayer request. Our team will lift you up in prayer.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formLabel}>
            <label>
              Your Name (optional)
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={styles.inputField}
              />
            </label>
          </div>

          <div className={styles.formLabel}>
            <label>
              Email (optional, for follow-up)
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={styles.inputField}
              />
            </label>
          </div>

          <div className={styles.formLabel}>
            <label>
              Prayer Request <span className={styles.required}>*</span>
              <textarea
                name="request"
                value={form.request}
                onChange={handleChange}
                required
                placeholder="Write your prayer request here..."
                className={styles.textareaField}
              />
            </label>
          </div>

          <button type="submit">Submit Request</button>
        </form>
      )}
    </main>
  );
}

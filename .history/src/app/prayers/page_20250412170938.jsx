'use client'; 

import { useState } from 'react';
import styles from './prayers.module.css';

function SubmitPrayerRequest() {
  const [prayerRequest, setPrayerRequest] = useState({
    name: '',
    email: '',
    prayerRequest: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrayerRequest({ ...prayerRequest, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to a backend or MongoDB)
    console.log('Prayer Request Submitted:', prayerRequest);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h1>Submit Your Prayer Request</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={prayerRequest.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={prayerRequest.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div>
            <label htmlFor="prayerRequest" className={styles.label}>Your Prayer Request</label>
            <textarea
              id="prayerRequest"
              name="prayerRequest"
              value={prayerRequest.prayerRequest}
              onChange={handleChange}
              className={`${styles.input} ${styles.textarea}`}
              rows="5"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default SubmitPrayerRequest;

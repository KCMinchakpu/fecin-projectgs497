"use client";

import React, { useState } from "react";
import styles from './donate.module.css';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation logic here (e.g., sending form data to a payment gateway)
    console.log("Donation submitted", { donationAmount, name, email, message });
  };

  return (
    <div className={styles.donateContainer}>
      <h1 className={styles.title}>Support FECIN - Donate</h1>
      <p className={styles.description}>
        Your generous donation helps us translate the Bible into the Eggon language and empowers communities to grow in faith.
      </p>

      <div className={styles.donationForm}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Donation Amount (in USD)"
            className={styles.input}
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            required
          />
          <textarea
            placeholder="Message (Optional)"
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className={styles.button}>
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate;

"use client";

import React from 'react';
import Image from 'next/image';  
import styles from './contact.module.css';  

const ContactPage = () => {

  const a = Math.random();
  console.log(a);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.description}>
        We would love to hear from you! Whether you have questions, feedback, or prayer requests, feel free to get in touch with us.
      </p>

      {/* Contact Details Section */}
      <div className={styles.contactDetails}>
        <h2>Contact Details</h2>
        <p>Email: <a href="mailto:info@fecin.org">info@fecin.org</a></p>
        <p>Phone: +234 123 456 7890</p>
        <p>Address: 123 Church Street, City, Nigeria</p>
      </div>

      {/* Contact Form Section */}
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" className={styles.input} />
          <input type="email" placeholder="Email Address" className={styles.input} />
          <input type="text" placeholder="Phone Number (required)" className={styles.input} />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className={styles.textarea}
          ></textarea>
          <button className={styles.button} onClick={() => console.log("clicked")}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

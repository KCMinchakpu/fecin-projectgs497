"use client"

import React from 'react';
import Image from 'next/image';  
import styles from './contact.module.css';  

const ContactPage = () => {

  const a = Math.random()
  console.log(a)
 return (
    <div className={styles.container}>
      {/* Image Section */}
      <div className={styles.imgContainer}>
        <Image src="/connect.png" alt="Contact" width={280} height={280}  />
      </div>

      {/* Contact Form Section */}
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" className={styles.input} />
          <input type="email" placeholder="Email Address" className={styles.input} />
          <input type="text" placeholder="Phone Number (Optional)" className={styles.input} />
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
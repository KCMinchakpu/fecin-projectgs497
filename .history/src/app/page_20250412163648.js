import React from 'react';
import Image from 'next/image';
import styles from './home.module.css';
import Link from 'next/link';


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Empowering Lives Through the Word: FECIN - Bridging Hearts with Scripture in Eggon 
          Language.
        </h1>
        <p className={styles.desc}>
          Fellowship of Eggon Christians in Nigeria (FECIN) is dedicated to translating the 
          Bible into the native Eggon language, making God’s Word accessible to all Eggon-speaking natives. Through our mission, 
          we empower individuals and communities to grow in faith, foster unity, and deepen their 
          relationship with Christ by understanding Scripture in their heart language.
        </p>
        <div className={styles.buttons}>
        <Link href="/about">
          <button className={styles.button}>Learn More</button>
        </Link>
        <Link href="/donate">
          <button className={styles.button-donation}>Donate</button>
        </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.png" alt="Hero Image" fill className={styles.heroImg} />
      </div>
    </div>
  );
  
};

export default Home;
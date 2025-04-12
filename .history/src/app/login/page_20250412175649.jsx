'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css'; // Assuming you have a CSS module for styling

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      router.push('/dashboard'); // Redirect after successful login
    } else {
      setError(data.message); // Display error message
    }
  };

  return (
    <div className={styles['login-container']}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        {error && <p className={styles.error}>{error}</p>}

        <div>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div>
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>Login</button>

        <div className={styles.link}>
          <span>Don't have an account? <a href="/signup">Sign up</a></span>
        </div>
      </form>
    </div>
  );
}

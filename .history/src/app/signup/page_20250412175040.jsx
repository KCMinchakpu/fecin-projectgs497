'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './signup.module.css'; // Assuming you have a CSS module for styling

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('member'); // Default role is 'member'
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await response.json();

    if (response.ok) {
      router.push('/login'); // Redirect after successful signup
    } else {
      setError(data.message); // Display error message
    }
  };

  return (
    <div className={styles['signup-container']}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Sign Up</h2>
        {error && <p className={styles.error}>{error}</p>}

        <div>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
          />
        </div>

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

        {/* Role selection */}
        <div>
          <label htmlFor="role" className={styles.label}>Role:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={styles.select}
          >
            <option value="member">Member</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className={styles.button}>Sign Up</button>

        <div className={styles.link}>
          <span>Already have an account? <a href="/login">Login</a></span>
        </div>
      </form>
    </div>
  );
}

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
    <div className={styles.signupContainer}> {/* Using class from CSS module */}
      <h1 className={styles.heading}>Sign Up</h1> {/* Using class from CSS module */}
      {error && <p className={styles.error}>{error}</p>} {/* Using class from CSS module */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
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

        <div className={styles.formGroup}>
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

        <div className={styles.formGroup}>
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

        <div className={styles.formGroup}>
          <label htmlFor="role" className={styles.label}>Role:</label>
          <select 
            id="role" 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className={styles.input}
          >
            <option value="member">Member</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className={styles.button}>Sign Up</button>
      </form>
    </div>
  );
}

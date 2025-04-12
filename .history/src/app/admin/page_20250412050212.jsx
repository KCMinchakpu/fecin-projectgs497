// src/app/admin/page.tsx
import React from "react";
import { getSession } from "next-auth/react";
import Link from "next/link";
import styles from "../../styles/admin.module.css";

const AdminPage = async () => {
  const session = await getSession();

  // If there's no session, redirect to login
  if (!session || session.user.role !== "admin") {
    return (
      <div className={styles.mainContent}>
        <h1>Access Denied</h1>
        <p>You must be an admin to access this page.</p>
      </div>
    );
  }

  return (
    <div className={styles.adminContainer}>
      <div className={styles.sidebar}>
        <h1>Admin Dashboard</h1>
        <ul>
          <li>
            <Link href="/admin/events" className={styles.sidebarLink}>
              Manage Events
            </Link>
          </li>
          <li>
            <Link href="/admin/users" className={styles.sidebarLink}>
              Manage Users
            </Link>
          </li>
          <li>
            <Link href="/admin/blog" className={styles.sidebarLink}>
              Manage Blog Posts
            </Link>
          </li>
          <li>
            <Link href="/admin/settings" className={styles.sidebarLink}>
              Settings
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.mainContent}>
        <h1>Admin Dashboard</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/admin/events">Manage Events</Link>
            </li>
            <li>
              <Link href="/admin/users">Manage Users</Link>
            </li>
            <li>
              <Link href="/admin/blog">Manage Blog Posts</Link>
            </li>
            <li>
              <Link href="/admin/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminPage;

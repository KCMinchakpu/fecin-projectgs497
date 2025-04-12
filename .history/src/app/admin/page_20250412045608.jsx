
import React from "react";
import { getSession } from "next-auth/react";
import Link from "next/link";



const AdminPage = async () => {
  const session = await getSession();

  // If there's no session, redirect to login
  if (!session) {
    return (
      <div class="callnana">
        <h2>You must be logged in to access the admin page.</h2>
        <Link href="/login">Login</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
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
  );
};

export default AdminPage;

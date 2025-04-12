import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { useState, useEffect } from 'react';

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'admin') {
    redirect('/login');
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/admin/users');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    const response = await fetch(`/api/admin/users/${userId}/role`, {
      method: 'PATCH',
      body: JSON.stringify({ role: newRole }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // Refresh the users after the role update
      setUsers((prev) =>
        prev.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <p>{user.name} ({user.email}) - Role: {user.role}</p>
            <select
              value={user.role}
              onChange={(e) => handleRoleChange(user._id, e.target.value)}
            >
              <option value="member">Member</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

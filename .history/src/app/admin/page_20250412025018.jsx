// Add the "use client" directive at the top of the file
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Wait for session to load
    if (!session || session.user.role !== 'admin') {
      router.push('/login'); // Redirect non-admins to login
    }
  }, [session, status]);

  if (status === 'loading') {
    return <p>Loading...</p>; // Loading state while session is being fetched
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Event Management</h2>
        <p>Manage events, update details, or add new events.</p>
        <button className="bg-blue-500 text-white p-2 rounded mt-2">
          Add New Event
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Bible Verse of the Week</h2>
        <p>Update the Bible verse for the week shown on the homepage.</p>
        <button className="bg-green-500 text-white p-2 rounded mt-2">
          Update Verse
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Admin Settings</h2>
        <p>Manage admin settings or roles for the website.</p>
        <button className="bg-yellow-500 text-white p-2 rounded mt-2">
          Update Settings
        </button>
      </div>
    </div>
  );
};

export default AdminPage;

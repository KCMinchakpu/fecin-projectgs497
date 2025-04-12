'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
  const { data: session } = useSession();
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '' });
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('/api/admin/events');
      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, []); // Empty dependency ensures this runs once on mount

  const handleAddEvent = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/admin/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent),
    });

    if (res.ok) {
      setNewEvent({ title: '', date: '', description: '' });
      const data = await fetch('/api/admin/events');
      setEvents(await data.json());
    } else {
      alert('Failed to add event');
    }
  };

  if (!session) {
    router.push('/auth/login'); // Redirect if not authenticated
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user?.name}</p>

      <h2>Manage Events</h2>
      <form onSubmit={handleAddEvent}>
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          required
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          required
        />
        <textarea
          placeholder="Event Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          required
        />
        <button type="submit">Add Event</button>
      </form>

      <h3>Existing Events</h3>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h4>{event.title}</h4>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;

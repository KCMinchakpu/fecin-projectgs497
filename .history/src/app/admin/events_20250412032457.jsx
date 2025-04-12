import { connectToDB } from '@/lib/mongodb';
import Event from '@/models/Event'; 

// API handler for fetching and adding events
export default async function handler(req, res) {
  await connectToDB();

  if (req.method === 'GET') {
    try {
      const events = await Event.find();
      return res.status(200).json(events);
    } catch (err) {
      return res.status(500).json({ message: 'Failed to fetch events' });
    }
  }

  if (req.method === 'POST') {
    const { title, date, description } = req.body;

    try {
      const newEvent = await Event.create({
        title,
        date,
        description,
      });
      return res.status(201).json(newEvent);
    } catch (err) {
      return res.status(500).json({ message: 'Failed to add event' });
    }
  }

  res.status(405).end(); // Method Not Allowed
}

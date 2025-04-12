import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
}, { timestamps: true });

export default mongoose.models.Event || mongoose.model('Event', EventSchema);

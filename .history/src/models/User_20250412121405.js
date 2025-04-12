import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,
  role: {
    type: String,
    enum: ['admin', 'editor', 'member'],
    default: 'member',
  },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);
// // checks if a user exists by email, and verifies the password using bcrypt. If successful, it returns user details.
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function PATCH(req, { params }) {
  try {
    const { role } = await req.json();
    const { userId } = params;

    if (!role) {
      return new Response('Role is required', { status: 400 });
    }

    await dbConnect();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    );

    if (!updatedUser) {
      return new Response('User not found', { status: 404 });
    }

    return new Response('User role updated successfully', { status: 200 });
  } catch (error) {
    console.error('Error updating user role:', error);
    return new Response('Something went wrong', { status: 500 });
  }
}
// This code handles the PATCH request to update a user's role in the database.
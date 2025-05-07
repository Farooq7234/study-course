
import mongoose from 'mongoose';

// Connection state tracking
const MONGODB_URI = process.env.MONGODB_URI!;

// Global variable to maintain connection state
let cached = (global as any).mongoose;

if (!cached) {
  (global as any).mongoose = { conn: null, promise: null };
  cached = (global as any).mongoose;
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      console.log('Connected to MongoDB');
      console.log("MONGODB_URI:", process.env.MONGODB_URI);
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;


import mongoose from 'mongoose';

// Connection state tracking
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://umar:farooq007@cluster07.mzndjmh.mongodb.net/online-courses?retryWrites=true&w=majority';

// Global variable to maintain connection state
let cached = (global as any).mongoose;

if (!cached) {
  (global as any).mongoose = { conn: null, promise: null };
  cached = (global as any).mongoose;
}

export async function connectToDatabase() {
  if (cached.conn) {
    console.log('Using cached MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log('Connecting to MongoDB...');
    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      console.log('Connected to MongoDB successfully!');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// Connect immediately when the module loads to ensure connection is established early
connectToDatabase()
  .then(() => console.log('MongoDB connection initialized'))
  .catch(err => console.error('Failed to initialize MongoDB connection:', err));

export default connectToDatabase;

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Reuse one connection attempt across requests handled by the same
// serverless instance. Each request awaits this promise before using models.
let connectionPromise;

const dbConnection = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!process.env.DB_URL) {
    throw new Error("DB_URL is not configured");
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.DB_URL, {
        dbName: "Job_Portal",
        serverSelectionTimeoutMS: 10000,
      })
      .then(({ connection }) => {
        console.log("MongoDB Connected Successfully");
        return connection;
      })
      .catch((error) => {
        // Let a later request retry if Atlas was temporarily unavailable.
        connectionPromise = undefined;
        throw error;
      });
  }

  return connectionPromise;
};

export default dbConnection;

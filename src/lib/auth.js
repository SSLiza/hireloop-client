import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const client = new MongoClient(process.env.MONGODB_URI); // replace with your MongoDB connection string
const db = client.db('hireloop'); // replace with your database name

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

   user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: "seeker",
      },
    },
  },
  
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});
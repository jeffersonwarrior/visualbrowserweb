import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

// Handle build-time when POSTGRES_URL might not be available
let client: postgres.Sql;
let db: ReturnType<typeof drizzle>;

if (process.env.POSTGRES_URL) {
  client = postgres(process.env.POSTGRES_URL);
  db = drizzle(client, { schema });
} else if (process.env.NODE_ENV === 'production') {
  throw new Error('POSTGRES_URL environment variable is not set');
} else {
  // For build-time or development without DB, create a mock
  client = postgres('postgresql://localhost:5432/mock');
  db = drizzle(client, { schema });
}

export { client, db };

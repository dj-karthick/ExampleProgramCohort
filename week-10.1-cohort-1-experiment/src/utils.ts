import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:npg_eJGWCNUIq35a@ep-lucky-violet-ahxy9e3t-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
    await client.connect();
    return client;
}
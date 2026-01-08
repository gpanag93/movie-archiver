import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { config } from 'dotenv';
import * as path from 'path';

// Load env vars
config({ path: path.resolve(__dirname, '../.env.host') });
config({ path: path.resolve(__dirname, '../.env'), override: false });

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    console.error('Error: DATABASE_URL is not set');
    process.exit(1);
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
    const username = process.argv[2];

    if (!username) {
        console.error('Usage: npx ts-node admin-tools/create-user.ts <username>');
        process.exit(1);
    }

    try {
        console.log(`Creating user with username: ${username}...`);

        const user = await prisma.user.create({
            data: {
                username: username,
                preferences: '', // Default empty preferences
            },
        });

        console.log(`✅ User created successfully!`);
        console.log(`ID: ${user.id}`);
        console.log(`Username: ${user.username}`);
    } catch (error: any) {
        if (error.code === 'P2002') {
            console.error(`❌ Error: User with username "${username}" already exists.`);
        } else {
            console.error('❌ Error creating user:', error);
        }
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();

import { hash } from 'argon2';
import { PrismaClient } from '@prisma/client';

/**
 * Seeds the database.
 */
async function seed() {
  const client = new PrismaClient();

  try {
    await client.$connect();

    const user = await client.user.create({
      data: {
        fullName: 'Andrés Castellanos',
        email: 'a@mangochango.com',
        password: await hash('Mcu2022$'),
      },
    });

    console.log('User created', user.email);
  } catch (error) {
  } finally {
    await client.$disconnect();
  }
}

seed();

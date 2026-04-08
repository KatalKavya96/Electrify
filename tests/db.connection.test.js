const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });

let prisma;

beforeAll(() => {
  prisma = new PrismaClient();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Database Connection', () => {
  test('should connect to the database successfully', async () => {
    const result = await prisma.$queryRaw`SELECT 1 AS connected`;
    expect(result).toBeDefined();
    expect(result[0].connected).toBe(1n);
  });
});

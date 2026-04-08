# Database Client (Prisma Singleton)

## Purpose
This module implements a **Singleton Pattern for Prisma Client** to ensure that only one database connection pool is used throughout the application lifecycle.

---

## Code

```ts
import { PrismaClient } from '@prisma/client';

class DatabaseClient {
  private static instance: PrismaClient;

  public static getInstance(): PrismaClient {
    if (!DatabaseClient.instance) {
      DatabaseClient.instance = new PrismaClient();
    }
    return DatabaseClient.instance;
  }

  public static async disconnect(): Promise<void> {
    if (DatabaseClient.instance) {
      await DatabaseClient.instance.$disconnect();
    }
  }
}

export default DatabaseClient;
```

---

## How it works
- Ensures only one PrismaClient instance exists
- Reuses connection pool across the app
- Prevents multiple DB connections

---

## Usage

```ts
import DatabaseClient from '../database/databaseClient';

const prisma = DatabaseClient.getInstance();
```

---

## Best Practices
- Always use Singleton instance
- Avoid creating multiple Prisma clients

# Environment Configuration (env.config.ts)

## Purpose
This module centralizes environment variable management using dotenv and validates required variables.

---

## Code

```ts
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '8000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL,
};

const requiredEnvVars = ['DATABASE_URL'];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}
```

---

## How it works
- Loads `.env` variables
- Creates centralized config object
- Validates required variables

---

## Usage

```ts
import { config } from '../config/env.config';

console.log(config.databaseUrl);
```

---

## Best Practices
- Never hardcode secrets
- Use `.env` for config
- Validate required variables

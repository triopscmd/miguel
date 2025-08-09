import { describe, it, expect } from 'vitest';
import { PrismaClient } from '@prisma/client';
import { prisma } from 'src/server/db/client'; // This import will fail as the file does not exist yet

describe('Prisma Client Initialization', () => {
  it('should initialize and export a singleton PrismaClient instance with accessible models', () => {
    // Assert that the 'prisma' object is defined
    expect(prisma).toBeDefined();

    // Assert that it's an instance of PrismaClient
    expect(prisma).toBeInstanceOf(PrismaClient);

    // Assert that the 'user' model (from prisma/schema.prisma) is accessible on the client
    expect(prisma).toHaveProperty('user');
    expect(typeof prisma.user).toBe('object'); // Further check to ensure it's an object representing the model API
  });
});
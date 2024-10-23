import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    age: integer().notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
});

export const insertUserSchema = createInsertSchema(usersTable)
export const updateUserSchema = createInsertSchema(usersTable, {
    email: (schema) => schema.email.email().optional(),
    age: (schema) => schema.age.optional(),
    name: (schema) => schema.name.optional(),
});
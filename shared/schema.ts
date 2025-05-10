import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table for admin access
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Contact form submissions
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service"),
  position: text("position"),
  experience: text("experience"),
  message: text("message").notNull(),
  type: text("type").notNull(), // "general" or "career"
  createdAt: timestamp("created_at").defaultNow().notNull()
});

// Create schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const contactSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
  service: z.string().nullable().default(null),
  position: z.string().nullable().default(null),
  experience: z.string().nullable().default(null),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  type: z.enum(["general", "career"])
});

export const insertContactSchema = createInsertSchema(contacts);

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type ContactFormData = z.infer<typeof contactSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

import { pgTable, text, serial, boolean, date, timestamp, integer } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const eventsTable = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  categories: text("categories").array().notNull().default([]),
  date: date("date").notNull(),
  endDate: date("end_date"),
  time: text("time"),
  endTime: text("end_time"),
  time2: text("time2"),
  endTime2: text("end_time2"),
  location: text("location").notNull(),
  imageUrl: text("image_url"),
  imageAlt: text("image_alt"),
  featured: boolean("featured").notNull().default(false),
  ogTitle: text("og_title"),
  ogDescription: text("og_description"),
  ogImage: text("og_image"),
  price: text("price"),
  ticketUrl: text("ticket_url"),
  organizer: text("organizer"),
  gallery: text("gallery").array().notNull().default([]),
  cancelled: boolean("cancelled").notNull().default(false),
  cancellationReason: text("cancellation_reason"),
  likes: integer("likes").notNull().default(0),
  publishedAt: timestamp("published_at").default(sql`now()`),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertEventSchema = createInsertSchema(eventsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  // Allow explicit null to save as draft (publishedAt IS NULL)
  publishedAt: z.date().nullable().optional(),
});

export const updateEventSchema = insertEventSchema.partial();

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type UpdateEvent = z.infer<typeof updateEventSchema>;
export type Event = typeof eventsTable.$inferSelect;

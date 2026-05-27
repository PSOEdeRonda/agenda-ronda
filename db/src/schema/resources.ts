import { pgTable, text, serial, boolean, timestamp, integer } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const RESOURCE_CATEGORIES = [
  "Revistas",
  "Programas",
  "Itinerarios",
  "Dossiers",
  "Cartelería",
  "Otros",
] as const;

export type ResourceCategory = (typeof RESOURCE_CATEGORIES)[number];

export const resourcesTable = pgTable("resources", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  fileUrl: text("file_url").notNull(),
  fileType: text("file_type").notNull().default("pdf"),
  coverImageUrl: text("cover_image_url"),
  category: text("category").notNull().default("Otros"),
  featured: boolean("featured").notNull().default(false),
  publishedAt: timestamp("published_at").default(sql`now()`),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const eventResourcesTable = pgTable("event_resources", {
  id: serial("id").primaryKey(),
  eventId: integer("event_id").notNull(),
  resourceId: integer("resource_id").notNull(),
});

export const postResourcesTable = pgTable("post_resources", {
  id: serial("id").primaryKey(),
  postId: integer("post_id").notNull(),
  resourceId: integer("resource_id").notNull(),
});

export const insertResourceSchema = createInsertSchema(resourcesTable).omit({
  id: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
}).extend({
  publishedAt: z.preprocess(
    (val) => (typeof val === "string" ? new Date(val) : val),
    z.date().nullable().optional(),
  ),
});

export const updateResourceSchema = insertResourceSchema.partial();

export type InsertResource = z.infer<typeof insertResourceSchema>;
export type UpdateResource = z.infer<typeof updateResourceSchema>;
export type Resource = typeof resourcesTable.$inferSelect;

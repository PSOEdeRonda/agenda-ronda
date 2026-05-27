import { pgTable, text, serial, timestamp, jsonb } from "drizzle-orm/pg-core";

import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const postsTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: jsonb("content"),
  featuredImage: text("featured_image"),
  featuredImageAlt: text("featured_image_alt"),
  category: text("category"),
  tags: text("tags"),
  location: text("location"),
  status: text("status").notNull().default("draft"),
  publishedAt: timestamp("published_at"),
  ogTitle: text("og_title"),
  ogDescription: text("og_description"),
  ogImage: text("og_image"),
  gallery: text("gallery").array().notNull().default([]),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertPostSchema = createInsertSchema(postsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updatePostSchema = insertPostSchema.partial();

export type InsertPost = z.infer<typeof insertPostSchema>;
export type UpdatePost = z.infer<typeof updatePostSchema>;
export type Post = typeof postsTable.$inferSelect;

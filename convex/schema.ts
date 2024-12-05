import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    // this the Clerk Id, stored in the subject JWT field
    externalId: v.string(),
    firstName: v.union(v.string(), v.null()),
    lastName: v.union(v.string(), v.null()),
    imageUrl: v.string(),
    primaryEmail: v.string(),
  }).index("byExternalId", ["externalId"]),
  notifications: defineTable({
    notification_creator: v.optional(v.id("users")),
    notification_receiver: v.id("users"),
    notification_type: v.optional(v.id("list_notification_types")),
    notification: v.string(),
  }).index("byNotificationReceiver", ["notification_receiver"]),
  likes: defineTable({
    snippet_id: v.id("snippets"),
    liked_by: v.id("users"),
  }).index("bySnippetIdAndLikedBy", ["snippet_id", "liked_by"]),
  saves: defineTable({
    snippet_id: v.id("snippets"),
    saved_by: v.id("users"),
  })
    .index("bySavedBy", ["saved_by"])
    .index("bySnippetIdAndSavedBy", ["snippet_id", "saved_by"]),
  // TODO: Add index later if required
  list_notification_types: defineTable({
    notification_type: v.string(),
  }),
});

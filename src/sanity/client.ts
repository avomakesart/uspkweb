import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_SANITY_STUDIO_PROJECT_ID || "wy0gweh8",
  dataset: process.env.NEXT_SANITY_STUDIO_DATASET || "production",
  apiVersion: process.env.NEXT_SANITY_STUDIO_API_VERSION || "2024-01-01",
  useCdn: false,
});

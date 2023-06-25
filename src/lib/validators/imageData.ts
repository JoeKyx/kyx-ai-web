import { z } from "zod";

export const imageData = z.object({
  guildId: z.string(),
  userId: z.string(),
  url: z.string(),
  generationId: z.string(),
  timestamp: z.string(),
  messageId: z.string(),
});

// array validator
export const imageDataArray = z.array(imageData);

export type ImageData = z.infer<typeof imageData>;

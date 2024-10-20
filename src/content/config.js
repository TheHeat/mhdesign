// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const projectCollection = defineCollection({
	type: "content", // v2.5.0 and later
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			excerpt: z.string(),
			client: z.string(),
			date: z.number(),
			image: z.object({
				src: image(),
			}),
			tags: z.array(z.string()).optional(),
		}),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	projects: projectCollection,
};

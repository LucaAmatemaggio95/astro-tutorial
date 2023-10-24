import {defineCollection, z} from "astro:content";

const postCollection = defineCollection({
    schema: ({image}) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string()
    })
})

export const collections = {
    // name should match with the directory name where the collection is located
    posts: postCollection
};
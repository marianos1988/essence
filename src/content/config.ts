
// DEfinir Colecciones
import { defineCollection, z } from "astro:content"; // La zeta valida Esquemas


const events = defineCollection({
    schema: z.object({
        titulo: z.string(),
        lugar: z.string(),
        fecha: z.string(),
        img: z.string(),
        link_comprar: z.string().url(),

    })
})

export const collections = { events: events } 
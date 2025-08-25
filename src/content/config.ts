
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

const rooster =  defineCollection({
    schema: z.object({
        nombre: z.string(),
        artistico: z.string(),
        profesion: z.string(),
        genero: z.string(),
        img1: z.string(),
        img2: z.string(),
        instagram: z.string().url(),
        youtube: z.string().url(),
        spotify: z.string().url(),
        soundcloud: z.string().url(),
        tiktok: z.string().url(),
    })
})

export const collections = { 
    
    events: events,
    rooster: rooster
 } 
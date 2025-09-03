
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

const roster =  defineCollection({
    schema: z.object({
        nombre: z.string(),
        artistico: z.string(),
        profesion: z.string(),
        genero: z.string(),
        img1: z.string(),
        img2: z.string(),
        logo: z.string(),
        instagram: z.string().url().optional(),
        youtube: z.string().url().optional(),
        spotify: z.string().url().optional(),
        soundcloud: z.string().url().optional(),
        tiktok: z.string().url().optional(),
    })
})

export const collections = { 
    
    events: events,
    roster: roster
 } 
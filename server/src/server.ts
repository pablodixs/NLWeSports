import express from "express";
import cors from "cors";

import { PrismaClient } from '@prisma/client';
import { convertHoursStringToMinutes } from './utils/convert-hour'
import { convertMinutesToHoursString } from "./utils/convert-minutes";

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors(
    // origin: 'localhost:3333',
))

// Lista de games

app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })

    return response.json(games)
})

// Criação de anúncio

app.post('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    const body = request.body;

    const add = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlayed: body.yearsPlayed,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHoursStringToMinutes(body.hourStart),
            hourEnd: convertHoursStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel
        }
    })

    return response.status(201).json(add)
})

// Listagem de anúncios

app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            useVoiceChannel: true,
            weekDays: true,
            yearsPlayed: true,
            hourEnd: true,
            hourStart: true,

        },
        orderBy:{
            createdAd: 'desc'
        },
        where: {
            gameId,
        }
    })

    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHoursString(ad.hourStart),
            hourEnd: convertMinutesToHoursString(ad.hourEnd),
        }
    }))
})

// Discord Usuário

app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        },
    })
    
    return response.json({
        discord: ad.discord
    })
})

app.listen(3333)
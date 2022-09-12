import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, game: 'Fortnite' },
        { id: 2, game: 'Call Of Duty' },
        { id: 3, game: 'Valorant' },
    ]);
});
app.listen(3333);

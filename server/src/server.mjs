import express from "express";

const app = express();

app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, name: 'Fortnite', ads: 4, },
        { id: 2, name: 'COD: Warfare', ads: 2, }
    ])
})

app.listen(3333)
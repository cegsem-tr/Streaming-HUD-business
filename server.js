const axios = require('axios');
const fs = require('fs');
const archiver = require('archiver');
const { createCanvas } = require('canvas');
const express = require('express');
const app = express();

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const SEARCH_ENGINE_ID = process.env.SEARCH_ENGINE_ID;

app.get('/generate', async (req, res) => {
    const theme = req.query.theme || 'neon';
    const userId = Math.floor(Math.random() * 1000);
    
    try {
        const searchUrl = `https://googleapis.com{GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${theme}+aesthetic+palette`;
        const response = await axios.get(searchUrl);
        const colors = response.data.items ? ["#00f2ff", "#ff00ea"] : ["#ff4500", "#1a1a1a"];

        const canvas = createCanvas(1920, 1080);
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = colors[0];
        ctx.lineWidth = 20;
        ctx.strokeRect(50, 50, 1820, 980);
        
        const path = `./pack_${userId}.zip`;
        const output = fs.createWriteStream(path);
        const archive = archiver('zip');
        archive.pipe(output);
        archive.append(canvas.toBuffer(), { name: 'overlay.png' });
        await archive.finalize();

        output.on('close', () => res.download(path));
    } catch (e) {
        res.status(500).send("Erreur de génération");
    }
});

app.listen(process.env.PORT || 3000);

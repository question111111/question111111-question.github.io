const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Permite serverului să citească JSON din cereri

app.post('/api/report', (req, res) => {
    const { message } = req.body;
    console.log("Butonul 'Da' a fost apăsat și s-a trimis raportul cu mesajul:", message);

    res.status(200).send({ message: "Raport primit cu succes!" });
});

app.listen(port, () => {
    console.log(`Serverul rulează la http://localhost:${port}`);
});

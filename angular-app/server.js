const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors()); // Pour permettre les requêtes CORS
app.use(express.json()); // Pour analyser les corps de requêtes JSON

app.post('/instruction', (req, res) => {
    const instruction = req.body;
    const filePath = './src/assets/instruction/instruction.json';

    fs.readFile(filePath, (err, data) => {
        if (err && err.code === 'ENOENT') {
            // si fichier n'existe pas, on créé un tableau vide
            fs.writeFileSync(filePath, JSON.stringify([], null, 2));
            data = '[]';
        } else if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la lecture du fichier');
        }

        // si les données sont vides avant de les parser
        const instructions = data && data.toString().trim() !== '' ? JSON.parse(data) : [];

        // si l'instruction est nulle avant de l'ajouter au tableau
        if (instruction && Object.keys(instruction).every(key => instruction[key] !== null)) {
            instructions.push(instruction);
        }

        fs.writeFile(filePath, JSON.stringify(instructions, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erreur lors de l\'écriture du fichier');
            }

            res.json({ message: 'Instruction ajoutée avec succès' });
        });
    });
});

app.get('/instruction', (req, res) => {
    const filePath = './src/assets/instruction/instruction.json';

    fs.readFile(filePath, (err, data) => {
        if (err && err.code === 'ENOENT') {
            fs.writeFileSync(filePath, JSON.stringify([], null, 2));
            data = '[]';
        } else if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la lecture du fichier');
        }

        const instructions = data ? JSON.parse(data) : [];
        res.json(instructions);
    });
});

app.listen(3000, () => console.log('Serveur en écoute sur le port 3000'));
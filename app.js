const express = require('express');
const app = express();

// Définir le moteur de templates EJS
app.set('view engine', 'ejs');

// Route de base
app.get('/', (req, res) => {
    res.render('index', { title: 'Notre Application Node.js' });
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});

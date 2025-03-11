const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Définir le moteur de vue EJS
app.set('view engine', 'ejs');

// Route principale
app.get('/', (req, res) => {
    res.render('index', { title: 'Notre Application' });
});

// Écoute sur le bon port
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

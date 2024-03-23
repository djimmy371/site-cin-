const fs = require('fs');
const directoryPath = 'C:\\Users\\djimmy\\Desktop\\site-cin-\\init';

// Vérifier si le répertoire existe
fs.access(directoryPath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error(`Le répertoire ${directoryPath} n'existe pas. Création du répertoire...`);
        // Créer le répertoire s'il n'existe pas
        fs.mkdir(directoryPath, { recursive: true }, (err) => {
            if (err) {
                console.error(`Erreur lors de la création du répertoire : ${err}`);
            } else {
                console.log(`Répertoire ${directoryPath} créé avec succès.`);
            }
        });
    } else {
        console.log(`Le répertoire ${directoryPath} existe.`);
    }
});
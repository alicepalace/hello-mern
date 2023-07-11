const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {title: "Welcome 2 birth"});
});

app.get('/exercises', (req, res) => {
    res.render('exercises', {title: "Workout Regimen"});
})


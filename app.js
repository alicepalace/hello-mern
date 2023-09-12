const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const mongoose = require('mongoose');
const Exercise = require('./models/exerciseSchema');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log("Listening on port 3000");
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser middleware

app.get('/', (req, res) => {
    res.render('index', {title: "Welcome 2 birth"});
});

app.get('/exercises', (req, res) => {
    res.render('exercises', {title: "Workout Regimen"});
})

app.get('/add-exercise', (req, res) => {
    res.render('addExercise', {title: "Add a New Exercise"});
})

app.get('/exercise-added', (req, res) => {
    res.render('exerciseAdded', {title: "Exercise successfully added"});
})

app.post('/submit', (req, res) => {
    // Extract form data from req.body
    const formData = req.body;

    const exercise = new Exercise(formData)
    exercise.save();

    res.redirect('/exercise-added');
});

// const GluteBridge = {
//     name: 'Glute Bridge',
//     primeMover: "Gluteus Maximus",
//     antagonists: ['Hip Flexors'],
//     description: "This exercise doesn't require any equipment. " +
//                  "Prime mover is the gluteus maximus. " + 
//                  "Begin lying down with knees bent and feet about one foot away from the buttocks. " +
//                  "Think about bracing the abs while bringing the hips up fully. ",
//     tempo: [2,2,2]
// }

// const exercise = new Exercise(GluteBridge);

// exercise.save();



const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //res.send('<h2>Hello sourabh!</h2>');
    res.send({
        name: 'Sourabh',
        age: 33,
        likes: [
            'table tennis',
            'snow',
            'mountains'
        ]
    })
});

app.get('/about', (req, res) => {
    res.send('<h2>About me</h2> I am Sourabh!');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Bad request'
    });
});

const port = 3000;

app.listen(port, () => {
    console.log(`Hurray! Server is up and running at http://localhost:${port}/`);
});


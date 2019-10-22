const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: 'https://placeimg.com/64/64/1',
            name: 'Vlad',
            birthday: '45',
            gender: 'man',
            job: 'CEO'
        },
        {
            id: 2,
            image: 'https://placeimg.com/64/64/2',
            name: 'Andrei',
            birthday: '35',
            gender: 'man',
            job: 'Developer'
        },
        {
            id: 3,
            image: 'https://placeimg.com/64/64/3',
            name: 'Sasya',
            birthday: '25',
            gender: 'man',
            job: 'Designer'
        }
    ]);
});

app.listen(port, ()=> console.log( `running server on port ${port}`));
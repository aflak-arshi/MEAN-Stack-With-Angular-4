require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const pg = require('pg');

const client = new pg.Client(process.env.DB_CONN);
client.connect( (err) => {
    if (err) {
        console.log("Could NOT Connect Database : " + err);
    } else {
        console.log("Connected to Database")
    }
});

app.use(express.static(__dirname + '/client/dist/'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3939, () => {
    console.log('Listening on port 3939');
});
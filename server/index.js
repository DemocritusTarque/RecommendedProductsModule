const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const db = require('../db/index.js');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/../public`));

/* Request Handling */

// Get Current Product accessories
app.get('/items/accessories/ipad', (req, res) => {});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

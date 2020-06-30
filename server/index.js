const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const movieRouter = require('./routes/routes');

const app = express();

require('dotenv').config({ path: 'variables.env' });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', movieRouter);

app.get('/', (req, res) => {
    res.send('Hello World! First MERN Application');
})

app.set('port', process.env.PORT || 3003);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on port ${server.address().port}`);
});
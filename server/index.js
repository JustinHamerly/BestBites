require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const PORT = process.env.PORT;

mongoose.connect(process.env.dbURI)
.then(() => console.log('mongo successfully connected'))
.catch(e => console.log('mongo connection error', e.message));

const db = mongoose.connection;
db.on('database error', console.error.bind(console, 'database error'));
db.once('database open', () => console.log('connected to database'))

const app = express();

app.use(express.json());
app.use(cors());


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT;

const logger = require('./src/middleware/logger');

const authRouter = require('./src/auth/index')
const restaurantSearch = require('./src/controllers/restSearch');
const restaurantRoutes = require('./src/controllers/rest');

mongoose.connect(process.env.dbURI)
.then(() => console.log('mongo successfully connected'))
.catch(e => console.log('mongo connection error', e.message));

const db = mongoose.connection;
db.on('database error', console.error.bind(console, 'database error'));
db.once('database open', () => console.log('connected to database'))

const app = express();

app.use(express.json());
app.use(cors());

app.use(logger);

app.use(authRouter);

app.use(restaurantSearch);
app.use(restaurantRoutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

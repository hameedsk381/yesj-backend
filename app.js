const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware imports
const authMiddleware = require('./middleware/auth');
const loggerMiddleware = require('./middleware/logger');

app.use(authMiddleware);
app.use(loggerMiddleware);

// Static Files
app.use('/public', express.static(path.join(__dirname, 'public')));

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
const apiRoutes = require('./routes/api');
// const authRoutes = require('./routes/auth');

app.use('/api', apiRoutes);
// app.use('/auth', authRoutes);

// Database connection
// require('./utils/database');

module.exports = app;

const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const path = require('path');


app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


module.exports = app;

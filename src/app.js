// src/app.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');
const initServer = require('./config/server');
const app = require('./config/server');
const PORT = process.env.PORT || 5000;
connectDB();
app.use('/api/users', userRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
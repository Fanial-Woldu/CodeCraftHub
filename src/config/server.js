// Server configuration and initialization
const express = require('express');
const app = express();

// Middleware setup
app.use(express.json());

// Routes setup
app.use('/api/users', require('../routes/userRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
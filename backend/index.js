const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


// Static folder for certificates
app.use('/certificates', express.static(path.join(__dirname, 'certificates')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/files/cv', express.static(path.join(__dirname, 'files/cv')));

// Routes
console.log('Registering route: /api/about');
app.use('/api/about', require('./routes/about'));
console.log('Registering route: /api/projects');
app.use('/api/projects', require('./routes/projects'));
console.log('Registering route: /api/contact');
app.use('/api/contact', require('./routes/contact'));
console.log('Registering route: /api/files');
app.use('/api/files', require('./routes/files'));

// Serve static React frontend after API routes
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

// MongoDB connection + server start
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
  );
}).catch((err) => console.error('MongoDB connection error:', err));



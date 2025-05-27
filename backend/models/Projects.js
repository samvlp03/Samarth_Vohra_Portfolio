const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    id: Number,
  title: String,
  description: String,
  completion_time: String,
  githubLink: String,
  is_hosted: String,
});

module.exports = mongoose.model('Projects', projectSchema);

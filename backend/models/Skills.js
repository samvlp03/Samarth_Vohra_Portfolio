const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    id: Number,
    skill_name: String,
    description: String, 
});

module.exports = mongoose.model('Skills', skillSchema);

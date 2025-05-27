const Skill = require('../models/Skills');
const fs = require('fs');
const path = require('path');

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    console.log('Skills fetched:', skills);
    res.json(skills);
  } catch (err) {
    console.error('Error fetching skills:', err);
    res.status(500).json({ error: 'Failed to fetch skills' });  
  }
};

exports.getCertificates = (req, res) => {
  const folderPath = path.join(__dirname, '..' ,'certificates');

  fs.readdir(folderPath, (err, files) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch certificates' });

    const certs = files.map(file => `/certificates/${file}`);
    res.json(certs);
  });
};

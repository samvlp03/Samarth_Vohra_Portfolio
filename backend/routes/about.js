const express = require('express');
const router = express.Router();
const { getSkills, getCertificates } = require('../controllers/aboutController');

router.get('/skills', getSkills);
router.get('/certificates', getCertificates);

module.exports = router;

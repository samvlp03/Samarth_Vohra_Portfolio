const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/cv', (req, res) => {
  const options = {
    root: path.join(__dirname, '../static/files/cv'), // folder where CV is stored
  };
  const fileName = 'SAMARTH VOHRA Resume New.pdf';

  if (req.query.download) {
    // Trigger file download
    res.download(path.join(options.root, fileName), fileName, (err) => {
      if (err) {
        console.error('Download error:', err);
        res.status(500).send('Could not download file');
      }
    });
  } else {
    // Send file for viewing in-browser
    res.sendFile(fileName, options, (err) => {
      if (err) {
        console.error('View error:', err);
        res.status(500).send('Could not view file');
      }
    });
  }
});

module.exports = router;

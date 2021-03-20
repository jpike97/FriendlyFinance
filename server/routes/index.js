var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hi! Server is listening on port`)
  });

module.exports = router;
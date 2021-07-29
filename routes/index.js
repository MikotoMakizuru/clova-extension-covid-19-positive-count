const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const covid = require('../covids/covid')

router.post('/covid', bodyParser.json(), covid);

module.exports = router;
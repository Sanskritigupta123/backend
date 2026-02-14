const express = require('express');
const { getData } = require('../controllers/control.js');

const router = express.Router();

router.get("/", getData);

module.exports = router;
const express = require('express');
const {getAstro, createAstro, createMaha} = require('../Controllers/AstrologyController');

const router = express.Router();

// routing
//REGISTER || Method POST
router.get('/getAstro', getAstro);

module.exports = router; 
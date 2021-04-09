var express = require('express');
const apple_controlers= require('../controllers/apple');
var router = express.Router();

/* GET home page. */
router.get('/', apple_controlers.apple_view_all_Page );

module.exports = router;
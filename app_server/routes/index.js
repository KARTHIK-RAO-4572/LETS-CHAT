var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/main')
/* GET home page. */
router.get('/', ctrl.LoginPage);

module.exports = router;

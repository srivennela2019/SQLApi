var express = require("express");
var router = express.Router();
var conn = require("../models");
var helpers = require("../helpers/apps");
router.route("/")
.post(helpers.createUsers)
.get(helpers.getUsers);
router.route("/messages")
.post(helpers.createMessages)
.get(helpers.getMessages);

module.exports = router;

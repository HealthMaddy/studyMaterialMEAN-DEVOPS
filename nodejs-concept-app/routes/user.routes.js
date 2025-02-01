const express = require("express");
const { getAllUsers ,getOneUser} = require("../controllers/userController");
const {readFileWithSTreams, readFile} = require('./../streams and read write file/streams')

const router = express.Router();

router.route("/user").get(getAllUsers);

router.route('/user/:id').get(getOneUser)

router.route('/read/stream').get(readFileWithSTreams)
router.route('/read/sync').get(readFile)


module.exports = router;

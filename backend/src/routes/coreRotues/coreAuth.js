const express = require("express");
const router = express.Router();

const { catchErrors } = require("@/handlers/errorHandlers");
const adminAuth = require("@/controllers/coreControllers/adminAuth");

router.route('/register').post();

router.route('/login').post(() => {});

router.route('/forgetpassword').post(() => {

});
router.route('/resetpassword').post(() => {

});

router.route('/logout').post(() => {

});

module.exports = router;
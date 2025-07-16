const express = require("express");
const router = express.Router();

const { catchErrors } = require("@/handlers/errorHandlers");
const adminAuth = require("@/controllers/coreControllers/adminAuth");

router.route('/register').post(catchErrors(adminAuth.register));

router.route('/login').post(catchErrors(adminAuth.login));

router.route('/forgetpassword').post(() => {

});
router.route('/resetpassword').post(() => {

});

router.route('/logout').post(() => {

});

module.exports = router;
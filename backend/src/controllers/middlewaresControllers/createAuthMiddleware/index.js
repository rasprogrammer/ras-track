const register = require('./register');
const login = require("./login");

const createAuthMiddleware = (userModel) => {
    let authMethods = {};

    authMethods.isValidToken = (req, res, next) => {

    };

    authMethods.register = (req, res) => register(req, res, { userModel });

    authMethods.login = (req, res, next) => login(req, res, { userModel });

    authMethods.forgetPassword = (req, res, next) => {

    };

    authMethods.resetPassword = (req, res, next) => {

    };

    authMethods.logout = (req, res, next) => {

    };

    return authMethods;
};

module.exports = createAuthMiddleware;
const User = require("../models/user.model");

let authCtrl = {};

authCtrl.login = (req, res, next) => {
    console.log("LOGIN");
}

authCtrl.logout = (req, res, next) => {
    console.log("LOGOUT");
}

module.exports = authCtrl;
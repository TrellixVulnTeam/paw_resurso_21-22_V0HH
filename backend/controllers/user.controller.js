const User = require("../models/user.model");

let userCtrl = {};

userCtrl.create = (req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log("add succefull");
    }
  });
};

userCtrl.delete = (req, res, next) => {
  User.findOneAndDelete({ _id: req.params.id }, (error, data) => {
    if (error) {
      console.log("delete error");
      return next(error);
    } else {
      res.status(200).json({ message: data });
      console.log("deleted");
    }
  });
};

userCtrl.edit = (req, res, next) => {
  User.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("update succefull");
      }
    }
  );
};

userCtrl.listAll = (req, res, next) => {
  User.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("list of users");
      res.json(data);
    }
  });
};

userCtrl.listOne = (req, res, next) => {
  User.findById({ _id: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

module.exports = userCtrl;
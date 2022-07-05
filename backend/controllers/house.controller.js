const House = require("../models/house.model");

let houseCtrl = {};

houseCtrl.create = async (req, res, next) => {
   House.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log("add succefull");
    }
  });
}

houseCtrl.edit = (req, res, next) => {
  console.log('edit house');
}

houseCtrl.listAll = (res, req, next) => {
  console.log('list all houses');
}

houseCtrl.listOne = (req, res, next) => {
  console.log('list one house');
}

houseCtrl.delete = (req, res, next) => {
  console.log('delete house');
}

module.exports = houseCtrl;
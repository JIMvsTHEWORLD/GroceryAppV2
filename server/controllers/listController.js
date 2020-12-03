const db = require("../model/db.js");

const listController = {};

listController.addItem = (req, res, next) => {
    const {item, amount, unit, price} = req.body;
    const queryString = `INSERT INTO Grocery_List VALUES ('${item}', '${amount}', '${unit}', '${price}')`;

    db.query(queryString)
    .then((data) =>{
        res.body = data;
        next();
    })
    .catch((err) => {
        console.log("error: ", err);
        next(err);
    });
};

module.exports = listController;
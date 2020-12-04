const db = require("../model/db.js");

const listController = {};

listController.addItem = (req, res, next) => {
    console.log("req.body: ", req.body)
    const {item, amount, unit} = req.body;
    const queryString = `INSERT INTO Grocery_List (item, amount, unit) VALUES ('${item}', '${amount}', '${unit}')`;

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
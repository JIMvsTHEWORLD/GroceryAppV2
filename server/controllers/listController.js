const db = require("../model/db.js");

const listController = {};

listController.addItem = (req, res, next) => {
    console.log("req.body: ", req.body)
    const {item, amount, unit, notes} = req.body;
    const queryString = `INSERT INTO Grocery_List (item, amount, unit, notes) VALUES ('${item}', '${amount}', '${unit}', '${notes}')`;

    db.query(queryString)
    .then((data) => {
        res.body = data;
        next();
    })
    .catch((err) => {
        console.log("error: ", err);
        next(err);
    });
};

listController.editItem = (req, res, next) => {
    console.log("req.body: ", req.body)
    const {item, amount, unit, notes} = req.body;
    const queryString = `UPDATE Grocery_List SET item = '${item}', amount = '${amount}', unit = '${unit}', notes = '${notes}' WHERE id = '${req.params.id}'`

    db.query(queryString)
    .then((data) => {
        res.body = data;
        next();
    })
    .catch((err) => {
        console.log("error: ", err);
        next(err);
    })
}

listController.getItems = (req, res, next) => {
    const queryString = `SELECT * FROM Grocery_List`;
    db.query(queryString)
    .then((data) => {
        res.locals.data = data.rows;
        next();
    })
    .catch((err) => {
        next(err);
    });
}

listController.deleteItem = (req, res, next) => {
    let queryString;

    if (req.params.id === "all"){
        queryString = 'DELETE FROM Grocery_List;';
    } else {
        queryString = `DELETE FROM Grocery_List WHERE id=${req.params.id}`;
    }

    db.query(queryString)
    .then((data) => {
        console.log(data);
        next();
    })
    .catch((err) => {
        console.log("error in listController.deleteItem: ", err);
        next(err);
    });
}

module.exports = listController;
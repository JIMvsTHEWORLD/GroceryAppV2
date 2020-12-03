const express = require('express');
const listController = require('../controllers/listController');
const router = express.Router();

router.post('/list', listController.addItem, (req, res) =>{
    console.log("Successful post to database via /list route");
    console.log("res.locals: ", res.locals);
    return res.status(200).json(res.locals);
})

module.exports = listRouter;
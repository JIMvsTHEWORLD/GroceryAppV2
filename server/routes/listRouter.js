const express = require('express');
const listController = require('../controllers/listController');
const router = express.Router();

router.get('/getItems', listController.getItems, (req, res) =>{
    console.log("Succesfully GET to the database via /list route")
    res.json(res.locals.data);
})

router.post('/addItem', listController.addItem, (req, res) =>{
    console.log("Successful post to database via /list route");
    res.status(200).json(res.locals);
})

router.put('/:id', listController.editItem, (req, res) => {
    console.log("Successful edit to the database via /list route")
    res.status(200).json(res.locals);
})

router.delete('/:id', listController.deleteItem, (req, res) => {
    return res.status(200);
})

module.exports = router;
const path = require('path');
const express = require('express');
const { dirname } = require('path');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;
const listRouter = require('./routes/listRouter.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/list', listRouter);

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
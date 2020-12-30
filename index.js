const express = require('express');

const PORT = process.env.port || 5000;
const transfers = require('./controllers/transfers.js');

const app = express();

//code to test of APIs
app.get('/', (req, res) => {
    res.send(transfers.getIncomingTransfers());
});

app.listen(PORT, () => {
    console.log('server running on port' + PORT)
});

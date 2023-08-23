const express = require('express');
require('./db/mongodb');
require('./models/Logger');

const LogRoute = require('./routes/log');

const app = express();
app.use(express.json());

app.use(LogRoute);


app.listen(4400, () => {
    console.log(`Server is running up at port 4400`);
})
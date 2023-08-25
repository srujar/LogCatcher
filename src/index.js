const express = require('express');
const path = require('path');
require('./db/mongodb');
require('./models/Logger');
const runScript = require('./db/deployment_Script');
 
const LogRoute = require('./routes/log');

const app = express();
app.use(express.json());

app.use('/', express.static(path.join(__dirname, '../LogCatcher/dist/log-catcher/')));
app.use(LogRoute);

runScript();
app.listen(4400, () => {
    console.log(`Server is running up at port 4400`);
})
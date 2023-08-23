const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/loggerDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(e => { console.log("Error at the db connection: ", e) })
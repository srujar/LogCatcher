const mongoose = require('mongoose');

const Error =
    mongoose.model('Error',
        mongoose.Schema({}, { strict: false, timestamps: true }).index({ message: "text" })
    );
const Warn =
    mongoose.model('Warn',
        mongoose.Schema({}, { strict: false, timestamps: true }).index({ message: "text" })
    );
const Info =
    mongoose.model('Info',
        mongoose.Schema({}, { strict: false, timestamps: true }).index({ message: "text" })
    );
const Http =
    mongoose.model('Http',
        mongoose.Schema({}, { strict: false, timestamps: true }).index({ message: "text" })
    );
const Verbose =
    mongoose.model('Verbose',
        mongoose.Schema({}, { strict: false, timestamps: true }).index({ message: "text" })
    );
const Debug =
    mongoose.model('Debug',
        mongoose.Schema({}, { strict: false, timestamps: true }).index({ message: "text" })
    );

const Silly =
    mongoose.model('Silly',
        mongoose.Schema({}, { strict: false, timestamps: true }).index({ message: "text" })
    );

const AppKeys =
    mongoose.model('AppKeys',
        mongoose.Schema({keys:[]}, { strict: false, timestamps: true })
    );

module.exports = { Error, Warn, Info, Http, Verbose, Debug, AppKeys };
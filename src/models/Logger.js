const mongoose = require('mongoose');

const Error = mongoose.model('Error', mongoose.Schema({ data: {} }, { timestamps: true }));
const Warn = mongoose.model('Warn', mongoose.Schema({ data: {} }, { timestamps: true }));
const Info = mongoose.model('Info', mongoose.Schema({ data: {} }, { timestamps: true }));
const Http = mongoose.model('Http', mongoose.Schema({ data: {} }, { timestamps: true }));
const Verbose = mongoose.model('Verbose', mongoose.Schema({ data: {} }, { timestamps: true }));
const Debug = mongoose.model('Debug', mongoose.Schema({ data: {} }, { timestamps: true }));
const Silly = mongoose.model('Silly', mongoose.Schema({ data: {} }, { timestamps: true }));

module.exports = { Error, Warn, Info, Http, Verbose, Debug, Silly };
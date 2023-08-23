const express = require('express');
const router = new express.Router();
const { Error, Warn, Info, Http, Verbose, Debug, Silly } = require('../models/Logger');

router.post('/data', async (req, res) => {
    try {
        let log;
        console.log(req.body.data.level)
        switch (req.body.data.level) {
            case 'error':
                log = await Error({ ...req.body });
                break;
            case 'warn':
                log = await Warn({ ...req.body });
                break;
            case 'info':
                log = await Info({ ...req.body });
                break;
            case 'http':
                log = await Http({ ...req.body });
                break;
            case 'verbose':
                log = await Verbose({ ...req.body });
                break;
            case 'debug':
                log = await Debug({ ...req.body });
                break;
            case 'silly':
                log = await Silly({ ...req.body });
                break;
        }
        await log.save();
        res.send({ log });
    } catch (error) {
        res.status(400).send(error);
    }
})

// GET /data?type=info
router.get('/data', async (req, res) => {
    try {
        let log;
        let type = req.query?.type;
        switch (type) {
            case 'error':
                log = await Error.find();
                break;
            case 'warn':
                log = await Warn.find();
                break;
            case 'info':
                log = await Info.find();
                break;
            case 'http':
                log = await Http.find();
                break;
            case 'verbose':
                log = await Verbose.find();
                break;
            case 'debug':
                log = await Debug.find();
                break;
            case 'silly':
                log = await Silly.find();
                break;
        }
        res.send({ log });
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = router;
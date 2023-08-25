const express = require('express');
const router = new express.Router();
const { Error, Warn, Info, Http, Verbose, Debug, Silly, AppKeys } = require('../models/Logger');

router.post('/data', async (req, res) => {
    try {
        let log;
        let data = req.body.data;
        switch (req.body.data.level) {
            case 'error':
                log = await Error({ ...data });
                break;
            case 'warn':
                log = await Warn({ ...data });
                break;
            case 'info':
                log = await Info({ ...data });
                break;
            case 'http':
                log = await Http({ ...data });
                break;
            case 'verbose':
                log = await Verbose({ ...data });
                break;
            case 'debug':
                log = await Debug({ ...data });
                break;
            case 'silly':
                log = await Silly({ ...data });
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
        let searchData = req.query?.searchData;
        let type = req.query?.type;
        let appKey = req.query?.appKey;
        let query;
        if (searchData) {
            query = { "$text": { "$search": searchData }, "appKey": appKey };
        } else {
            query = { "appKey": appKey }
        }
        switch (type) {
            case 'error':
                log = await Error.find(query);
                break;
            case 'warn':
                log = await Warn.find(query);
                break;
            case 'info':
                log = await Info.find(query);
                break;
            case 'http':
                log = await Http.find(query);
                break;
            case 'verbose':
                log = await Verbose.find(query);
                break;
            case 'debug':
                log = await Debug.find(query);
                break;
            case 'silly':
                log = await Silly.find(query);
                break;
        }
        res.send({ log });
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/validate', async (req, res) => {
    try {
        let { appKey } = req.body;
        let keysData = await AppKeys.find({ keys: appKey })
        if (keysData.length) {
            res.send({ isValidate: true });
        } else {
            res.send({ isValidate: false });
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;
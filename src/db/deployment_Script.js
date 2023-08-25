const { AppKeys } = require('../models/Logger');
const runScript = async () => {
    
    let allKeys = ['new_test_key_1', "new_test_key_2", "new_test_key_3", "new_test_key_4", "XYZ-123"];
    let allAppKeys = (await AppKeys.find())[0]?.keys || [];
    
    let newKeys = allKeys.filter((eachKey) => {
        return allAppKeys.indexOf(eachKey)<0
    })
    let x = await AppKeys.updateMany({}, { keys: [...newKeys,...allAppKeys] }, { upsert: true });

}

module.exports = runScript;
const express = require('express');
const { runLoadBuilder } = require('./runner');
const router = express.Router();


router.get('/build-loads', async (req, res) => {
    try {
        console.log('HIT')
        const regionName = req.query?.regionName || null

        let response = await runLoadBuilder(regionName)
        res.send({ "data": response, "status": 200, "error": null })

    } catch (error) {
        console.log(`Error in api- /npl/build-loads: ${error.message}`)
        res.send({ data: null, status: 400, error: error.message });
    }
})


module.exports = router

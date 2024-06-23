const shortid = require('shortid');
const URL = require("../models/url.js")

async function GenerateNewUrl (req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({error: 'url is required'})
    }
    const shortID = shortID(8);
    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory: [],
    })

 return   res.json({id: shortID});
}

module.exports = GenerateNewUrl;
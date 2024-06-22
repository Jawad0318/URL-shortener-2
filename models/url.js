const { url } = require("inspector");
const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    shortID: {
        type: String, 
        required: true, 
        unique: true,
    },
    redirectURL: {
        type: String, 
        required: true, 
    }, 
    visitHistory: [{ timeStamps: { type: Number, }}]
}, {timestamps: true})

const URL = mongoose.model('url', UrlSchema)

module.exports = URL;
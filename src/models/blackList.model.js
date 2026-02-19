const mongoose = require("mongoose")

const tokenBlackListSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: "7d"   // auto delete after 7 days (optional but good)
    }
})

const tokenBlackListModel = mongoose.model(
    "tokenBlackList",
    tokenBlackListSchema
)

module.exports = tokenBlackListModel   // ✅ IMPORTANT

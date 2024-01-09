const mongoose = require('mongoose')

const notificationSchema = mongoose.Schema({
    
    notificationTitle: {
        type: String,
        required: [true, "Please add the Title"],
    },
    notificationDetails: {
        type: String,
    },
    notificationLink: {
        type: String,
    },
    
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("notification" , notificationSchema)
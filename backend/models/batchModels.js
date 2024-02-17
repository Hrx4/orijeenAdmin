const mongoose = require('mongoose')

const batchSchema = mongoose.Schema({
    
    batchName: {
        type: String
    },  
    
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("batch" , batchSchema)
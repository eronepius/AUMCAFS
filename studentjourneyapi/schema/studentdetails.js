const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentDetailsSchema = new Schema({
    //   title:  String, // String is shorthand for {type: String}
    //   author: String,
    //   body:   String,
    //   comments: [{ body: String, date: Date }],
    //   date: { type: Date, default: Date.now },
    //   hidden: Boolean,
    //   meta: {
    //     votes: Number,
    //     favs:  Number
    //   },
    username: String,
    password: String
}, {
    versionKey: false
})

mongoose.connect('mongodb://sjourney:sjourney@127.0.0.1:27017/studentJourney?authMechanism=DEFAULT&authSource=studentJourney')
const studentDetailsModel = mongoose.model("studentDetails", studentDetailsSchema);

module.exports = studentDetailsModel;
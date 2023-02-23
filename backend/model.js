const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ideaSchema = new Schema({
    fullname:{
        type: String,
        required: false
    },
    faculty:{
        type: String,
        required: false
    },
    matno: {
        type: String,
        required: false
    },
    coursecode:{
        type: String,
        required: false
    },
    coursetitle:{
        type: String,
        required: false
    },
    examhall:{
        type: String,
        required: false
    },
    date:{
        type: String,
        required: false
    },
    exhibit:{
        type: String,
        required: false
    },
    reasonForMal:{
        type: String,
        required: false
    },
    invigilator:{
        type: String,
        required: false
    },
    invigilatorFac:{
        type: String,
        required: false
    },
    invigilatorDep:{
        type: String,
        required: false
    },
    invigilatorSta:{
        type: String,
        required: false
    },
    invigilatorDat:{
        type: String,
        required: false
    },
    stuMatno:{
        type: String,
        required: false
    },
    stuName:{
        type: String,
        required: false
    },
    studentAffirmation:{
        type: String,
        required: false
    },
    exhibitAffirmation:{
        type: String,
        required: false
    },
    studentSta:{
        type: String,
        required: false
    },
    studentDat:{
        type: String,
        required: false
    },
    chiefInv:{
        type: String,
        required: false
    },
    investigator:{
        type: String,
        required: false
    },
    investigatorFac:{
        type: String,
        required: false
    },
    investigatorDep:{
        type: String,
        required: false
    },
    investigatorSta:{
        type: String,
        required: false
    },
    investigatorDat:{
        type: String,
        required: false
    },
    sanction:{
        type: String,
        required: true
    },
}, { timestamps: true });

const Malpractice = mongoose.model('Malpractice', ideaSchema);

module.exports = Malpractice;
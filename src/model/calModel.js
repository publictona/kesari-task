const mongoose= require('mongoose')

const calculatorSchema = new mongoose.Schema({
    n1:{ type:Number},
    n2:{ type:Number},

},{timeStamp:true})
module.exports = mongoose.model('Calci' , calculatorSchema)
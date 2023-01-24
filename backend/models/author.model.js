const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: { type: String, required: [true, 'Your first name is required'] },
    lastName: { type: String,  required: [true, 'Your last name is required'] },
    famousQuote: { type: String, required: [true,'Give us a quote here'],minLength:[8, 'Your quote must be 8 characters']},
    age: { type: Number, required: [true, 'Please provide an age'], min:[18, 'Age must be 18 years old'], max:[99, 'Age must be 99 years old']}
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);
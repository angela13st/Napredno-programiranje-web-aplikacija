const mongoose = require('mongoose');

const ToySchema = new mongoose.Schema({
 name: {
    type: String,
    required: true
 },
 category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
 },
 subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory',
    required: true
 },
 description: {
    type: String,
    required: true
 }
});

const Toy = mongoose.model('Toy', ToySchema);
module.exports = Toy;
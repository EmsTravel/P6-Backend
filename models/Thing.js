const mongoose = require('mongoose');

// creation d'objet et son type , le Schema des donnees
const thingSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
});

//exporter le model 'Thing' et son Schema
module.exports = mongoose.model('Thing', thingSchema);
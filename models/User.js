const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// creation le schema de user
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// validator applique au schema pour une addresse email unique
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
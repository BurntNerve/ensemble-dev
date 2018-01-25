const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
});

userSchema.plugin(findOrCreate);

mongoose.model('users', userSchema);

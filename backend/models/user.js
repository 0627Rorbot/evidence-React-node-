const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    id_proof: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

// Create a model based on the schema
const User = mongoose.model('User', userSchema);
module.exports = User
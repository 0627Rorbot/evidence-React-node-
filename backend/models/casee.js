const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const caseeSchema = new Schema(
  {
    courtId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// Create a model based on the schema
const Casee = mongoose.model('Casee', caseeSchema);

module.exports = Casee;

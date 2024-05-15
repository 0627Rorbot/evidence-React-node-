const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const evidenceSchema = new Schema(
  {
    caseId: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// Create a model based on the schema
const Evidence = mongoose.model('Evidence', evidenceSchema);
module.exports = Evidence;

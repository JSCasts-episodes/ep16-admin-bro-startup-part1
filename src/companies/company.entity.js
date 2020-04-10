const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = { CompanySchema, Company };

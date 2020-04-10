const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const { Company } = require('./companies/company.entity');

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [Company],
};

module.exports = options;
